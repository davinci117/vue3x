<template>
  <el-table :data="tableData" stripe style="width: 100%" class="commodityform">
    <el-table-column prop="date" label="产品编号" />
    <el-table-column prop="name" label="商品名" />
    <el-table-column prop="price" label="商品单价" />
    <el-table-column prop="count" label="成交量 /月" />
  </el-table>
</template>
<script setup>
import { ref, computed } from 'vue'

const tableData = ref(
  [
    {
      date: '001',
      name: '宝马5系',
      price: 46,
      count: 14879
    }
  ]
)



</script>
<style lang="less" scoped>
.commodityform {
  margin-left: 8px;
}
</style>
