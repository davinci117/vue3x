<template>
  <el-form :model="form" class="loginForm">
    <h3>登陆</h3>
    <el-form-item label="账号">
      <el-input v-model="form.username" placeholder="请输入账号" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" v-model="form.password" placeholder="请输入密码" />
    </el-form-item>
    <el-form-item>
      <el-button  type="primary" @click="login()">登陆</el-button>
    </el-form-item>
  </el-form>
</template>

<script  setup>
import { getCurrentInstance, reactive } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const {proxy} = getCurrentInstance()

const form = reactive({
  username: '',
  password: '',
})
const router = useRouter()
const store = useStore()
const login = async () => {
  const res = await proxy.$api.getMenu(form)
  // console.log(res);
  store.commit('setMenu',res)
  router.push({
    name:'home'
  })
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