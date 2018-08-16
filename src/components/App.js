import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
  handleSearch = () => {
    
  };
  
  render() {
    return (
      <div>
        <header>
          <Header onSearch={this.handleSearch}/>
        </header>
      </div>
    );
  }
}

export default App;