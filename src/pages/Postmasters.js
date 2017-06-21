import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

import '../styles/postmasters.css';
import screenPaper from '../images/postmasters/screen.paper.js';

import TypeWriter from '../components/TypeWriter.js';

import Vimeo from '@vimeo/player';
import Browser from 'detect-browser';
import imagesLoaded from 'imagesloaded';

import PostmastersCredits from '../components/PostmastersCredits.js';

var MobileDetect = require('mobile-detect');

class Postmasters extends React.Component {

    constructor(props){
        super(props);
        this.dampen = true

        this.container = null
        this.canvas = null

        var $this = this

        this.loopScroll = function() {

            window.requestAnimationFrame(() => {

                //autoscrollAmt = 0;
                //Loop
                const { scrollTop, scrollHeight, clientHeight } = $this.container;

                // reached top scroll down
                if (scrollTop <= credits1.offsetHeight*0.25 - 1) {
                    $this.container.scrollTop = scrollHeight - (credits1.offsetHeight*0.75) - 2;
                    $this.dampen = false;
                }
                // reached bottom
                else if (scrollTop >= scrollHeight - (credits1.offsetHeight*0.75)) {
                    $this.container.scrollTop = credits1.offsetHeight*0.25 + 2;
                    $this.dampen = false;
                }
                
            })
        }

        this.windowResize = function() {
            
            window.requestAnimationFrame(() => {
                $this.canvas.style.width = window.innerWidth + 'px';
                $this.canvas.style.height = window.innerHeight + 'px';
                $this.canvas.width = window.innerWidth;
                $this.canvas.height = window.innerHeight;
            })
        }
    }

