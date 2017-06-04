import React from 'react'
import Screenwear from './Screenwear'
import VimeoVideo from '../components/VimeoVideo'
import cursorPause from '../images/postmasters/cursor_pause.png';
import cursorPlay from '../images/postmasters/cursor_play.png';

const Home = (props) => {
    return (
        <VimeoVideo
            className='c-home-video'
            src='https://player.vimeo.com/video/209747767?title=0&byline=0&portrait=0&autoplay=1&background=1'
            cursorPlay={cursorPlay}
            cursorPause={cursorPause}
            ratio={(16 / 9)}
            tall={false}
        />
    )
}

export default Home
