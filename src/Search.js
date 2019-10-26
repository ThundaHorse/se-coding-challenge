import React, { Component } from "react";
import axios from "axios";

export class Search extends Component {
  state = {
    query: "",
    url: "",
    alt: ""
  };

  onChange = e => this.setState({ query: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    axios
      .get(`https://xkcd.now.sh/?comic=${this.state.query}`)
      .then(response => {
        this.setState({
          ...this.state,
          ...{ url: response.data.img, alt: response.data.alt }
        });
      });
  };

  render() {
    return (
      <div className="container">
        <br />
        <form className="form-inline md-form mb-4" onSubmit={this.onSubmit}>
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={this.state.query}
            onChange={this.onChange}
          />
          <button className="btn btn-primary" value="subtmi" type="submit">
            Search
          </button>
        </form>
        <img src={this.state.url} alt={this.state.alt} />
      </div>
    );
  }
}

export default Search;
