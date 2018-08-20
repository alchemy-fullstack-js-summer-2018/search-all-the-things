import React, { Component } from 'react';
import { BrowserRouter as  Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './home/Home';
import Results from './articles/Results';
import ArticleDetail from './articles/ArticleDetail';
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
              <Route exact path="/articles/:id" component={ArticleDetail}/>
              <Redirect to="/"/>
            </Switch>
          </main>
    
        </div>
      </Router>
    );
  }
}

export default App;