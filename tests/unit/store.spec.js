import store from "@/store";

describe("Vuex Store", () => {
  test("debería iniciar el contador en 0", () => {
    expect(store.state.contador).toBe(0); 
  });
  test("debería incrementar el contador", () => {
    store.commit("incrementar"); 
    expect(store.state.contador).toBe(1); 
  });
  test("debería decrementar el contador", () => {
    store.commit("decrementar"); 
    expect(store.state.contador).toBe(0); 
  });
});
