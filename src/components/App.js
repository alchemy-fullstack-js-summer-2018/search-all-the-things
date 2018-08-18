import React, { Component } from 'react';
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';
// import { search as searchNews } from '../services/newsApi';
import Header from './Header';
import Home from './home/Home';
import Results from './articles/Results';
import styles from './App.css';

class App extends Component {

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
              <Route exact path="/articles" component={Results}/>
            </Switch>
          </main>
    
        </div>
      </Router>
    );
  }
}

export default App;