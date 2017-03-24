import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

import '../images/postmasters/postmasters.css';
import screenPaper from '../images/postmasters/screen.paper.js';

import TypeWriter from '../components/TypeWriter.js';

import Vimeo from '@vimeo/player';
import Browser from 'detect-browser';
import imagesLoaded from 'imagesloaded';

import PostmastersCredits from '../components/PostmastersCredits.js';

class Postmasters extends React.Component {

    componentDidMount() {

        const scope = screenPaper('paperCanvas');
        const parallax = document.getElementById('parallax');
        const canvas = document.getElementById('paperCanvas');
        const credits1 = document.getElementById('credits1');
        const front1 = document.getElementById('front1');
        const frontRect = front1.getBoundingClientRect();
        const back1 = document.getElementById('back1');

        const player = document.querySelector('#player');
        const vimeo = document.querySelector('.vimeo');
        const iframePlayer = new Vimeo(player);
        var videoVolume = 0.5;

        vimeo.addEventListener('click', toggleVideo, false);

        videoInit();

        const speed = 1.2;
        var dampen = true;
        
        const scrollableContainer = document.querySelector('#Postmasters');

        var autoscroll = false;
        var autoscrollAmt = isRetina ? 1:1.5;

        scrollableContainer.scrollTop = credits1.offsetHeight;

        scrollableContainer.addEventListener('scroll', loopScroll, false);
        window.addEventListener('resize', windowResize, false);

        var scrollPos = scrollableContainer.scrollTop;
            
        var lastScrollPos = 0;
        var scrollDamp = 0;

        var parallaxChildren = [];

        var backImagesLoaded = 0;

        imagesLoaded( front1, function( instance ) {
            //all images loaded
            for (var i = 0; i < front1.childNodes.length; i++) {
                createParallax(front1.childNodes[i])
            }
            front1.parentNode.removeChild(front1);
            parallaxChildren = parallax.childNodes;


            if(Browser.name === 'chrome' || Browser.name === 'safari')
                autoscroll = true;

        }).on( 'progress', function( instance, image ) {
          if(image.img.classList[0] === 'image-front0' || 'image-front1')
            loadImg(image.img);
        });

        imagesLoaded( back1, function( instance ){}).on( 'progress', function( instance, image ) {
            backImagesLoaded++;
            if(backImagesLoaded === 2) {
                TypeWriter("#headline", "true", 120);
            }
        });

        parallaxAnim();

        function isRetina(){
            return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)').matches)) || (window.devicePixelRatio && window.devicePixelRatio >= 2)) && /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
        }

        function createParallax(el) {

                el.style.opacity = 0;
                var src = el.src;
        
                var newNode = document.createElement("img");
                newNode.src = src;
                newNode.dataset.src = el.dataset.src;

                setSizes(el, newNode);

                newNode.classList = el.classList;

                parallax.appendChild(newNode);


        }

        function setSizes(oldEl, newEl) {
            
            var rect = oldEl.getBoundingClientRect();
            
            parallax.style.width = front1.offsetWidth + 'px';
            
            //set position
            newEl.style.position = 'absolute';
            newEl.style.top = oldEl.offsetTop + 'px';
            newEl.style.left = rect.left - frontRect.left + 'px';
            newEl.dataset.topPos = oldEl.offsetTop;
            var w = parseFloat(window.getComputedStyle(oldEl).width)
            //set percentages for resizing
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

                    
                }

