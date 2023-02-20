import Mock from 'mockjs'
export default {
  getMenu: config => {
    const { username, password } = JSON.parse(config.body)
    // 先判断用户是否存在
    // 判断账号和密码是否对应
    if (username === 'admin' && password === 'admin') {
      return {
        code: 200,
        data: {
          menu: [
            {
              path: '/',
              name: 'home',
              label: '首页',
              icon: 'House',
              url: 'Home/Home'
            },
            {
              path: '/user',
              name: 'user',
              label: '用户管理',
              icon: 'user',
              url: 'UserManage/UserManage'
            },
            {
              path: '/product',
              name: 'product',
              label: '产品中心',
              icon: 'Box',
              url: 'MallManage/MallManage'
            }
          ],
          token: Mock.Random.guid(),
          message: '获取成功'
        }
      }
    } else if (username === 'xiaoxiao' && password === 'xiaoxiao') {
      return {
        code: 200,
        data: {
          menu: [
            {
              path: '/',
              name: 'home',
              label: '首页',
              icon: 'House',
              url: 'Home/Home'
            },
            {
              path: '/product',
              name: 'product',
              label: '产品中心',
              icon: 'Box',
              url: 'MallManage/MallManage'
            }
          ],
          token: Mock.Random.guid(),
          message: '获取成功'
        }
      }
    } else {
      return {
        code: 200,
        data: {
          message: '密码错误'
        }
      }
    }

  }
}