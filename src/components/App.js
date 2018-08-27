import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './home/Home';
import Results from './movies/Results';
import MovieDetail from './movies/MovieDetail';
import Favorites from './favorites/Favorites';

class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <header>
            <Header onSearch={this.handleSearch}/>
          </header>

          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/favorites" component={Favorites}/>
              <Route exact path="/search" component={Results}/>
              <Route exact path="/movies/:id" component={MovieDetail}/>
              <Redirect to="/"/>
            </Switch>
          </main>
          
        </div>
      </Router>
    );
  }
}

export default App;