<template>
  <nav class="navbar navbar-expand-lg ">
    <a class="navbar-brand" href="#">Your Logo</a>
    <button type="button" @click="toggleSidebar" class="btn " data-bs-toggle="button">
    
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">My Task</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Reporting</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Configuration</a>
        </li>
        <li class="nav-item">
          
        </li>
      </ul>
      <div class="ml-auto d-flex align-items-center">
        <p class="mb-0 mr-2"><i class="bi bi-telephone"></i></p>
        <p class="mb-0 mr-2"><i class="fa-regular fa-comment"></i></p>
        <p class="mb-0 mr-2"><i class="fa-solid fa-history"></i></p>
        <p class="mb-0 mr-2">My Company(San Francisco) <i class="fa-solid fa-chevron-down"></i></p>
        <p class="mb-0 mr-2"><i class="fa-solid fa-screwdriver-wrench"></i><img src="../assets/images.jpeg" alt="Profile Picture" class="profile-pic"> </p>

      </div>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    toggleSidebar() {
      this.$emit('toggle-sidebar');
    }
  }
}
</script>
<style scoped>
.navbar {
  background-color: white; 
}
.navbar-nav .nav-link {
  color: #000; 
}
.navbar-brand{
margin-left:20px
}
.navbar-nav{
margin-left:20px
}


.ml-auto {
  margin-left: auto; 
}

.d-flex {
  display: flex;
}

.align-items-center {
  align-items: center;
}

.mr-2 {
  margin-right: 0.9rem; 
}

.mb-0 {
  margin-bottom: 0; 
}
.profile-pic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid white;
  margin-left:10px
}
</style>
