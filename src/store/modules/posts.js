const state = {
    posts: [
        {
            id: 1,
            author: "dummyuser1",
            date: "2021-12-24",
            tags: [
                "Подорожі"
            ],
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            title: "Test title 1",
            topic: "Фільми"
        },
        {
            id: 2,
            author: "dummyuser1",
            date: "2021-12-24",
            tags: [
                "Подорожі"
            ],
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            title: "Test title 2",
            topic: "Фільми"
        },
        {
            id: 3,
            author: "dummyuser2",
            date: "2021-12-25",
            tags: [
                'Поради',
                'SEO оптимізація'
            ],
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            title: "Te11st title 1",
            topic: "Загальна"
        },
        {
            id: 4,
            author: "dummyuser2",
            date: "2021-12-25",
            tags: [
                'Поради',
                'SEO оптимізація'
            ],
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            title: "Tiiiitle",
            topic: "Загальна"
        }
    ],
    topicOptions: [
        {                
            text: 'Загальна',
            value: 'Загальна'
        },
        {                
            text: 'Книги',
            value: 'Книги'
        },
        {                
            text: 'Фільми',
            value: 'Фільми'
        }
    ],
    tagOptions: [
        {
            text: 'Враження',
            value: 'Враження'
        },
        {
            text: 'Подорожі',
            value: 'Подорожі'
        },
        {
            text: 'Поради',
            value: 'Поради'
        },
        {
            text: 'SEO оптимізація',
            value: 'SEO оптимізація'
        },
    ]
}
 
const getters = {
    postsList: (state) => {
        return state.posts
    },
    postById: (state) => (postId) => {
        return state.posts.find(post => post.id === postId)
    },
    postsByName: (state) => (searchQuery) => {
        return state.posts.filter(post => {
            return (post.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1)
        })
    },
    postsByTags: (state) => (tags) => {
        return state.posts.filter(post => {
            return post.tags.some(postTag => tags.indexOf(postTag) !== -1)
        })
    },
    postsInDateRange: (state) => (from, to) => {
        return state.posts.filter(post => {
            let dateFrom = new Date(from)
            let dateTo = new Date(to)
            let postDate = new Date(post.date)
            return (dateFrom <= postDate) && (postDate <= dateTo)
        })
    },
    getTagOptions: (state) => {
        return state.tagOptions
    },
    getTopicOptions: (state) => {
        return state.topicOptions
    }
}

const mutations = {
    addNewPost: (state, post) => {
        console.log(post)
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