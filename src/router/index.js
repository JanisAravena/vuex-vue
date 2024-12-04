import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Communication from '@/views/Communication.vue';

const routes = [
  {
    path: '/',
    name: 'Contador',
    component: Home
  },
  {
    path: '/communication',
    name: 'Comunicación',
    component: Communication
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;