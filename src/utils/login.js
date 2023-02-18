import router from '../router'
//用户登陆调用的函数
export default {

  login1(form) {
    console.log('调用成功');
    if (form.user === 'xiao' && form.psd === 'xiao') {
      console.log('登陆成功');
      router.push('home')
    } else {
      console.log('您的用户名或密码错误');
    }
  }
}


