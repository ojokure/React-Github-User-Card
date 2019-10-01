import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from "./Users"
import UserCards from "./UserCards"


export default class App extends React.Component {
  constructor(props){
    super(props)
  }

  render(){

 
  return (
    <div className="App">
      <header className="App-header">
      <h1> REACT GITHUB USER-CARD</h1>
      </header>
      <div>
      <Users/>
      <UserCards/>
      </div>
    </div>
  );
}
}

