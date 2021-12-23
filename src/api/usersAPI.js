//backend imitation using localStorage

export default {
    getUsers() {
        let users = JSON.parse(localStorage.getItem("users"))
        return users ? users : []
    },
    addUser(user) {
        let users = this.getUsers()
        users.push({name: user.name, password: user.password})
        localStorage.setItem('users',JSON.stringify(users))
    },
    setCurrentUser(username) {
        localStorage.setItem('currentLoggedUser', username)
        return username
    },
    unsetCurrentUser() {
        localStorage.removeItem('currentLoggedUser')
    }
}