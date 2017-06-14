import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

import Vimeo from '@vimeo/player';

import imagesLoaded from 'imagesloaded';

import '../styles/kahn.css';

var MobileDetect = require('mobile-detect');

class Kahn extends React.Component {

    componentDidMount() {

        const cursor = 'url('+require('../images/kahn/cursor.png')+') 15 15, auto'

        const zoom_in = 'url('+require('../images/kahn/cursor_plus.png')+') 15 15, auto'

        const zoom_out = 'url('+require('../images/kahn/cursor_minus.png')+') 15 15, auto'

        const pause = 'url('+require('../images/postmasters/cursor_pause.png')+') 10 15, auto'

        const play = 'url('+require('../images/postmasters/cursor_play.png')+') 15 15, auto'

        var md = new MobileDetect(window.navigator.userAgent);
        var mobile = md.phone() || md.tablet();


        var scrollPos = 0;
        var scrollDamp = 0;
        var lastScrollPos = 0;
        var time = 0;
        var increase = Math.PI * 4 / 500;
        var wave = 0;

        const speed = 1.2;
        var dampen = true;

        var zoomed = false;

        const player = document.querySelector('#player');
        const vimeo = document.querySelector('.vimeo');
        const iframePlayer = new Vimeo(player);
        var videoVolume = 0.5;

        vimeo.addEventListener('click', toggleVideo, false);

        const kahn = document.querySelector('#Kahn');
        const scrollableContainer = document.querySelector('.c-app__content');
        scrollableContainer.scrollTop = 1;
        scrollableContainer.addEventListener('scroll', loopScroll, false);
        //kahn.addEventListener('scroll', scrollAnim, false);

        if(!mobile) {
            scrollAnim();
        }


        const stacks = [];
        var stack_els = [];
        stacks.push('a_1');
        stacks.push('c_3');
        stacks.push('d_1');
        stacks.push('e_2');
        stacks.push('g_1');
        stacks.push('i_2');
        stacks.push('j_3');
        stacks.push('l_2');
        stacks.push('m_3');
        stacks.push('o_2');
        stacks.push('r_1');
        stacks.push('t_2');
        stacks.push('u_2');
        stacks.push('v_1');
        stacks.push('w_3');

        videoInit();

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function videoInit() {

            iframePlayer.setVolume(0.5);

            vimeo.style.cursor = pause;

            setInterval(function() {
                window.requestAnimationFrame(() => {

                    var vimeo_rect = vimeo.getBoundingClientRect();
                    var vimeo_top = vimeo_rect.top + vimeo_rect.bottom;

                    if(vimeo_top >= 0 && vimeo_rect.top < window.innerHeight && videoVolume <= 0.5) {
                        videoVolume += 0.05;
                        iframePlayer.setVolume(videoVolume);
                    } else if (videoVolume >= 0) {
                        videoVolume -= 0.05;
                        iframePlayer.setVolume(videoVolume);
                    }
                })
            },200);

            resizeVideo();
          }

          window.addEventListener('resize', resizeVideo, false);

          function resizeVideo() {
            var height = vimeo.offsetWidth * 0.5625;
            vimeo.style.height = height + 'px';
            player.style.height = height + 'px';
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

        imagesLoaded( kahn, function( instance ) {

            //All images loaded
            createStacks();

        }).on( 'progress', function( instance, image ) {
          image.img.src = image.img.dataset.src;

          image.img.addEventListener('click', zoomer, false);
          image.img.style.cursor = '';
          image.img.style.cursor = zoom_in;
        });

        var windowResizeTimeout;
        window.addEventListener('resize', function() {
            windowResizeTimeout = setTimeout(rebuildStacks, 300);
        }, false);

        function rebuildStacks() {
            var all_stacks = document.querySelectorAll('.stack');

            [].forEach.call(all_stacks, function(item) {

              kahn.removeChild(item);
            });
            stack_els = [];
            createStacks();

            clearTimeout(windowResizeTimeout);
        }

        function createStacks() {
            for (var n=0; n<stacks.length; n++) {
                var parentNode = document.querySelector('.image-'+stacks[n]);
                if (!parentNode) return;

                var img = parentNode.dataset.src;
                parentNode.style.zIndex = 1000;
                var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
                var left = plusOrMinus;
                if(parentNode.offsetLeft > kahn.offsetWidth / 2) {
                    left = 1;
                } else if (parentNode.offsetLeft < 100) {
                    left = -1;
                }

                var r = getRandomInt(5, 18);

                for(var i=0;i<r;i++) {
                    var newNode = document.createElement("div");
                    newNode.classList = ['stack'];
                    newNode.dataset.index = i;
                    newNode.style.position = 'absolute';
                    newNode.style.zIndex = 900 - i;
                    newNode.style.left = parentNode.offsetLeft - (left * (1 + i)) + 'px';
                    var styles = window.getComputedStyle(parentNode);
                    newNode.style.top = parentNode.offsetTop + parseFloat(styles['paddingTop']) - (plusOrMinus * (1 + i)) + 'px';
                    newNode.style.width = parentNode.width + 'px';
                    newNode.style.height = parentNode.height + 'px';
                    newNode.style.backgroundImage = 'url('+ img +')';
                    newNode.style.backgroundSize = 100 + (Math.random()*50) + '%';

                    kahn.appendChild(newNode);
                }

                var all_stacks = document.querySelectorAll('.stack');

                [].forEach.call(all_stacks, function(item) {
                  stack_els.push(item);
                });

            }
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

            var all_img = kahn.querySelectorAll("img");
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
            kahn.appendChild(dupNode);
            kahn.style.cursor = '';
            kahn.style.cursor = zoom_out;

            setTimeout(function() {
                dupNode.style.height = '95vh';
                //dupNode.style.width = 'auto';
                dupNode.style.top = '2.5%';
                var left = getRandomInt(25, 50);

                dupNode.style.left = '50%';
                dupNode.style.transform = 'translate3d(-50%,0,0)';
                dupNode.style.marginLeft = count + 'px';
                dupNode.style.marginTop = count + 'px';
                dupNode.style.zIndex = 1500;
                zoomed = true;
                el.style.opacity = 0;

                kahn.addEventListener('click', function(ev) {
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
                        kahn.style.cursor = '';
                        kahn.style.cursor = cursor;
                        for(var i=0; i<all_img.length; i++) {
                            all_img[i].style.cursor = '';
                            all_img[i].style.cursor = zoom_in;
                        }
                    }, 200);
                });
            }, 20);
        }

