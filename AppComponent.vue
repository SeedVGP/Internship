<template>
  <div>
    <!-- Counter component is used to trigger the increment event -->
    <Counter @increment="incrementCount" />
    
    <!-- Display component shows the current count value -->
    <Display :count="count" />
  </div>
</template>

<script>
/**
 * Parent component that manages the count value and renders
 * two child components: `Counter` for incrementing and `Display` for showing the count.
 *
 * @component 
 */
import Counter from './components/CounterComp.vue';
import Display from './components/DisplayComponent.vue';

export default {
  components: {
    Counter, 
    Display
  },
  
  data() {
    return {
      /**
       * Count value that is incremented and passed to the Display component.
       * @type {number}
       */
      count: 0,
    };
  },
  
  methods: {
    /**
     * Increments the count value by 1.
     * This method is triggered when the Counter component emits the `increment` event.
     *
     * @method incrementCount
     */
    incrementCount() {
      this.count++;
    },
  },
}
</script>
