import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default class Article extends Component {

    static propTypes = {
      article: PropTypes.object.isRequired
    };

    render() {
      const { article } = this.props;
      const { Title, Year, Poster } = article;

      return (
        <li>
          <img src={Poster}/>
          <h2><strong>{Title}</strong> ({Year})</h2> 
        </li>
      );
    }
}