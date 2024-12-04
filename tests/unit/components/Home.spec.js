import { shallowMount } from "@vue/test-utils";
import { createStore } from "vuex";
import Home from "@/views/Home.vue";

describe("Componente Home", () => {
  let store;

  beforeEach(() => {
    store = createStore({
      state() {
        return {
          contador: 0,
        };
      },
      mutations: {
        incrementar(state) {
          state.contador++;
        },
        decrementar(state) {
          state.contador--;
        },
      },
      getters: {

        contador(state) {
          return state.contador;
        },
      },
      actions: {
        incrementar({ commit }) {
          commit("incrementar");
        },
        decrementar({ commit }) {
          commit("decrementar");
        },
      },
    });
  });

  test("debería mostrar el contador inicial", () => {
    const wrapper = shallowMount(Home, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.find("h2").text()).toBe("Contador: 0");
  });

  test("debería incrementar el contador al hacer clic en el botón Incrementar", async () => {
    const wrapper = shallowMount(Home, {
      global: {
        plugins: [store],
      },
    });
    await wrapper.find("button").trigger("click"); 
    expect(store.state.contador).toBe(1);
    expect(wrapper.find("h2").text()).toBe("Contador: 1");
  });

  test("debería decrementar el contador al hacer clic en el botón Decrementar", async () => {
    const wrapper = shallowMount(Home, {
      global: {
        plugins: [store],
      },
    });
    store.commit("incrementar");
    await wrapper.vm.$nextTick(); 
    await wrapper.findAll("button")[1].trigger("click"); 
    expect(store.state.contador).toBe(0);
    expect(wrapper.find("h2").text()).toBe("Contador: 0");
  });
});
