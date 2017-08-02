<template>
  <div>
    <el-input placeholder="Please input userid" v-model="user_id" ></el-input>
    <el-input placeholder="Please input password" v-model="password" type="password"></el-input>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        user_id: '',
        password: ''
      }
    }
  }
</script>

<style>

</style>
