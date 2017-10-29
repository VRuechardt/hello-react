
const assert = require('assert')

const users = []

class Auth {

    constructor() {}

    login(username, password) {

        assert(username && password
            && username.trim() && password.trim(), 'Invalid parameters')

        let user = users.filter(user => user.username === username)
        assert(user.length === 1, 'Incorrect credentials')

        assert(user[0].password === password, 'Incorrect credentials')

        user[0].loggedIn = true

        return user[0]

    }

    register(username, password) {

        assert(username && password
            && username.trim() && password.trim(), 'Invalid parameters')

        let user = users.filter(user => user.username === username)
        assert(user.length === 0, 'Invalid parameters')

        let newUser = {
            username: username,
            password: password,
            loggedIn: true
        }

        users.push(newUser)

        return newUser

    }

    loggedIn(authID) {

        let user = users.filter(user => user.authID === authID)
        assert(user.length === 1, 'Forbidden')
        assert(user[0].loggedIn, 'Forbidden')

        return true

    }

}

class Chat {

    members() {

        return users.map(user => user.username)

    }

}

const auth = new Auth()
const chat = new Chat()
exports.Auth = auth
exports.Chat = chat
