<template>
    <div class="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <div class="container mx-auto px-4 py-16">
            <!-- Hero Section -->
            <div class="text-center mb-16">
                <h1 class="text-5xl font-bold text-red-500 mb-4">Party Games</h1>
                <p class="text-xl text-gray-300 max-w-2xl mx-auto">
                    The ultimate collection of adult party games. Perfect for house parties, game nights, and social gatherings. Remember to drink responsibly!
                </p>
            </div>

            <!-- Game Modes Section -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <!-- Never Have I Ever -->
                <div class="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-red-500/20 transition-shadow border border-gray-700">
                    <h2 class="text-2xl font-semibold text-red-400 mb-3">Never Have I Ever</h2>
                    <p class="text-gray-300 mb-4">
                        The classic party game that reveals all the wild stories. Perfect for breaking the ice and getting to know your friends better.
                    </p>
                    <button class="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors">
                        Start Game
                    </button>
                </div>

                <!-- Truth or Drink -->
                <div class="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-red-500/20 transition-shadow border border-gray-700">
                    <h2 class="text-2xl font-semibold text-red-400 mb-3">Truth or Drink</h2>
                    <p class="text-gray-300 mb-4">
                        Answer revealing questions or take a shot. The choice is yours, but remember - honesty is the best policy!
                    </p>
                    <button class="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors">
                        Play Now
                    </button>
                </div>

                <!-- Custom Rules -->
                <div class="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-red-500/20 transition-shadow border border-gray-700">
                    <h2 class="text-2xl font-semibold text-red-400 mb-3">Custom Rules</h2>
                    <p class="text-gray-300 mb-4">
                        Create your own drinking game rules. Mix and match challenges, dares, and drinking penalties for a unique experience.
                    </p>
                    <button class="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors">
                        Create Game
                    </button>
                </div>
            </div>

            <!-- Features Section -->
            <div class="mt-20 text-center">
                <h2 class="text-3xl font-bold text-red-500 mb-8">Why Play With Us?</h2>
                <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div class="p-4">
                        <div class="text-4xl mb-4">🎲</div>
                        <h3 class="text-xl font-semibold mb-2 text-red-400">Endless Fun</h3>
                        <p class="text-gray-300">Hundreds of questions and challenges to keep the party going all night long.</p>
                    </div>
                    <div class="p-4">
                        <div class="text-4xl mb-4">👥</div>
                        <h3 class="text-xl font-semibold mb-2 text-red-400">Party Ready</h3>
                        <p class="text-gray-300">Perfect for house parties, bars, or any social gathering with friends.</p>
                    </div>
                    <div class="p-4">
                        <div class="text-4xl mb-4">⚡</div>
                        <h3 class="text-xl font-semibold mb-2 text-red-400">Instant Setup</h3>
                        <p class="text-gray-300">No complicated rules or setup needed. Just open and play!</p>
                    </div>
                </div>
            </div>

            <!-- Disclaimer -->
            <div class="mt-16 text-center text-gray-400 text-sm">
                <p>Please drink responsibly. Know your limits and never drink and drive.</p>
                <p class="mt-2">Must be 21 or older to play drinking games.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
// Component logic can be added here
</script>