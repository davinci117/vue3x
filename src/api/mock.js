//本地获取mock数据
import Mock from 'mockjs'
import user from './mockData/user'
import permission from './mockData/permission'



// 用户列表的数据
Mock.mock(/user\/getUser/, 'get', user.getUserList)
Mock.mock(/user\/editUser/, 'post', user.updateUser)
Mock.mock(/user\/delete/, user.deleteUser)
//登陆权限
Mock.mock(/permission\/getMenu/, 'get', permission.getMenu)