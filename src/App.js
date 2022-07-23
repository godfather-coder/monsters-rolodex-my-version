import React, { Component } from "react";
import './App.css'
class UserCards extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div>
        <input className="searchi" type='search' placeholder='search monsters' onChange={this.onSearchChange} />
        <div className="grid">
          {filteredMonsters.map(e =>
            <div className="row">
              <div className="card-container">
                <img className="image" alt={e.name} src={`https://robohash.org/${e.id}?set=set2&size=250x250`}></img>
                <br></br>
                <div className="div-small">
                  <p>{e.name}</p>
                  <div className="spa">
                    <span>{"["+e.email+"]"}</span></div>
                  </div>
                </div>
            </div>
          )}</div>
      </div>
    );
  }
}

export default UserCards;
