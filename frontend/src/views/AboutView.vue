<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script setup>
import { onUnmounted } from "vue";


onUnmounted(()=>{
  console.log('unmounted');
})

</script>

<style>


</style>
