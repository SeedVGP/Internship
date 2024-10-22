<!-- CounterComponent.vue -->
<template>
    <div>
      <p>{{ counter }}</p>
      <button @click="incrementCounter">Increment</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        counter: 0,
      };
    },
    methods: {
      incrementCounter() {
        this.counter++;
      },
    },
  };
  </script>
  