
import React from 'react';
import './Button.css';

export default class Button extends React.Component {

    constructor(props) {

        super(props)
        this.performAction = this.performAction.bind(this)

    }

    performAction() {

        if(!this.props.disabled) {
            this.props.action()
        }

    }

    render() {
        return <div className="Button" onClick={this.performAction} disabled={this.props.disabled}>
            {this.props.text}
        </div>
    }

}
