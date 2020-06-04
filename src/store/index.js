import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
// 使用store时  第一步一定是进行注册。 然后是逐渐的绑定。
export default new Vuex.Store({
  state: {
    list: [],
    inputValue: 'this is from store',
    nextId: 5,
    viewKey: 'all'
  },
  mutations: {
    initList(state, list) {
      state.list = list
    },
    setInputValue(state, newValue) {
      state.inputValue = newValue
    },
    addItem(state) {
      const obj = {
        id: state.nextId,
        info: state.inputValue.trim(),
        done: false
      }
      state.list.push(obj)
      state.nextId++
      state.inputValue = ''
    },
    removeItemById(state, id) {
      // serach the index from id
      // use slice method to delete the option
      const i = state.list.findIndex(x => x.id === id)
      if (i !== -1) {
        state.list.splice(i, 1)
      }
    },
    changeStatus(state, parameter) {
      const i = state.list.findIndex(x => x.id === parameter.id)
      if (i !== -1) {
        state.list[i].done = parameter.status
      }
    },
    cleanDone(state) {
      state.list = state.list.filter(x => x.done === false)
    },
    changeViewKey(state, key) {
      state.viewKey = key
    }
  },
  actions: {
    getList(context) {
      axios.get('../list.json').then(({ data }) => {
        console.log(data)
        context.commit('initList', data)
      })
    }
  },
  getters: {
    unDoneLength(state) {
      return state.list.filter(x => x.done === false).length
    },
    infoList(state) {
      if (state.viewKey === 'all') {
        return state.list
      }
      if (state.viewKey === 'undone') {
        return state.list.filter(x => !x.done)
      }
      if (state.viewKey === 'done') {
        return state.list.filter(x => x.done)
      }
      return state.list
    }
  },
  modules: {
  }
})
