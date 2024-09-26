<script>

import AppBar from './components/AppBar.vue';
import SideBar from './components/SideBar.vue';

export default {
  components: { AppBar, SideBar },
  data() {
    return {
      isSidebarVisible: true
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    }
  }
}
</script>

<template>
  <div class="app-container ">
  <div class="app-bar">
    <AppBar @toggle-sidebar="toggleSidebar" />
     </div>

    <div class="main-content ">
    <div class="side-bar">
     <SideBar :isVisible="isSidebarVisible"/>
     </div>
      <div class="content-area">
       <router-view />   
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f6f9;
  margin: 0;
  padding: 0;
}

.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh; 
}
.app-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px; 
  z-index: 1000; 
}

.main-content {
  display: flex;
  flex: 1;
  margin-top: 60px;
}

.content-area {
  flex: 1; 
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow-y: auto;

} 

</style>