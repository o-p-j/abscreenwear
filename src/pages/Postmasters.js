import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

import '../images/postmasters/postmasters.css';
import screenPaper from '../images/postmasters/screen.paper.js';

import Vimeo from '@vimeo/player';
import Browser from 'detect-browser';
import imagesLoaded from 'imagesloaded';

class Postmasters extends React.Component {

    componentDidMount() {

        const scope = screenPaper('paperCanvas');
        const parallax = document.getElementById('parallax');
        const canvas = document.getElementById('paperCanvas');
        const credits1 = document.getElementById('credits1');
        const front1 = document.getElementById('front1');
        const frontRect = front1.getBoundingClientRect();
        const back1 = document.getElementById('back1');

        //const player = document.querySelector('#player');
        const vimeo = document.querySelector('.vimeo');
        //const iframePlayer = new Vimeo(player);

        const speed = 1.2;
        var dampen = true;
        
        const scrollableContainer = document.querySelector('#Postmasters');

        var autoscroll = false;

        if(Browser.name === 'chrome' || Browser.name === 'safari')
            autoscroll = false;

        scrollableContainer.scrollTop = credits1.offsetHeight;

        scrollableContainer.addEventListener('scroll', loopScroll, false);
        window.addEventListener('resize', windowResize, false);

        var scrollPos = scrollableContainer.scrollTop;
            
        var canvasRect = canvas.getBoundingClientRect();
        canvas.style.left = -canvasRect.left+'px';

        var lastScrollPos = 0;
        var scrollDamp = 0;

        var parallaxChildren;

        imagesLoaded( front1, function( instance ) {
            const frontChildren = front1.childNodes;
            createParallax(frontChildren);
            //vimeo.style.top = back1.offsetTop + 'px';
            front1.parentNode.removeChild(front1);
            parallaxChildren = parallax.childNodes;
            parallaxAnim();
        });

        function createParallax(childrenArray) {

            for (var i=0; i < childrenArray.length; i++) {
                childrenArray[i].style.opacity = 0;
                var src = childrenArray[i].src;
        
                var newNode = document.createElement("img");
                newNode.src = src;

                setSizes(childrenArray[i], newNode);

                newNode.classList = childrenArray[i].classList;

                parallax.appendChild(newNode);

            }

        }

        function setSizes(oldEl, newEl) {
            
            var rect = oldEl.getBoundingClientRect();
            
            parallax.style.width = front1.offsetWidth + 'px';
            
            newEl.style.position = 'absolute';
            newEl.style.top = rect.top + 'px';
            newEl.style.left = rect.left - frontRect.left + 'px';
            newEl.dataset.topPos = rect.top;
            var w = parseFloat(window.getComputedStyle(oldEl).width)
            newEl.dataset.widthPer = w / front1.offsetWidth;
            newEl.dataset.leftPer = parseInt(newEl.style.left,10) / front1.offsetWidth;
            newEl.dataset.topPer = parseInt(newEl.style.top,10) / front1.offsetWidth;
            newEl.dataset.topPosPer = rect.top / front1.offsetWidth;
        }

        function windowResize() {
            
            window.requestAnimationFrame(() => {
                for(var i=0; i<parallaxChildren.length; i++) {

                    var el = parallaxChildren[i];

                    parallax.style.width = back1.offsetWidth + 'px';
                    el.style.left = (parseFloat(el.dataset.leftPer) * parallax.offsetWidth) + 'px';
                    el.style.top = (parseFloat(el.dataset.topPer) * parallax.offsetWidth) + 'px';
                    el.dataset.topPos = el.dataset.topPosPer * parallax.offsetWidth;

                    //vimeo.style.top = back1.offsetTop + 'px';

                    var canvasRect = canvas.getBoundingClientRect();
                    canvas.style.left = -canvasRect.left+'px';
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }

            })
        }
        

        function parallaxAnim() {
            
            window.requestAnimationFrame(() => {

                if(autoscroll) {
                    var scroller = scrollableContainer.scrollTop + 1.5;
                    scrollableContainer.scrollTop = scroller;
                }

                scrollPos = scrollableContainer.scrollTop - credits1.offsetHeight;
                
                scrollDamp += (scrollPos - lastScrollPos) / 5;
                
                if(Math.abs(scrollDamp) >= 0.00001 && dampen)
                    scrollDamp *= 0.94;
                else
                    scrollDamp = 0;

                var scrollH = -(scrollPos) / speed;

                for (var i=0; i < parallaxChildren.length; i++) {

                    var el = parallaxChildren[i];

                    var modifier = 0;

                    if(i % 2 == 0) {
                        var modifier = 0.6;
                    }

                    if(i % 3 == 0) {
                        var modifier = 1.2;
                    }

                    var damp = scrollDamp + scrollDamp * modifier;
                    var scroll = scrollH + damp;

                    if(isInView(el)) {
                        el.style.transform = 'translate3d(0,'+(scroll)+'px,0)'
                        if(el.style.opacity < 1)
                            el.style.opacity = 1
                    } else {
                        if(el.style.opacity > 0)
                            el.style.opacity = 0
                    }

                }

                lastScrollPos = scrollPos;

                if(dampen === false)
                    dampen = true;

                parallaxAnim();
                    
            });


        }

        function isInView(node) {

            var top = parseInt(node.dataset.topPos, 10);

            return (scrollPos / speed > top - window.innerHeight*3) && (scrollPos / speed < (top + window.innerHeight*3));
        }

        function loopScroll() {
            window.requestAnimationFrame(() => {
                //Loop
                const { scrollTop, scrollHeight, clientHeight } = scrollableContainer;

                // reached top scroll down
                if (scrollTop <= 2) {
                    scrollableContainer.scrollTop = scrollHeight - credits1.offsetHeight - 2;
                    dampen = false;
                }
                // reached bottom
                else if (scrollTop >= scrollHeight - window.innerHeight) {
                    scrollableContainer.scrollTop = credits1.offsetHeight - window.innerHeight;
                    dampen = false;
                }
            })
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

        const front_images = front.map((src, idx) => <img className={'image-'+src} key={idx} src={require(`../images/postmasters/${src}.jpg`)} />);

        const back = [];
            for (let num = 0; num < 10; num++) {
                back.push(`back${num}`);
            }

        const back_images = back.map((src, idx) => <img className={'image-'+src} key={idx} src={require(`../images/postmasters/${src}.jpg`)} />);

        return (

            <div id="Postmasters" className="postmasters releases" style={cursor}>

                <div id="parallax"></div>

                <div id="credits1" className="credits" style={{ backgroundImage: 'url('+require('../images/postmasters/back10.jpg')+')' }}>
                    <img src={require(`../images/postmasters/credits.png`)} />
                </div>

                <div className="vimeo">
                    <iframe id="player" src="https://player.vimeo.com/video/205447851?title=0&byline=0&portrait=0&autoplay=1&background=1" width="640" height="320" frameBorder="0" webkitallowFullScreen mozallowFullScreen allowFullScreen></iframe>
                </div>

                <div id="text">
                    <img src={require(`../images/postmasters/text1.png`)} />
                    <img src={require(`../images/postmasters/text2.png`)} />
                </div>

                <div id="front1" className="front">
                    {front_images}
                </div>
                
                <div id="back1" className="back">
                    {back_images}
                </div>

                

                <div id="credits2" className="credits" style={{ backgroundImage: 'url('+require('../images/postmasters/back10.jpg')+')' }}>
                    <img src={require(`../images/postmasters/credits.png`)} />
                </div>
            
                <canvas id="paperCanvas"></canvas>

            </div>

          );
    }
  
}

export default Postmasters;