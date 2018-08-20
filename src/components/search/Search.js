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

    console.log('HANDLE SUBMIT HAPPENED');
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
        <form action="#" className="search-form" onSubmit={event => this.handleSubmit(event)}>
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
            <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="sample6">
              <i className="material-icons">search</i>
            </label>
            <div className="mdl-textfield__expandable-holder">
              <input id='sample6' value={search} onChange={this.handleChange} className="mdl-textfield__input"/>
              <label className="mdl-textfield__label" htmlFor="sample-expandable">Expandable Input</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;