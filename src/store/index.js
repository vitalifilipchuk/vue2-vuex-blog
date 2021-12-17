import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        users
    },
    state: {
    },
    getters: {
    },
    mutations: {
    }
})

export default store