import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [
      'food',
      'transport',
      'enterteinment'
    ],
    paymentsList: [
      { id: 1, category: 'food', date: '08.11.2022 20:27', count: 235 }
    ],
    addPayments: [
      { id:1, category: 'food', count: 200, title: 'добавить платеж категории Food с ценой 200'},
      { id:2, category: 'transport', count: 50, title: 'добавить платеж категории Transport с ценой 50'},
      { id:3, category: 'entertaimment', count: 2000, title: 'добавить платеж категории Entertainment с ценой 2000'}
    ]
  },
  getters: {
    getCategoriesList: (state) => state.categories,
    getPaymentsList: (state) => state.paymentsList,
    getAddList: (state) => state.addPayments
  },
  mutations: {
    addPaymentsList: (state, payload) => state.paymentsList.push(payload),

  },
  actions: {
  },
  modules: {
  }
})