        function loopScroll() {
            window.requestAnimationFrame(() => {
                const { scrollTop, scrollHeight, clientHeight } = scrollableContainer;

                // reached top scroll down
                if (!scrollTop || scrollTop <= 0) {
                    scrollableContainer.scrollTop = scrollHeight / 2 - 1;
                    dampen = false;
                }
                // reached bottom
                else if (scrollTop >= scrollHeight / 2) {
                    scrollableContainer.scrollTop = scrollTop - (scrollHeight / 2);
                    dampen = false;
                }
            })
        }

        function scrollAnim() {



            window.requestAnimationFrame(() => {

                time += increase;

                scrollPos = scrollableContainer.scrollTop;

                scrollDamp += (scrollPos - lastScrollPos) / 15;

                if(dampen)
                    //scrollDamp = Math.sin(scrollDamp/15) * Math.cos(Math.PI) + scrollDamp * 0.975;
                    scrollDamp *= 0.98;
                else
                    scrollDamp = 0;

                var scrollH = -(scrollPos) / speed;

                for (var i=0; i < stack_els.length; i++) {

                    var el = stack_els[i];

                    if(isInView(el)) {
                        var modifier = (el.dataset.index + 5) / 15;

                        wave = Math.sin( time + modifier );

                        var damp = scrollDamp * modifier - scrollDamp;
                        var damp_x = scrollDamp * (modifier * wave);

                        el.style.transform = 'translate3d('+ (round(damp_x/10)) +'px,'+(round(damp/2))+'px,0)'
                    }


                }

                lastScrollPos = scrollPos;

                if(dampen === false)
                    dampen = true;

                scrollAnim();

            });


        }

        function round(num) {
          return Math.round(num * 10) / 10
        }

