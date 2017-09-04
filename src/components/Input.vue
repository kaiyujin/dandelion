<template>
  <main>
    <el-row class="tac" :gutter="20" :collapse="isCollapse">
        <el-col :span="3">
        <el-menu default-active="read" theme="light" router>
          <el-menu-item index="read">read sheet</el-menu-item>
          <el-menu-item index="input">Input sheet</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
      <el-row :gutter="20">
      <el-col :spa
      <el-col :span="12">
        <el-input
          type="textarea"
          :autosize="{ minRows: 2}"
          placeholder="Please input"
          v-model="will_member">
        </el-input>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2}"
          placeholder="Please input"
          v-model="will_manager">
        </el-input>
      </el-col>
    </el-row>
  </main>
</template>

<script>
  import ElInput from '../../node_modules/element-ui/packages/input/src/input.vue'
  import ElButton from '../../node_modules/element-ui/packages/button/src/button.vue'
  import ElRow from 'element-ui/packages/row/src/row'
  import ElCol from 'element-ui/packages/col/src/col'
  import ElMenuItem from '../../node_modules/element-ui/packages/menu/src/menu-item.vue'

  export default {
    components: {
      ElMenuItem,
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
        alert('fuga')
      }
    }
  }
</script>

<style>
  .el-input {
    padding-bottom:20px;
  }
</style>
