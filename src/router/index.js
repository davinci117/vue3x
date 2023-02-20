import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: 'home',
      component: () => import('../views/Main.vue'),
      children: [
        {
          path: '/home',
          // redirect:'/user',
          name: 'home',
          component: () => import('../views/home/Home.vue')
        },
        {
          path: '/user',
          name: 'user',
          component: () => import('../views/user.vue')
        },
        {
          path: '/product',
          name: 'product',
          component: () => import('../views/product.vue')
        },
      ]
    },
    //登录页面是一个单独的页面
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
  ]
})

export default router