//本地获取mock数据
import Mock from 'mockjs'
import user from './mockData/user'



// 用户列表的数据
Mock.mock(/user\/getUser/, user.getUserList)
Mock.mock(/user\/editUser/, user.updateUser)
Mock.mock(/user\/delete/, user.deleteUser)