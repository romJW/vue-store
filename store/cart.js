import Vue from 'vue'
import _ from 'lodash'

const key = "cw.cart"

const defaultOrder = {
  amount: 1,
}

export const state = () => ({
  list: {}
})

export const mutations = {
  setup(state) {
    Vue.set(state, 'list', JSON.parse(localStorage.getItem(key)))
  },
  add(state, item) {
    let data = {
      ...item,
      order: defaultOrder
    }
    Vue.set(state.list, item.id, data);
    localStorage.setItem(key, JSON.stringify(state.list))
  },
  remove(state, id) {
    Vue.delete(state.list, id)
    localStorage.setItem(key, JSON.stringify(state.list))
  },
  update(state, { id, update }) {
    Vue.set(state.list, id, { ...state.list[id], ...update });
    localStorage.setItem(key, JSON.stringify(state.list))
  },
  clean(state) {
    Vue.set(state, 'list', {})
    localStorage.setItem(key, JSON.stringify(state.list))
  }
}

export const getters = {
  length (state) {
    return _.keys(state.list).length;
  },
  isInCart: (state) => (item) => {
    return _.has(state.list, item.id)
  }
}
