import { DurableObject } from "cloudflare:workers";

export interface Env {
  PARANOIA: DurableObjectNamespace<Paranoia>;
}

// Durable Object
export class Paranoia extends DurableObject {
  players: {
    name: string;
    socket: WebSocket;
    ready: boolean;
  }[] = [];

  async createPlayerConnection(name: string): Promise<Object> {
    // Creates two ends of a WebSocket connection.
    const webSocketPair = new WebSocketPair();
    const [client, server] = Object.values(webSocketPair);

    this.players.push({
      name,
      socket: client,
      ready: false,
    });

    // Calling `acceptWebSocket()` informs the runtime that this WebSocket is to begin terminating
    // request within the Durable Object. It has the effect of "accepting" the connection,
    // and allowing the WebSocket to send and receive messages.
    // Unlike `ws.accept()`, `state.acceptWebSocket(ws)` informs the Workers Runtime that the WebSocket
    // is "hibernatable", so the runtime does not need to pin this Durable Object to memory while
    // the connection is open. During periods of inactivity, the Durable Object can be evicted
    // from memory, but the WebSocket connection will remain open. If at some later point the
    // WebSocket receives a message, the runtime will recreate the Durable Object
    // (run the `constructor`) and deliver the message to the appropriate handler.
    this.ctx.acceptWebSocket(server);

    return {
      status: 101,
      webSocket: client,
    };
  }

  async webSocketMessage(ws: WebSocket, message: ArrayBuffer | string) {
    // Upon receiving a message from the client, the server replies with the same message,
    // and the total number of connections with the "[Durable Object]: " prefix
    ws.send(
      `[Durable Object] message: ${message}, connections: ${this.ctx.getWebSockets().length}`,
    );
  }

  async webSocketClose(
    ws: WebSocket,
    code: number,
    reason: string,
    wasClean: boolean,
  ) {
    // If the client closes the connection, the runtime will invoke the webSocketClose() handler.
    this.players = this.players.filter((player) => player.socket !== ws);
    ws.close(code, "Durable Object is closing WebSocket");
  }
}

export default {
	async fetch(request: Request, env: Env) {
		const url = new URL(request.url);

		if (url.pathname.includes("/paranoia/create")) {
			// Extract UUID from path using regex
			const uuidMatch = url.pathname.match(/\/paranoia\/create\/([0-9a-f-]+)$/i);
			if (!uuidMatch) {
				return new Response("Invalid UUID format", { status: 400 });
			}
			
			const uuid = uuidMatch[1];
			const id = env.PARANOIA.idFromName(uuid);
			const stub = env.PARANOIA.get(id);

			const { status, webSocket } = await stub.createPlayerConnection(uuid);
			
			return Response.json({
				id: uuid,
				status,
				webSocket,
			});
		}
		return new Response(null, { status: 404 });
	},
} satisfies ExportedHandler<Env>;
