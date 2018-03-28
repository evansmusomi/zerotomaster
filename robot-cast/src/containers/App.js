import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      actors: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(actors => this.setState({ actors: actors }));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { searchField, actors } = this.state;

    const filteredCast = actors.filter(actor => {
      return actor.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    });

    return !filteredCast.length ? (
      <h1 className="tc">Loading...</h1>
    ) : (
      <div className="tc">
        <h1>Robots Cast</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList actors={filteredCast} />
        </Scroll>
      </div>
    );
  }
}

export default App;
