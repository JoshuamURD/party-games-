import { createRouter, createWebHistory } from 'vue-router'
import Questions from '../views/Questions.vue'
import Paranoia from '../views/Paranoia.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/questions',
      name: 'questions',
      component: Questions,
    },
    {
      path: '/paranoia',
      name: 'paranoia',
      component: Paranoia,
    },
  ],
})

export default router
