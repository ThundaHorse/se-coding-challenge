import React, { Component } from "react";
import axios from "axios";

export class Search extends Component {
  state = {
    query: "",
    url: "",
    alt: "",
    datePosted: "-",
    title: "Nothing yet ¯|_(ツ)_/¯",
    number: "-"
  };

  onChange = e => this.setState({ query: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    axios
      .get(`https://xkcd.now.sh/?comic=${this.state.query}`)
      .then(response => {
        let imgData = response.data;
        this.setState({
          ...this.state,
          ...{
            url: imgData.img,
            alt: imgData.alt,
            datePosted: `${imgData.month}-${imgData.day}-${imgData.year}`,
            title: imgData.title,
            number: imgData.num
          }
        });
      });
  };

  render() {
    return (
      <div className="container">
        <br />
        <form className="form-inline md-form mb-4" onSubmit={this.onSubmit}>
          <input
            className="searchInput form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={this.state.query}
            onChange={this.onChange}
          />
          <button
            className="searchSubmit btn btn-primary"
            value="subtmi"
            type="submit"
          >
            Search
          </button>
        </form>
        <p>
          Date Posted: <strong>{this.state.datePosted}</strong>
          <br />
          Comic #: {this.state.number}
        </p>
        <br />
        <h1>{this.state.title}</h1>
        <br />
        <img
          src={this.state.url}
          alt={this.state.alt}
          className="searchImage"
        />
      </div>
    );
  }
}

export default Search;
