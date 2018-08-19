import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Article extends Component {

  static propTypes = {
    article: PropTypes.object.isRequired
  };

  render() {
    const { article } = this.props;
    const { title, author, description } = article;
    const { publishedAt, url, urlToImage } = article;

    return (
      <li>
        <h2>{title}</h2>
        <p>by {author}, published on {new Date(publishedAt).toLocaleString()}</p>
        <a href={url}
          target="_blank"
          rel="noopener noreferrer">
          read more
        </a>
        <p>{description}</p>

        {urlToImage &&
          <p className="image">
            <img src={urlToImage}/>
          </p>
        }
      </li>
    );
  }
}