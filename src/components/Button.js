import React, { Component } from 'react';

class Button extends Component {
    render () {
        const { children, slowly } = this.props

        return (
            <button className={`c-button ${slowly ? 'c-button--slowly' : ''}`}>
                <span className="c-button__text">{children}</span>
            </button>
        );
    }
}

export default Button;
