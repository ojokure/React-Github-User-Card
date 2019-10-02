import React from "react";
import "./App.css";
import UserCards from "./UserCards";
import FollowerCard from "./FollowerCard";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { users: "", followers: [] };
  }

  // componentDidMount() {
  //   axios.get("https://api.github.com/users/ojokure").then(res => {
  //     this.setState({
  //       data: res.data
  //     });
  //   });
  // }

  componentDidMount() {
    const usersPromise = axios.get("https://api.github.com/users/ojokure");
    const followersPromise = axios.get("https://api.github.com/users/ojokure/followers");
    Promise.all([usersPromise, followersPromise]).then(
      (promiseApi) => {
        this.setState({
          users: promiseApi[0].data,
          followers: promiseApi[1].data
        });
      }
    );
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1> GITHUB USER-CARD</h1>
        </header>
        <div>
          <UserCards users={this.state.users} />
          <FollowerCard followers={this.state.followers} />
        </div>
      </div>
    );
  }
}
