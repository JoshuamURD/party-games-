<template>
    <div class="bg-gradient-to-b from-slate-800 to-slate-900 text-white p-8 w-full min-h-screen overflow-y-hidden">
        <div class="max-w-4xl mx-auto">
            <h1 class="text-5xl text-center font-bold mb-6 tracking-wider text-blue-500">TRUTH OR DRINK</h1>
            
            <div class="bg-slate-700/50 p-6 rounded-lg shadow-lg mb-8 backdrop-blur-sm border border-blue-900/30">
                <h2 class="text-2xl font-semibold mb-4 text-blue-400">How to Play</h2>
                <p class="text-lg mb-4 leading-relaxed">
                    In this game of truth and consequences, players take turns being asked revealing or challenging questions. 
                    When it's your turn, you must make a choice: answer the question truthfully or take a drink.
                </p>
                <p class="text-lg mb-4 leading-relaxed">
                    The tension builds as each player faces their moment of truth - will you reveal your secrets or raise your glass? 
                    As the game progresses, the questions get more personal, and the drinks flow more freely.
                </p>
                <p class="text-lg italic text-blue-300">
                    What's more valuable: your secrets or your sobriety?
                </p>
            </div>
            <div>
                <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors mx-auto block">Start Game</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes pulse {
    0% { opacity: 0.8; }
    50% { opacity: 1; }
    100% { opacity: 0.8; }
}

h1 {
    animation: pulse 3s infinite;
    text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
}
</style>