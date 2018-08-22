import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Results from './Results';
import BookDetail from './books/BookDetails';
import styles from './App.css';
import Home from './home/Home';
import Favorites from './favorites/Favorites';

class App extends Component {

  render() {

    return (
      <Router>
        <Fragment>
          <header className={styles.app}>
            <h2 id="title">Search all the books!</h2>
            <Header onSearch={this.handleSearch}/>
          </header>

          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/favorites" component={Favorites}/>
              <Route exact path="/results" component={Results}/>
              <Route exact path="/results/:id" component={BookDetail}/>
              <Redirect to='/'/>
            </Switch>
          </main>
        </Fragment>
      </Router>
    );
  }
}

export default App;