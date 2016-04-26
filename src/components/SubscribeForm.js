import React, { PropTypes } from 'react';

class SubscribeForm extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.close = this.close.bind(this);
    }

    handleChange(fieldName, e) {
        this.setState({ [fieldName]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        var data = new FormData();

        if (!this.state.email || !this.state.name) {
            alert('Please fill both email and name');
            return;
        }

        data.append('EMAIL', this.state.email);
        data.append('FNAME', this.state.name);

        var mailChimpAddress   = 'http://abscreenwear.us11.list-manage.com/subscribe/post?u=210d81d2813e4b042fde24419&amp;id=b4b55d4953';
        var emailLoggerAddress = 'http://abscreenwear.com/save';
        // send data to MailChimp

        var shipData = function (url) {

          fetch(url, {
              method: 'POST',
              mode: 'no-cors',
              body: data
          }).then(response => {
              if (!response.status || (response.status >= 200 && response.status < 300)) {
                  this.setState({ completed: true });
              } else {
                  let error = new Error(response.statusText);
                  error.response = response;
              }
          }).catch(err => {
              //TODO: do smth
              this.setState({completed: true });
              console.log('your error is: ' + err)
          });
        };

        shipData(mailChimpAddress);
        shipData(emailLoggerAddress);
    }

    close() {
        this.setState({ closed: true });
    }

    render() {
        if (this.state.closed) return null;

        if (this.state.completed) return (
            <div className="form">
                <div className="form-message">Thank you!</div>
            </div>
        );

        return (
            <form className="form" onSubmit={this.onSubmit}>
                <div className="form-header">
                    <div className="form-close-container">
                        <button type="button" className="form-close" onClick={this.close}>X</button>
                    </div>
                    <div style={{ display: 'inline-block', textAlign: 'left' }}>
                        Keep<br/>
                        in touch
                    </div>
                </div>

                <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" onChange={this.handleChange.bind(this, 'name')} />
                </div>

                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={this.handleChange.bind(this, 'email')} />
                </div>

                <div className="form-footer">
                    <button type="submit">Join!</button>
                </div>
            </form>
        );

    }
}

export default SubscribeForm;
