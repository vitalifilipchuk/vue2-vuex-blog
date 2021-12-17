const usersGlobalMixin = {
    computed: {
        getUserList() {
            return this.$store.getters['users/usersList']
        }
    },
}

export default usersGlobalMixin;