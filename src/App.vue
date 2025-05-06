<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Questions from './views/Questions.vue'
import Footer from './components/Footer.vue'
const router = useRouter()
const route = useRoute()
const selectedMode = ref('')

watch(selectedMode, (newMode) => {
  router.push({ name: newMode })
})


</script>

<template>
  <header class="bg-gray-800 text-white p-4 w-full">
    <RouterLink to="/" class="hover:underline">
      <h1 class="text-4xl font-bold">Par T Gamez</h1>
      <p class="text-lg mb-2">Games for the whole family <i>(not really)</i></p>
    </RouterLink>
    <select v-model="selectedMode" class="bg-gray-700 text-white p-2 rounded-md">
      <option value="questions">Questions</option>
      <option value="paranoia">Paranoia</option>
      <option value="murder">Murder</option>
    </select>
  </header>
  <main>
    <RouterView />
  </main> 
  <Footer />
</template>
