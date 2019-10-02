import React from "react";

export default class FollowerCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { followers } = this.props;

    return (
      <div>
        {followers.map(el => (
          <div>
            <div>
              <img src={el.avatar_url} />

              <div>
                <h3>{el.name}</h3>
                <p>{el.login}</p>
                <p>
                  Profile: <a href={el.url}> {el.html_url}</a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
