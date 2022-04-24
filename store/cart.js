import _ from 'lodash'

const key = "cw.cart"

const defaultOrder = {
  amount: 1,
}

export const state = () => {
  list: {}
}

export const mutations = {
  setup(state) {
    state.list = JSON.parse(localStorage.getItem(key)) || {}
    return state.list
  },
  add(state, item) {
    state.list[item.id] = item
    state.list[item.id].order = defaultOrder
    localStorage.setItem(key, JSON.stringify(state.list))
    return state.list
  },
  remove(state, id) {
    delete state.list[id]
    localStorage.setItem(key, JSON.stringify(state.list))
    return state.list
  },
  update(state, { id, update }) {
    state.list[id] = { ...state.list[id], ...update };
    localStorage.setItem(key, JSON.stringify(state.list))
    return state.list
  },
  clean(state) {
    state.list = {}
    localStorage.setItem(key, JSON.stringify(state.list))
    return state.list
  }
}

export const getters = {
  length (state) {
    var len = 0;
    for (var item in state.list) {
      len++;
    }
    return len;
  },
  isInCart: (state) => (item) => {
    return _.head(_.filter(state.list, { id: item.id }))
  }
}

export const actions ={
  send(_, { name, phone, content }) {
    return api.post('/items/client_requests/', { name, phone_number: phone, content })
  }
}
