<template>
  <div class="main-sidebar">
    <h3 class="mb-2">Admin-T1</h3>
    <el-menu 
      active-text-color="#ffd04b" 
      background-color="#343a40" 
      class="el-menu-vertical-demo" 
      default-active="1"
      text-color="#fff" >
      <el-menu-item 
        :index="item.path" 
        v-for="item in items()" 
        :key="item.name" 
        @click="clickMenu(item)">
          <template #title>
            <component class="icons" :is="item.icon"></component>
            <span>&nbsp {{ item.label }}</span>
          </template>
      </el-menu-item>
      <!-- 可以拉开的菜单项 -->
      <el-sub-menu index="">
          <template #title>
            <el-icon  class="icons"><Menu /></el-icon>
            <span>菜单</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">功能1</el-menu-item>
            <el-menu-item index="1-2">功能2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">功能3</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
    </el-menu>
  </div>
</template>
<script  setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

//aside的渲染部分
const list = [{
  path: '/',
  name: 'home',
  label: '首页',
  icon: 'House',
  url: 'Home/Home'
},
{
  path: '/user',
  name: 'user',
  label: '用户管理',
  icon: 'user',
  url: 'UserManage/UserManage'
},
{
  path: '/product',
  name: 'product',
  label: '产品中心',
  icon: 'Box',
  url: 'MallManage/MallManage'
},
{
  path: '/manage',
  name: 'manage',
  label: '产品管理',
  icon: 'SuitcaseLine',
  url: 'UserManage/UserManage1'
}]
const items = () => {
  return list.filter((item) => !item.children)
}
//

//路由的跳转部分
const store = useStore()
const router = useRouter()
const clickMenu = (item) => {
  //跳转指定页面
  router.push(item.name)
  //通过vuex管理
  store.commit('selectMenu', item)
  //添加tag
  store.commit('addTag', item)
}
//

</script>

<style lang="less" scoped>
.main-sidebar {
  height: 100%;
  width: 180px;
  background-color: #343a40;

  .el-menu-vertical-demo {
    margin-left: 6px;
    width: 180px;

    .el-menu-item {
      border-radius: 15px;
    }

    .icons {
      width: 20px;
      height: 20px;
    }
  }

  .mb-2 {
    text-align: center;
    color: #fff;
    padding: 15px 0 15px 0;
    //高斯模糊
    filter: blur(.4px);
  }
}
</style>