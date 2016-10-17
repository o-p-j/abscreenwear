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

        if (!this.state.email || !this.state.name) {
            alert('Please fill both email and name');
            return;
        }

        var data = {
          "email_address": this.state.email,
          "status": "subscribed",
          "merge_fields": {
            "FNAME": this.state.name, 
            "LNAME": "Unknown",
          },
        }

        var url = 'https://abscreenwear.com/save';

        fetch(url, {
            method: 'POST',
            headers: {
              "Content-type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(data),
        })
        .then(response => {
          if (!response.status || (response.status >= 200 && response.status < 300)) {
            this.setState({ completed: true });
          } 

          else {
            let error = new Error(response.statusText);
            error.response = response;
          }
        })

        .catch (err => {
          //TODO: do smth
          this.setState({completed: true });
          console.log('your error is: ' + err)
        });
      };

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
