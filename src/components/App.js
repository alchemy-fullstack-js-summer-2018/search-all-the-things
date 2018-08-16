import React, { Component } from 'react';
import Header from './Header';
import { search } from '../services/bookApi';

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

        </main>
      </div>
    );
  }
}

export default App;