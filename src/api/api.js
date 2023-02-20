/**
 * 整个项目的api管理
 * 
 */
import request from "./request"
export default {
  getUserData(params) {
    return request({
      url: '/user/getUser',
      method: 'get',
      data: params,
      //这里的mock是true用的就是线上mock的数据
      mock: false
    })
  },
  editUser(params) {
    return request({
      url: '/user/editUser',
      method: 'post',
      data: params,
      mock: false
    })
  },
  deleteUser(params) {
    return request({
      url: '/user/delete',
      method: 'get',
      data: params,
      mock: false
    })
  },
  

} 