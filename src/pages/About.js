import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

import '../styles/about.css';

import ParallaxPage from '../components/ParallaxPage'

class About extends ParallaxPage {

    render() {
        const about = 
            <div className="text">
                <b><i>We</i> <i>are</i></b>
                <b><i>N</i><i>e</i><i>w</i></b> 
                <b><i>Y</i><i>o</i><i>r</i><i>k</i><i>-</i><i>b</i><i>a</i><i>s</i><i>e</i><i>d</i></b>
                <b><i>l</i><i>u</i><i>x</i><i>u</i><i>r</i><i>y</i></b> 
                <b><i>f</i><i>a</i><i>s</i><i>h</i><i>i</i><i>o</i><i>n</i></b> 
                <b><i>l</i><i>a</i><i>b</i><i>e</i><i>l</i></b>
                <b><i>and</i> <i>material</i></b> 
                <b><i>e</i><i>x</i><i>p</i><i>e</i><i>r</i><i>i</i><i>m</i><i>e</i><i>n</i><i>t</i><i>a</i><i>t</i><i>i</i><i>o</i><i>n</i></b> 
                <b><i>l</i><i>a</i><i>b</i></b>
                <b><i>that</i> <i>aims</i> <i>to</i></b> 
                <b><i>m</i><i>a</i><i>r</i><i>r</i><i>y</i></b>
                <b><i>the</i><i> </i><i>familiaritys</i></b>
                <b><i>of</i><i> </i><i>thes</i></b> 
                <b><i>s</i><i>e</i><i>n</i><i>s</i><i>u</i><i>a</i><i>l</i></b>
                <b><i>m</i><i>a</i><i>t</i><i>e</i><i>r</i><i>i</i><i>a</i><i>l</i></b>
                <b><i>world</i><i> </i><i>with</i></b>
                <b><i>the</i><i> </i>      <i>emergent,</i></b> 
                <b><i>a</i><i>-</i><i>m</i><i>a</i><i>t</i><i>e</i><i>r</i><i>i</i><i>a</i><i>l</i></b> 
                <b><i>i</i><i>n</i><i>t</i><i>e</i><i>l</i><i>l</i><i>i</i><i>g</i><i>e</i><i>n</i><i>c</i><i>e</i></b>
                <b><i>of</i><i> </i><i>our</i><i> </i><i>new</i></b> 
                <b><i>t</i><i>e</i><i>c</i><i>h</i></b> 
                <b><i>oriented</i> <i>era.</i></b>
                <b><i>We</i> <i>are</i></b>
                <b><i>s</i><i>c</i><i>r</i><i>e</i><i>e</i><i>n</i></b>
                <b><i>w</i><i>e</i><i>a</i><i>r</i></b>
                <b><i>s</i><i>c</i><i>r</i><i>e</i><i>e</i><i>n</i></b>
                <b><i>w</i><i>e</i><i>a</i><i>r</i></b>
                <b><i>s</i><i>c</i><i>r</i><i>e</i><i>e</i><i>n</i><i>w</i><i>e</i><i>a</i><i>r</i></b>

            </div>

        return (
            <div className="releases about">
                {about}
                {about}
                {about}
                {about}
            </div>
        );
    }
}

export default About;
