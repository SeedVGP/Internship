<script>
import axios from 'axios';
import EarningReports from './EarningReports.vue';
import GreenLine from './GreenLine.vue';
import SupportTracker from './SupportTracker.vue';

/**
 * Analytics Component
 * 
 * This component displays various analytics cards including:
 * - Website Analytics (Conversion Rate and Total Revenue)
 * - Average Daily Sales
 * - Sales Overview (Increase Percentage, Total Sales, Orders, and Visits)
 * 
 * Additionally, it integrates components for tracking support tickets and displaying earning reports.
 * 
 * @component
 * @example
 * <Analytics />
 * 
 * @imports
 * EarningReports - Component for displaying earning reports.
 * GreenLine - Component that provides a green line visualization for sales data.
 * SupportTracker - Component that tracks support tickets.
 * axios- Importing axios for making HTTP requests to the FastAPI backend
 */
export default {
  name: 'Analytics',

  components: {
    EarningReports,
    GreenLine,
    SupportTracker,
  },

  data() {
    return {
      /** @type {Object|null} analyticsData - Stores fetched analytics data. */
      analyticsData: null,

      /** @type {boolean} isLoading - Indicates whether the data is currently being fetched. */
      isLoading: true,

      /** @type {Error|null} error - Stores any error that occurs during data fetching. */
      error: null,
    };
  },

  mounted() {
    this.fetchAnalyticsData();
  },

  methods: {
    /**
     * Fetches analytics data from the FastAPI backend.
     * 
     * This method makes an HTTP GET request to the specified endpoint 
     * and updates the component's data properties with the response.
     * It handles loading state and errors accordingly.
     * 
     * @async
     * @returns {Promise<void>} - A promise that resolves when data fetching is complete.
     */
    async fetchAnalyticsData() {
      try {
        const response = await axios.get('http://localhost:8000/analytics-data'); // Adjust the URL to your FastAPI endpoint
        this.analyticsData = response.data;
      } catch (error) {
        console.error("Error fetching analytics data:", error);
        this.error = error;
      } finally {
        this.isLoading = false; // Hide loading state regardless of success or error
      }
    }
  }
}
</script>

<template>
  <div>
    <!-- Loading and Error Handling -->
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">Error loading data</div>
    <div v-else>
      <div class="container-fluid">
        <div class="row">
          <!-- Card displaying website analytics -->
          <div class="col-xl-6 col-md-12 col-sm-12 mb-3">
            <div class="card custom-card2">
              <div class="card-body card-body1 d-flex align-items-center justify-content-between">
                <div class="content">
                  <h3 class="card-title">Website Analytics</h3>
                  <p class="card-text" style="font-size: 20px;">
                    Total {{ analyticsData[0]?.website_analytics?.conversion_rate }}% Conversion Rate
                  </p>
                  <p class="card-text" style="font-size: 35px;">
                    ${{ analyticsData[0]?.website_analytics?.total_revenue }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- Card displaying average daily sales -->
          <div class="col-xl-3 col-md-6 col-sm-6 mb-3">
            <div class="card custom-card">
              <div class="card-body">
                <h5 class="card-title">Average Daily Sales</h5>
                <p class="card-text text-muted" style="font-size: 15px">Total Sales This Month</p>
                <div class="d-flex align-items-center justify-content-between">
                  <p class="card-text" style="font-size: 25px;">
                    ${{ analyticsData[0]?.daily_sales }}
                  </p>
                </div>
                <GreenLine />
              </div>
            </div>
          </div>
          <!-- Card displaying sales overview -->
          <div class="col-xl-3 col-md-6 col-sm-6 mb-3">
            <div class="card custom-card">
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between">
                  <h5 class="card-title text-muted">Sales Overview</h5>
                  <p class="card-text mb-2" style="font-size: 15px; color: green">
                    +{{ analyticsData[0]?.sales_overview?.increase_percentage }}%
                  </p>
                </div>
                <p class="card-text" style="font-size: 28px;">
                  ${{ analyticsData[0]?.sales_overview?.total_sales }}
                </p>
                <div class="d-flex align-items-center justify-content-between">
                  <p class="card-text text-muted" style="font-size: 20px;">Order</p>
                  <p class="card-text mb-3 text-muted" style="font-size: 20px;">Visit</p>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <p class="card-text" style="font-size: 25px;">
                    {{ analyticsData[0]?.sales_overview?.order_percentage }}%
                  </p>
                  <p class="card-text mb-3" style="font-size: 25px;">
                    {{ analyticsData[0]?.sales_overview?.visit_percentage }}%
                  </p>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <p class="card-text text-muted" style="font-size: 15px;">
                    {{ analyticsData[0]?.sales_overview?.orders }}
                  </p>
                  <p class="card-text mb-3 text-muted" style="font-size: 15px;">
                    {{ analyticsData[0]?.sales_overview?.visits }}
                  </p>
                </div>
                <!-- Progress bars indicating performance metrics -->
                <div class="progress">
                  <div class="progress-bar" role="progressbar" 
                       :style="{ width: (analyticsData[0]?.sales_overview?.order_percentage) + '%' }" 
                       aria-valuemin="0" aria-valuemax="100"></div>
                  <div class="progress-bar bg-info" role="progressbar" 
                       :style="{ width: (analyticsData[0]?.sales_overview?.visit_percentage) + '%' }" 
                       aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Component to track support tickets -->
          <div class="col-xl-6 col-md-12 col-sm-12 mb-3">
            <SupportTracker />
          </div>
          <!-- Component to display earning reports -->
          <div class="col-xl-6 col-md-12 col-sm-12">
            <EarningReports />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  width: 100%;
}

.custom-card {
  height: 300px;
  margin-top: 20px;
  padding: 5px;
  max-width: 100%; /* Removed max-width constraint */
  width: 450px;
}

.custom-card2 {
  height: 300px;
  margin-top: 20px;
  padding: 5px;
  width: 100%;
  max-width: 100%;
  background-image: url('@/assets/download1.jpg'); /* Add your image URLs here */
  background-size: cover; /* Ensures the image covers the whole container */
  color: white;
}

.card-body1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (min-width: 768px) and (max-width: 1199px) {
  .custom-card2 {
    height: 400px; /* Increase height for medium screens */
  }
}
</style>
