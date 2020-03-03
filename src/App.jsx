import React, { Component } from 'react';
import './App.css';
import TopNav from './components/nav/topNav'
import SideNav from './components/nav/sideNav';

class App extends Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <div className="App">
        <TopNav />
        <SideNav />
        Hello
      </div>
    );
  }
}

export default App;
