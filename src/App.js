import React, { Component } from "react";
import axios from "axios";

export class App extends Component {
  state = {
    url: "",
    alt: ""
  };

  render() {
    return (
      <div className="container">
        <br />
        <img
          className="latestImage"
          src={this.state.url}
          alt={this.state.alt}
        />
      </div>
    );
  }

  async componentDidMount() {
    let imgRequest = await axios.get("https://xkcd.now.sh/?comic=latest");
    let imgData = imgRequest.data;
    let imgUrl = `${imgData.img}`;
    let imgAlt = `${imgData.alt}`;

    this.setState({
      ...this.state,
      ...{
        url: imgUrl,
        alt: imgAlt
      }
    });
  }
}

export default App;
