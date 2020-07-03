<template>
  <div class="Header">
    <nav class="navbar fixed-top navbar-expand-xl" id="navigation-bar">
      <router-link class="navbar-brand" to="/">Posts</router-link>
       <router-link class="navbar-brand" to="/category">Categories</router-link> |
      <router-link class="navbar-brand" to="/about">About</router-link>
    </nav>
  </div>
  
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    .Header{
      
    }
    #navigation-bar{
        display: flex;
        justify-content: center;
        height: 4rem;
        background-color: #333;
        width: 100vw; 
    }
    .navbar-brand{
        color: white;
        font-size: 1.6rem;
        margin: 1rem 3rem;
    }
</style>