        function isInView(node) {

            var rect = node.getBoundingClientRect();
            var top = rect.top + rect.bottom;

            return (top > -window.innerHeight*1.5) && (rect.top < window.innerHeight * 1.5);
        }


    }

    render(){

        const cursor = {
            cursor: 'url('+require('../images/kahn/cursor.png')+') 15 15, auto'
        };

        const images = [];
        images.push('a_1');
        images.push('a_2');
        images.push('a_3');
        images.push('b_1');
        images.push('b_2');
        images.push('b_3');
        images.push('c_1');
        images.push('c_2');
        images.push('c_3');
        images.push('d_1');
        images.push('d_2');
        images.push('d_3');
        images.push('e_1');
        images.push('e_2');
        images.push('e_3');
        images.push('f_1');
        images.push('f_2');
        images.push('f_3');
        images.push('g_1');
        images.push('g_2');
        images.push('g_3');
        images.push('h_1');
        images.push('i_1');
        images.push('i_2');
        images.push('i_3');
        images.push('j_1');
        images.push('j_2');
        images.push('j_3');
        images.push('k_1');
        images.push('k_2');
        images.push('k_3');
        images.push('l_1');
        images.push('l_2');
        images.push('l_3');
        images.push('m_1');
        images.push('m_2');
        images.push('m_3');
        images.push('n_1');
        images.push('n_2');
        images.push('n_3');
        images.push('o_1');
        images.push('o_2');
        images.push('o_3');
        images.push('p_1');
        images.push('q_1');
        images.push('q_2');
        images.push('q_3');
        images.push('r_1');
        images.push('r_2');
        images.push('r_3');
        images.push('s_1');
        images.push('s_2');
        images.push('s_3');
        images.push('t_1');
        images.push('t_2');
        images.push('t_3');
        images.push('u_1');
        images.push('u_2');
        images.push('u_3');
        images.push('v_1');
        images.push('v_2');
        images.push('v_3');
        images.push('w_1');
        images.push('w_2');
        images.push('w_3');
        images.push('x_1');

        const text1 = "A1/17_Kahn\nb1.1/b2.1/2/3\nWomen’s seasonal update; collection of screenwear {b1}  and softwear {b2};\nLouis Kahn’s back-to-the-basics approach and concrete backdrop for screenwear as new utility;girls swaying together in a state of electronic tranquility;\nw/out a mouth, \n w/out a voice;\nphysicality of the internet; lag between gesture and action; the everyday intimacy as we see it through"
        const text2 = "Text;moving image;post/language - where/ how to wear,emb-\nrace;heart; sleeve, screen,skin;new codes - of making; of  wearing;of intimacy;screenwear screen\n w e a r e s c r e e n w e a r e s c r e e n w e a r s c r e e n wearescreenwearescreenwe a r e a b s c r e e n wear"
        const text3 = "We are a fashion label and lab interested in shifting forms of communication/dressing as our bodies are extended by machines;\n\nLayers;overlays;augmentation;screens and skin as an interface; technology as an accessory;an aperture; \nan appendage;     \n\nVestimentary \nmedia; experiments;speculative futurism; s c r e e n  \nw   e   a   r"

        const about = <div className="about"><pre>{text1}</pre><pre>{text2}</pre><pre>{text3}</pre></div>

        const all_images = images.map((src, idx) => <img key={idx} className={'image-'+src} src={require(`../images/kahn/${src}.png`)} data-src={require(`../images/kahn/${src}.jpg`)} />);

        const link1 = <a href="#">@jeniafilatova</a>

        const credits_text = "photography\n    "+{link1}+"\n\n    starring\n        @raniyamordanova\n                @thebabybabushka\n\nmakeup/hair\n    @harkoff_makeup\n\n        web\n        @andrevvm\n\n        creative production\n       @sputniksupervision\n\n@abscreenwear"

        const credits = <div className='credits'><pre>{credits_text}</pre></div>

        return (

            <div id="Kahn" className="kahn releases" style={cursor}>

                {about}

                <div className="vimeo">
                    <iframe id="player" src="https://player.vimeo.com/video/184070481?title=0&byline=0&portrait=0&autoplay=1&background=1" width="640" height="320" frameBorder="0" webkitallowFullScreen mozallowFullScreen allowFullScreen></iframe>
                </div>

                {all_images}
                    <div className='credits'>
<pre>photography
<br/>   <a target="_blank" href="http://instagram.com/jeniafilatova">@jeniafilatova</a>
<br/><br/>video
<br/>   <a href="https://www.instagram.com/bedj" target="_blank">@bedj</a>
<br/><br/>   starring
<br/>       <a target="_blank" href="http://instagram.com/raniyamordanova">@raniyamordanova</a>
<br/>            <a target="_blank" href="http://instagram.com/thebabybabushka">@thebabybabushka</a>

<br/><br/>makeup/hair
<br/>    <a target="_blank" href="http://instagram.com/harkoff_makeup">@harkoff_makeup</a>
<br/><br/>        web
<br/>        <a target="_blank" href="http://instagram.com/andrevvm">@andrevvm</a>
<br/><br/>        creative production
<br/>        <a target="_blank" href="http://instagram.com/sputniksupervision">@sputniksupervision</a>
<br/><br/>
<a target="_blank" href="http://instagram.com/abscreenwear">@abscreenwear</a>
</pre>
                    </div>


                {about}
                {all_images}

            </div>

          );
    }

}

export default Kahn;
