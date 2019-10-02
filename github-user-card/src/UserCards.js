import React from "react";
import styled from "styled-components";


export default class UserCards extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { users } = this.props;
    return (
      <div>
        <div>
          <img src={users.avatar_url} />

          <div>
            <h3>{users.name}</h3>
            <p>{users.login}</p>
            <p>Location: {users.location}</p>
            <p>
              Profile: <a href={users.url}> {users.html_url}</a>
            </p>
            <p>Bio: {users.bio}</p>
          </div>
        </div>
      </div>
    );
  }
}
