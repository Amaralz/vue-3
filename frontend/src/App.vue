
<template>

  {{ count }}

  {{ userName }}

  <ul>
    <li v-for="user in users">{{ user.firtsName }} - {{ user.age }}</li>
  </ul>

  <button v-on:click="count++"> add</button>

  <h2>App</h2>

  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-view></router-view>

</template>

<script setup>
import { onMounted, onUpdated, reactive, ref } from "vue";

  const count = ref(0);
  const userName = ref('Alexandre');

  const users = reactive([
    {
      firtsName:'alexandre',
      age:40
    },
    {
      firtsName:'Maria',
      age:40
    }
  ])

onMounted ( () => {
  console.log('mounted')
})

onUpdated(() => {
  console.log('updated')
})

</script>

<style scoped>
#my-app{
    background-color: aqua;
}
#teste{
    color:red;
  }
#teste1{
    color: blue;
}


</style>