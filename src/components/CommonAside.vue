<template>

  <div class="main-sidebar">
    <h3 class="mb-2">Admin-T1</h3>
    <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="1" text-color="#fff"
      @open="handleOpen" @close="handleClose">
      <el-menu-item :index="item.path" v-for="item in noChildren()" :key="item.name" @click="clickMenu(item)">
        <template #title>
          <component class="icons" :is="item.icon"></component>
          <span>&nbsp {{ item.label }}</span>
        </template>
      </el-menu-item>

      <!-- <el-sub-menu class="el-sub-menu" :index="item.path" v-for="item in hasChildren()" :key="item.name">
        <template #title>
          <component class="icons" :is="item.icon"></component>
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item :index="subItem.path" v-for="(subItem, subIndex) in item.children" :key="subIndex"
            @click="clickMenu(subItem)">
            <template #title>
              <component class="icons" :is="subItem.icon"></component>
              <span>{{ subItem.label }}</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>

      </el-sub-menu> -->

    </el-menu>
  </div>


</template>
<script  setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const list = [{
  path: '/',
  name: 'home',
  label: '首页',
  icon: 'video-play',
  url: 'Home/Home'
},
{
  path: '/mall',
  name: 'mall',
  label: '产品信息',
  icon: 'video-play',
  url: 'MallManage/MallManage'
},
{
  path: '/user',
  name: 'user',
  label: '用户管理',
  icon: 'user',
  url: 'UserManage/UserManage'
},
{
  path: '/user1',
  name: 'user1',
  label: '产品管理',
  icon: 'user',
  url: 'UserManage/UserManage1'
},
{
  path: '/user2',
  name: 'user2',
  label: '界面222号',
  icon: 'user',
  url: 'UserManage/UserManage2'
},
{
  path: '/user3',
  name: 'user3',
  label: '界面3333',
  icon: 'user',
  url: 'UserManage/UserManage3'
},
{
  path: '/other',
  label: '其他',
  icon: 'location',
  children: [
    {
      path: '/page1',
      name: 'page1',
      label: '页面1',
      icon: 'setting',
      url: 'Other/PageOne'
    },
    {
      path: '/page2',
      name: 'page2',
      label: '页面2',
      icon: 'setting',
      url: 'Other/PageTwo'
    }
  ]
}]
const hasChildren = () => {
  return list.filter((item) => item.children)
}
const noChildren = () => {
  return list.filter((item) => !item.children)
}
const handleOpen = (key, keyPath) => {
  // console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  // console.log(key, keyPath, 'close')
}
const store = useStore()
const router = useRouter()
const clickMenu = (item) => {
  // console.log(item);
  router.push(item.name)
  //通过vuex管理
  store.commit('selectMenu', item)
  store.commit('addTag', item)
}

</script>

<style lang="less" scoped>
.main-sidebar {
  height: 100%;
  width: 200px;
  background-color: #343a40;

  .el-menu-vertical-demo {
    margin-left: 6px;
    background-color: #343a40;
    width: 188px;
    border-right: none;
    height: 100px;

    // font-weight: 700;


    .el-menu-item {
      border-radius: 10px;
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
<style>
.el-sub-menu {
  background-color: #343a40 !important;
}
</style>