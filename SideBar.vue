<template>
  <div :class="['container-fluid position-relative sidebar', { 'collapsed': !isVisible }]">
    <div class="row flex-nowrap">
      <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <ul class="nav nav-pills flex-column mb-0 align-items-center align-items-sm-start" id="menu">
            <li v-for="(menuItem, index) in menuItems" :key="index" class="nav-item">
            <router-link :to="menuItem.path" class="nav-link px-0 align-middle">
              <a href="#" class="nav-link px-0 align-middle">
                <i :class="menuItem.icon" class="menu-icon"></i>
                <span class="menu-name ms-2" :class="{ 'd-none': !isVisible, 'd-sm-inline': isVisible }">{{ menuItem.name }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  props: ['isVisible'],
  data() {
    return {
      menuItems: [
        { name: 'Dashboard', icon: 'bi bi-bar-chart-fill' },
        { name: 'Discuss', icon: 'fa-regular fa-comments' },
        { name: 'Calendar', icon: 'fa-regular fa-calendar-alt' },
        { name: 'Notes', icon: 'fa-regular fa-sticky-note' },
        { name: 'Knowledge', icon: 'fa fa-book' },
        { name: 'Contacts', icon: 'fa-regular fa-address-book' },
        { name: 'CRM', icon: 'fa-regular fa-handshake' },
        { name: 'Sales', icon: 'fa fa-chart-line' },
        { name: 'Dashboard', icon: 'bi bi-bar-chart-fill' },
        { name: 'Discuss', icon: 'fa-regular fa-comments' },
        { name: 'Calendar', icon: 'fa-regular fa-calendar-alt' },
        { name: 'Notes', icon: 'fa-regular fa-sticky-note' },
        { name: 'Knowledge', icon: 'fa fa-book' },
        { name: 'Contacts', icon: 'fa-regular fa-address-book' },
        { name: 'CRM', icon: 'fa-regular fa-handshake' },
        { name: 'Sales', icon: 'fa fa-chart-line' },
        { name: 'Dashboard', icon: 'bi bi-bar-chart-fill' },
        { name: 'Discuss', icon: 'fa-regular fa-comments' },
        { name: 'Calendar', icon: 'fa-regular fa-calendar-alt' },
        { name: 'Notes', icon: 'fa-regular fa-sticky-note' },
        { name: 'Knowledge', icon: 'fa fa-book' },
        { name: 'Contacts', icon: 'fa-regular fa-address-book' },
        { name: 'CRM', icon: 'fa-regular fa-handshake' },
        { name: 'Sales', icon: 'fa fa-chart-line' },
        
      ]
    }
  }
}
</script>

<style scoped>
.container-fluid {
  background-color: white;
  min-height: 100vh;
  width: 180px;
  padding-top: 1px;
  color: white;
  position: fixed;
  border-right: 1px solid #ddd;
  transition: width 0.3s ease; 
}

.collapsed {
  width: 50px;
}

.nav-link {
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: black;
  text-decoration: none;
}

.menu-icon {
  font-size: 15px;
}

.menu-name {
  font-size: 15px;
}

@media (max-width: 768px) {
  .container-fluid {
      background-color: white;
  min-height: 100vh;
  width: 150px;
  padding-top: 1px;
  color: white;
  transition: width 0.3s ease; 
    
  }
  .collapsed {
  width: 50px;
}
}
</style>
