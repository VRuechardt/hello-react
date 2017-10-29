
import React from 'react';
import './Conversation.css';

export default class Conversation extends React.Component {

    render() {
        return <div className="Conversation">
            <h1>Conversation with {this.props.match.params.id}</h1>
        </div>
    }

}
