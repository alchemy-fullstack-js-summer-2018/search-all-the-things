import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import Words from './Words';
import { search as searchWords } from '../services/wordnikApi';
import { search } from '../../services/wordnikApi';

class Results extends Component {


  state = {
    words: null,
    loading: false,
    error: null,
  };

  static propTypes = {
    search: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.searchWords(); 
  }   

  componentDidUpdate({ location }) {
    const { search: oldSearch } = qs.parse(location.search);
    if(oldSearch === this.searchTerm) return;
    this.searchWords(); 
  }   

  handlePage = paging => {
    this.setState(paging, () => {
      this.searchWords();
    });
  };

  searchWords() {
    const { search } = this.state;

    this.setState({
      loading: true,
      error: null
    });

    searchWords(search)
      .then(
        (words) => {
          this.setState({ words });
        }
      )
      .then(() => {
        this.setState({ loading: false });
      });
      

  }

  render() {
    const { search } = this.props;
    const { words, loading, error } = this.state;

    return (
      <Fragment>

        <section>
          {(loading || error) &&
          <section className="notifications">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </section>}
        </section>

        <section>
          {words 
            ? <Words words={words}/>
            : <p>Please enter a word to define.</p>  
          }
        </section>

      </Fragment>
    );
  }
}

export default Results; 
