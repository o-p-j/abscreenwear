import React from 'react'
import Screenwear from './Screenwear'
import VimeoVideo from '../components/VimeoVideo'
import cursorPause from '../images/postmasters/cursor_pause.png';
import cursorPlay from '../images/postmasters/cursor_play.png';
import { isMobile } from '../utils/is-mobile'

const Home = (props) => {
    const videoUrl = `https://player.vimeo.com/video/209747767?title=0&byline=0&portrait=0&playsinline=1&autoplay=1${isMobile ? '' : '&background=1'}`
    return (
        <VimeoVideo
            className='c-home-video'
            src={videoUrl}
            cursorPlay={cursorPlay}
            cursorPause={cursorPause}
            ratio={(16 / 9)}
            tall={false}
        />
    )
}

export default Home
