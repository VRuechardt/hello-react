
const model = require('../model/index')
const MakeID = require('../util/MakeID').MakeID

exports.Login = (socket, data) => {

    let user = model.Auth.login(data.username, data.password)

    user.socket = socket
    user.authID = MakeID(10)

    console.log('logged in:', user.username)

    return ['loggedIn', {
        username: user.username,
        authID: user.authID
    }]

}
