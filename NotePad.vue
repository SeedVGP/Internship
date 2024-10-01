<script>
export default{
  data(){
   return{
       note:'',
       date:'',
       title:'',
       textSubmitted:[]
   }
  },
  methods:{
   submitForm(){
      const newNotes = {
        date: this.date,
        title: this.title,
        note: this.note,
      };
      this.textSubmitted.push(newNotes);
      this.note='';
      this.date='';
      this.title='';
   }
  }
}
</script>
<template>
<div class="container-fluid p-0">
<h1 class=" p-3 mb-4 bg-primary text-white header" >NoteTaker</h1>
<div class="d-flex align-items-center flex-column">
<h2 >Take Your Notes Here</h2>
<div class="container mt-4 border rounded shadow-lg mb-5 bg-white rounded">
<form @submit.prevent="submitForm">
<div class="row g-2 d-flex justify-content-end">
<div class="col-auto mt-3">
<h5>Date</h5>
</div>
<div class="col-auto g-3 mb-2">
<input type="date" class="border border-dark rounded date" v-model="date" />
</div>
<div class="col-auto mt-3 ">
<h5>Title</h5>
</div>
<div class="col-auto mt-3 ">
<input type="text" class="border border-dark rounded title" v-model="title" />
</div>
</div>
<div class="mt-2">
  <h5 >Add a Note</h5>
    <textarea class="form-control border border-dark mb-4" v-model="note" id="exampleFormControlTextarea1" rows="10"></textarea>
    <button type="submit"  class="btn btn-primary text font-bold">Add Note</button>
    </div>
</form>
</div>
<div class="container mt-4 border rounded shadow-lg mb-5 bg-white rounded">
  <h3>Your Notes</h3>
  <div v-for="(item, index) in textSubmitted" :key="index" class="card mt-3">
    <div class="card-body">
      <h5 class="card-title">{{ item.title }}</h5>
      <h6 class=" mb-2 text-muted">{{ item.date }}</h6>
      <p class="card-text">{{ item.note }}</p>
      <button class="btn btn-danger">
       <i class="fas fa-trash-alt"></i>
      </button>
  </div>
</div>
</div>

</div>

</div>
</template>
<style scoped>
.container-fluid{
  margin-left:-10px;
  margin-top:-10px;
}
.container{
  min-width:auto;
  width:100%;
  padding:25px;
  
}
.card{
 min-width:auto;
  width:100%;
  height:100%
}
.title{
width:100%;
max-width:80%

}
.date{
width:100%;
max-width:100%
}
</style>