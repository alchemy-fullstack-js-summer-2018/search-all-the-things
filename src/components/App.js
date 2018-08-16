import React, { Component } from 'react';
import Header from './Header';
import { search } from '../services/omdbApi';
import Movies from './movies/Movies';

class App extends Component {
  state = {
    data: ''
  };

  handleSearch = () => {
    search()
      .then(results => {
        this.setState({ data: results });
      });
  };
  
  render() {
    return (
      <div>
        <header>
          <Header onSearch={this.handleSearch}/>
        </header>
        <main>
          {this.state.data && <Movies movies={this.data}/>}
        </main>
      </div>
    );
  }
}

export default App;