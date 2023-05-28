
<template>

  <template v-if="showName">Mostrar o nome </template>

  <div :class="teste">teste</div>

  <img :src="img" alt="foto aleatoria"> 

  <ul>
    <template v-for="(user, info) in users2">
      <li v-if="user.is_admin === 1">
        {{ info }} - {{ user.firtsName }}
      </li>
      
    </template>
  </ul>

</template>

<script setup>
import {reactive, ref} from "vue";

  const teste = ref('class')

  const showName = reactive(false)

  const img = ref('https://picsum.photos/200/300')
  
  const users2 = ref([{id:1, firtsName:'lael',age:23,is_admin:1},{id:2,firtsName:'Bianca',age:20,is_admin:0}])

  //objeto simples
  const user = reactive (
    {
      name:'seufredericksen',age:23
    }
  )


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