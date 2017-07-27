<template>
  <div id="app">
    <main-header></main-header>
    <el-input placeholder="Please input userid" v-model="userid" ></el-input>
    <el-input placeholder="Please input password" v-model="password" type="password"></el-input>
    <router-view></router-view>
    <main-footer></main-footer>
  </div>  
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      userid: '',
      password: ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
