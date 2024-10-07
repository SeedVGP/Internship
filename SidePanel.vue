<script>
/**
 * SidePanel component that displays categories and subcategories.
 * This component fetches sidepanel items from an API and organizes them 
 * into collapsible sections for better navigation within the application.
 *
 * @component
 * @example
 * <SidePanel />
 *
 */
 import axios from 'axios';
import CategoryItem from './CategoryItem.vue'; // Import the new component
export default {
  name: 'SidePanel',
  components: {
    CategoryItem, // Register the CategoryItem component
  },
  data() {
    return {
      sidepanel: [], // Array to hold sidepanel items
    };
  },
  methods: {
    /**
     * Fetch sidepanel items from the API.
     * This method retrieves data from a specified endpoint and assigns it to the sidebar.
     *
     * @async
     * @function fetchSidebar
     * @returns {Promise<void>} A promise that resolves when the fetch is complete.
     * @throws {Error} Throws an error if the fetch fails.
     * @example
     * this.fetchSidebar(); // Fetches sidebar items when the component is mounted
     */
    async fetchSidebar() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/sidebar');
        this.sidebar = response.data; // Assign fetched data to sidebar
        console.log('Sidebar items fetched:', this.sidebar);
      } catch (error) {
        console.error('Error fetching sidebar items:', error); // Log error if fetch fails
      }
    },
  },
  mounted() {
    this.fetchSidebar(); // Fetch sidebar items when the component is mounted
  },
};
</script>
<template>
  <div>
    <b-button v-b-toggle.sidebar-1 variant="light" size="lg">
      <i class="bi bi-menu-button"></i>
    </b-button>

    <b-sidebar id="sidebar-1" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template #default="{ hide }">
        <div class="container p-3">
          <div class="row justify-content-between align-items-center">
            <div class="col-auto">
              <h2 id="sidebar-no-header-title">Vuexy</h2>
            </div>
            <div class="col-auto">
              <b-button variant="light" size="lg" @click="hide" class="text-right">
                <i class="bi bi-arrow-right"></i>
              </b-button>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-12">
              <ul class="list-unstyled">
                <CategoryItem v-for="category in sidebar" :key="category.id" :category="category" />
              </ul>
            </div>
          </div>

          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">APPS & PAGES</li>
            </ol>
          </nav>

          <div class="row">
            <div class="col-12">
              <ul class="list-unstyled">
                <CategoryItem v-for="category in sidebar" :key="category.id" :category="category" />
                
              </ul>
            </div>
          </div>

          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">COMPONENTS</li>
            </ol>
          </nav>

          <div class="row">
            <div class="col-12">
              <ul class="list-unstyled">
                <CategoryItem v-for="category in sidebar" :key="category.id" :category="category"  />
              </ul>
            </div>
          </div>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>



<style scoped>
.b-button {
  text-align: left;
}
.list-unstyled {
  padding-left: 0;
}
.container {
  padding-left: 0 !important; 
}
.col-12.text-left {
  text-align: left !important;
}
.ml-3 {
  margin-left: 0; 
}
.pl-3 {
  padding-left: 0.5rem; 
}
</style>
