import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Communication from '@/views/Communication.vue';
import store from '@/store';

describe('Vue Router', () => {
  let router;

  beforeEach(() => {
    router = createRouter({
      history: createWebHistory(),
      routes: [
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
      ]
    });
  });

  it('debería tener una ruta para Home', async () => {
    router.push('/');
    await router.isReady();

    const wrapper = mount(Home, {
      global: {
        plugins: [router, store]
      }
    });

    expect(wrapper.findComponent(Home).exists()).toBe(true);
  });

  it('debería tener una ruta para Communication', async () => {
    router.push('/communication');
    await router.isReady();

    const wrapper = mount(Communication, {
      global: {
        plugins: [router, store]
      }
    });

    expect(wrapper.findComponent(Communication).exists()).toBe(true);
  });
});