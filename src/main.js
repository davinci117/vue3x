import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from './store/index'
import * as echarts from 'echarts'
import api from './api/api'
import './api/mock'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(store)
router.beforeEach((to, from, next) => {
  store.commit('getToken')
  function checkRouter(path) {
    let hasCheck = router.getRoutes().filter(route => route.path == path).length
    if (hasCheck) {
      return true
    } else {
      return false
    }
  }
  const token = store.state.tabs.token
  //路由守卫
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else if (!checkRouter(to.path)) {
    next({ name: 'home' })
  } else {
    next()
  }
 
})
app.use(router)
app.config.globalProperties.$api = api
app.config.globalProperties.$echarts = echarts;
app.mount('#app')

