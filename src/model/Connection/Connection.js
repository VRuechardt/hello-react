
import io from 'socket.io-client/dist/socket.io';
import assert from 'assert'
import Protocol from './Protocol'
import MakeID from '../../util/MakeID'

let socket = io('127.0.0.1:3001')

socket.on('connect', () => {
    console.log('connected')
})

socket.on('message', (msg, data) => {

    console.log(msg, data)

    if(data.authID) {
        authID = data.authID
    }

    if(data.rid && outstanding[data.rid]) {

        if(msg === 'err') {
            if(outstanding[data.rid].error) {
                outstanding[data.rid].error(data)
            }
        } else {
            if(outstanding[data.rid].success) {
                outstanding[data.rid].success(msg, data)
            }
        }

        delete outstanding[data.rid]

    }

    if(listeners[msg]) {

        listeners[msg].forEach(callback => {
            callback()
        })

    }

})


const outstanding = []
const listeners = []
let authID
let send = (event, data, success, error) => {

    if(authID) {
        data.authID = authID
    }

    if(success) {

        data.rid = MakeID(10)
        outstanding[data.rid] = {
            success: success,
            error: error
        }

        setTimeout(() => {

            if(outstanding[data.rid]) {
                error('request timeout')
                delete outstanding[data.rid]
            }

        }, 10000)

    }

    console.log('SENDING:', event, data)

    socket.emit(event, data)

}

class Connection {

    login(username, password, success, error) {

        assert(username && password, 'Username or password unset')

        send(Protocol.LOGIN, {
            username: username,
            password: password
        }, success, error)

    }

    register(username, password, success, error) {

        assert(username && password, 'Username or password unset')

        send(Protocol.REGISTER, {
            username: username,
            password: password
        }, success, error)

    }

    members(success, error) {
        send(Protocol.MEMBERS, {}, success, error)
    }

    listen(event, callback) {

        assert(event && callback, 'Function listen requires two attributes')

        if(listeners[event]) {
            listeners[event].push(callback)
        } else {
            listeners[event] = [callback]
        }

    }

}

const connection = new Connection()
export default connection
