const usersGlobalMixin = {
    computed: {
        getUserList() {
            return this.$store.getters['users/usersList']
        },
        isLoggedIn() {
            return this.$store.getters['users/getAuthStatus']
        },
        getCurrentUser() {
            return this.$store.getters['users/getCurrentUser']
        }
    },
    methods: {
        logoutUser() {
            this.$store.dispatch('users/logout')
            this.$router.push({ name: 'Home' })
        },
        fetchLoggedUser() {
            this.$store.dispatch('users/fetchLoggedUser')
        }
    }
}

export default usersGlobalMixin;