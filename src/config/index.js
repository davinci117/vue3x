/**
 * 环境配置文件
 * 一般在企业级项目中有三个环境
 * 开发环境
 * 测试环境
 * 线上环境
 */

const env = import.meta.env.MODE || 'prod'

const EnvConfig = {
  development:{
    baseApi:'/api',
    mockApi:'https://www.fastmock.site/mock/02a0ba8de3e3e64f5e0e059f065b69f6/api'
  },
  test:{
    baseApi:'//test/api',
    mockApi:'https://www.fastmock.site/mock/02a0ba8de3e3e64f5e0e059f065b69f6/api'
  },
  pro:{
    baseApi:'//future/api',
    mockApi:'https://www.fastmock.site/mock/02a0ba8de3e3e64f5e0e059f065b69f6/api'
  },
}

export default {
  env,
  //mock总开关
  mock:true,
  ...EnvConfig[env]
}