    componentDidMount() {

        this.container = document.querySelector('.c-app__content');

        const $this = this;

        const cursor = 'url('+require('../images/postmasters/cursor.png')+') 15 15, auto'

        const zoom_in = 'url('+require('../images/postmasters/cursor_plus.png')+') 15 15, auto'

        const zoom_out = 'url('+require('../images/postmasters/cursor_minus.png')+') 15 15, auto'

        const pause = 'url('+require('../images/postmasters/cursor_pause.png')+') 10 15, auto'

        const play = 'url('+require('../images/postmasters/cursor_play.png')+') 15 15, auto'

        var md = new MobileDetect(window.navigator.userAgent);
        var mobile = md.phone() || md.tablet();

        const scope = screenPaper('paperCanvas');
        const parallax = document.getElementById('parallax');
        const canvas = document.getElementById('paperCanvas');
        const credits1 = document.getElementById('credits1');
        const front1 = document.getElementById('front1');
        const frontRect = front1.getBoundingClientRect();
        const back1 = document.getElementById('back1');
        const click = document.getElementById('click');

        const player = document.querySelector('#player');
        const vimeo = document.querySelector('.vimeo');
        const iframePlayer = new Vimeo(player);
        var videoVolume = 0.5;

        const postmasters = document.querySelector('#Postmasters');

        vimeo.addEventListener('click', toggleVideo, false);

        var clickTimer = 0;
        var clicker = false;
        var clickInt;

        click.addEventListener('mousedown', function() {
            if(!clicker) {
                clickInt = setInterval(function() {

                    clickTimer++;
                    if(clickTimer > 10) {
                        click.innerHTML = ';]'
                    }

                    if(clickTimer > 20) {
                        click.innerHTML = '';
                    }
                },100);
            }

            if(click.innerHTML === 'Click')
                click.innerHTML = '[&Hold]'
                
            clicker = true;
        });

        document.addEventListener('mouseup', function() {
            clicker = false;
            clearInterval(clickInt);
        });

        videoInit();

        const speed = 1.2;
        

        var zoomed = false;
        
        

        if(mobile) {
            $this.container.className += " mobile";
        }

        var autoscroll = false;
        var autoscrollAmt = isRetina ? 1:1.5;

        this.container.scrollTop = credits1.offsetHeight;

        this.container.addEventListener('scroll', this.loopScroll, false);
        window.addEventListener('resize', this.windowResize, false);

        var scrollPos = this.container.scrollTop;
            
        var lastScrollPos = 0;
        var scrollDamp = 0;

        var parallaxChildren = [];

        var backImagesLoaded = 0;

        imagesLoaded( front1, function( instance ) {            

            if(Browser.name === 'chrome' || Browser.name === 'safari')
                autoscroll = true;

        }).on( 'progress', function( instance, image ) {
        
            image.img.addEventListener('click', zoomer, false);
            image.img.style.cursor = zoom_in;
            loadImg(image.img);
            parallaxChildren.push(image.img);
        });

        imagesLoaded( back1, function( instance ){}).on( 'progress', function( instance, image ) {
            backImagesLoaded++;
            if(backImagesLoaded === 2) {
                TypeWriter("#headline", "true", 120);
            }
        });

        if(!mobile)
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

        function zoomer(event) {
            //var newNode = document.createElement("img");

            if(zoomed === true)
                return false;

            var el = event.target;
            el.removeEventListener('click', zoomer);
            var el_rect = el.getBoundingClientRect();
            var el_w = el.offsetWidth;
            var el_h = el.offsetHeight;
            // newNode.src = el.src;
            // newNode.style.position = 'fixed';
            // newNode.style.height = '80vh';
            // newNode.style.width = 'auto';
            // newNode.style.top = top+'%';
            // newNode.style.left = left+'%';
            // newNode.style.transform = 'translate3d(-50%,-50%,0)';

            var count = 0;

            var dupNode = document.createElement("img");
            var hitArea = document.createElement("div");
            hitArea.classList = ['zoom-hit-area'];

            var all_img = front1.querySelectorAll("img");
            for(var i=0; i<all_img.length; i++) {
                all_img[i].style.cursor = '';
                all_img[i].style.cursor = zoom_out;
            }

            dupNode.style.position = 'fixed';
            dupNode.classList = ['zoom-img'];
            dupNode.src = el.src;
            dupNode.style.top = el_rect.top + 'px';
            dupNode.style.left = el_rect.left + 'px';
            //dupNode.style.width = el_w + 'px';
            dupNode.style.height = el_h + 'px';
            dupNode.style.transform = 'translate3d(0,0,0)';
            postmasters.appendChild(dupNode);
            postmasters.style.cursor = '';
            postmasters.style.cursor = zoom_out;

            setTimeout(function() {
                dupNode.style.height = '95vh';
                //dupNode.style.width = 'auto';
                dupNode.style.top = '2.5%';
                dupNode.style.left = '50%';
                dupNode.style.transform = 'translate3d(-50%,0,0)';
                dupNode.style.marginLeft = count + 'px';
                dupNode.style.marginTop = count + 'px';
                dupNode.style.zIndex = 1500;
                zoomed = true;
                el.style.opacity = 0;

                postmasters.addEventListener('click', function(ev) {
                    if(zoomed === false)
                        return false;
                    ev.preventDefault();
                    var el_rect = el.getBoundingClientRect();
                    dupNode.style.height = el.offsetHeight + 'px';
                    //dupNode.style.width = el.offsetWidth + 'px';
                    dupNode.style.top = el_rect.top + 'px';
                    dupNode.style.left = el_rect.left + 'px';
                    dupNode.style.transform = 'translate3d(0,0,0)';
                    setTimeout(function() {
                        dupNode.remove();
                        el.style.opacity = 1;
                        el.addEventListener('click', zoomer);
                        zoomed = false;
                        postmasters.style.cursor = '';
                        postmasters.style.cursor = cursor;
                        for(var i=0; i<all_img.length; i++) {
                            all_img[i].style.cursor = '';
                            all_img[i].style.cursor = zoom_in;
                        }
                    }, 200);
                });
            }, 20);
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

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        

        function parallaxAnim() {
            
            window.requestAnimationFrame(() => {

                if(!document.getElementById('Postmasters'))
                    return false

                if(autoscroll) {
                    var scroller = $this.container.scrollTop + autoscrollAmt;
                    $this.container.scrollTop = scroller;
                }

                scrollPos = $this.container.scrollTop - credits1.offsetHeight;
                
                scrollDamp += (scrollPos - lastScrollPos) / 10;
                
                if($this.dampen)
                    scrollDamp *= 0.97;
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
                    var scroll = damp;

                    if(isInView(el)) {

                        el.style.transform = 'translate3d(0,'+(round(scroll))+'px,0)'
                        // if(el.style.opacity < 1)
                        //     el.style.opacity = 1
                    } 

                }

                lastScrollPos = scrollPos;

                if($this.dampen === false)
                    $this.dampen = true;

                parallaxAnim();
                    
            });


        }

        function round(num) {
          return Math.round(num * 10) / 10
        }

        function loadImg(el) {
            if(!el.dataset.loaded && el.dataset.src) {
                el.src = el.dataset.src;
                el.dataset.loaded = true;
            }
        }

        function isInView(node) {

            var rect = node.getBoundingClientRect();
            var top = rect.top + rect.bottom;

            return (top > -window.innerHeight*1.5) && (rect.top < window.innerHeight * 1.5);
        }

        function videoInit() {

            iframePlayer.setVolume(0.5);

            vimeo.style.cursor = pause;

            window.videoInt = setInterval(function() {
                window.requestAnimationFrame(() => {

                    var vimeo_rect = vimeo.getBoundingClientRect();
                    var vimeo_top = vimeo_rect.top + vimeo_rect.bottom;

                    if(vimeo_top > 0 && vimeo_rect.top < window.innerHeight && videoVolume < 0.5) {
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
                vimeo.style.cursor = '';
                vimeo.style.cursor = play;
                vimeo.dataset.paused = true;
            } else {
                iframePlayer.play();
                vimeo.style.cursor = '';
                vimeo.style.cursor = pause;
                delete vimeo.dataset.paused;
            }

          }
        
      }


      componentWillUnmount() {
        this.container.removeEventListener('scroll', this.loopScroll, false);
        window.removeEventListener('resize', this.windowResize, false);
        window.clearInterval(window.videoInt);
      }

    render(){

        const cursor = {
            cursor: 'url('+require('../images/postmasters/cursor.png')+') 15 15, auto'
        };

        const front = [];
            for (let num = 0; num < 25; num++) {
                front.push(`front${num}`);
            }

        const front_images = front.map((src, idx) => <img key={idx} className={'image-'+src} src={require(`../images/postmasters/${src}.png`)} data-src={require(`../images/postmasters/${src}.jpg`)} />);

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

                <div id="click">Click</div>

                <div className="vimeo">
                    <iframe id="player" src="https://player.vimeo.com/video/209747767?title=0&byline=0&portrait=0&autoplay=1&background=1" width="640" height="320" frameBorder="0" webkitallowFullScreen mozallowFullScreen allowFullScreen></iframe>
                </div>

                <div id="text">
                    <h1 id="headline">2|17_ Postmasters release</h1>
                    <p id="description">2|17_Postmasters collection draws from organic vs digital in- terfaces, repetitive vs improvised structures to go post-language.Key item in screenwear-a jacket;Key item in softwear-an apron;Key item in everywear-a selfone</p>
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