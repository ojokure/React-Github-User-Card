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
              <img src={el.avatar_url} />

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

// const FollowersWrap = styled.div`
//   display: grid;
//   justify-content:space-between;
//   width: 90vw;
//   min-height: 40vh;
//   margin: 70px auto;
//   background: #a9d3e9;
//   padding: 15px;
//   opacity: 0.95;
// `;
