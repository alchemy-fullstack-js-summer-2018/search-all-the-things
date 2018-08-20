import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Results from './Results';
import BookDetail from './books/BookDetails';
import styles from './App.css';
import Home from './home/Home';

class App extends Component {

  render() {

    return (
      <Router>
        <Fragment>
          <header>
            <h1>Alchemy Code Lab Library</h1>
            <Header onSearch={this.handleSearch}/>
          </header>

          <main className={styles.app}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/results" component={Results}/>
              <Route exact path="/results/:id" component={BookDetail}/>
            </Switch>
          </main>
        </Fragment>
      </Router>
    );
  }
}

export default App;