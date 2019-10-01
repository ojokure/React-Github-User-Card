import React from "react";

export default class UserCards extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <img src={} />
        <div>
          <h3 className="name">{}</h3>
          <p className="username">{}</p>
          <p>Location: {}</p>
          <p>Profile:  
            <a href={}>{}</a>
          </p>
          {/* <p>Followers: {}</p> */}
          {/* <p>Following: {}</p> */}
              <p>Bio: {}</p>

        </div>
      </div>
    );
  }
}
