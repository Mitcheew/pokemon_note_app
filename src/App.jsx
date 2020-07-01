import React, { Component } from 'react';
import './App.css';
import TopNav from './components/nav/topNav'
import SideNav from './components/nav/sideNav';
import MainBody from './components/mainBody';

export default function App(){
  
    return (
      <div className="App">
        {/* <TopNav /> */}
        <SideNav />
        <MainBody />
      </div>
    );
  
}