                canvas.style.width = window.innerWidth + 'px';
                canvas.style.height = window.innerHeight + 'px';
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

            })
        }
        

        function parallaxAnim() {
            
            window.requestAnimationFrame(() => {

                if(autoscroll) {
                    var scroller = scrollableContainer.scrollTop + autoscrollAmt;
                    scrollableContainer.scrollTop = scroller;
                }

                scrollPos = scrollableContainer.scrollTop - credits1.offsetHeight;
                
                scrollDamp += (scrollPos - lastScrollPos) / 5;
                
                if(Math.abs(scrollDamp) >= 0.00001 && dampen)
                    scrollDamp *= 0.9;
                else
                    scrollDamp = 0;

                var scrollH = -(scrollPos) / speed;

                for (var i=0; i < parallaxChildren.length; i++) {

                    var el = parallaxChildren[i];

                    var modifier = 0;

                    if(i % 2 == 0) {
                        var modifier = 0.9;
                    }

                    if(i % 3 == 0) {
                        var modifier = 1.1;
                    }

                    var damp = scrollDamp + scrollDamp * modifier;
                    var scroll = scrollH + damp;

                    if(isInView(el)) {

                        loadImg(el);

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

        function loadImg(el) {
            if(!el.dataset.loaded && el.dataset.src) {
                el.src = el.dataset.src;
                el.dataset.loaded = true;
            }
        }

        function isInView(node) {

            var top = parseInt(node.dataset.topPos, 10);

            return (scrollPos / speed > top - window.innerHeight*2) && (scrollPos / speed < (top + window.innerHeight*3));
        }

        function loopScroll() {
            window.requestAnimationFrame(() => {

                //autoscrollAmt = 0;

                //Loop
                const { scrollTop, scrollHeight, clientHeight } = scrollableContainer;

                // reached top scroll down
                if (scrollTop <= credits1.offsetHeight*0.25 - 1) {
                    scrollableContainer.scrollTop = scrollHeight - (credits1.offsetHeight*0.75) - 2;
                    dampen = false;
                }
                // reached bottom
                else if (scrollTop >= scrollHeight - (credits1.offsetHeight*0.75)) {
                    scrollableContainer.scrollTop = credits1.offsetHeight*0.25 + 2;
                    dampen = false;
                }
            })
        }

          function videoInit() {

            iframePlayer.setVolume(0.5);

            setInterval(function() {
                window.requestAnimationFrame(() => {

                    if(scrollPos <= vimeo.offsetTop && scrollPos >= vimeo.offsetTop - window.innerWidth && videoVolume < 0.5) {
                        videoVolume += 0.05;
                        iframePlayer.setVolume(videoVolume);
                    } else if (videoVolume > 0) {
                        videoVolume -= 0.05;
                        iframePlayer.setVolume(videoVolume);
                    }
                })
            },200);
          }

          function toggleVideo() {

            if(!vimeo.dataset.paused) {
                iframePlayer.pause();
                vimeo.dataset.paused = true;
            } else {
                iframePlayer.play();
                delete vimeo.dataset.paused;
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

        const front_images = front.map((src, idx) => <img key={idx} className={'image-'+src} src={require(`../images/postmasters/${src}_sm.jpg`)} data-src={require(`../images/postmasters/${src}.jpg`)} />);

        const back = [];
            for (let num = 0; num < 10; num++) {
                back.push(`back${num}`);
            }

        const back_images = back.map((src, idx) => 
                <img className={'image-'+src} key={idx} 
                    src={require(`../images/postmasters/${src}.jpg`)} />);

        return (

            <div id="Postmasters" className="postmasters releases" style={cursor}>

                <div style={{position:'absolute', width:0, height:0, overflow:'hidden', zIndex:-1, content: 'url('+require('../images/postmasters/back0.jpg')+')'}} />

                <div id="parallax"></div>

                <div id="credits1" className="credits" style={{ backgroundImage: 'url('+require('../images/postmasters/back10.jpg')+')' }}>
                    <PostmastersCredits/>
                </div>

                <div className="vimeo">
                    <iframe id="player" src="https://player.vimeo.com/video/209747767?title=0&byline=0&portrait=0&autoplay=1&background=1" width="640" height="320" frameBorder="0" webkitallowFullScreen mozallowFullScreen allowFullScreen></iframe>
                </div>

                <div id="text">
                    <h1 id="headline">A2/17_ Postmasters release</h1>
                    <p id="description">A2/17_Postmasters collection draws from organic vs digital in- terfaces, repetitive vs improvised structures to go post-language.Key item in screenwear-a jacket;Key item in softwear-an apron;Key item in everywear-a selfone</p>
                </div>

                <div id="front1" className="front">
                    {front_images}
                </div>
                
                <div id="back1" className="back">
                    {back_images}
                </div>

                <div id="credits2" className="credits" style={{ backgroundImage: 'url('+require('../images/postmasters/back10.jpg')+')' }}>
                    <PostmastersCredits/>
                </div>
            
                <canvas id="paperCanvas"></canvas>

            </div>

          );
    }
  
}

export default Postmasters;