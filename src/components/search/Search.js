import React, { Component } from 'react';
import qs from 'query-string';
import PropTypes from 'prop-types';
import styles from './Search.css';

class Search extends Component {

  state = {
    search: ''
  };

  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { location } = this.props;
    const { search = '' } = qs.parse(location.search);
    this.setState({ search });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { search } = this.state;
    if(!search) return;

    console.log('HANDLE SUBMIT HAPPEND');
    const { history } = this.props;
    history.push({
      pathname: '/results',
      search: qs.stringify({ search, page: 1, perPage: 20 })
    });
  };

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  };


  render() {
    const { search } = this.state;

    return (
      <div className={styles.search}>
        <h3>Search Component</h3>
        <form className="search-form" onSubmit={event => this.handleSubmit(event)}>
          <label>
            Search For:&nbsp;
            <input value={search} onChange={this.handleChange}/>
          </label>
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;