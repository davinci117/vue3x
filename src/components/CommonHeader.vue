<template>
  <el-header>
    <div class="l-content">
        <common-tab />
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="userImg" :src="getImgUrl('bz')">
          <h4>  &nbsp&nbsp&nbsp章北海</h4>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出系统</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
import CommonTab from '../components/CommonTab.vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const getImgUrl = (name) => {
      //动态引入头像
      return new URL(`../assets/images/${name}.jpg`, import.meta.url).href
    };
    return {
      getImgUrl,
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
    }
  }
}
</style>