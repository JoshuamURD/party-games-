<template>
    <div class="bg-slate-700 p-6 rounded-lg shadow-lg">
        <h2 class="text-xl font-semibold text-white mb-4">Players</h2>
        <div class="space-y-4">
            <ul v-if="allPlayers.length > 0" class="space-y-2">
                <li v-for="player in allPlayers" 
                    :key="player.id" 
                    class="flex items-center justify-between bg-slate-600 p-3 rounded-md text-white"
                >
                    <div class="flex items-center gap-2">
                        <span>{{ player.name }}</span>
                        <span v-if="isPendingPlayer(player.id)" class="text-xs bg-yellow-500 text-white px-2 py-0.5 rounded">Pending</span>
                    </div>
                    <button 
                        @click="removePlayer(player.id)"
                        class="text-red-400 hover:text-red-300 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </li>
            </ul>
            <p v-else class="text-slate-300 italic">No players yet</p>
            
            <div v-if="error" class="text-red-400 text-sm">{{ error }}</div>
            
            <form @submit.prevent="addPlayer" class="mt-4">
                <div class="flex gap-2">
                    <input 
                        type="text" 
                        placeholder="Player Name" 
                        v-model="playerName"
                        class="flex-1 px-4 py-2 rounded-md bg-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        :disabled="isMaxPlayersReached"
                    />
                    <button 
                        type="submit"
                        class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        :disabled="isMaxPlayersReached || !playerName.trim()"
                    >
                        Add Player
                    </button>
                </div>
                <p v-if="isMaxPlayersReached" class="text-slate-300 text-sm mt-2">
                    Maximum number of players reached ({{ maxPlayers }})
                </p>
            </form>

            <button 
                v-if="pendingPlayers.length > 0"
                @click="submitPlayers"
                class="w-full mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
                Submit Players ({{ pendingPlayers.length }})
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Player {
    id: number;
    name: string;
}

const props = defineProps<{
    maxPlayers?: number;
}>();

const emit = defineEmits<{
    (e: 'update:players', players: Player[]): void;
}>();

const playerName = ref('');
const players = ref<Player[]>([]);
const pendingPlayers = ref<Player[]>([]);
const error = ref('');

const allPlayers = computed(() => {
    return [...players.value, ...pendingPlayers.value];
});

const isPendingPlayer = (id: number) => {
    return pendingPlayers.value.some(player => player.id === id);
};

const isMaxPlayersReached = computed(() => {
    return allPlayers.value.length >= (props.maxPlayers || 6);
});

const addPlayer = () => {
    if (!playerName.value.trim()) return;
    if (isMaxPlayersReached.value) {
        error.value = `Maximum number of players (${props.maxPlayers || 6}) reached`;
        return;
    }

    const newPlayer = {
        id: Date.now(),
        name: playerName.value.trim()
    };

    pendingPlayers.value.push(newPlayer);
    playerName.value = '';
    error.value = '';
};

const submitPlayers = async () => {
    try {
        const response = await fetch('/api/players', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ players: pendingPlayers.value }),
        });

        if (!response.ok) {
            throw new Error('Failed to submit players');
        }

        players.value = [...players.value, ...pendingPlayers.value];
        pendingPlayers.value = [];
        emit('update:players', players.value);
        error.value = '';
    } catch (err) {
        error.value = 'Failed to submit players. Please try again.';
    }
};

const removePlayer = async (id: number) => {
    // First check if it's a pending player
    const pendingIndex = pendingPlayers.value.findIndex(player => player.id === id);
    if (pendingIndex !== -1) {
        pendingPlayers.value.splice(pendingIndex, 1);
        return;
    }

    // If not pending, it's a confirmed player that needs to be removed from the API
    try {
        const response = await fetch(`/api/players/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Failed to remove player');
        }

        players.value = players.value.filter(player => player.id !== id);
        emit('update:players', players.value);
        error.value = '';
    } catch (err) {
        error.value = 'Failed to remove player. Please try again.';
    }
};
</script>




