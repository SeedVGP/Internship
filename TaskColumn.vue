<template>
<ManageTask />
  <div class="container position-relative ">
  <button class="btn stage-button  btn-outline-dark position-absolute top-0 end-0">
        Stage
          <i class="bi bi-plus"></i>
        </button>
    <div class="row ">
      <div class="col column">
        <h2 class="title">To Do 3<i class="bi bi-plus"></i></h2>
        <div class="task-list">
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <TaskCard  />
      </div>
      <div class="col column">
        <h2 class="title">In Progress 2<i class="bi bi-plus"></i></h2>
        <div class="task-list">
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
            
          </div>
        </div>
        <TaskCard2 />    
      </div>
      <div class="col column">
        <h2 class="title">Done<i class="bi bi-plus"></i></h2>
        <div class="task-list">
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <TaskCard3 /> 
        <TaskCard3 /> 
      </div>
    </div>
</div>
    
</template>

<script>
import TaskCard from './TaskCard.vue'
import TaskCard2 from './TaskCard2.vue'
import TaskCard3 from './TaskCard3.vue'
import ManageTask from './ManageTask.vue'

export default {
  components: { TaskCard, TaskCard2, TaskCard3,ManageTask },
}
</script>

<style scoped>
.container {
 width: 100%;
  margin: 0; 
  padding: 10px;
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
  margin-left:-10px
}
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.stage-button{
 border-radius: 0;
font-size: 1.0rem; 
  min-width:90px;
  height:23px;
font-weight: 600;
   padding: 0 15px;
}
.title {
  font-size: 1.0rem;
  margin-bottom: 0.5em;
}

.task-list {
  margin-top: 0.5em;
}

.column {
  flex: 1 0 22%; 
  padding: 10px;
  border-radius: 8px;
  min-width: 250px;
  margin-right:38px;
}

.progress {
  margin-bottom: 10px;
  height: 10px;
  width: 100%;
  max-width:250px;
  border-radius:0;
  margin-left:2px
}

.progress-bar {
  height: 10px;
}

@media (max-width: 768px) {
  
  .container {
    flex-direction: column;
    align-items: center;
  }

  .column {
    margin: 10px 0;
    width: 90%; 
  }

  .title {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {

  .container {
    padding: 0.5em;
  }

  .title {
    font-size: 0.8rem; 
  }

  .progress {
    width: 80%;
    height: 8px;
  }
}
</style>
