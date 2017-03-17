import React from 'react';

import '../images/postmasters/postmasters.css';
import screenPaper from '../images/postmasters/screen.paper.js';

export class Postmasters extends React.Component {

    componentDidMount() {
            
            var scope = screenPaper('myCanvas');
            var canvas = document.getElementById('myCanvas');
            var front = document.getElementById('front');

            window.requestAnimationFrame = window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (f) {
              setTimeout(f, 1000 / 60);
            }

            var canvasRect = canvas.getBoundingClientRect();
            canvas.style.left = -canvasRect.left+'px';

            anim();

            function anim() {
              var frontRect = front.getBoundingClientRect();
              canvas.style.transform = 'translate3d(0,'+(-frontRect.top)+'px,0)';
              
              window.requestAnimationFrame(function() {
                  anim();
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

        const front_images = front.concat(front).map((src, idx) => <img id={src} key={idx} src={require(`../images/postmasters/${src}.jpg`)} />);

        const back = [];
            for (let num = 0; num < 1; num++) {
                back.push(`back${num}`);
            }

        const back_images = back.concat(back).map((src, idx) => <img id={src} key={idx} src={require(`../images/postmasters/${src}.jpg`)} />);

        return (

            <div id="Postmasters" className="postmasters" style={cursor}>

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
                
                {/*
                <div id="front">
                    {front_images}
                </div>
                
                <div id="back">
                    {back_images}
                </div>

                */}
            
                

            </div>

          );
    }
  
};