import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './home/Home';
import Results from './albums/Results';
import AlbumDetail from './albums/AlbumDetail';
import Favorites from './favorites/Favorites';
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
              <Route exact path="/favorites" component={Favorites}/>
              <Route exact path="/albums" component={Results}/>
              <Route exact path="/albums/:id" component={AlbumDetail}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;