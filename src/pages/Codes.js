import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

import '../styles/codes.css';

const items = [require('../images/Ab_codes.png')];

class Codes extends React.Component {
    componentDidMount() {
        const scrollableContainer = findDOMNode(this);

        scrollableContainer.scrollTop = 1;

        scrollableContainer.addEventListener('scroll', updateScrollPosition, false);

        function updateScrollPosition() {
            window.requestAnimationFrame(() => {
                const { scrollTop, scrollHeight, clientHeight } = scrollableContainer;

                // reached top scroll down
                if (!scrollTop || scrollTop <= 0) {
                    dampen = false;
                    scrollableContainer.scrollTop = scrollHeight / 2 - 1;
                }
                // reached bottom
                else if (scrollTop >= scrollHeight / 2) {
                    dampen = false;
                    scrollableContainer.scrollTop = scrollTop - (scrollHeight / 2);
                }
            });
        }

        var scrollPos = scrollableContainer.scrollTop;

        const speed = 1.5;
        var dampen = true;
            
        var lastScrollPos = 0;
        var scrollDamp = 0;

        var parallaxChildren = document.querySelectorAll(".parallax");

        parallaxAnim();

        function parallaxAnim() {
            
            window.requestAnimationFrame(() => {

                scrollPos = scrollableContainer.scrollTop;
                
                scrollDamp += (scrollPos - lastScrollPos) / 10;
                
                if(dampen)
                    scrollDamp *= 0.98;
                else
                    scrollDamp = 0;

                var scrollH = -(scrollPos) / speed;

                for (var i=0; i < parallaxChildren.length; i++) {

                    var el = parallaxChildren[i];

                    var modifier = 0;

                    if(i % 2 == 0) {
                        var modifier = 0.5;
                    }

                    if(i % 3 == 0) {
                        var modifier = 1.5;
                    }

                    var damp = scrollDamp + scrollDamp * modifier;
                    var scroll = damp;

                    //if(isInView(el)) {

                        el.style.transform = 'translate3d(0,'+(round(scroll))+'px,0)'
                        // if(el.style.opacity < 1)
                        //     el.style.opacity = 1
                    //} 

                }

                lastScrollPos = scrollPos;

                if(dampen === false)
                    dampen = true;

                parallaxAnim();
                    
            });

        }

        function round(num) {
          return Math.round(num * 10) / 10
        }

    }

