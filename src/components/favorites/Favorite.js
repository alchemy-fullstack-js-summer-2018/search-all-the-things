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
          {thumbnail 
            ? <img src={thumbnail}/>
            : <img src="http://www.moxmultisport.com/wp-content/uploads/no-image.jpg" className="no-image"/>
          }
          {title ? <p>{title}</p> : <p>No title provided</p>}
        </Link>
        {authors ? <p>{authors}</p> : <p>No authors provided</p>}
      </li>
    );
  }
}

export default Favorite;