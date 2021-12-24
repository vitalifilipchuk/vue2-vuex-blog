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
        layout: 'default-layout'
    },
    mutations: {
        setLayout(state, payload) {
            state.layout = payload
        }
    },
    getters: {
        layout(state) {
            return state.layout
        }
    }
})

export default store