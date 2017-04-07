import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

import imagesLoaded from 'imagesloaded';

import '../images/kahn/kahn.css';

class Kahn extends React.Component {

    componentDidMount() {

        const cursor = 'url('+require('../images/kahn/cursor.png')+') 15 15, auto'

        const zoom_in = 'url('+require('../images/kahn/cursor_plus.png')+') 15 15, auto'

        const zoom_out = 'url('+require('../images/kahn/cursor_minus.png')+') 15 15, auto'


        var scrollPos = 0;
        var scrollDamp = 0;
        var lastScrollPos = 0;
        var time = 0;
        var increase = Math.PI * 4 / 500;
        var wave = 0;

        const speed = 1.2;
        var dampen = true;

        var zoomed = false;

        const kahn = document.querySelector('#Kahn');
        kahn.scrollTop = 1;
        kahn.addEventListener('scroll', loopScroll, false);
        //kahn.addEventListener('scroll', scrollAnim, false);

        scrollAnim();

        const stacks = [];
        var stack_els = [];
        stacks.push('c_3');
        stacks.push('d_1');
        stacks.push('e_2');
        stacks.push('j_3');
        stacks.push('l_2');
        stacks.push('m_3');
        stacks.push('o_2');
        stacks.push('t_2');
        stacks.push('u_2');
        stacks.push('v_1');
        stacks.push('w_3');

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        imagesLoaded( kahn, function( instance ) {
            for(var n=0; n<stacks.length; n++) {
                var parentNode = document.querySelector('.image-'+stacks[n]);
                var img = parentNode.dataset.src;
                parentNode.style.zIndex = 1000;
                var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
                var left = plusOrMinus;
                if(parentNode.offsetLeft > kahn.offsetWidth / 2) {
                    left = 1;
                } else if (parentNode.offsetLeft < 100) {
                    left = -1;
                }

                var r = getRandomInt(5, 25);

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
        }).on( 'progress', function( instance, image ) {
          image.img.src = image.img.dataset.src;

          image.img.addEventListener('click', zoom, false);
          image.img.style.cursor = zoom_in;
        });

        function zoom(event) {
            //var newNode = document.createElement("img");

            if(zoomed === true)
                return false;

            var el = event.target;
            el.removeEventListener('click', zoom);
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

            el.style.opacity = 0;

            var all_img = kahn.querySelectorAll("img");
            for(var i=0; i<all_img.length; i++) {
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
            kahn.style.cursor = zoom_out;

            setTimeout(function() {
                dupNode.style.height = '95vh';
                //dupNode.style.width = 'auto';
                dupNode.style.top = '50%';
                dupNode.style.left = '50%';
                dupNode.style.transform = 'translate3d(-50%,-50%,0)';
                dupNode.style.marginLeft = count + 'px';
                dupNode.style.marginTop = count + 'px';
                dupNode.style.zIndex = 1500;
                zoomed = true;

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
                        el.addEventListener('click', zoom);
                        zoomed = false;
                        kahn.style.cursor = cursor;
                        for(var i=0; i<all_img.length; i++) {
                            all_img[i].style.cursor = zoom_in;
                        }
                    }, 200);
                });
            }, 20);
        }

        function loopScroll() {
            window.requestAnimationFrame(() => {
                const { scrollTop, scrollHeight, clientHeight } = kahn;

                // reached top scroll down
                if (!scrollTop || scrollTop <= 0) {
                    kahn.scrollTop = scrollHeight / 2 - 1;
                    dampen = false;
                }
                // reached bottom
                else if (scrollTop >= scrollHeight / 2) {
                    kahn.scrollTop = scrollTop - (scrollHeight / 2);
                    dampen = false;
                }
            })
        }

        function scrollAnim() {


            
            window.requestAnimationFrame(() => {

                time += increase;
                
                scrollPos = kahn.scrollTop;
                
                scrollDamp += (scrollPos - lastScrollPos) / 20;
                
                if(dampen)
                    //scrollDamp = Math.sin(scrollDamp/15) * Math.cos(Math.PI) + scrollDamp * 0.975;
                    scrollDamp *= 0.98;
                else
                    scrollDamp = 0;

                var scrollH = -(scrollPos) / speed;

                for (var i=0; i < stack_els.length; i++) {

                    var el = stack_els[i];

                    var modifier = (el.dataset.index + 5) / 15;

                    wave = Math.sin( time + modifier );

                    var damp = scrollDamp * modifier - scrollDamp;
                    var damp_x = scrollDamp * (modifier * wave);

                    el.style.transform = 'translate3d('+ (round(damp_x/10)) +'px,'+(round(damp/2))+'px,0)'

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

        const all_images = images.concat(images).map((src, idx) => <img key={idx} className={'image-'+src} src={require(`../images/kahn/${src}.gif`)} data-src={require(`../images/kahn/${src}.jpg`)} />);

        return (

            <div id="Kahn" className="kahn releases" style={cursor}>

                {all_images}

            </div>

          );
    }
  
}

export default Kahn;