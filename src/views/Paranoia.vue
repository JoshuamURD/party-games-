<template>
    <div class="bg-gradient-to-b from-slate-800 to-slate-900 text-white p-8 w-full min-h-screen overflow-y-hidden">
        <div class="max-w-4xl mx-auto">
            <h1 class="text-5xl text-center font-bold mb-6 tracking-wider text-red-500">PARANOIA</h1>
            
            <div class="bg-slate-700/50 p-6 rounded-lg shadow-lg mb-8 backdrop-blur-sm border border-red-900/30">
                <h2 class="text-2xl font-semibold mb-4 text-red-400">How to Play</h2>
                <p class="text-lg mb-4 leading-relaxed">
                    In this game of secrets and suspense, players take turns being the target of potentially embarrassing or revealing questions. 
                    When it's your turn, another player will secretly send you a question and you must name someone in the group as the answer.
                </p>
                <p class="text-lg mb-4 leading-relaxed">
                    The tension builds as a coin is flipped - if the flipper loses, the question is revealed to everyone. 
                    But if they win, the question remains a mystery forever, leaving the named player in a state of... paranoia.
                </p>
                <p class="text-lg italic text-red-300">
                    Do you want to know the question, or is the answer more important?
                </p>
            </div>
            <div>
                <button class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors mx-auto block">Start Game</button>
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
    text-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
}
</style>

