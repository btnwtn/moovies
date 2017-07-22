import React, { Component } from "react";
import Rx from "rxjs";
import Portal from "react-portal";
import Movies from "../../lib/Movies";

import SearchBar from "./components/SearchBar";

class Search extends Component {
  state = {
    query: "",
    results: []
  };

  constructor() {
    super();
    this.subject = new Rx.Subject();
    this.subject.debounceTime(150).subscribe(this.processQuery);
  }

  handleChange = event => {
    const query = event.target.value;
    this.subject.next(query);
    this.setState({ query });
  };

  processQuery = query => {
    if (!query) return;

    Movies.search(query)
      .then(
        ({ results }) => (
          console.log(results),
          this.setState({
            results
          })
        )
      )
      .catch(console.error);
  };

  render() {
    return (
      <div>
        <SearchBar
          type="search"
          value={this.state.query}
          onChange={this.handleChange}
          placeholder="Search…"
        />
      </div>
    );
  }
}

export default Search;
