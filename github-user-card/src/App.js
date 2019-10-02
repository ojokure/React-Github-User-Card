import React from "react";
import "./App.css";
import UserCards from "./UserCards";
import FollowerCard from "./FollowerCard";
import axios from "axios";
import styled from "styled-components";

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
          <FollowersWrap>
          <FollowerCard followers={this.state.followers} />
          </FollowersWrap>
        </div>
      </div>
    );
  }
}
const FollowersWrap = styled.div`
  display: grid;
  justify-content:space-between;
  flex-direction:wrap;
  width: 90vw;
  min-height: 40vh;
  margin: 70px auto;
  background: #a9d3e9;
  padding: 15px;
  opacity: 0.95;
`;
