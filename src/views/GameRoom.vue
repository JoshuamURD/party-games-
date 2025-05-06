<template>
    <div class="bg-gradient-to-b from-slate-800 to-slate-900 text-white p-8 w-full min-h-screen">
        <div class="max-w-4xl mx-auto">
            <h1 class="text-4xl text-center font-bold mb-6 tracking-wider text-red-500">Game Room</h1>
            <div class="bg-slate-700/50 p-6 rounded-lg shadow-lg mb-8 backdrop-blur-sm border border-red-900/30">
                <p class="text-lg mb-4">Game ID: {{ $route.params.gameId }}</p>
                <!-- Game room content will go here -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script> 