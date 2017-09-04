<template>
  <main>
    <el-row>
      <el-col>dandelion</el-col>
      <el-col :span="6" :offset="9">
          <el-input placeholder="Please input userid" v-model="user_id" ></el-input>
          <el-input placeholder="Please input password" v-model="password" type="password"></el-input>
          <el-row>
            <el-col :span="12">
              <el-button @click="test()">ログイン</el-button>
            </el-col>
            <el-col :span="12">
              <el-button type="text">パスワードを忘れた</el-button>
            </el-col>
          </el-row>
      </el-col>
    </el-row>
  </main>
</template>

<script>
  import ElInput from '../../node_modules/element-ui/packages/input/src/input.vue'
  import ElButton from '../../node_modules/element-ui/packages/button/src/button.vue'
  import ElRow from 'element-ui/packages/row/src/row'
  import ElCol from 'element-ui/packages/col/src/col'

  export default {
    components: {
      ElCol,
      ElRow,
      ElButton,
      ElInput},
    data () {
      return {
        user_id: '',
        password: ''
      }
    },
    methods: {
      test () {
        alert('login')
        this.$router.push('input')
      }
    }
  }
</script>

<style>
  .el-input {
    padding-bottom:20px;
  }
</style>
