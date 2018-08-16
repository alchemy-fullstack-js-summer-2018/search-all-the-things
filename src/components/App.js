import React, { Component } from 'react';
//import styles from './App.css';

class App extends Component {
  state = {
    content: 'hi ya dummy',
    url: 'https://atlantisbahamas.com/media/Things%20To%20Do/Water%20Park/Beaches/Widget/Beaches_CoveBeach.jpg'
  };

  render() {
    //const { content } = this.state;

    return (
      <main>
        <section>
          <h2>is i showing??</h2>

        </section>
      </main>
    );
  }
}

export default App;


// import React, { Component } from 'react';
// //import Header from './Header';
// //import styles from './App.css';

// class App extends Component {

//   handleSearch = () => {
//     console.log('what are you looking for?');
//   };

//   render() {
    
//     return (
//       <div className={styles.app}>
//         <header>
//           <Header onSearch={this.handleSearch}/>
//         </header>
//         <main>
//           <h2>do u see me? please see me.</h2>
        
//         </main>
//       </div>
//     );
//   }
// }

// export default App;