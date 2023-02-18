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
          path: '/user1',
          name: 'user1',
          component: () => import('../views/user1.vue')
        },
        {
          path: '/user2',
          name: 'user2',
          component: () => import('../views/user2.vue')
        },
        {
          path: '/user3',
          name: 'user3',
          component: () => import('../views/user3.vue')
        },
        {
          path: '/mall',
          name: 'mall',
          component: () => import('../views/mall.vue')
        },
        {
          path: '/page1',
          name: 'page1',
          component: () => import('../views/page1.vue')
        },
        {
          path: '/page2',
          name: 'page2',
          component: () => import('../views/page2.vue')
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