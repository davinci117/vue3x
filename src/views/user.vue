<template>
  <div>
    <div class="userHeader">
      <el-button 
        type="primary" 
        class="addUser" 
        prop="add"
        @click="handleAdd">+添加用户
      </el-button>
        
      <el-form :inline="true" :model="formInline">
        <el-button class="flash"  @click="getUserData()" >刷新列表</el-button>
          <el-form-item>
            <el-input class="searchInput" v-model="formInline.keyWord" placeholder="请输入你要搜索的用户名"/>
          </el-form-item>
          <el-form-item>
            <el-button class="search" type="primary" @click="handleSearch()">搜索</el-button>
          </el-form-item>
       </el-form>
    </div>

    <el-dialog 
      v-model="centerDialogVisible" 
      :title="action == 'add' ? '新增用户' : '编辑用户'" 
      width="50%" 
      align-center
      :before-close="handleCancel">
      
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
              <el-option label="男" value="男" />
              <el-option label="女" value="女" />
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
        <el-button type="danger" @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 分页符 -->
  <el-pagination class="pagination" layout="prev, pager, next" :total="config.total" />

</template>
<script setup>
import { onMounted, ref, getCurrentInstance, reactive,} from 'vue';

//搜索框
const formInline = reactive({
  keyWord:''
})
const handleSearch = ()=>{
config.name = formInline.keyWord
getUserData(config)
}

//为了实现视图层与模型 双向绑定 要用ref
let tableData = ref([])
const { proxy } = getCurrentInstance()
const config = reactive({
  total: 0,
  page: 1,
  name:''
})
//获取用户数据来源
const getUserData = async (config) => {
  //重新封装axios后获取数据 proxy类似于vue2中的this
  let res = await proxy.$api.getUserData(config)
  tableData.value = res.list
}
onMounted(() => {
  getUserData(config) 
})

let centerDialogVisible = ref(false)

//表单验证
const rules = {
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
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
  addr: '',
})
//表单提交
const onSubmit = (ruleForm) => {
  proxy.$refs.userForm.validate((valid)=>{
    if(valid){
      if(action.value == 'add'){
        //新增接口
        //浅拷贝
        // tableData.value.unshift(ruleForm)
        //深拷贝
        const from = JSON.parse(JSON.stringify(ruleForm))
        tableData.value.unshift(from)
        if(from){
          centerDialogVisible.value = false
          proxy.$refs.userForm.resetFields()//使用resetFields需要在item后面加prop属性
        }
      }else{
        //编辑接口
        ruleForm.sex == '男' ? (ruleForm.sex = 1) : (ruleForm.sex = 0)
        let res = proxy.$api.editUser(ruleForm);
        console.log(res,'q');
        if(res){
          centerDialogVisible.value = false
          proxy.$refs.userForm.resetFields()
          getUserData()
        }
        
      }
    }else{
      ElMessage({
        showClose:true,
        message:'请输入正确的内容',
        type:'error',
      })
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
  //??异步操作
  proxy.$nextTick(()=>{
    Object.assign(ruleForm,row)
  })
  
}
//删除用户
const handleDelete = (row)=>{
  ElMessageBox.confirm("您确定删除吗？")
    .then( async ()=>{
      console.log('hello');
      await proxy.$api.deleteUser({
        id:row.id
      })
      ElMessage({
        showClose:true,
        message:"删除成功",
        type:'success',
      })
      getUserData(config)
    })
}
//新增用户
const handleAdd = ()=>{
  action.value = 'add'
  centerDialogVisible.value = true
}
//格式化表格中的性别 1和0
const sexFormat = (row)=>{
  if (row.sex == 1 || row.sex == '男') {
        return "男";
      } else if(row.sex == 0 || row.sex == '女'){
        return "女";
      }
}

</script>
<style lang="less" scoped>
.userHeader{
  height: 40px;
  display: flex;
  justify-content: space-between;
  .addUser {
    border: none;
    margin-bottom: 10px;
  }
  .flash{
    margin: -17px 10px 0 0;
  }
  .search{
    width: 80px;
    margin-left: -21px;
  }
}

.commodityform {
  padding: 10px;
}

.pagination {
  width: 1px;
  background-color: #fff;
  margin: 10px 0 0 300px;
  border-radius: 10%;
}
</style>
