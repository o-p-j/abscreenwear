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
                if (!scrollTop) {
                    scrollableContainer.scrollTop = scrollHeight / 2 - 1;
                }
                // reached bottom
                else if (scrollTop >= scrollHeight / 2) {
                    scrollableContainer.scrollTop = scrollTop - (scrollHeight / 2);
                }
            });
        }
    }

    render() {
        const codes = 
            <div>
                <pre>{'{A}'} stands for<br/>   Assembly version</pre>
                <div className="col-1">
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-a1.png')+')' }}></span>
                    <pre>A1/ releases<br/>  [Seasonal <br/>     updates]</pre>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-a2.png')+')' }}></span>
                    <pre>A2/ drops<br/>  [Whenever]</pre>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-a3.png')+')' }}></span>
                    <pre>A3/ collabs<br/>  [Art x scene]</pre>
                    <div className="gradient gradient-1"></div>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-a4.png')+')', height: '90px' }}></span>
                    <pre>A4/ labs<br/>[Research x<br/>   development]</pre>
                </div>

                <pre>{'{b}'} stands for<br/>   Body version</pre>

                <div className="col-1">
                    <span className="icon tall" style={{ backgroundImage: 'url('+require('../images/codes/icon-b1.png')+')' }}></span>
                    <pre>b1/ screenwear<br/> [Top layers]</pre>
                    <span className="icon tall" style={{ backgroundImage: 'url('+require('../images/codes/icon-b2.png')+')' }}></span>
                    <pre>b2/ softwear<br/> [Inner layers]</pre>
                    <div className="gradient gradient-2"></div>
                    <span className="icon tall" style={{ backgroundImage: 'url('+require('../images/codes/icon-b3.png')+')' }}></span>
                    <pre>b3/ everywear<br/> [Overlays]</pre>
                </div>

                <pre>{'{S}'} stands for<br/>   Screen version</pre>
                <div className="col-2">
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-s1.png')+')', backgroundSize: '86% auto', backgroundPosition: '0% 50%' }}></span>
                    <pre>S1/ fullscreen<br/>    [2:1]</pre>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-s2.png')+')', backgroundSize: '81% auto', backgroundPosition: '10% 50%' }}></span>
                    <pre>S2/ offscreen<br/>    [1:2]</pre>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-s3.png')+')', backgroundSize: '86% auto', backgroundPosition: '5% 50%' }}></span>
                    <pre>S3/ demiscreen<br/>    [1:1]</pre>
                    <div className="gradient gradient-3"></div>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-s4.png')+')', marginLeft: '2%', marginRight: '0', width: '25%', height: '180px', backgroundPosition: 'center right' }}></span>
                    <pre>S4/ overscreen<br/>    [1:4]</pre>
                </div>

                <pre>{'{c}'} stands for<br/>   Content broadcast<br/>                 via</pre>
                <div className="col-2">
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-c1.png')+')', backgroundSize: '80%', backgroundPosition: 'top center' }}></span>
                    <pre>c1/ device<br/>  [Nested]</pre>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-c2.png')+')', backgroundSize: '80%', backgroundPosition: 'top center' }}></span>
                    <pre>c2/ body<br/>  [Native]</pre>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-c3.png')+')', backgroundSize: '80%', backgroundPosition: 'top center' }}></span>
                    <pre>c3/ medium<br/>  [Embedded]</pre>
                </div>

                <pre>{'{r}'} stands for<br/>    Ratio version</pre>
                <div className="col-2">
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-r1.png')+')' }}></span>
                    <pre>r1/ petite<br/>   [Slim fit]</pre>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-r2.png')+')', height: '180px' }}></span>
                    <pre>r2/ oversized<br/>  [Volume x<br/>    structure]</pre>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-r3.png')+')', height: '170px' }}></span>
                    <pre>r3/ soft<br/>  tailoring<br/>    [Relaxed fit]</pre>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-r3.png')+')' }}></span>
                    <pre>rx/ easy<br/>  [Flow<br/>  x stretch]</pre>
                </div>

                <pre>{'{e}'} stands for<br/>Extensions</pre>
                <div className="col-1">
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-e1.png')+')' }}></span>
                    <pre>e1/ solid<br/>[One module]</pre>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-e2.png')+')' }}></span>
                    <pre>e2/ extensions<br/>[Multiple<br/>     modules]</pre>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-e3.png')+')' }}></span>
                    <pre>e3/ upcycling<br/>[Lifetime<br/>  modules]</pre>
                </div>

                <pre>{'{e}'} stands for<br/>  Exterior specs</pre>
                <div className="col-0">
                    <pre>>  e1/ baseline<br/>   [Ready-to-wear]</pre>
                    <pre>>> e2/ bespoke<br/>   [High sewing]</pre>
                    <pre>>>>e3/ slow<br/>   [Re-use x<br/>         re-new]</pre>

                    <pre>also<br/>  Everything<br/>     else, i.e.<br/>Fabric;<br/>content;<br/>   origin;<br/><br/>Sizes:<br/>  S, M, L
                    <br/><br/>Artisanal patches[<br/>   embroidery;<br/>    letout;<br/>     handwoven]</pre>
                </div>
                <div className="col-0">
                    <pre>{'{N}'} stands for<br/>   Numbers<br/>   numbered edition<br/>   price<br/>   namesake</pre>
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
