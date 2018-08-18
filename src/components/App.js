import React, { Component } from 'react';
import { BrowserRouter as  Switch, Route, BrowserRouter } from 'react-router-dom';
// import { search as searchNews } from '../services/newsApi';
import Header from './Header';
import Results from './articles/Results';
import styles from './App.css';

class App extends Component {

  render() {
    
    return (
      <BrowserRouter>
        <div className={styles.app}>
          <header>
            <Header onSearch={this.handleSearch}/>
          </header>
          <main>
            <Switch>
              <Route path="/articles" component={Results}/>
            </Switch>
          </main>
    
        </div>
      </BrowserRouter>
    );
  }
}

export default App;