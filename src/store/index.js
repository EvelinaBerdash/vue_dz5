import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [
      'food',
      'transport'
    ],
    paymentsList: [
      { id: 1, category: 'food', date: '08.11.2022 20:27', count: 235 }
    ]
  },
  getters: {
    getCategoriesList: (state) => state.categories,
    getPaymentsList: (state) => state.paymentsList
  },
  mutations: {
    addPaymentsList: (state, payload) => state.paymentsList.push(payload),

  },
  actions: {
  },
  modules: {
  }
})
