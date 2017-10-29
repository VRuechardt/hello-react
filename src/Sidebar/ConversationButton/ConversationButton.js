
import React from 'react';
import {Link} from 'react-router-dom'
import './ConversationButton.css';

export default class ConversationButton extends React.Component {

    render() {
        return <Link to={'/chat/' + this.props.id}>
            <div className="ConversationButton">
                {this.props.person}
            </div>
        </Link>
    }

}
