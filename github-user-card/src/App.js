import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Users from "./Users";
import UserCards from "./UserCards";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: {} };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/ojokure").then(res => {
      debugger
      this.setState({
        data: res.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> REACT GITHUB USER-CARD</h1>
        </header>
        <div>
          <Users users={this.state.data}/>
          <UserCards users={this.state.data}/>
        </div>
      </div>
    );
  }
}
