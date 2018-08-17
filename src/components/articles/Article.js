import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Article extends Component {

    static propTypes = {
      article: PropTypes.object.isRequired
    };

    render() {
      const { article } = this.props;
      const { Title, Year, Poster } = article;

      return (
        <li>
          <h2><strong>{Title}</strong> ({Year})</h2> 
          <img src={Poster}/>
        </li>
      );
    }
}