    render() {
        const codes = 
            <div>
                <pre style={{ paddingTop: '5%' }}>{'{A}'} stands for<br/>   Assembly version</pre>
                <div className="col-1">
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-a1.gif')+')' }}></span>
                    <pre>A1/ releases<br/>  [Seasonal <br/>     updates]</pre>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-a2.png')+')' }}></span>
                    <pre>A2/ drops<br/>  [Whenever]</pre>
                    <span className="icon spin" style={{ backgroundImage: 'url('+require('../images/codes/icon-a3.png')+')' }}></span>
                    <pre>A3/ collabs<br/>  [Art x scene]</pre>
                    <div className="parallax gradient gradient-1"></div>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-a4.gif')+')', height: '90px' }}></span>
                    <pre>A4/ labs<br/>[Research x<br/>   development]</pre>
                </div>

                <pre>{'{b}'} stands for<br/>   Body version</pre>

                <div className="col-1">
                    <span className="icon tall" style={{ backgroundImage: 'url('+require('../images/codes/icon-b1.gif')+')' }}></span>
                    <pre>b1/ screenwear<br/> [Top layers]</pre>
                    <span className="icon tall" style={{ backgroundImage: 'url('+require('../images/codes/icon-b2.gif')+')' }}></span>
                    <pre>b2/ softwear<br/> [Inner layers]</pre>
                    <div className="parallax gradient gradient-2"></div>
    
                    <span className="icon tall" style={{ backgroundImage: 'url('+require('../images/codes/icon-b3.png')+')', backgroundPosition: 'center' }}><svg id="b3-dots" width="80%" height="100%" viewBox="-5 -20 80 165" version="1.1">
                        <path fill="none" stroke="#000000" strokeWidth="4" stroke-miterlimit="20" className="path" d="M18.3236,134.5968 C18.2626,133.2048 15.5746,115.9278 15.5746,115.9278 C14.6116,110.3638 15.1876,102.6308 15.4666,99.6878 C14.9616,97.1698 13.7536,91.0458 12.5676,84.3268 L3.1276,83.2238 C3.1276,83.2238 1.0786,74.9298 0.8426,72.6778 C0.4666,69.0738 0.9326,66.2168 1.3416,64.5668 C1.1796,61.5158 1.0756,57.8388 0.9756,54.2758 C0.8546,49.9778 0.7306,45.5508 0.5086,42.2998 C0.5086,42.2998 2.2066,26.1528 3.5836,19.7578 C4.3286,16.2968 5.0326,13.0288 5.0876,11.3888 C5.0876,11.3888 7.8236,5.6788 10.8806,4.3918 C13.7756,3.1728 19.5496,0.6378 20.3506,0.2558" id="Stroke-1"></path>
                        <path fill="none" stroke="#000000" strokeWidth="4" stroke-miterlimit="20" className="path reverse" d="M48.2353,134.5968 C48.2963,133.2048 50.9843,115.9278 50.9843,115.9278 C51.9473,110.3638 51.3713,102.6308 51.0923,99.6878 C51.5973,97.1698 52.8053,91.0458 53.9913,84.3268 L63.4313,83.2238 C63.4313,83.2238 65.4803,74.9298 65.7163,72.6778 C66.0923,69.0738 65.6263,66.2168 65.2173,64.5668 C65.3793,61.5158 65.4833,57.8388 65.5833,54.2758 C65.7043,49.9778 65.8283,45.5508 66.0503,42.2998 C66.0503,42.2998 64.3523,26.1528 62.9753,19.7578 C62.2303,16.2968 61.5263,13.0288 61.4713,11.3888 C61.4713,11.3888 58.7353,5.6788 55.6783,4.3918 C52.7833,3.1728 47.0093,0.6378 46.2083,0.2558" id="Stroke-3"></path>
                    </svg></span>
                    <pre>b3/ everywear<br/> [Overlays]</pre>
                </div>

                <pre>{'{S}'} stands for<br/>   Screen version</pre>
                <div className="col-2">
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-s1.png')+')' }}></span>
                    <pre>S1/ fullscreen<br/>    [2:1]</pre>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-s2.png')+')' }}></span>
                    <pre>S2/ offscreen<br/>    [1:2]</pre>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-s3.png')+')' }}></span>
                    <pre>S3/ demiscreen<br/>    [1:1]</pre>
                    <div className="parallax gradient gradient-3"></div>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-s4.png')+')' }}></span>
                    <pre>S4/ overscreen<br/>    [1:4]</pre>
                </div>

                <pre>{'{c}'} stands for<br/>   Content broadcast<br/>                 via</pre>
                <div className="col-2">
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-c1.png')+')', backgroundSize: '65%', backgroundPosition: 'top center' }}></span>
                    <pre>c1/ device<br/>  [Nested]</pre>
                    <div className="parallax gradient gradient-4"></div>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-c2.png')+')', backgroundSize: '65%', backgroundPosition: 'top center' }}></span>
                    <pre>c2/ body<br/>  [Native]</pre>
                    
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-c3.png')+')', backgroundSize: '65%', backgroundPosition: 'top center' }}></span>
                    <pre>c3/ medium<br/>  [Embedded]</pre>
                </div>

                <pre>{'{r}'} stands for<br/>    Ratio version</pre>
                <div className="col-2">
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-r1.png')+')' }}></span>
                    <pre>r1/ petite<br/>   [Slim fit]</pre>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-r2.png')+')' }}></span>
                    <pre>r2/ oversized<br/>  [Volume x<br/>    structure]</pre>
                    <div className="parallax gradient gradient-5"></div>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-r3.png')+')' }}></span>
                    <pre>r3/ soft<br/>  tailoring<br/>    [Relaxed fit]</pre>
                    
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-rx.png')+')' }}></span>
                    <pre>rx/ easy<br/>  [Flow<br/>  x stretch]</pre>
                </div>

                <pre>{'{e}'} stands for<br/>Extensions</pre>
                <div className="col-0">
                    <pre>>  e1/ solid<br/>[One module]</pre>
                    <div className="parallax gradient gradient-6"></div>
                    <pre>>> e2/ extensions<br/>[Multiple<br/>     modules]</pre>
                    <pre>>>>e3/ upcycling<br/>[Lifetime<br/>  modules]</pre>

                </div>

                <pre>{'{e}'} stands for<br/>  Exterior specs</pre>
                <div className="col-1">
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-e1.png')+')', backgroundPosition: 'top center', height: '100px' }}></span>
                    <pre>e1/ baseline<br/>   [Ready-to-wear]</pre>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-e2.png')+')', backgroundPosition: 'top center', height: '100px' }}></span>
                    <pre>e2/ bespoke<br/>   [High sewing]</pre>
                    <div className="parallax gradient gradient-7"></div>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-e3.png')+')', backgroundPosition: 'top center', height: '100px' }}></span>
                    <pre>e3/ slow<br/>   [Re-use x<br/>         re-new]</pre>
                </div>
                <div className="col-0">
                    <pre>also<br/>  Everything<br/>     else, i.e.<br/>Fabric;<br/>content;<br/>   origin;<br/><br/>Sizes:<br/>  S, M, L</pre>
                    <div className="parallax gradient gradient-8"></div>
                    <pre><br/><br/>Artisanal patches[<br/>   embroidery;<br/>    letout;<br/>     handwoven]</pre>
                    
                </div>
                <div className="col-0">
                    <pre>{'{N}'} stands for<br/>   Numbers<br/>   numbered edition<br/>   price<br/>   namesake</pre>
                    <div className="parallax gradient gradient-9"></div>

                </div>
            </div>

        return (
            <div className="codes">
                {codes}
                {codes}
            </div>
        );
    }
}

export default Codes;
