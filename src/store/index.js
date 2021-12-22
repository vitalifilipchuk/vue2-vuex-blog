import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import posts from './modules/posts'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        users,
        posts
    },
    state: {
    },
    getters: {
    },
    mutations: {
    }
})

export default store