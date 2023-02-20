import config from "../config";
import axios from "axios";
import {ElMessage} from 'element-plus'
const NETWORK_ERROR = '网络请求异常，请稍后重试！！'
//创建一个axios实例对象
const service = axios.create({
  baseURL: config.baseApi
})

//在请求前做一些事情
service.interceptors.request.use((req) => {
  //可以自定义header
  return req
})

//在请求后做一些事情
service.interceptors.response.use((res) => {
  const { code, data, msg } = res.data
  if(code == 200){
    return data
  }else{
    //网络请求错误
    ElMessage.error(msg || NETWORK_ERROR)
    //
    return Promise.reject(msg || NETWORK_ERROR)
  }
})

//封装核心函数
function request(opt){
  opt.method = opt.method || 'get'
  if(opt.method.toLowerCase() == 'get'){
    opt.params = opt.data
  }
  //对mock的处理
   let isMock = config.mock
   if(typeof opt.mock !== 'undefined'){
    isMock = opt.mock
   }
   
   //对线上环境做处理
   if(config.env == 'prod'){
    //线上环境不使用mock的数据
    service.defaults.baseURL = config.baseApi
   }else{
    service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
   }
   return service(opt)
}

export default request