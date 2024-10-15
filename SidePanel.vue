<template>
  <div>
    <!-- Toggle Button to Open Sidebar -->
    <b-button v-b-toggle.sidebar-1 variant="light" size="lg" class="d-lg-none">
      <i class="bi bi-list"></i>
    </b-button>
    <!-- Sidebar Component -->
    <b-sidebar
      id="sidebar-1"
      :width="'280px'"
      position-fixed
      aria-labelledby="sidebar-no-header-title"
      no-header
      shadow
      @hidden="onHide"
      @shown="onShow"
      class="sidebarbar"
    >
      <template #default="{ hide }">
        <div class="container p-1">
          <div class="row justify-content-between align-items-center sidebar-title">
            <!-- Sidebar Title -->
            <div class="col-auto d-flex align-items-center">
              <router-link to="/" class="d-flex align-items-center" style="text-decoration: none; color: inherit;">
                <img src="../assets/logo1.png" alt="Logo" class="sidebar-logo" />
                <h2 v-if="isSidebarOpen" id="sidebar-no-header-title">Vuexy</h2>
              </router-link>
            </div>

            <!-- Close Button -->
            <div class="col-auto">
              <b-button variant="light" size="lg" @click="hide" class="text-right">
                <i class="bi bi-x" style="font-size: 30px;"></i>
              </b-button>
            </div>
          </div>

          <!-- Sidebar Items -->
          <div class="row mt-1">
            <div class="col-12">
              <ul class="list-unstyled">
                <!-- Category Item -->
                <li class="text-left" v-for="category in sidebar" :key="category.id">
                  <b-button
                    variant="light"
                    class="text-left w-100 d-flex justify-content-between align-items-center"
                    @click.stop="toggleCollapse(category)"
                    size="lg"
                  >
                    <span>
                      <i :class="category.icon" class="category-icon"></i>
                      <span class="category-title">{{ category.title }}</span>
                    </span>
                    <span><i :class="category.isOpen ? 'bi bi-chevron-down' : 'bi bi-chevron-right'"></i></span>
                  </b-button>

                  <b-collapse v-model="category.isOpen" class="ml-3">
                    <ul class="list-unstyled">
                      <!-- Subcategories for the main category -->
                      <li v-for="subcategory in category.subcategories" :key="subcategory.id" class="text-left pl-3">
                        <router-link :to="subcategory.path" class="text-left w-100 d-flex align-items-center nav-link">
                          <b-button
                            variant="light"
                            class="text-left w-100 d-flex align-items-center"
                            size="lg"
                          >
                            <i class="bi bi-circle" style="font-size: 10px; margin-right: 10px; margin-left: 20px;"></i>
                            <span class="category-title">{{ subcategory.title }}</span>
                          </b-button>
                        </router-link>
                      </li>
                    </ul>
                  </b-collapse>
                </li>
              </ul>
            </div>
          </div>

          <!-- Apps & Pages Section -->
          <nav v-if="isSidebarOpen" aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">APPS & PAGES</li>
            </ol>
          </nav>

          <!-- Apps List -->
          <div class="row">
            <div class="col-12">
              <ul class="list-unstyled">
                <li class="text-left" v-for="app in apps" :key="app.id">
                  <b-button
                    variant="light"
                    class="text-left w-100 d-flex justify-content-between align-items-center"
                    @click.stop="toggleCollapse(app)"
                    size="lg"
                  >
                    <span>
                      <i :class="app.icon" class="app-icon"></i>
                      <span class="app-title">{{ app.title }}</span>
                    </span>
                    <span><i :class="app.isOpen ? 'bi bi-chevron-down' : 'bi bi-chevron-right'"></i></span>
                  </b-button>

                  <b-collapse v-model="app.isOpen" class="ml-4">
                    <ul class="list-unstyled">
                      <li v-for="subapp in app.subcategories" :key="subapp.id" class="text-left pl-3">
                        <router-link :to="subapp.path" class="text-left w-100 d-flex align-items-center nav-link">
                          <b-button
                            variant="light"
                            class="text-left w-100 d-flex align-items-center"
                            size="lg"
                          >
                            <i class="bi bi-circle" style="font-size: 10px; margin-right: 10px; margin-left: 20px;"></i>
                            <span class="app-title">{{ subapp.title }}</span>
                          </b-button>
                        </router-link>
                      </li>
                    </ul>
                  </b-collapse>
                </li>
              </ul>
            </div>
          </div>

          <!-- Component Section -->
          <nav v-if="isSidebarOpen" aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">COMPONENTS</li>
            </ol>
          </nav>

          <!-- Component List -->
          <div class="row">
            <div class="col-12">
              <ul class="list-unstyled">
                <li class="text-left" v-for="app in apps" :key="app.id">
                  <b-button
                    variant="light"
                    class="text-left w-100 d-flex justify-content-between align-items-center"
                    @click.stop="toggleCollapse(app)"
                    size="lg"
                  >
                    <span>
                      <i :class="app.icon" class="app-icon"></i>
                      <span class="app-title">{{ app.title }}</span>
                    </span>
                    <span><i :class="app.isOpen ? 'bi bi-chevron-down' : 'bi bi-chevron-right'"></i></span>
                  </b-button>

                  <b-collapse v-model="app.isOpen" class="ml-4">
                    <ul class="list-unstyled">
                      <li v-for="subapp in app.subcategories" :key="subapp.id" class="text-left pl-3">
                        <router-link :to="subapp.path" class="text-left w-100 d-flex align-items-center nav-link">
                          <b-button
                            variant="light"
                            class="text-left w-100 d-flex align-items-center"
                            size="lg"
                          >
                            <i class="bi bi-circle" style="font-size: 10px; margin-right: 10px; margin-left: 20px;"></i>
                            <span class="app-title">{{ subapp.title }}</span>
                          </b-button>
                        </router-link>
                      </li>
                    </ul>
                  </b-collapse>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import axios from 'axios';

