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

  subject: rxjs$Subject<*>

  constructor() {
    super();
    this.subject = new Rx.Subject();
    this.subject.debounceTime(200).subscribe(this.processQuery);
  }

  componentDidMount() {
    document.addEventListener(
      "keydown",
      this.handleKeyPress,
      false
    );
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }

  handleKeyPress = (event: Event) =>
    event.key === "Escape" &&
    this.props.handleEscape &&
    this.props.handleEscape();

  handleChange = (event: InputEvent) => {
    const query = event.target.value;
    this.subject.next(query);
    this.setState({ query });
  };

  handleFocus = (event: InputEvent) => event.target.value && this.handleChange(event);

  processQuery = (query: string) => {
    if (!query) return;

    Movies.search(query)
      .then(({ results }) => this.props.handleResults(results))
      .catch(console.error);
  };

  render() {
    return (
      <SearchBar
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
