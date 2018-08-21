import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import Words from './Words';
//import { search as searchWords } from '../../services/wordnikApi';

class Results extends Component {


  state = {
    words: null,
    totalResults: 0,
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

  //TO DO: PAGING
  // handlePage = paging => {
  //   this.setState(paging, () => {
  //     this.searchWords();
  //   });
  // };

  get searchTerm() {
    const { location } = this.props;
    const { search } = qs.parse(location.search);
    return search;  
  }
  
  searchWords() {
    const search = this.searchTerm;

    if(!search) return;

    this.setState({
      loading: true,
      error: null
    });

    search(search)
      .then(
        (words) => {
          this.setState({ words });
        },
        err => {
          this.setState({ error: err.message });
        }
      )
      .then(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    const { words, loading, error } = this.state;
    //const { totalResults } = this.state;
    const { searchTerm } = this;

    return (
      
      <section>
        {(loading || error) &&
          <section className="notifications">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </section>
        }
        {searchTerm &&
            <Fragment>
              <p>You Searched For: &quot;{searchTerm}&quot;</p>
            </Fragment>
        }

        {words 
          ? <Words words={words}/>
          : <p>Please enter a word to define.</p>  
        }
      </section>
    );
  }
}

export default Results; 
