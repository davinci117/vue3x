<template>
  <el-header class="el-header">
    <div class="l-content">
        <common-tab />
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="userImg" :src="getImgUrl('bz')">
          <!-- 用户id -->
          <p class="userId">章北海</p>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click="handleLoginOut">退出系统</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import CommonTab from '../components/CommonTab.vue';

export default {
  setup() {
    const store = useStore()
    const getImgUrl = (name) => {
      //动态引入头像
      return new URL(`../assets/images/${name}.jpg`, import.meta.url).href
    };
    const router = useRouter()
    const handleLoginOut = () =>{
      //清除登陆信息
      store.commit('cleanMenu');
      router.push('login')

    }
    return {
      getImgUrl,
      handleLoginOut
    }
  }
}

</script>

<style lang="less" scoped>
.el-header {
  height: 60px;
  border-left: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;

  .l-content {
    padding-left: 7px;
    display: flex;
  }
  .r-content {
    padding-right: 20px;

    .el-dropdown-link{
      display: flex;
      .userImg {
        border-radius: 50%;
        width: 42px;
        height: 42px;
      }
      .userId{
        margin-left: 15px;
        line-height: 42px;
      }
    }
  }
}
</style>