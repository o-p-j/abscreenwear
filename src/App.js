import React, { Component } from 'react';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import SubscribeForm from './components/SubscribeForm';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
          subscribeFormVisible: false
        }

        this.toggleSubscribeForm = this.toggleSubscribeForm.bind(this);
    }

    toggleSubscribeForm () {
        this.setState({
            subscribeFormVisible: !this.state.subscribeFormVisible
        });
    }

    render() {
        return (
          <div className="c-app">
            <LeftPanel className="c-app__panel" />
            <main className="c-app__main">
                <SubscribeForm
                    toggleSubscribeForm={this.toggleSubscribeForm}
                    subscribeFormVisible={this.state.subscribeFormVisible}
                />
                <div className="c-app__content">
                    {this.props.children}
                </div>
            </main>
            <RightPanel
                className="c-app__panel"
                toggleSubscribeForm={this.toggleSubscribeForm}
            />
          </div>
        );
    }

}

export default App;
