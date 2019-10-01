import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserCards from "./UserCards";
import FollowerCard from "./FollowerCard";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { users: {}, followers: [] };
  }

  // componentDidMount() {
  //   axios.get("https://api.github.com/users/ojokure").then(res => {
  //     this.setState({
  //       data: res.data
  //     });
  //   });
  // }

  componentDidMount() {
    const usersPromise = axios.get({
      method: "get",
      url: "https://api.github.com/users/ojokure",
      auth: {
        username: "ojokure",
        password: "Anthonyojo1"
      }
    });
    const followersPromise = axios.get({
      method: "get",
      url: "https://api.github.com/users/ojokure/followers",
      auth: {
        username: "ojokure",
        password: "Anthonyojo1"
      }
    });
    Promise.all([usersPromise, followersPromise]).then(
      ({ usersAxiosRes, followersAxiosRes }) => {
        this.setState({
          users: usersAxiosRes.data,
          followers: followersAxiosRes.data
        });
      }
    );
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1> REACT GITHUB USER-CARD</h1>
        </header>
        <div>
          <UserCards users={this.state.users} />
          <FollowerCard followers={this.state.followers} />
        </div>
      </div>
    );
  }
}
