<template>
  <el-form :model="form" class="loginForm">
    <h3>登陆</h3>
    <el-form-item label="账号">
      <el-input v-model="form.user" placeholder="请输入账号" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" v-model="form.psd" placeholder="请输入密码" />
    </el-form-item>
    <el-form-item>
      <el-button style="margin-left: 110px;" type="primary" @click="onSubmit(form)">登陆</el-button>
    </el-form-item>
  </el-form>
</template>

<script  setup>
import { reactive } from 'vue'
import login from "../utils/login.js";


const form = reactive({
  user: '',
  psd: '',
})
const onSubmit = (form) => {
  console.log('submit!', form.user, form.psd)
  login.login1(form)
}
</script>

<style lang="less">
.loginForm {
  width: 300px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  border-radius: 15px;
  margin: 180px auto;
  padding: 10px 15px 20px 10px;

}

h3 {
  padding-bottom: 10px;
  text-align: center;
}
</style>