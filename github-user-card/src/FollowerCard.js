import React from "react";
import styled from "styled-components";

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
              <Img src={el.avatar_url} />

              <div>
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

const Img = styled.img`
border-radius:5%;
`;
