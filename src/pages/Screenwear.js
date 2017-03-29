import React, { Component, PropTypes } from 'react';
import SubscribeForm from '../components/SubscribeForm';

const styles = {
    backgroundImage: `url(${require('../images/spencer.gif')})`
}

class Screewear extends Component {
    render () {
        return (
            <div className="c-screenwear-cover" style={styles}></div>
        );
    }
}

export default Screewear;
