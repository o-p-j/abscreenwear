import React, { Component } from 'react';

class BarcodeButton extends Component {
    render () {
        const { children } = this.props
        const classList = 'c-button c-button-barcode'

        return (
            <button className={classList}>
                <span className="c-button__text">{children}</span>
            </button>
        );
    }
}

export default BarcodeButton;
