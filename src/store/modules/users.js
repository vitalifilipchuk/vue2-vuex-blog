import usersAPI from "../../api/usersAPI"

const state = {
    users: []
}
 
const getters = {
    usersList: (state) => {
        return state.users
    }
}

const mutations = {
    addNewUser: (state, user) => {
        state.users.push(user)
    },
    setUsers: (state, users) => {
        state.users = users
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
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}