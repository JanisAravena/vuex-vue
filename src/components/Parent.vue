<template>
    <div>
      <Child @sendText="receiveText" />
      <p>{{ receivedText }}</p>
    </div>
  </template>
  
  <script>
  import Child from './Child.vue';
  
  export default {
    components: {
      Child
    },
    data() {
      return {
        receivedText: ''
      };
    },
    methods: {
      receiveText(text) {
        this.receivedText = text;
      }
    }
  };
  </script>
