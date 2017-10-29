
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './App.css'

import Sidebar from './Sidebar/Sidebar'
import Home from './routes/Home/Home'
import Conversation from './routes/Conversation/Conversation'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Sidebar />
                <Route path="/home" component={Home} />
                <Route path="/chat/:id" component={Conversation} />
            </div>
        );
    }
}

export default App;
