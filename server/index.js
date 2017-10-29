
const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const assert = require('assert')

const Login = require('./handlers/login').Login
const Register = require('./handlers/register').Register
const Members = require('./handlers/members').Members

const handle = (handler, socket, data) => {

    assert(handler && socket, 'Incomplete function parameters')

    try {

        let response = handler(socket, data)

        if(response) {
            console.log('sent:', response[0], response[1])
            if(data.rid) {
                response[1].rid = data.rid
            }
            socket.send(response[0], response[1])
        }

    } catch(ex) {

        socket.send('err', {
            error: ex.message,
            rid: data.rid
        })
        console.error(ex.message)

    }

}

io.on('connection', socket => {

    console.log('new connection')

    socket.on('login', data => handle(Login, socket, data))
    socket.on('register', data => handle(Register, socket, data))
    socket.on('members', data => handle(Members, socket, data))

})

http.listen(3001, () => {

    console.log('listening on *:3001')

})
