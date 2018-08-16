import React, { Component } from 'react';
import Header from './Header';
import Search from './search/Search';

class App extends Component {

  render() {
    
    return (
      <div>
        <header>
          <Header/>
        </header>
        <main>
          <Search/>
        </main>
      </div>
    );
  }
}

export default App;