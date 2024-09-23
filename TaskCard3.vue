<script>
import '../assets/new.css'
const tasks3 = [{
  id: 1,
  title: 'Office Design ',
  name: 'Your company, Joel Wills',
  date:'04/02/2023 - 08/03/2023'
 
},
{
  id: 2,
   title: 'Office Design ',
  name: 'Your company, Joel Wills',
  date:'04/02/2023 - 08/03/2023'
  
}
,
{
  id: 3,
  title: 'Office Design ',
  name: 'Your company, Joel Wills',
  date:'04/02/2023 - 08/03/2023'
  
},
]
export default {
  data() {
    return {
      tasks3
    };
  }
};
</script>
<template>
 
<div v-for="task3 in tasks3" :key="task3.id" class="card">
  <div class="card-body">
    <h5 class="card-title">{{task3.title}} 
     <img src="../assets/images.jpeg" alt="Profile Picture" class="profile-pic">
      <i class="fas fa-flag" style="color: grey; margin-left: auto; font-size: 0.8rem; position: relative; top: -4px;"></i>
    </h5>
    
    <p class="card-text" style="font-size: 0.9rem;color:blue;">9 Tasks <i class="far fa-check-square"></i> 1/3 <span style="margin-left: 5px; border:1px solid">16:00</span> <i class="fa-solid fa-phone" style="margin-left: 5px;"></i></p>
    <hr class="custom-line">
    <p class="card-text text-muted" style="font-size: 0.85rem;"><i class="fas fa-user"></i> {{task3.name}} </p>
    <p class="card-text text-muted" style="font-size: 0.85rem;"><i class="far fa-calendar-check"></i> {{task3.date}} </p>
    <p class="card-text text-muted" style="font-size: 0.85rem;"> <i class="fas fa-circle" style="color: red; font-size: 10px; "></i> Internal</p>

    <div class="d-flex justify-content-end" style="margin-top: -38px;">
      <div>  
        <i class="fas fa-star" style="color: yellow;"></i>
      </div>
      <div>
        <i class="fas fa-ellipsis-h"></i>
      </div>
    </div>
    
    <div class="progress">
      <div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
</div>


</template>


