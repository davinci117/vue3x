export default {
  state: {

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

  }

}