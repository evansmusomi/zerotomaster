import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";

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
    const filteredCast = this.state.actors.filter(person => {
      return person.name
        .toLowerCase()
        .includes(this.state.searchField.toLocaleLowerCase());
    });

    if (filteredCast.length === 0) {
      return <h1 className="tc">Loading...</h1>;
    } else {
      return (
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
}

export default App;
