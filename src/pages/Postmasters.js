import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

import '../images/postmasters/postmasters.css';
import screenPaper from '../images/postmasters/screen.paper.js';

import Vimeo from '@vimeo/player';
import Browser from 'detect-browser';

class Postmasters extends React.Component {

    componentDidMount() {
        
        const scrollableContainer = document.querySelector('#Postmasters');
    
        scrollableContainer.scrollTop = 1;

        scrollableContainer.addEventListener('scroll', loopScroll, false);
            
        var scope = screenPaper('myCanvas');
        var canvas = document.getElementById('myCanvas');
        var front1 = document.getElementById('front1');
        var back1 = document.getElementById('back1');
        var front2 = document.getElementById('front2');
        var back2 = document.getElementById('back2');

        var canvasRect = canvas.getBoundingClientRect();
        canvas.style.left = -canvasRect.left+'px';

        var frontRect = front1.getBoundingClientRect();
        var backRect = back1.getBoundingClientRect();
        var backRect2 = back2.getBoundingClientRect();

        if(Browser.name === 'chrome') {
            setSizes();
            scrollableContainer.addEventListener('scroll', parallaxScroll, false);
        }

        function setSizes() {
            front1.style.position = 'fixed';
            front1.style.left = backRect.left+'px';
            front1.style.width = back1.offsetWidth+'px';
            front2.style.position = 'fixed';
            front2.style.left = backRect.left+'px';
            front2.style.width = back1.offsetWidth+'px';
            front2.style.top = 0 +'px';
        }

        function parallaxScroll() {

            window.requestAnimationFrame(() => {

                
                //Parallax
                backRect = back1.getBoundingClientRect();
                backRect2 = back2.getBoundingClientRect();
                //var frontRect2 = back2.getBoundingClientRect();

                var frontChildren = front1.childNodes;

                // for (var i=0; i < frontChildren.length; i++) {
                //     if(isInView(frontChildren[i])) {
                //         frontChildren[i].style.transform = 'translate3d(0,'+(Math.round(-frontRect1.top/1.5))+'px,0)';
                //     }

                //back1.style.left = frontRect1.left+'px';
                
                //back1.style.width = front1.offsetWidth+'px';

                
                front1.style.transform = 'translate3d(0,'+(backRect.top/1.2)+'px,0)';
                front2.style.transform = 'translate3d(0,'+(backRect2.top/1.2)+'px,0)';
                
            })
        }

        function loopScroll() {
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
            })
        }

        function isInView(el) {
            var rect = el.getBoundingClientRect()

            return(
              rect.bottom >= -window.innerHeight &&
              rect.top <= (window.innerHeight*1.5 || document.documentElement.clientHeight*1.5)
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
            for (let num = 0; num < 10; num++) {
                front.push(`front${num}`);
            }

        const front_images = front.map((src, idx) => <img id={'image-'+src} key={idx} src={require(`../images/postmasters/${src}.jpg`)} />);

        const back = [];
            for (let num = 0; num < 11; num++) {
                back.push(`back${num}`);
            }

        const back_images = back.map((src, idx) => <img id={'image-'+src} key={idx} src={require(`../images/postmasters/${src}.jpg`)} />);

        return (

            <div id="Postmasters" className="postmasters releases" style={cursor}>

                <div className="vimeo">
                    <iframe id="player" src="https://player.vimeo.com/video/184070481?title=0&byline=0&portrait=0&autoplay=1&background=1" width="640" height="320" frameBorder="0" webkitallowFullScreen mozallowFullScreen allowFullScreen></iframe>
                </div>

                <div id="front1" className="front">
                    
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