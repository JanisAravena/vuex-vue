<template>
    <div>
      <h2>Contador: {{ contador }}</h2>
      <button @click="incrementar">Incrementar</button>
      <button @click="decrementar">Decrementar</button>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    name: 'Inicio', 
    computed: {
      ...mapGetters(['contador']) 
    },
    methods: {
      ...mapActions(['incrementar', 'decrementar']) 
    }
  };
  </script>
  
  <style scoped>
  button {
    margin: 5px;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  h2 {
    color: #333;
    font-family: Arial, sans-serif;
  }
  
  div {
    text-align: center;
    margin-top: 20px;
  }
  </style>