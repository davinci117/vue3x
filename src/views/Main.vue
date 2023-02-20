<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="400px" class="el-aside">
        <common-aside />
      </el-aside>
      <el-container>
        <el-header class="el-header">
          <common-header />
        </el-header>
        <el-main class="el-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import CommonTab from '../components/CommonTab.vue';
import CommonHeader from '../components/CommonHeader.vue';
import CommonAside from '../components/CommonAside.vue';
export default defineComponent({
  components: {
    CommonHeader,
    CommonAside,
    CommonTab
  }
})
</script>
<style lang="less" scoped>
.el-aside {
  width: 180px;
  height: 900px;
  margin-right: 8px;
  box-shadow: 3px 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)
}

.el-header {
  width: auto;
  padding: 0;
  border: 0;
}

.el-main {
  padding: 10px 0 10px 0;
  background-color: #f4f6f9;
  .tabsAndSearch{
    display: flex;
  }
}
</style>

