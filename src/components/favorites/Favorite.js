import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Favorite extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired
  };

  render() {
    const { book } = this.props;
    const { id, title, authors, thumbnail } = book;

    return (
      <li>
        <Link to={`/results/${id}`}>
          {title}
          <p>{authors}</p>
          <img src={thumbnail}/>
        </Link>
      </li>
    );
  }
}

export default Favorite;