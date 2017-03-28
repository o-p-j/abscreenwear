import React, { Component } from 'react';
import Nav from './components/Nav';
import RightPanel from './components/RightPanel';
import SubscribeForm from './components/SubscribeForm';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          subscribeFormVisible:  false
        }
    }

    toggleSubscribeForm () {
        this.setState({ subscribeFormVisible: !this.state.subscribeFormVisible });
    }

    render() {
        return (
          <div className="container c-app">
              <Nav/>
              <main>
                  <SubscribeForm
                    toggleSubscribeForm={this.toggleSubscribeForm.bind(this)}
                    subscribeFormVisible={this.state.subscribeFormVisible}
                  />
                  {this.props.children}
              </main>
              <RightPanel toggleSubscribeForm={this.toggleSubscribeForm.bind(this)}/>
          </div>
        );
    }

}

export default App;
