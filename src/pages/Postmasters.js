import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

import '../images/postmasters/postmasters.css';
import screenPaper from '../images/postmasters/screen.paper.js';

import Vimeo from '@vimeo/player';

class Postmasters extends React.Component {

    componentDidMount() {
        
        const scrollableContainer = document.querySelector('#Postmasters');
    
        scrollableContainer.scrollTop = 1;

        scrollableContainer.addEventListener('scroll', parallaxScroll, false);
            
        var scope = screenPaper('myCanvas');
        var canvas = document.getElementById('myCanvas');
        var front1 = document.getElementById('front1');
        var back1 = document.getElementById('back1');
        var front2 = document.getElementById('front2');
        var back2 = document.getElementById('back2');

        var canvasRect = canvas.getBoundingClientRect();
        canvas.style.left = -canvasRect.left+'px';

        function parallaxScroll() {
            window.requestAnimationFrame(() => {

                //Loop
                const { scrollTop, scrollHeight, clientHeight } = scrollableContainer;

                // reached top scroll down
                if (!scrollTop) {
                    scrollableContainer.scrollTop = scrollHeight / 2 - 1;
                }
                // reached bottom
                else if (scrollTop >= scrollHeight / 2) {
                    scrollableContainer.scrollTop = scrollTop - (scrollHeight / 2);
                }

                //Parallax
                var frontRect1 = front1.getBoundingClientRect();
                var frontRect2 = front2.getBoundingClientRect();

                back1.style.left = frontRect1.left+'px';
                back1.style.transform = 'translate3d(0,'+(Math.round(frontRect1.top/1.5))+'px,0)';
                back1.style.width = front1.offsetWidth+'px';

                back2.style.left = frontRect1.left+'px';
                back2.style.transform = 'translate3d(0,'+(Math.round(frontRect2.top/1.5))+'px,0)';
                back2.style.width = front1.offsetWidth+'px';
            })
        }

        function isInView(el) {
            var rect = el.getBoundingClientRect()

            return(
              rect.bottom >= window.innerHeight &&
              rect.top <= (window.innerHeight || document.documentElement.clientHeight)
            )
          }

          function videoInit() {
            const player = document.querySelector('#player');
            var vimeo = document.querySelector('.vimeo');
            var iframePlayer = new Vimeo(player);

            // vimeo.addEventListener('mouseenter', volumeUp, false);
            // vimeo.addEventListener('mouseleave', volumeDown, false);

            iframePlayer.setVolume(0);

            var playerVolume = 0;

            function volumeUp() {
                iframePlayer.setVolume(0.5);
            }

            function volumeDown() {
                iframePlayer.setVolume(0);
            }
          }
        
      }

    render(){

        const cursor = {
            cursor: 'url('+require('../images/postmasters/cursor.png')+') 15 15, auto'
        };

        const front = [];
            for (let num = 0; num < 25; num++) {
                front.push(`front${num}`);
            }

        const front_images = front.map((src, idx) => <img id={'image-'+src} key={idx} src={require(`../images/postmasters/${src}.jpg`)} />);

        const back = [];
            for (let num = 0; num < 9; num++) {
                back.push(`back${num}`);
            }

        const back_images = back.map((src, idx) => <img id={'image-'+src} key={idx} src={require(`../images/postmasters/${src}.jpg`)} />);

        return (

            <div id="Postmasters" className="postmasters releases" style={cursor}>

                <div id="front1" className="front">
                    {/*
                    <div className="vimeo">
                        <iframe id="player" src="https://player.vimeo.com/video/205447851?title=0&byline=0&portrait=0&autoplay=1&background=1" width="640" height="320" frameBorder="0" webkitallowFullScreen mozallowFullScreen allowFullScreen></iframe>
                    </div>
                    */}
                    {front_images}
                    
                    
                </div>
                
                <div id="back1" className="back">
                    {back_images}
                </div>

                <div id="front2" className="front">
                    {front_images}
                </div>
                
                <div id="back2" className="back">
                    {back_images}
                </div>
            
                <canvas id="myCanvas" resize></canvas>

            </div>

          );
    }
  
}

export default Postmasters;