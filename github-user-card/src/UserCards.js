import React from "react";

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
            <p>Followers: {users.followers_url}</p>
            <p>Following: {users.followings_url}</p>
            <p>Bio: {users.bio}</p>
          </div>
        </div>
      </div>
    );
  }
}
