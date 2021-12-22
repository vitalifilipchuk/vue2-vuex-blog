const state = {
    posts: []
}
 
const getters = {
    postsList: (state) => {
        return state.posts
    },
    postById: (state) => (postId) => {
        return state.posts.find(post => post.id === postId)
    }
}

const mutations = {
    addNewPost: (state, post) => {
        state.posts.push(post)
    },
    setPosts: (state, posts) => {
        state.posts = posts
    }
}

const actions = {
    addPost({commit}, post) {
        commit("addNewPost", post)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}