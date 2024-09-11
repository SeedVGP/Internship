<script setup>
import {  ref } from 'vue'

import FirstTask from './components/FirstTask.vue';
const count = ref(-0)
const message = ref('FirstTask')
const text = ref('')
function increment(){
count.value++
}
const awesome = ref(true)
function toggle() {
 awesome.value = !awesome.value
 }
</script>

<template>

   <h1 class="heading">{{message}}</h1>
  
   <button @click="increment">Count is: {{count}}</button>
   <input class="input" v-model = "text" placeholder=" Enter name">
   <p>{{ text }}</p>
  <FirstTask msg="Color Changed to red" />

  <button @click="toggle"> Toggle</button>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no</h1>
</template>

<style>
.input{
font-weight: 100;
  font-size: 2.0rem;
  position: relative;
  top: -5px;
  right: 10px;
  }
p{
font-weight: 100;
  font-size: 2.0rem;
  position: relative;
  top: -5px;
  right: 10px;
}
button{
  width:250px;
  position: relative;
  top: -5px;
  right: 10px;
  }
.heading{
  color:black;
  text-align:center;
  top:-40px;

  }

</style>
