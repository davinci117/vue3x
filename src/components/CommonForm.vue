<template>
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
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const ruleForm = reactive({
  date: '',
  name: '',
  sex: '',
  addr: ''
})


const onSubmit = (ruleForm) => {
  console.log(ruleForm)
}
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
</script>

<style lang="less">
.demo-form {
  width: 600px;
  height: 400px;
  border: 2px solid #000;
  padding: 20px;
}
</style>