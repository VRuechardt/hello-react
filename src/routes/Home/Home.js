
import React from 'react';
import './Home.css';
import LoginForm from './LoginForm/LoginForm'
import RegisterForm from "./RegisterForm/RegisterForm"

export default class Home extends React.Component {

    render() {
        return <div className="Home">
            <h1>Welcome!</h1>
            <p>
                Login to start chatting.
            </p>
            <LoginForm />
            <p>
                If you're new here, register first.
            </p>
            <RegisterForm />
        </div>
    }

}
