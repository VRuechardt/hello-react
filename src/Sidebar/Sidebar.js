
import React from 'react';
import './Sidebar.css';

import ConversationButton from './ConversationButton/ConversationButton';

export default class Sidebar extends React.Component {

    render() {
        return <div className="Sidebar">
            <ConversationButton person="Valentin Rüchardt" id="1" />
        </div>
    }

}
