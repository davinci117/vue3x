<template>
  <div>
    <el-button 
      type="primary" 
      class="addUser" 
      @click="handleAdd">添加用户</el-button>

    <el-dialog 
      v-model="centerDialogVisible" 
      :title="action == 'add' ? '新增用户' : '编辑用户'" 
      width="50%" 
      align-center>
      
      <template #footer>
        <el-form 
          :model="ruleForm" 
          class="demo-form" 
          :rules="rules"
          ref="userForm" >
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入名字" />
          </el-form-item>
          <el-form-item label="生日" prop="date">
            <el-date-picker 
              v-model="ruleForm.date" 
              type="date" 
              placeholder="请选择出生日期"
              value-format="YYYY/MM/DD" />
          </el-form-item>
          
          <el-form-item label="性别" prop="sex" >
            <el-select v-model="ruleForm.sex" placeholder="请选择您的性别">
              <el-option label="男" value="1" />
              <el-option label="女" value="0" />
            </el-select>
          </el-form-item>
          <el-form-item label="住址" prop="addr">
            <el-input v-model="ruleForm.addr" placeholder="请输入您的家庭住址" />
          </el-form-item>
        </el-form>

        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="onSubmit(ruleForm)">
          提交
        </el-button>
      </template>
    </el-dialog>
  </div>
  <!-- 用户列表 -->
  <el-table 
    max-height="530" 
    :data="tableData" 
    stripe 
    style="width: 100%" 
    class="commodityform">
    <el-table-column prop="name" label="姓名" />
    <el-table-column prop="sex" label="性别" :formatter="sexFormat"/>
    <el-table-column prop="date" label="生日" />
    <el-table-column prop="addr" label="居住地址" />
    <el-table-column prop="edit" label="操作">
      <template #default="scope">
        <el-button @click="handleEdit(scope.row)">编辑</el-button>
        <el-button type="danger">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 分页符 -->
  <el-pagination class="pagination" layout="prev, pager, next" :total="config.total" />

</template>
<script  setup>
import { onMounted, ref, getCurrentInstance, reactive } from 'vue';
//为了实现视图层与模型 双向绑定 要用ref
let tableData = ref([])
const { proxy } = getCurrentInstance()
const config = reactive({
  total: 0,
  page: 1,
})
const getUserData = async () => {
  //重新封装axios后获取数据 proxy类似于vue2中的this
  let res = await proxy.$api.getUserData()
  config.total = res.length
  //模拟用户数据来源
  tableData.value = res
  // console.log(res[1].sex);
}
onMounted(() => {
  getUserData()
})


let centerDialogVisible = ref(false)

//表单验证
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
//提交数据的一系列操作
const ruleForm = reactive({
  name: '',
  sex: '',
  date: '',
  addr: ''
})
const onSubmit = (ruleForm) => {
  proxy.$refs.userForm.validate((valid)=>{
    if(valid){
      //浅拷贝
      // tableData.value.unshift(ruleForm)
      //深拷贝
      const from = JSON.parse(JSON.stringify(ruleForm))
      tableData.value.unshift(from)
      if(from){
        centerDialogVisible.value = false
        proxy.$refs.userForm.resetFields()//使用resetFields需要在item后面加prop属性
        console.log(tableData.value.length);
      }
    }
  })  
}
//取消按钮 
const handleCancel = ()=>{
  centerDialogVisible.value = false
  proxy.$refs.userForm.resetFields()//使用resetFields需要在item后面加prop属性
}
//编辑用户
const action = ref('add')
const handleEdit = (row)=>{//模板中的scope.row就是该条数据
  action.value = 'edit'
  centerDialogVisible.value = true
  row.sex == 1 ? (row.sex = '男') : (row.sex = '女')
  //浅拷贝
  Object.assign(ruleForm,row)
}
//新增用户
const handleAdd = ()=>{
  action.value = 'add'
  centerDialogVisible.value = true
}
//
const sexFormat = (row)=>{
  if (row.sex == 1) {
        return "男";
      } else if(row.sex == 0){
        return "女";
      }
}

</script>
<style lang="less" scoped>
.addUser {
  border: none;
  margin-bottom: 5px;
}

.commodityform {
  margin-left: 8px;
}

.pagination {
  width: 1px;
  background-color: #fff;
  margin: 10px 0 0 300px;
  border-radius: 10%;
}
</style>
