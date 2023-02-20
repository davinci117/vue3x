import Vuex from 'vuex'
import tabs from './tabs'
import cars from './cars'


//创建vuex实例

export default new Vuex.Store({
  modules: {
    tabs,
    cars,
  }
})