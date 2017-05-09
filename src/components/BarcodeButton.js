import React, { Component } from 'react';

class BarcodeButton extends Component {
    render () {
        const { children } = this.props
        const classList = 'c-button c-button-barcode'

        return (
            <button className={classList}>
                <span className="c-button__text">{children}</span>
                <div className="c-button-barcode__bg"></div>
            </button>
        );
    }
}

export default BarcodeButton;
