<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const router = useRouter()
const store = useStore()
onMounted(()=>{
  store.dispatch('menuStatus',router)
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

