<template>
  <el-header>
    <div class="l-content">
      <el-button class="l-button" text>
        <el-icon :size="20">
          <MoreFilled />
        </el-icon>
      </el-button>
      <!-- <el-breadcrumb separator="/" class="bread">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="cur.path" v-if="cur">{{ cur.label }}</el-breadcrumb-item>
      </el-breadcrumb> -->
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="userImg" :src="getImgUrl('bz')">
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
import { useStore } from 'vuex';
export default {
  setup() {
    let store = useStore();
    // import { Menu } from '@element-plus/icons-vue';
    const getImgUrl = (name) => {
      //动态引入头像
      return new URL(`../assets/images/${name}.jpg`, import.meta.url).href
    };
    // const cur = computed(() => {
    //   return store.state.tabs.currentMenu;
    // })
    // const tabsList = computed(() => {
    //   return store.state.tabs.tabList
    // })


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

    .l-button {
      border: 0;
    }
  }

  .bread {
    color: #000;
    cursor: pointer;
    padding: 8px 0 0 26px;
  }

  .r-content {
    padding-right: 20px;


    .userImg {
      border-radius: 50%;
      width: 42px;
      height: 42px;
    }
  }
}
</style>