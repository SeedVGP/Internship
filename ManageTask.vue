<template>
  <div class="toolbar ">
    <button class="btn btn-secondary btn-sm new-button"><span>New</span></button>
    <div class="search-and-right-buttons">
      <input 
        type="text" 
        v-model="search" 
        placeholder="Search..." 
        class="search-bar"
      >
      <div class="right-buttons">
        <button class="btn groupby-button  btn-outline-dark">
        <i class="bi bi-layers-fill"></i> Group By
          <i class="fa-solid fa-chevron-down icon"></i>
        </button>
        <button class="btn filter-button btn-outline-dark">
          <i class="bi bi-filter filter-icon"></i> 
          Filter
          <i class="fa-solid fa-chevron-down icon"></i>
        </button>
     <button class="btn favorites-button btn-outline-dark">
        <i class="fas fa-star" ></i>
          Favorites<i class="fa-solid fa-chevron-down icon"></i>
        </button>
        <button class="btn arrow-button btn-outline-dark">
        <i class="bi bi-arrow-left-right"></i>
        </button>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: '',  
    };
  },
}
</script>

<style scoped>

.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 2px;
  flex-wrap: wrap;
  margin-left:-10px;
  margin-top:-10px
  
}
.btn {
  width: auto;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  padding: 0 15px;
  border-radius: 0;
  cursor: pointer;
  font-weight: 600;
}

button:hover {
  background-color: #0056b3;
}

.new-button {
 margin-left:5px;
  color: white;
  font-size: 0.9rem; 
  width:60px;
  height:30px
}

.new-button:hover {
  background-color: #218838;
}


.search-and-right-buttons {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap:wrap;
 
}

.search-bar {
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid ;
  flex: 1;
  max-width: 250px;
  font-size: 0.9rem; 
  width:300px;
  height:30px
}
.arrow-button {
 min-width:30px;
 height:30px
}
.right-buttons {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  
}
.groupby-button,
.filter-button,
.favorites-button{
font-size: 0.8rem; 
  min-width:120px;
  height:30px
}
.groupby-button:hover, 
.filter-button:hover, 
.favorites-button:hover,
.arrow-button:hover {
  background-color: grey;
}
.icon {
  margin-left: 8px;
}
@media (max-width: 768px) {
  .toolbar {
    flex-direction: column; 
    align-items: flex-start; 
  }

  .search-and-right-buttons {
    flex-direction: row;
    width: 100%;
  }

  .search-bar {
    max-width: 100%; 
  }

  .right-buttons {
    width: auto;
    justify-content: flex-start;
  }
}
media (max-width: 480px) {
  .new-button {
    width: 50px;
  }

  .btn {
    font-size: 0.75rem;
  }

  .right-buttons {
    width: auto;
    flex-wrap: wrap;
  }
}
</style>
