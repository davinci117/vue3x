<template>
  <el-table :data="tableData" stripe style="width: 100%" class="commodityform">
    <el-table-column prop="id" label="产品编号" />
    <el-table-column prop="name" label="商品名" />
    <el-table-column prop="price" label="商品单价" />
    <el-table-column prop="count" label="成交量 /月" />
  </el-table>
</template>
<script setup>
import { useStore } from 'vuex'
const store = useStore()

//从vuex获取汽车的数据
const list = store.state.cars.tableData
const tableData = list

</script>
<style lang="less" scoped>
.commodityform {
  margin-left: 8px;
}
</style>
