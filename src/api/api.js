/**
 * 整个项目的api管理
 * 
 */
import request from "./request"
export default {
  getUserData(params) {
    return request({
      url: '/home/getData',
      method: 'get',
      data: params,
      mock: true
    })
  }
} 