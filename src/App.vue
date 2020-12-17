<template>
  <div id="app">
    <Links />
    <router-view />    
  </div>
</template>

<script>
import Links from './components/Links'
import router from './components/Router'
export default {
  name: 'App',
  components: {    
    router,
    Links   
  }
}
</script>

<style>

body {
  background-image: radial-gradient(circle farthest-corner at 10% 20%, #82cddd 0%, #fff799 90%);
  
}

#app {
  box-sizing: border-box;
  width: 800px;
  margin: 50px auto;
  border: 10px solid #19b9e7;
}
</style>
