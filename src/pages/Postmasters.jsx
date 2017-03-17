import React from 'react';
import { findDOMNode } from 'react-dom';

import '../images/postmasters/postmasters.css';
import screenPaper from '../images/postmasters/screen.paper.js';

export class Postmasters extends React.Component {

    componentDidMount() {
            
            var scope = screenPaper('myCanvas');
            var canvas = document.getElementById('myCanvas');
            var front1 = document.getElementById('front1');
            var back1 = document.getElementById('back1');
            var front2 = document.getElementById('front2');
            var back2 = document.getElementById('back2');

            var canvasRect = canvas.getBoundingClientRect();
            canvas.style.left = -canvasRect.left+'px';

            const scrollableContainer = document.getElementById('Postmasters');
        
            scrollableContainer.scrollTop = 1;

            scrollableContainer.addEventListener('scroll', parallaxScroll, false);

            function parallaxScroll() {
                window.requestAnimationFrame(() => {
                    var frontRect1 = front1.getBoundingClientRect();
                    var frontRect2 = front2.getBoundingClientRect();

                    back1.style.left = frontRect1.left+'px';
                    back1.style.transform = 'translate3d(0,'+(Math.round(frontRect1.top/1.5))+'px,0)';

                    back2.style.left = frontRect1.left+'px';
                    back2.style.transform = 'translate3d(0,'+(Math.round(frontRect2.top/1.5))+'px,0)';
                })
            }
        
      }

    render(){

        const cursor = {
            cursor: 'url('+require('../images/postmasters/cursor.png')+') 15 15, auto'
        };

        const front = [];
            for (let num = 0; num < 4; num++) {
                front.push(`front${num}`);
            }

        const front_images = front.map((src, idx) => <img id={'image-'+src} key={idx} src={require(`../images/postmasters/${src}.jpg`)} />);

        const back = [];
            for (let num = 0; num < 1; num++) {
                back.push(`back${num}`);
            }

        const back_images = back.map((src, idx) => <img id={'image-'+src} key={idx} src={require(`../images/postmasters/${src}.jpg`)} />);

        return (

            <div className="postmasters" style={cursor}>

                {/*
                <div id="parallax-scroller" className="parallax">
                  <div className="parallax__group">
                    <div id="back" className="parallax__layer parallax__layer--back">
                      {back_images}
                      {back_images}
                    </div>
                    <div id="front" className="parallax__layer parallax__layer--front">
                      {front_images}
                    </div>
                    <canvas id="myCanvas" resize></canvas>

                  </div>
                </div>
                */}
                

                <div id="front1" className="front">
                    {front_images}
                    {front_images}
                </div>
                
                <div id="back1" className="back">
                    {back_images}
                </div>

                <div id="front2" className="front">
                    {front_images}
                    {front_images}
                </div>
                
                <div id="back2" className="back">
                    {back_images}
                </div>
            
                <canvas id="myCanvas" resize></canvas>

            </div>

          );
    }
  
};