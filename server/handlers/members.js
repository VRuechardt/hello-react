
const model = require('../model/index')

exports.Members = (socket, data) => {

    model.Auth.loggedIn(data.authID)
    let members = model.Chat.members()

    return ['members', members]

}
