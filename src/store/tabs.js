import { ref } from 'vue'
import Cookie from 'js-cookie'
export default {
  state: {
    tableData: ref(
      [
        { id: '001', name: '比亚迪-汉', price: 219800, count: 12215 },
        { id: '002', name: '比亚迪-唐', price: 282800, count: 8890 },
        { id: '003', name: '比亚迪-秦', price: 99800, count: 14185 },
        { id: '004', name: '比亚迪-元', price: 139800, count: 23231 },
        { id: '005', name: '比亚迪-宋', price: 140800, count: 14617 },
      ]
    ),
    currentMenu: null,
    tabList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 'video-play',
        url: 'Home/Home'
      }
    ],
    menu: [],
    token:'',

  },
  mutations: {
    selectMenu(state, val) {
      val.name === 'home' ? (state.currentMenu = null) : (state.currentMenu = val)
    },
    addTag(state, val) {
      //判断是否重复添加tag
      if (val.name !== 'home') {
        const index = state.tabList.findIndex(item => item.name === val.name)
        //如果不存在
        if (index === -1) {
          state.tabList.push(val)
        }
      }
    },
    delTag(state, val) {
      const index = state.tabList.findIndex(item => item.name === val.name)
      state.tabList.splice(index, 1)
    },
    setMenu(state, val) {
      //改变state
      state.menu = val
      //持久化  设置storage、
      window.localStorage.menu = JSON.stringify(val)
    },
    setMenuStatus(state, status) {
      state.menu = status
      // const menuArray = []
      //   state.menu.menu.forEach(item => {
      //     let url = `../view/${item.url}.vue`
      //     item.component = () => import(url)
      //     menuArray.push(item)
      //   });
      //   console.log(menuArray);
      
      //   menuArray.forEach(item => {
      //     router.addRoute('home',item)
      //   });
    },
    cleanMenu(state){
      state.menu = []
      localStorage.removeItem('menu')
    },
    setToken(state,val){
      state.token = val
      Cookie.set('token',val)
    },
    clear(state){
      state.token = ''
      Cookie.remove('token')
    },
    getToken(state){
      state.token = state.token || Cookie.get('token')
    }


  },
  actions: {
    menuStatus({ commit }) {
      let menuStatus = JSON.parse(window.localStorage.menu)
      commit('setMenuStatus', menuStatus)
    }
  }

}