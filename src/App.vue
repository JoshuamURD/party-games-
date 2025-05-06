<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Questions from './views/Questions.vue'

const router = useRouter()
const selectedMode = ref("")

watch(selectedMode, (newMode) => {
  router.push({ name: newMode })
})


</script>

<template>
  <header class="bg-gray-800 text-white p-4 w-full">
    <h1 class="text-4xl font-bold">Party Game</h1>
    <p class="text-lg mb-2">Games for the whole family <i>(not really)</i></p>
    <select v-model="selectedMode" class="bg-gray-700 text-white p-2 rounded-md">
      <option value="questions">Questions</option>
      <option value="paranoia">Paranoia</option>
      <option value="murder">Murder</option>
    </select>
  </header>
  <main>
    <RouterView />
  </main>
</template>
