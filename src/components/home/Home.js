import React, { Component } from 'react';
import styles from './Home.css';

class Home extends Component {

  render() {
    return (
      <div className={styles.home}>
        Welcome to the app!

        <p>
        Lorem ipsum dolor sit amet, tellus eros venenatis dignissim praesent, ligula tellus, dui ultrices vel. Non sed sed eget luctus, habitasse elit praesent penatibus, litora consequat, risus aenean netus urna suscipit arcu nibh, felis nibh duis sapien et. Egestas aliquet sit morbi amet, pellentesque vitae dignissim, et ipsum arcu, cras wisi feugiat ac lectus. In tellus ac felis, nulla nam enim neque, lacinia iaculis, eget sit turpis vel amet, luctus velit tortor nulla. Sagittis lorem massa, ante nonummy ac vel orci risus.
        </p>
        <div className="icon-container">
          <a id="mariah-pic" href="https://github.com/MariahAdams"><img src="https://avatars3.githubusercontent.com/u/35393465?s=460&v=4"/></a>
          <div className="mdl-tooltip mdl-tooltip--large" htmlFor="mariah-pic">Mariah!</div>
          <a id="robert-pic" href="https://github.com/rbtprograms"><img src="https://avatars2.githubusercontent.com/u/37790245?s=460&v=4"/></a>
          <div className="mdl-tooltip mdl-tooltip--large" htmlFor="robert-pic">Robert!</div>
        </div>
      </div>
    );
  }
}

export default Home;