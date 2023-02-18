<template>

  <el-table :data="tableData" stripe style="width: 100%" class="commodityform">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>

</template>
<script setup>

const tableData = [
  {
    date: '2016-06-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  }
]


</script>
<style lang="less" scoped>
.commodityform {
  margin-left: 8px;
  // padding: 2px;
}
</style>
