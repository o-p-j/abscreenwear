import React from 'react'
import Screenwear from './Screenwear'
import VimeoVideo from '../components/VimeoVideo'
import cursorPause from '../images/postmasters/cursor_pause.png';
import cursorPlay from '../images/postmasters/cursor_play.png';
import { isMobile } from '../utils/is-mobile'

const Home = (props) => {
    return (
        <img className="c-home-img" src={require('../images/N02_WHITEv1.gif')} />
    )
}

export default Home
