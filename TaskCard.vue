<script>
export default {
  data() {
    return {
      tasks:[]
    };
  },
  methods:{
    async fetchTasks() {
        const response = await fetch('http://127.0.0.1:8000/tasks');
        this.tasks= await response.json();
    }
  },
mounted() {
    this.fetchTasks();

  },
};
</script>
<template>
<div v-for="task in tasks" :key="task.id" class="card" >
  <div class="card-body">
    <h5 class="card-title">{{ task.title }}
     <img src="../assets/images.jpeg" alt="Profile Picture" class="profile-pic">
      <i class="fas fa-flag" style="color: red; margin-left: auto; font-size: 0.8rem; position: relative; top: -4px;"></i>
    </h5>
    <p class="card-text " style="font-size: 0.9rem;color:blue;">9 Tasks <i class="far fa-check-square"></i> 1/3 <i class="far fa-clock"></i></p>
    <hr class="custom-line">
    <p class="card-text text-muted" style="font-size: 0.85rem;"><i class="fas fa-user"></i> {{task.name}}</p>
    <p class="card-text text-muted" style="font-size: 0.85rem;"><i class="far fa-calendar-check"></i> {{task.date}}</p>
    <div class="d-flex justify-content-end" style="margin-top:-2px;">
      <div>  
        <i class="fas fa-star" style="color: yellow;"></i>
      </div>
      <div>
        <i class="fas fa-ellipsis-h"></i>
      </div>
    </div>
    <div class="progress">
      <div class="progress-bar bg-warning" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
</div>
</template>
<style scoped>
.card {
  width: 350px;
  max-height: 227px;
  height:100%;
  margin-bottom:10px;
  padding:1px;
}

.custom-line {
  border: none;
  height: 2px; 
  background-color: grey;
  margin: 11px -15px;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.1rem;
}
.progress {
  width: 350px; 
  height: 9px;
  margin: 4px -17px;
}
.progress-bar {
  height: 20px;
}
.profile-pic {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid white;
  margin-right: 10px;
   margin-left:130px
}
@media (max-width: 768px) {
  .card {
    flex: 1 1 100%;
    width: 270px; 
  }
  .task-container {
    flex-direction: column;
    align-items: center;
  }
  .profile-pic {
    margin-left: auto;
  }
  .progress {
    width: 270px; 
    height: 9px;
    margin: 15px -17px;
  } 
}

@media (max-width: 480px) {

  .card-title {
    font-size: 1rem;
  }

  .card-text {
    font-size: 0.85rem;
  }

  .flag-icon {
    font-size: 0.7rem;
  }

  .progress-bar {
    height: 8px;
  }
}
</style>
