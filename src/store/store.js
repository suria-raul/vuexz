import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store(
  {
    strict: true,
    state: {
      products: [
        {name: 'Banana Skin', price: 20},
        {name: 'Shiny Star', price: 40},
        {name: 'Green Shells', price: 60},
        {name: 'Red Shells', price: 80},
      ]
    },
    getters: {
      saleProducts(state) {
        return state.products.map(product => {
          return {
            name: '**' + product.name + '**',
            price: product.price / 2,
          }
        })
      }
    },
    mutations: {
      reducePrice(state, payload) {
        state.products.forEach(product => {
          product.price -= 1
        })
      }
    },
    actions: {
      reducePrice(context, payload) {
        setTimeout(function () {
          context.commit('reducePrice')
          console.log(payload)
        }, 2000)
      }
    }
  }
)

export default store
