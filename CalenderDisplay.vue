<template>
<div class="calendar">
<vue-cal
    class="vuecal--rounded-theme vuecal--green-theme"
    xsmall
    hide-view-selector
    :time="false"
    active-view="month"
    :disable-views="['week']"
    style="width: 500px;height: 300px;">
</vue-cal>
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
.calendar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin:40px; 
}
</style>