/**
 * SidePanel component that displays categories, apps, and subcategories. Categories,apps and subcategories are the items in the sidebar.
 *
 * @component
 */
export default {
  name: 'SidePanel',
  data() {
    return {
      sidebar: [], // Sidebar categories
      apps: [], // List of apps
      isSidebarOpen: false, // Tracks if the sidebar is open
    };
  },
  methods: {
    /**
     * Fetch sidebar categories from the API.
     *
     * @async
     * @returns {Promise<void>}
     */
    async fetchSidebar() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/sidebar');
        this.sidebar = response.data.map(category => ({ ...category, isOpen: false })); // Initialize collapse state
        console.log('Sidebar items fetched:', this.sidebar);
      } catch (error) {
        console.error('Error fetching sidebar items:', error);
      }
    },
    /**
     * Fetch apps data from the API.
     *
     * @async
     * @returns {Promise<void>}
     */
    async fetchApps() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/apps');
        this.apps = response.data.map(app => ({ ...app, isOpen: false })); // Initialize collapse state
        console.log('Apps fetched:', this.apps);
      } catch (error) {
        console.error('Error fetching apps:', error);
      }
    },
    /**
     * Toggle the visibility of the sidebar.
     */
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen; // Toggle sidebar visibility
    },
    /**
     * Update state when sidebar is hidden.
     */
    onHide() {
      this.isSidebarOpen = false; // Update state when sidebar is hidden
    },
    /**
     * Update state when sidebar is shown.
     */
    onShow() {
      this.isSidebarOpen = true; // Update state when sidebar is shown
    },
    /**
     * Toggle the collapse state of a category or app.
     *
     * @param {Object} item - The category or app to toggle.
     */
    toggleCollapse(item) {
      item.isOpen = !item.isOpen; // Toggle collapse state of the item
    },
  },
  mounted() {
    this.fetchSidebar(); // Fetch sidebar data when component is mounted
    this.fetchApps(); // Fetch apps data when component is mounted
  },
};
</script>

<style scoped>
.sidebarbar {
  background-color: #f8f9fa; /* Background color for sidebar */
  overflow-y: auto; /* Add scroll if content overflows */

}
.container{
  height: 100vh;

}

.sidebar-title {
  margin-bottom: 20px; /* Margin for sidebar title */
}

.category-icon {
  font-size: 20px; /* Font size for category icon */
}

.app-icon {
  font-size: 20px; /* Font size for app icon */
}

.category-title, .app-title {
  margin-left: 10px; /* Margin for titles */
  
}

</style>
