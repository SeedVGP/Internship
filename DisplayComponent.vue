<template>
  <div>
    <!-- Displays the current count value passed as a prop -->
    <p>Count: {{ count }}</p>
  </div>
</template>

<script>
export default {
  /**
   * Display component that shows the current count value passed from the parent component.
   *
   * @component Display
   */
  props: {
    /**
     * The current count value to be displayed.
     *
     * @prop {number} count - The count value passed from the parent component. It is required.
     */
    count: {
      type: Number,
      required: true,
    },
  },
};
</script>
