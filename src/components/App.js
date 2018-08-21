import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Header from './Header';
import styles from './App.css';
import Home from './home/Home';
import WordDetail from './words/WordDetail';
import Results from './words/Results';

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
              <Route exact path="/search" component={Results}/>
              <Route path="/words/:id" component={WordDetail}/>
              <Redirect to="/"/>
            </Switch> 
          </main>
        </div>
      </Router>
    );
  }
}

export default App;