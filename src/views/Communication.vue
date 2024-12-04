<template>
    <div>
      <h1>Comunicación entre Componentes</h1>
      <Parent />
    </div>
  </template>
  
  <script>
  import Parent from '@/components/Parent.vue';
  
  export default {
    name: 'Communication',
    components: {
      Parent
    }
  };
  </script>
  