<template>
    <div>
      <input v-model="inputText" placeholder="Escribe algo" />
      <button @click="sendText">Enviar</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputText: ''
      };
    },
    methods: {
      sendText() {
        this.$emit('sendText', this.inputText);
      }
    }
  };
  </script>
  
  <style scoped>
  
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  
  input {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 200px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>