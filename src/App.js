import React, { Component } from "react";
import axios from "axios";

export class App extends Component {
  state = {
    url: "",
    alt: "",
    datePosted: "",
    title: ""
  };

  render() {
    return (
      <div className="container">
        <br />
        <p>
          Date Posted
          <br />
          <strong>{this.state.datePosted}</strong>
        </p>
        <br />
        <h1>{this.state.title}</h1>
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
    let title = `${imgData.title}`;
    let date = `${imgData.month}-${imgData.day}-${imgData.year}`;

    this.setState({
      ...this.state,
      ...{
        url: imgUrl,
        alt: imgAlt,
        datePosted: date,
        title: title
      }
    });
  }
}

export default App;
