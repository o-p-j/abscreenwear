import React, { PropTypes } from 'react';
import SubscribeForm from '../components/SubscribeForm';

class Screewear extends React.Component {
    render() {
        return (
            <div style={{ position: 'relative' }}>
                <img style={{ width: '100%' }} src={require('../images/spencer.gif')}/>
            </div>
        );
    }
}

export default Screewear;
