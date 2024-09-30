<script>
export default{
  data(){
   return{
       note:'',
       textSubmitted:''
   }
  },
  methods:{
   submitForm(){
      this.textSubmitted=this.note;
       this.note='';
   }
  }
}
</script>
<template>
<div class="container-fluid p-0 ">
<h1 class=" p-3 mb-4 bg-primary text-white header" >NoteTaker</h1>
<div class="d-flex align-items-center flex-column">
<h2 >Take Your Notes Here</h2>
<div class="container mt-4 border rounded shadow-lg mb-5 bg-white rounded">
<form @submit.prevent="submitForm">
  <h3>Add a Note</h3>
    <textarea class="form-control border border-dark mb-4" v-model="note" id="exampleFormControlTextarea1" rows="10"></textarea>
    <button type="submit"  class="btn btn-primary">Add Note</button>
</form>
</div>
<div class="container mt-4 border rounded shadow-lg mb-5 bg-white rounded">
  <h3>Your Notes</h3>
    <div v-if="textSubmitted" class="card">
  <div class="card-body">
    <p>{{textSubmitted}}</p>
    <button class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
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
  width:70%;
  padding:25px;
}
.card{
 min-width:auto;
  width:70%;
}
</style>