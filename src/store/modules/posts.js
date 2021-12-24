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
    },
    deletePost: (state, id) => {
        let postIndex = state.posts.findIndex(post => post.id === id)
        state.posts.splice(postIndex, 1)
    },
    updatePost: (state, updatedPost) => {
        state.posts = [
            ...state.posts.map(post => {
                return post.id !== updatedPost.id ? post : {...post, ...updatedPost}
            })
        ]
    }
}

const actions = {
    addPost({commit}, post) {
        commit("addNewPost", post)
    },
    deletePost({commit}, id) {
        commit("deletePost", id)
    },
    editPost({commit}, post) {
        commit("updatePost", post)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}