import React from "react";

export class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sahilsinhmar");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    return (
      <div>
        <h1>hey this is pofile class</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h1>name: {this.state.userInfo.name}</h1>
        <h1>location: {this.state.userInfo.location}</h1>
      </div>
    );
  }
}
