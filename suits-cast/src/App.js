import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { actors } from "./actors";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      actors: actors
    };
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredCast = this.state.actors.filter(person => {
      return person.name
        .toLowerCase()
        .includes(this.state.searchField.toLocaleLowerCase());
    });

    return (
      <div className="tc">
        <h1>Suits Cast</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList actors={filteredCast} />
      </div>
    );
  }
}

export default App;
