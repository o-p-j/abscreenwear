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
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-a1.png')+')' }}></span>
                    <pre>A1/ releases<br/>  [Seasonal <br/>     updates]</pre>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-a2.png')+')' }}></span>
                    <pre>A2/ drops<br/>  [Whenever]</pre>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-a3.png')+')' }}></span>
                    <pre>A3/ collabs<br/>  [Art x scene]</pre>
                    <div className="parallax gradient gradient-1"></div>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-a4.png')+')', height: '90px' }}></span>
                    <pre>A4/ labs<br/>[Research x<br/>   development]</pre>
                </div>

                <pre>{'{b}'} stands for<br/>   Body version</pre>

                <div className="col-1">
                    <span className="icon tall" style={{ backgroundImage: 'url('+require('../images/codes/icon-b1.png')+')' }}></span>
                    <pre>b1/ screenwear<br/> [Top layers]</pre>
                    <span className="icon tall" style={{ backgroundImage: 'url('+require('../images/codes/icon-b2.png')+')' }}></span>
                    <pre>b2/ softwear<br/> [Inner layers]</pre>
                    <div className="parallax gradient gradient-2"></div>
                    <span className="icon tall" style={{ backgroundImage: 'url('+require('../images/codes/icon-b3.png')+')' }}></span>
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
                    
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-r3.png')+')' }}></span>
                    <pre>rx/ easy<br/>  [Flow<br/>  x stretch]</pre>
                </div>

                <pre>{'{e}'} stands for<br/>Extensions</pre>
                <div className="col-1">
                    <span className="icon tall" style={{ backgroundImage: 'url('+require('../images/codes/icon-e1.png')+')' }}></span>
                    <pre>e1/ solid<br/>[One module]</pre>
                    <div className="parallax gradient gradient-6"></div>
                    <span className="icon tall" style={{ backgroundImage: 'url('+require('../images/codes/icon-e2.png')+')' }}></span>
                    <pre>e2/ extensions<br/>[Multiple<br/>     modules]</pre>
                    
                    <span className="icon tall" style={{ backgroundImage: 'url('+require('../images/codes/icon-e3.png')+')' }}></span>
                    <pre>e3/ upcycling<br/>[Lifetime<br/>  modules]</pre>

                </div>

                <pre>{'{e}'} stands for<br/>  Exterior specs</pre>
                <div className="col-0">
                    <pre>>  e1/ baseline<br/>   [Ready-to-wear]</pre>
                    <pre>>> e2/ bespoke<br/>   [High sewing]</pre>
                    <div className="parallax gradient gradient-7"></div>
                    <pre>>>>e3/ slow<br/>   [Re-use x<br/>         re-new]</pre>

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
