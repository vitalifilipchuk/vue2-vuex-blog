import usersAPI from "../../api/usersAPI"

const state = {
    users: [],
    currentUser: '',
    isLoggedIn: false
}
 
const getters = {
    usersList: (state) => {
        return state.users
    },
    getCurrentUser: (state) => {
        return state.currentUser
    },
    getAuthStatus: (state) => {
        return state.isLoggedIn
    }
}

const mutations = {
    addNewUser: (state, user) => {
        state.users.push(user)
    },
    setUsers: (state, users) => {
        state.users = users
    },
    loginUser: (state, username) => {
        state.currentUser = username
        state.isLoggedIn = true
    },
    logoutUser: (state) => {
        state.currentUser = ''
        state.isLoggedIn = false
    }
}

const actions = {
    getAllUsers({commit}) {
        const response = usersAPI.getUsers()
        commit('setUsers', response)
    },
    addUser({commit}, user) {
        usersAPI.addUser(user)
        commit("addNewUser", user)
    },
    login({commit}, username) {
        const response = usersAPI.setCurrentUser(username)
        commit('loginUser', response)
    },
    logout({commit}) {
        usersAPI.unsetCurrentUser()
        commit('logoutUser')
    },
    fetchLoggedUser({commit}) {
        const response = usersAPI.getCurrentUser()
        if (response) {
            commit('loginUser', response)
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}