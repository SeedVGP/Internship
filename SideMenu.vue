<script>
import axios from 'axios';
import CategoryItem from './CategoryItem.vue';
import AppItem from './AppItem.vue';
import { BBreadcrumb } from 'bootstrap-vue';

/**
 * @component SideMenu
 * @description This component renders the sidebar of the application. This sidebar displays for the larger screens.
 * The sidebar is designed for larger screens and can expand or contract on mouse hover. 
 * It fetches categories and applications from the backend and displays them in a collapsible sidebar.
 * 
 * * @example
 * <SideMenu />
 */
export default {
  name: 'SideMenu',//component name
  /**
   * @type {Object}
   * @property {Object} components - Register child components used in this component.
   * @property {CategoryItem} components.CategoryItem - The component for displaying sidebar menuitems.
   * @property {AppItem} components.AppItem - The component for displaying sidebar menuitems.
   * @property {BBreadcrumb} components.BBreadcrumb - Breadcrumb component for navigation.
   */
  components: {
    CategoryItem,
    AppItem,
    BBreadcrumb,
  },
  data() {
    return {
      /**
       * @property {Array} sidebar - The list of categories to be displayed in the sidebar. Categories are sidebar items.
       */
      sidebar: [],
      /**
       * @property {Array} apps - The list of apps to be displayed in the sidebar. The apps are the sidebar items.
       */
      apps: [],
      /**
       * @property {boolean} isExpanded - Indicates whether the sidebar is expanded or collapsed.
       */
      isExpanded: false,
    };
  },
  methods: {
    /**
     * Fetches sidebar categories(menu items) from the backend API.
     * @async
     * @returns {Promise<void>} - A promise that resolves when the categories have been fetched.
     * @throws {Error} Will throw an error if the fetch fails.
     */
    async fetchSidebar() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/sidebar');
        this.sidebar = response.data;
        console.log('Sidebar items fetched:', this.sidebar);
      } catch (error) {
        console.error('Error fetching sidebar items:', error);
      }
    },

    /**
     * Fetches apps (menu items) from the backend API.
     * @async
     * @returns {Promise<void>} - A promise that resolves when the apps have been fetched.
     * @throws {Error} Will throw an error if the fetch fails.
     */
    async fetchApps() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/apps');
        this.apps = response.data;
        console.log('Apps fetched:', this.apps);
      } catch (error) {
        console.error('Error fetching apps:', error);
      }
    },

    /**
     * Expands the sidebar when mouse hovers over it.
     * @returns {void}
     */
    expandSidebar() {
      this.isExpanded = true;// Set isExpanded to true to show full sidebar
    },

    /**
     * Contracts the sidebar when mouse leaves it.
     * @returns {void}
     */
    contractSidebar() {
      this.isExpanded = false; // Set isExpanded to false to hide extra sidebar content
    },
  },
  mounted() {
    this.fetchSidebar(); 
    this.fetchApps();
  },
};
</script>
<template>
  <div
    class="sidebar d-none d-lg-flex flex-column"
    :class="{ 'sidebar-expanded': isExpanded }"
    @mouseover="expandSidebar"
    @mouseleave="contractSidebar"
  >
    <div class="container p-1 sidebar-content">
      <div class="row justify-content-between align-items-center sidebar-title">
        <div class="col-auto d-flex align-items-center">
          <router-link to="/" class="d-flex align-items-center" style="text-decoration: none; color: inherit;">
            <img src="../assets/logo1.png" alt="Logo" class="sidebar-logo" />
            <h2 v-if="isExpanded" id="sidebar-no-header-title" class="sidebar-name">Vuexy</h2>
          </router-link>
        </div>
      </div>
      <div class="row mt-1">
        <div class="col-12">
          <ul class="list-unstyled">
            <CategoryItem v-for="category in sidebar" :key="category.id" :category="category" :is-expanded="isExpanded" />
          </ul>
        </div>
      </div>

      <div v-if="isExpanded" id="component-breadcrumbs">
        <b-breadcrumb class="breadcrumb-slash">APPS & PAGES </b-breadcrumb>
      </div>

      <div class="row">
        <div class="col-12">
          <ul class="list-unstyled">
            <AppItem v-for="app in apps" :key="app.id" :app="app" :is-expanded="isExpanded" />
          </ul>
        </div>
      </div>

      <div v-if="isExpanded" id="component-breadcrumbs">
        <b-breadcrumb class="breadcrumb-slash">COMPONENTS</b-breadcrumb>
      </div>

      <div class="row">
        <div class="col-12">
          <ul class="list-unstyled">
            <AppItem v-for="app in apps" :key="app.id" :app="app" :is-expanded="isExpanded" />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.sidebar {
  width: 80px;
  height: 100vh;
  background-color: white;
  transition: width 0.3s ease;
}

.sidebar-content {
  height: 100vh;
  overflow-y: auto; /* Make the content scrollable */
}

/* Hide scrollbar for Webkit browsers */
.sidebar-content::-webkit-scrollbar {
  width: 0; /* Hide vertical scrollbar */
  background: transparent; /* Optional: hide the background */
}

.sidebar-content::-webkit-scrollbar-thumb {
  background: transparent; /* Optional: hide the thumb */
}

.sidebar-logo {
  width: 40px; /* Adjust the size of the logo */
  height: 50px; /* Maintain aspect ratio */
  margin-right: 5px; /* Space between logo and text */
}

.sidebar-title {
  padding: 5px 0;
  margin-left: 6px;
}

.sidebar-expanded {
  width: 200px;
}

.sidebar-name {
  font-size: 24px;
}

.sidebar-icon {
  font-size: 24px;
  color: black;
}

.sidebar-title {
  font-size: 14px;
  color: black;
}

.nav-link {
  color: white;
  padding: 10px 15px;
}

.nav-link:hover {
  background-color: #7367F0;
}

.nav-item {
  margin: 10px 0;
}
</style>
