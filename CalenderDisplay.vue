<template>
  <div class="calendar">
    <vue-cal
      class="vuecal--rounded-theme vuecal--green-theme"
      xsmall
      hide-view-selector
      :time="false"
      active-view="month"
      :disable-views="['week']"
      style="height: 300px;"
      @cell-click="onDateClick">
    </vue-cal>
    <div v-if="showTodoList" class="todo-modal" id="app" >
      <h3>To-Do List</h3>
      <div class="input-container">
      <input v-model="newTask" placeholder="Add a new task" />
      <button class="btn-add"><i class="fas fa-plus"></i></button>
      <button @click="closeTodoList" class="btn-close"></button>
    </div>
    </div>
  </div>
</template>
<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';

export default {
  components: {
    VueCal,
  },
  data() {
    return {
      showTodoList: false,
    };
  },
  methods: {
    onDateClick() {
      this.showTodoList = true;
    },
    closeTodoList() {
      this.showTodoList = false;
    },
  },
};
</script>
<style scoped>
.calendar {
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items: center;
  margin:40px;
}
.todo-modal {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  text-align: center; 
}
.todo-modal button {
  margin: 13px;
  padding: 4px 10px;
}

.input-container { 
  display: flex;
  margin-bottom: 20px;
}
input {
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
}
.btn-add:hover {
  background-color: grey;
}
.btn-add {
  background-color: #28a745;
  border-radius: 5px;
  border: none;
  color: white;
}

</style>