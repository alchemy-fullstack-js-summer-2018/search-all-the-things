import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import styles from './App.css';
// import Words from './words/Words';
import { search as searchWords } from '../services/wordnikApi';
import Home from './home/Home';
import Results from './words/Results';

class App extends Component {

  

  
  }

  render() {
    
    return (
      <Router>
        <div className={styles.app}>
          <header>
            <Header onSearch={this.handleSearch}/>
          </header>
      
          <main>
            

            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/search" component={Results}/>
            </Switch> 
           
          </main>
        </div>
      </Router>
    );
  }
}

export default App;