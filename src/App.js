import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Clock from './components/Clock';

const activities = [
  {
    timestamp: new Date().getTime(),
    text: "Ate lunch",
    user: {
      id: 1, name: 'Nate',
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: 'Ari', text: 'Me too!' }]
  },
  {
    timestamp: new Date().getTime(),
    text: "Woke up early for a beautiful run",
    user: {
      id: 2, name: 'Ari',
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: 'Nate', text: 'I am so jealous' }]
  }
]



class App extends Component {
  render() {
    return (
       <div className="notificationsFrame">
        <div className="panel">
          <Header title="Home"/>
          <Content activities={activities} />
          <Clock/>
        </div>
      </div>
    );
  }
}

export default App;
