import { createStore } from 'vuex'

import user from './modules/user'
import shoppingCart from './modules/shoppingCart'

export default createStore({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    user,
    shoppingCart
  }
})
