import React, { Component } from 'react';
import Nav from './components/Nav';
import RightPanel from './components/RightPanel';

class App extends Component {
    render() {
        return (
          <div className="container">
              <Nav/>
              <main>
                  {this.props.children}
              </main>
              <RightPanel/>
          </div>
        );
    }
}

export default App;
