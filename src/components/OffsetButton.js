import React, { Component } from 'react';

class OffsetButton extends Component {
    render () {
        const { children, slowly: isSlowly } = this.props
        const classList = `c-button c-button-offset ${isSlowly ? 'c-button-offset--slowly' : ''}`

        return (
            <button className={classList}>
                <span className="c-button__text">{children}</span>
            </button>
        );
    }
}

export default OffsetButton;
