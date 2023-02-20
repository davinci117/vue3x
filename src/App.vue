<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
onMounted(()=>{
  store.dispatch('menuStatus')
})
// store.commit("addMenu")
</script>
<style>
#app {
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

html,
body,
h3,
h2,
p {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.17em;
}
</style>

