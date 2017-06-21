import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

import '../styles/codes.css';

import ParallaxPage from '../components/ParallaxPage'

class Codes extends ParallaxPage {


    render() {
        const codes = 
            <div>
                <pre style={{ paddingTop: '5%' }}>{'{A}'} stands for<br/>   Assembly version</pre>
                <div className="col-1">
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-a1.gif')+')' }}></span>
                    <pre>A1/ releases<br/>  [Seasonal <br/>     updates]</pre>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-a2.gif')+')' }}></span>
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
    
                    <span className="icon tall" style={{ backgroundImage: 'url('+require('../images/codes/icon-b3.png')+')', backgroundPosition: 'center' }}><svg id="b3-dots" width="80%" height="100%" viewBox="-5 10 80 165" version="1.1">
                        <path fill="none" stroke="#000000" strokeWidth="4" stroke-miterlimit="20" className="path" d="M47.85,164.027 C47.91,162.635 50.6,145.358 50.6,145.358 C51.56,139.793 50.98,132.061 50.7,129.118 C51.21,126.6 52.42,120.476 53.6,113.756 L63.04,112.653 C63.04,112.653 65.09,104.36 65.33,102.108 C65.7,98.504 65.24,95.646 64.83,93.997 C64.99,90.946 65.1,87.268 65.2,83.705 C65.32,79.408 65.44,74.981 65.66,71.73 C65.66,71.73 63.96,55.583 62.59,49.188 C61.84,45.727 61.14,42.458 61.08,40.819 C61.08,40.819 58.35,35.109 55.29,33.822 C52.4,32.603 46.62,30.068 45.82,29.686 L48.2,21 C48.2,21 47.2,12.4 47.2,10.434 C47.2,8.467 42,1.8 40.24,1.2 C38.47,0.6 28.05,0.6 28.05,0.6 L19.6,6.434 L17.2,19.2 L19.96,29.686 C19.16,30.068 13.39,32.603 10.49,33.822 C7.44,35.109 4.7,40.819 4.7,40.819 C4.64,42.458 3.94,45.727 3.2,49.188 C1.82,55.583 0.12,71.73 0.12,71.73 C0.34,74.981 0.47,79.408 0.59,83.705 C0.69,87.268 0.79,90.946 0.95,93.997 C0.55,95.646 0.08,98.504 0.46,102.108 C0.69,104.36 2.74,112.653 2.74,112.653 L12.18,113.756 C13.37,120.476 14.57,126.6 15.08,129.118 C14.8,132.061 14.22,139.793 15.19,145.358 C15.19,145.358 17.87,162.635 17.94,164.027 C17.58,164.548 8.8,171.6 8.8,171.6 L7,182.4 L19,182.2 L32.89,182.4 L47.2,182.9 L58.2,182.2 L56.8,175.068 L47.85,164.027 Z"></path>
                    </svg></span>
                    <pre>b3/ everywear<br/> [Overlays]</pre>
                </div>

                <pre>{'{S}'} stands for<br/>   Screen version</pre>
                <div className="col-2">
                    {/* 
                    <span className="icon icon-s1 icon-gradient">
                        <img src={ require('../images/codes/icon-s1.png') } />
                    </span>
                    */}
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-s1.png')+')' }}></span>
                    <pre>S1/ fullscreen<br/>    [2:1]</pre>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-s2.png')+')' }}></span>
                    <pre>S2/ offscreen<br/>    [1:2]</pre>
                    {/* 
                    <span className="icon icon-s3 icon-gradient">
                        <img src={ require('../images/codes/icon-s3.png') } />
                    </span>
                    */}
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-s3.png')+')' }}></span>
                    <pre>S3/ demiscreen<br/>    [1:1]</pre>
                    <div className="parallax gradient gradient-3"></div>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-s4.png')+')' }}></span>
                    <pre>S4/ overscreen<br/>    [1:4]</pre>
                </div>

                <pre>{'{c}'} stands for<br/>   Content broadcast<br/>                 via</pre>
                <div className="col-2">
                    <span className="icon">
                        <svg width="100%" height="60%" viewBox="-5 -5 110 85" version="1.1">
                            <path className="path-3 dotted" fill="none" stroke="#000000" d="M103.86,25.313 C103.86,25.313 85.85,0.684 52.29,0.684 C18.71,0.684 0.64,25.319 0.64,25.319"></path>
                            <path className="path-3" fill="none" stroke="#000000" d="M85.01,38.441 C85.01,38.441 73.58,24.015 52.27,24.015 C30.96,24.015 19.48,38.448 19.48,38.448"></path>
                            <path className="path-3" fill="none" stroke="#000000" d="M68.39,54.331 C68.39,54.331 62.77,47.143 52.26,47.143 C41.76,47.143 36.1,54.331 36.1,54.331"></path>
                            <path fill="black" stroke="#000000" strokeWidth="4" stroke-miterlimit="20" d="M52.25,72.123 C54.04,72.123 55.49,70.65 55.49,68.833 C55.49,67.016 54.04,65.543 52.25,65.543 C50.46,65.543 49.01,67.016 49.01,68.833 C49.01,70.65 50.46,72.123 52.25,72.123 Z"></path>
                        </svg>
                    </span>
                    <pre>c1/ device<br/>  [Nested]</pre>
                    
                    <span className="icon">
                        <svg width="100%" height="60%" viewBox="-5 -5 110 85" version="1.1">
                            <path className="path-3 blink-3" fill="none" stroke="#000000" d="M103.86,25.313 C103.86,25.313 85.85,0.684 52.29,0.684 C18.71,0.684 0.64,25.319 0.64,25.319"></path>
                            <path className="path-3 blink-2" fill="none" stroke="#000000" d="M85.01,38.441 C85.01,38.441 73.58,24.015 52.27,24.015 C30.96,24.015 19.48,38.448 19.48,38.448"></path>
                            <path className="path-3 blink-1" fill="none" stroke="#000000" d="M68.39,54.331 C68.39,54.331 62.77,47.143 52.26,47.143 C41.76,47.143 36.1,54.331 36.1,54.331"></path>
                            <path fill="black" stroke="#000000" strokeWidth="4" stroke-miterlimit="20" d="M52.25,72.123 C54.04,72.123 55.49,70.65 55.49,68.833 C55.49,67.016 54.04,65.543 52.25,65.543 C50.46,65.543 49.01,67.016 49.01,68.833 C49.01,70.65 50.46,72.123 52.25,72.123 Z"></path>
                        </svg>
                    </span>
                    <pre>c2/ body<br/>  [Native]</pre>
                    
                    <span className="icon">
                        <svg width="100%" height="60%" viewBox="-5 -5 110 85" version="1.1">
                            <path className="path-3 dotted" fill="none" stroke="#000000" d="M103.86,25.313 C103.86,25.313 85.85,0.684 52.29,0.684 C18.71,0.684 0.64,25.319 0.64,25.319"></path>
                            <path className="path-3 dotted reverse" fill="none" stroke="#000000" d="M85.01,38.441 C85.01,38.441 73.58,24.015 52.27,24.015 C30.96,24.015 19.48,38.448 19.48,38.448"></path>
                            <path className="path-3" fill="none" stroke="#000000" d="M68.39,54.331 C68.39,54.331 62.77,47.143 52.26,47.143 C41.76,47.143 36.1,54.331 36.1,54.331"></path>
                            <path fill="black" stroke="#000000" strokeWidth="4" stroke-miterlimit="20" d="M52.25,72.123 C54.04,72.123 55.49,70.65 55.49,68.833 C55.49,67.016 54.04,65.543 52.25,65.543 C50.46,65.543 49.01,67.016 49.01,68.833 C49.01,70.65 50.46,72.123 52.25,72.123 Z"></path>
                        </svg>
                    </span>
                    <pre>c3/ medium<br/>  [Embedded]</pre>

                    <div className="parallax gradient gradient-4"></div>
                </div>

                <pre>{'{r}'} stands for<br/>    Ratio version</pre>
                <div className="col-2">
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-r1.png')+')' }}></span>
                    <pre>r1/ petite<br/>   [Slim fit]</pre>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-r2.png')+')' }}></span>
                    <pre>r2/ oversized<br/>  [Volume x<br/>    structure]</pre>
                    
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-r3.png')+')' }}></span>
                    <pre>r3/ soft<br/>  tailoring<br/>    [Relaxed fit]</pre>
                    <div className="parallax gradient gradient-5"></div>
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-rx.png')+')' }}></span>
                    <pre>rx/ easy<br/>  [Flow<br/>  x stretch]</pre>
                </div>

                <pre>{'{e}'} stands for<br/>Extensions</pre>
                <div className="col-0">
                    <pre><span className="blink-1">></span>  e1/ solid<br/>[One module]</pre>
                    
                    <pre><span className="blink-1">></span><span className="blink-2">></span> e2/ extensions<br/>[Multiple<br/>     modules]</pre>

                    <pre><span className="blink-1">></span><span className="blink-2">></span><span className="blink-3">></span>e3/ upcycling<br/>[Lifetime<br/>  modules]</pre>
                    <div className="parallax gradient gradient-6"></div>

                </div>

                <pre>{'{e}'} stands for<br/>  Exterior specs</pre>
                <div className="col-1">
                    <span className="icon" style={{ backgroundImage: 'none', backgroundPosition: 'top center', height: '100px' }}>
                    <svg width="78px" height="82px" viewBox="0 0 78 82" version="1.1">
                        <path className="path-2" fill="none" stroke="#000000" strokeWidth="4" stroke-miterlimit="20" d="M30.283,78.49 C27.958,78.49 25.762,77.4 24.35,75.54 L5.27,50.35 C2.793,47.08 3.435,42.42 6.714,39.93 C9.998,37.45 14.659,38.1 17.14,41.37 L29.689,57.94 L61.243,7.29 C63.417,3.8 68.006,2.73 71.498,4.9 C74.986,7.07 76.054,11.66 73.88,15.15 L36.601,74.98 C35.309,77.06 33.072,78.37 30.622,78.48 C30.507,78.48 30.397,78.49 30.283,78.49 Z"></path>
                    </svg>
                    </span>
                    <pre>e1/ baseline<br/>   [Ready-to-wear]</pre>
                    <span className="icon icon-e2" style={{ backgroundImage: 'url('+require('../images/codes/icon-e2.png')+')', backgroundPosition: 'top center', height: '100px' }}></span>
                    <pre>e2/ bespoke<br/>   [High sewing]</pre>
                    
                    <span className="icon" style={{ backgroundImage: 'url('+require('../images/codes/icon-e3.gif')+')', backgroundPosition: 'top center', height: '100px' }}></span>
                    <pre>e3/ slow<br/>   [Re-use x<br/>         re-new]</pre>
                    <div className="parallax gradient gradient-7"></div>
                </div>
                <div className="col-0">
                    <pre>also<br/>  Everything<br/>     else, i.e.<br/>Fabric;<br/>content;<br/>   origin;<br/><br/>Sizes:<br/>  S, M, L</pre>
                    
                    <pre><br/><br/>Artisanal patches[<br/>   embroidery;<br/>    letout;<br/>     handwoven]</pre>
                    <div className="parallax gradient gradient-8"></div>
                    
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
