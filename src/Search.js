import React, { Component } from "react";
import axios from "axios";

export class Search extends Component {
  state = {
    url: "",
    alt: ""
  };

  render() {
    return (
      <div className="container">
        <br />
        <input type="text"></input>
        <h1>Test</h1>
      </div>
    );
  }

  async componentDidMount() {
    let imgRequest = await axios.get("https://xkcd.now.sh/?comic=303");
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

export default Search;
