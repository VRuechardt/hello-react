
const model = require('../model/index')
const MakeID = require('../util/MakeID').MakeID

exports.Register = (socket, data) => {

    let user = model.Auth.register(data.username, data.password)


    user.socket = socket
    user.authID = MakeID(10)

    console.log('registered:', user.username)

    return ['registered', {
        username: user.username,
        authID: user.authID
    }]

}
