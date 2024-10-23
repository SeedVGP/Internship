<template>
  <div>
    <!-- Button that triggers the increment event when clicked -->
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  /**
   * Counter component that emits an `increment` event when the button is clicked.
   *
   * @component CounterComp
   */
  methods: {
    /**
     * Emits the `increment` event to notify the parent component that the count should be incremented.
     *
     * @method increment
     * @emit increment - Event emitted when the button is clicked to increment the count.
     */
    increment() {
      this.$emit('increment'); // Emit an event when incremented
    },
  },
};
</script>
