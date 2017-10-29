
import React from 'react'
import './LoginForm.css'
import Button from '../../../components/Button/Button'
import Connection from '../../../model/Connection/Connection'

export default class LoginForm extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            username: '',
            password: ''
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.login = this.login.bind(this)

    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value})
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value})
    }

    canLogin() {
        return this.state.username && this.state.username.trim().length > 0
            && this.state.password && this.state.password.trim().length > 0
    }

    login() {

        Connection.login(this.state.username, this.state.password, (msg, data) => {
            console.log('log success', msg, data)
            Connection.members((msg, data) => {

            } ,error => {

            })
        }, error => {
            console.log('log error', error)
        })

    }

    render() {
        return <form className="LoginForm">
            <label>
                Username
                <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
            </label>
            <label>
                Password
                <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
            </label>
            <Button text="Login" action={this.login} disabled={!this.canLogin()} />
        </form>
    }

}
