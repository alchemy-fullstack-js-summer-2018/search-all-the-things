import React, { Component } from 'react';
import Header from './Header';
import { search } from '../services/bookApi';

class App extends Component {
  
  handleSearch = () => {
    search();
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