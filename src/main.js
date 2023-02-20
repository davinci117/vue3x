import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from './store'
import * as echarts from 'echarts'
import api from './api/api'
// import axios from 'axios'
import './api/mock'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(store)
app.use(router)
app.config.globalProperties.$api = api
app.config.globalProperties.$echarts = echarts;
app.mount('#app')

