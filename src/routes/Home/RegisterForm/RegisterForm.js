
import React from 'react'
import './RegisterForm.css'
import Button from '../../../components/Button/Button'
import Connection from '../../../model/Connection/Connection'

export default class RegisterForm extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            username: '',
            password: '',
            passwordRepeated: '',
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleRepeatPasswordChange = this.handleRepeatPasswordChange.bind(this)
        this.register = this.register.bind(this)

    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value})
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value})
    }

    handleRepeatPasswordChange(event) {
        this.setState({passwordRepeated: event.target.value})
    }

    canRegister() {
        return this.state.username && this.state.username.trim().length > 0
            && this.state.password && this.state.password.trim().length > 0
            && this.state.password === this.state.passwordRepeated
    }

    register() {

        Connection.register(this.state.username, this.state.password, (msg, data) => {
            console.log('reg success', msg, data)
        }, error => {
            console.log('reg error', error)
        })

    }

    render() {
        return <form className="RegisterForm">
            <label>
                Your name
                <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
            </label>
            <label>
                Password
                <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
            </label>
            <label>
                Repeat password
                <input type="password" value={this.state.passwordRepeated} onChange={this.handleRepeatPasswordChange} />
            </label>
            <Button text="Register" action={this.register} disabled={!this.canRegister()} />
        </form>
    }

}
