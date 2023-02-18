<template>
  <div>
    <el-button type="primary" class="addUser" @click="centerDialogVisible = true">添加用户</el-button>

    <el-dialog v-model="centerDialogVisible" title="添加用户" width="50%" align-center>
      <span>Open the dialog from the center from the screen</span>
      <template #footer>
        <!-- <span class="dialog-footer"> -->
        <el-form :model="ruleForm" class="demo-form" :rules="rules">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入名字" />
          </el-form-item>
          <el-form-item label="生日" prop="date">
            <el-date-picker v-model="ruleForm.date" type="date" placeholder="请选择出生日期" />
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-select v-model="ruleForm.sex" placeholder="请选择您的性别">
              <el-option label="男" value="男" />
              <el-option label="女" value="女" />
            </el-select>
          </el-form-item>
          <el-form-item label="住址" prop="addr">
            <el-input v-model="ruleForm.addr" placeholder="请输入您的家庭住址" />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit(ruleForm)">提交</el-button>
          </el-form-item>
        </el-form>

        <el-button @click="centerDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">
          提交
        </el-button>
        <!-- </span> -->
      </template>
    </el-dialog>
  </div>
  <el-table max-height="530" :data="tableData" stripe style="width: 100%" class="commodityform">
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="date" label="Date" />
    <el-table-column prop="addr" label="Address" />
    <el-table-column prop="edit" label="Edit">
      <el-button>编辑</el-button>
      <el-button type="danger">删除</el-button>
    </el-table-column>
  </el-table>
  <!-- <div class="example-pagination-block"> -->
  <el-pagination class="pagination" layout="prev, pager, next" :total="config.total" />
<!-- </div> --></template>
<script  setup>
import { onMounted, ref, getCurrentInstance, reactive } from 'vue';
// import '../api/mockData/user'

import axios from 'axios'
//为了实现视图层与模型 双向绑定 要用ref
let tableData = ref([])

const { proxy } = getCurrentInstance()
const config = reactive({
  total: 0,
  page: 1,
})
const getUserData = async () => {
  // await axios.get('https://www.fastmock.site/mock/02a0ba8de3e3e64f5e0e059f065b69f6/api/home/getData').then((res) => {
  //   // console.log(res.data.code);
  //   //状态码验证
  //   if (res.data.code == 200) {
  //     tableData.value = res.data.data
  //   } 
  // })

  //重新封装axios后获取数据 proxy类似于vue2中的this
  let res = await proxy.$api.getUserData()
  config.total = res.length
  tableData.value = res
}
onMounted(() => {
  getUserData()
})

let centerDialogVisible = ref(false)
const ruleForm = reactive({
  date: '',
  name: '',
  sex: '',
  addr: ''
})
const rules = {
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: '请输入正确的名字', trigger: 'blur' },
  ],
  sex: [
    {
      required: true,
      message: '请选择您的性别！',
    },
  ],
  date: [
    {
      type: 'date',
      required: true,
      message: '生日',
      trigger: 'change',
    },
  ],
  addr: [
    { required: true, message: '请输入地址', trigger: 'blur' },
  ],
}
const onSubmit = (ruleForm) => {
  console.log(ruleForm),
  centerDialogVisible.value = false
}

</script>
<style lang="less" scoped>
.addUser {
  border: none;
  margin-bottom: 5px;
}

.commodityform {
  margin-left: 8px;
  // padding: 2px;
}

.pagination {
  width: 1px;
  background-color: #fff;
  margin: 10px 0 0 300px;
  border-radius: 10%;


}
</style>
