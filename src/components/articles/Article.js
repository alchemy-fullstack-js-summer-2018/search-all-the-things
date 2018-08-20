import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Article.css';

export default class Article extends Component {

    static propTypes = {
      article: PropTypes.object.isRequired
    };

    render() {
      const { article } = this.props;
      const { Title, Year, Poster, imdbID } = article;

      return (
        <li className={styles.article}>
          <Link to={`/articles/${imdbID}`}>
            <img src={Poster}/>
            <p><strong>{Title}</strong> ({Year})</p> 
          </Link>
        </li>
      );
    }
}