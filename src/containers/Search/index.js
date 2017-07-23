// @flow
import React, { Component } from "react";
import Rx from "rxjs";
import Movies from "../../lib/Movies";

import SearchBar from "./components/SearchBar";

class Search extends Component {
  props: {
    handleResults: Function,
    handleEscape?: Function
  };

  state = {
    query: ""
  };

  constructor() {
    super();
    this.subject = new Rx.Subject();
    this.subject.debounceTime(200).subscribe(this.processQuery);
  }

  componentDidMount() {
    this.keyListener = document.addEventListener(
      "keydown",
      this.handleKeyPress,
      false
    );
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyListener);
  }

  handleKeyPress = event =>
    event.key === "Escape" &&
    this.props.handleEscape &&
    this.props.handleEscape();

  handleChange = event => {
    const query = event.target.value;
    this.subject.next(query);
    this.setState({ query });
  };

  handleFocus = event => event.target.value && this.handleChange(event);

  processQuery = query => {
    if (!query) return;

    Movies.search(query)
      .then(({ results }) => this.props.handleResults(results))
      .catch(console.error);
  };

  render() {
    return (
      <SearchBar
        innerRef={node => (this._input = node)}
        type="search"
        value={this.state.query}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        placeholder="Search…"
      />
    );
  }
}

export default Search;
