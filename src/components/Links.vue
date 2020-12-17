<template>
  <div class="navbar">
      <router-link to="/" exact>Home</router-link>
      <router-link to="/currency">Currency</router-link>
      <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
    name: 'Links'
}
</script>


<style scoped>
  .navbar {
      display: flex;
      justify-content: space-evenly;
      background-color: green;
      padding: 10px;   
  }

  a {
      color: #fff;
      text-decoration: none;
  }
</style>