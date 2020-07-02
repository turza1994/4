<template>
  <div id="app">
    <div id="nav">
      <Header />
    </div>
    <router-view/>
    <ModalForm />
    <!-- <UpdateForm /> -->
  </div>
</template>

<script>
  import Header from '@/components/partial/Header'
  import ModalForm from './components/ModalForm'
  // import UpdateForm from './components/UpdateForm'
  
  export default{
    name: 'App',
    components:{
      Header,
      ModalForm
      // UpdateForm
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  #app{
    margin-top: 8vh;
  }
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>