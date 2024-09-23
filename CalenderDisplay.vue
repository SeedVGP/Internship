<template>
  <div class="container mt-4">
    <h2>Calendar</h2>
    <vue-cal />
  </div>
</template>

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';

export default {
  components: {
    VueCal,
  },
};
</script>

<style scoped>

</style>
