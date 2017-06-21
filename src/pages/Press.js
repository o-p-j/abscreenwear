import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import ParallaxPage from '../components/ParallaxPage'

import '../styles/press.css';

class Press extends ParallaxPage {

    render() {

      const favs = 
            <div>
              <span className="text"><i>H</i><i>a</i><i>r</i><i>p</i><i>e</i><i>r</i><i>s</i><i>B</i><i>a</i><i>z</i><i>a</i><i>a</i><i>r</i></span>
              <span className="text"><i>0</i><i>6</i><i>/</i><i>2</i><i>0</i><i>1</i><i>7</i><i>U</i><i>A</i></span>

              <img className="parallax" style={{ width: '70%', marginLeft: '12%', marginTop: '-8%' }} src={ require('../images/press/press_a_1.jpg') } />


              <span className="text"><i>p</i><i>r</i><i>i</i><i>n</i><i>t</i></span>


              <img className="parallax glow" style={{ width: '80%', marginLeft: '10%', marginTop: '-2%' }} src={ require('../images/press/press_a_2.jpg') } />


              <span className="text"><i>D</i><i>i</i><i>f</i><i>a</i></span>
              <img className="parallax layer-2" style={{ width: '30%', marginLeft: '6%', marginTop: '-2%' }}src={ require('../images/press/press_b_1.jpg') } />
              <span className="text"><i>0</i><i>5</i><i>/</i><i>2</i><i>0</i><i>1</i><i>7</i><i>J</i><i>P</i></span>
              <a href="https://www.difa.me/22514/ab-screenwear-interview" target="_blank" className="text url">
                <b>
                  <i>h</i><i>t</i><i>t</i><i>p</i><i>s</i><i>:</i><i>/</i><i>/</i><i>w</i><i>w</i><i>w</i><i>.</i>
                </b>
                <b>
                  <i>d</i><i>i</i><i>f</i><i>a</i><i>.</i><i>m</i><i>e</i><i>/</i><i>2</i><i>2</i><i>5</i><i>1</i><i>4</i><i>/</i>
                </b>
                <b>
                  <i>a</i><i>b</i><i>-</i><i>s</i><i>c</i><i>r</i><i>e</i><i>e</i><i>n</i><i>w</i><i>e</i><i>a</i><i>r</i><i>-</i>
                </b>
                <b>
                  <i>i</i><i>n</i><i>t</i><i>e</i><i>r</i><i>v</i><i>i</i><i>e</i><i>w</i>
                </b>
              </a>

              <img className="parallax layer-1" style={{ width: '80%', marginLeft: '0', marginTop: '-2%' }}src={ require('../images/press/press_c_1.jpg') } />
              <span className="text" style={{ marginTop: '35%' }}><i>N</i><i>y</i><i>l</i><i>o</i><i>n</i></span>
              <span className="text"><i>0</i><i>4</i><i>/</i><i>2</i><i>0</i><i>1</i><i>7</i><i>U</i><i>S</i></span>
              <a style={{ marginBottom: '30%' }} href="http://www.nylon.com/articles/april-showers-shoot.html" target="_blank" className="text url">

                <b>
                  <i>h</i><i>t</i><i>t</i><i>p</i><i>:</i><i>/</i><i>/</i><i>w</i><i>w</i><i>w</i><i>.</i>
                </b>
                <b>
                  <i>n</i><i>y</i><i>l</i><i>o</i><i>n</i><i>.</i><i>c</i><i>o</i><i>m</i><i>/</i><i>a</i><i>r</i><i>t</i><i>i</i><i>c</i><i>l</i><i>e</i><i>s</i><i>/</i>
                </b>
                <b>
                  <i>a</i><i>p</i><i>r</i><i>i</i><i>l</i><i>-</i><i>s</i><i>h</i><i>o</i><i>w</i><i>e</i><i>r</i><i>s</i><i>-</i>
                </b>
                <b style={{ width: 'auto' }}>
                  <i>shoot.html</i>
                </b>
              </a>

              <video className="layer-2 glow" style={{ width: '40%', marginLeft: '50%', marginTop: '-55%' }} autoPlay loop poster={ require('../images/press/press_c_2.jpg') } >
                <source src={ require('../images/press/press_c_2.mp4') } type="video/mp4" />
              </video>


              <span className="text"><b><i>BURO</i><i style={{ zIndex: '0' }}><img style={{ width: 'auto', height: '0.7em', marginLeft: '-5%' }} src={ require('../images/press/press_d_1.jpg') } /></i><i style={{ marginLeft: '-10%' }}>24/7</i></b></span>
              <span className="text"><i>0</i><i>3</i><i>/</i><i>2</i><i>0</i><i>1</i><i>7</i><i>R</i><i>U</i></span>
              <img className="parallax layer-2" style={{ width: '50%', marginLeft: '10%', marginTop: '0' }} src={ require('../images/press/press_d_2.jpg') } />
              <a href="https://www.buro247.ru/fashion/fashionshows/13-mar-2017-ab-screenwear-aw-2017.html" target="_blank" className="text url">
                <b>
                  <i>h</i><i>t</i><i>t</i><i>p</i><i>s</i><i>:</i><i>/</i><i>/</i><i>w</i><i>w</i><i>w</i><i>.</i>
                </b>
                <b>
                  <i>b</i><i>u</i><i>r</i><i>o</i><i>2</i><i>4</i><i>7</i><i>.</i><i>r</i><i>u</i><i>/</i>
                </b>
                <b>
                  <i>f</i><i>a</i><i>s</i><i>h</i><i>i</i><i>o</i><i>n</i><i>/</i>
                </b>
                <b>
                  <i>f</i><i>a</i><i>s</i><i>h</i><i>i</i><i>o</i><i>n</i><i>-</i><i>s</i><i>h</i><i>o</i><i>w</i><i>s</i><i>/</i>
                </b>
                <b>
                  <i>1</i><i>3</i><i>-</i><i>m</i><i>a</i><i>r</i><i>-</i><i>2</i><i>0</i><i>1</i><i>7</i>
                </b>
                <b>
                  <i>a</i><i>b</i><i>-</i><i>s</i><i>c</i><i>r</i><i>e</i><i>e</i><i>n</i><i>w</i><i>e</i><i>a</i><i>r</i><i>-</i>
                </b>
                <b>
                  <i>a</i><i>w</i><i>-</i><i>2</i><i>0</i><i>1</i><i>7</i><i>.</i><i>h</i><i>t</i><i>m</i><i>l</i>
                </b>
              </a>


              <span className="text start">
                <b>
                  <i>J</i>
                  <img className='parallax' style={{ width: '1.111em', height: '1.6667em', display: 'block', marginTop: '-0.4em' }} src={ require('../images/press/press_e_1.jpg') } />
                  <i>U</i>
                  <img style={{ width: '1.111em', height: '1.6667em', display: 'block', marginTop: '-0.4em' }} src={ require('../images/press/press_e_2.jpg') } />
                  <i>T</i>
                  <img className='parallax' style={{ width: '1.111em', height: '1.6667em', display: 'block', marginTop: '-0.4em' }} src={ require('../images/press/press_e_3.jpg') } />
                  <i>E</i>
                </b>
              </span>
              <span className="text" style={{ marginTop: '-0.3em', zIndex: 9 }}><i>0</i><i>3</i><i>/</i><i>2</i><i>0</i><i>1</i><i>7</i><i>U</i><i>S</i></span>
              <a href="https://www.jutefashion-magazine.com/almost-jute/abscreenwear/" target="_blank" className="text url">
                <b>
                  <i>h</i><i>t</i><i>t</i><i>p</i><i>s</i><i>:</i><i>/</i><i>/</i><i>w</i><i>w</i><i>w</i><i>.</i>
                </b>
                <b style={{ height: '1em' }}>
                  <i>J</i>
                  <img style={{ width: '1.111em', height: '1.6667em', display: 'block', marginTop: '-0.4em' }} src={ require('../images/press/press_e_4.jpg') } />
                  <i>U</i>
                  <img className='parallax' style={{ width: '1.111em', height: '1.6667em', display: 'block', marginTop: '-0.4em' }} src={ require('../images/press/press_e_5.jpg') } />
                  <i>T</i>
                  <img style={{ width: '1.111em', height: '1.6667em', display: 'block', marginTop: '-0.4em' }} src={ require('../images/press/press_e_6.jpg') } />
                  <i>E</i>
                </b>
                <b style={{ zIndex: 9 }}>
                  <i>f</i><i>a</i><i>s</i><i>h</i><i>i</i><i>o</i><i>n</i><i>-</i><i>m</i><i>a</i><i>g</i><i>a</i><i>z</i><i>i</i><i>n</i><i>e</i>
                </b>
                <b>
                  <i>.</i><i>c</i><i>o</i><i>m</i><i>/</i><i>a</i><i>l</i><i>m</i><i>o</i><i>s</i><i>t</i><i>-</i><i>j</i><i>u</i><i>t</i><i>e</i><i>/</i>
                </b>
                <b>
                  <i>a</i><i>b</i><i>s</i><i>c</i><i>r</i><i>e</i><i>e</i><i>n</i><i>w</i><i>e</i><i>a</i><i>r</i><i>/</i>
                </b>
              </a>
              <span className='text'>
                <img className='parallax layer-2' style={{ width: '1.111em', height: '1.6667em', display: 'block', marginTop: '-1.5em', left: '1.25em' }} src={ require('../images/press/press_e_7.jpg') } />
                <img className='layer-2' style={{ position: 'absolute', width: '1.111em', height: '1.6667em', display: 'block', marginTop: '-1.5em', left: '4.25em' }} src={ require('../images/press/press_e_8.jpg') } />
                <img className='parallax layer-2' style={{ width: '1.111em', height: '1.6667em', display: 'block', marginTop: '-1.5em', left: '7.5em' }} src={ require('../images/press/press_e_9.jpg') } />
              </span>


              <span className="text start">
                <i>T</i><i>h</i><i>e</i><i> </i><i>C</i><i>u</i><i>t</i>
              </span>
              <span className="text"><i>0</i><i>2</i><i>/</i><i>2</i><i>0</i><i>1</i><i>7</i><i>U</i><i>S</i></span>
              <img className='parallax layer-1' style={{ width: '35%', marginTop: '1.5em', marginLeft: '40%' }} src={ require('../images/press/press_f_1.jpg') } />

              <a href="http://nymag.com/thecut/2017/02/ab-screenwear-olya-petrova-jackson-interview-nyfw.html" target="_blank" className="text url">
                <b>
                  <i>h</i><i>t</i><i>t</i><i>p</i><i>:</i><i>/</i><i>/</i><i>n</i><i>y</i><i>m</i><i>a</i><i>g</i><i>.</i><i>c</i><i>o</i><i>m</i><i>/</i>
                </b>
                <b>
                  <i>t</i><i>h</i><i>e</i><i>c</i><i>u</i><i>t</i><i>/</i><i>2</i><i>0</i><i>1</i><i>7</i><i>/</i><i>0</i><i>2</i><i>/</i>
                </b>
                <b>
                  <i>a</i><i>b</i><i>-</i><i>s</i><i>c</i><i>r</i><i>e</i><i>e</i><i>n</i><i>w</i><i>e</i><i>a</i><i>r</i><i>-</i>
                </b>
                <b>
                  <i>o</i><i>l</i><i>y</i><i>a</i><i>-</i><i>p</i><i>e</i><i>t</i><i>r</i><i>o</i><i>v</i><i>a</i><i>-</i>
                </b>
                <b>
                  <i>j</i><i>a</i><i>c</i><i>k</i><i>s</i><i>o</i><i>n</i><i>-</i><i>i</i><i>n</i><i>t</i><i>e</i><i>r</i><i>v</i><i>i</i><i>e</i><i>w</i>
                </b>
                <b>
                  <i>-</i><i>n</i><i>y</i><i>f</i><i>w</i><i>.</i><i>h</i><i>t</i><i>m</i><i>l</i>
                </b>
              </a>


              <span className="text start"><i>S</i><i>o</i><i>n</i><i>n</i><i>y</i></span>
              <span className="text"><i>0</i><i>2</i><i>/</i><i>2</i><i>0</i><i>1</i><i>7</i><i>U</i><i>S</i></span>
              <a href="http://www.sonnyphotos.com/2017/02/abscreenwear-new-york-fall-17-fashion-show-new-york-backstage" target="_blank" className="text url">
                <b>
                  <i>h</i><i>t</i><i>t</i><i>p</i><i>:</i><i>/</i><i>/</i><i>w</i><i>w</i><i>w</i><i>.</i>
                </b>
                <b>
                  <i>s</i><i>o</i><i>n</i><i>n</i><i>y</i><i>p</i><i>h</i><i>o</i><i>t</i><i>o</i><i>s</i><i>.</i>
                </b>
                <b>
                  <i>c</i><i>o</i><i>m</i><i>/</i><i>2</i><i>0</i><i>1</i><i>7</i><i>/</i><i>0</i><i>2</i><i>/</i>
                </b>

                <b>
                  <i>a</i><i>b</i><i>s</i><i>c</i><i>r</i><i>e</i><i>e</i><i>n</i><i>w</i><i>e</i><i>a</i><i>r</i><i>-</i>
                </b>

                <img className='parallax layer-2' style={{ width: '40%', marginTop: '3em', marginLeft: '7%' }} src={ require('../images/press/press_g_1.gif') } />
                <b>
                  <i>n</i><i>e</i><i>w</i><i>-</i><i>y</i><i>o</i><i>r</i><i>k</i><i>-</i><i>f</i><i>a</i><i>l</i><i>l</i><i>-</i>
                </b>
                <b>
                  <i>1</i><i>7</i><i>-</i><i>f</i><i>a</i><i>s</i><i>h</i><i>i</i><i>o</i><i>n</i><i>-</i>
                </b>
                <b>
                  <i>s</i><i>h</i><i>o</i><i>w</i><i>-</i><i>n</i><i>e</i><i>w</i><i>-</i>
                </b>
                <b>
                  <i>y</i><i>o</i><i>r</i><i>k</i><i>-</i><i>b</i><i>a</i><i>c</i><i>k</i><i>s</i><i>t</i><i>a</i><i>g</i><i>e</i>
                </b>
              </a>

              <span className="text start"><i>C</i><i>l</i><i>a</i><i>u</i><i>s</i><i>e</i><i>t</i><i>t</i><i>e</i></span>
              <span className="text"><i>0</i><i>2</i><i>/</i><i>2</i><i>0</i><i>1</i><i>7</i><i>F</i><i>R</i></span>
              <a href="https://www.clausette.cc/ab-screenwear/" target="_blank" className="text url">
                <b>
                  <i>h</i><i>t</i><i>t</i><i>p</i><i>s</i><i>:</i><i>/</i><i>/</i><i>w</i><i>w</i><i>w</i><i>.</i>
                </b>
                <b>
                  <i>c</i><i>l</i><i>a</i><i>u</i><i>s</i><i>e</i><i>t</i><i>t</i><i>e</i><i>.</i><i>c</i><i>c</i><i>/</i>
                </b>
                <b>
                  <i>a</i><i>b</i><i>-</i><i>s</i><i>c</i><i>r</i><i>e</i><i>e</i><i>n</i><i>w</i><i>e</i><i>a</i><i>r</i><i>/</i>
                </b>
              </a>
              <img className='parallax layer-1' style={{ width: '90%', marginLeft: '5%', marginTop: '-1.5em' }} src={ require('../images/press/press_h_1.jpg') } />





              <span className="text" style={{ marginTop: '55%' }}><i>G</i><i>l</i><i>i</i><i>t</i><i>t</i><i>y</i></span>
              <img className='parallax layer-1' style={{ width: '60%', right: '0', marginTop: '-0.5em' }} src={ require('../images/press/press_i_1.jpg') } />
              <span className="text"><i>0</i><i>2</i><i>/</i><i>2</i><i>0</i><i>1</i><i>7</i><i>J</i><i>P</i></span>
              <img className='parallax layer-1' style={{ width: '70%', right: '0', marginTop: '0.75em' }} src={ require('../images/press/press_i_2.jpg') } />
              <img className='parallax layer-1' style={{ width: '100%', marginTop: '2.8em' }} src={ require('../images/press/press_i_3.jpg') } />
              <a href="https://www.glitty.jp/2017/02/060781adscreen_fashion.html" target="_blank" className="text url">
                <b>
                  <i>h</i><i>t</i><i>t</i><i>p</i><i>:</i><i>/</i><i>/</i><i>w</i><i>w</i><i>w</i><i>.</i><i>g</i><i>l</i><i>i</i><i>t</i><i>t</i><i>y</i><i>.</i>
                </b>
                <b>
                  <i>j</i><i>p</i><i>/</i><i>2</i><i>0</i><i>1</i><i>7</i><i>/</i><i>0</i><i>2</i><i>/</i>
                </b>
                <b>
                  <i>0</i><i>6</i><i>0</i><i>7</i><i>8</i><i>1</i><i>_</i><i>a</i><i>b</i><i>s</i><i>c</i><i>r</i><i>e</i><i>e</i><i>n</i>
                </b>
                <b style={{ marginTop: '10%' }}>
                  <i>f</i><i>a</i><i>s</i><i>h</i><i>i</i><i>o</i><i>n</i><i>.</i><i>h</i><i>t</i><i>m</i><i>l</i>
                </b>
              </a>


              <img className='parallax layer-1' style={{ marginTop: '10%', width: '100%' }} src={ require('../images/press/press_j_1.jpg') } />
              <div style={{ marginTop: '40%', marginBottom: '20%', 'WebkitMaskImage': '-webkit-gradient(linear, 0 100%, 0 0, from(rgba(0,0,0,1)), to(rgba(0,0,0,0.2)))', 'maskImage': 'gradient(linear, 0 100%, 0 0, from(rgba(0,0,0,1)), to(rgba(0,0,0,0.1)))' }}>
                <span className="text"><i>F</i><i>o</i><i>r</i><i>b</i><i>e</i><i>s</i></span>
                <span className="text"><i>0</i><i>2</i><i>/</i><i>2</i><i>0</i><i>1</i><i>7</i><i>U</i><i>S</i></span>
                
                <a href="https://www.forbes.com/sites/kurtmcvey/2017/02/22/olya-petrova-jacksons-fashion-line-abscreenwear-declares-rgb-the-new-black/#4e6075d441c7" target="_blank" className="text url">
                  <b>
                    <i>h</i><i>t</i><i>t</i><i>p</i><i>s</i><i>:</i><i>/</i><i>/</i><i>w</i><i>w</i><i>w</i><i>.</i>
                  </b>
                  <b>
                    <i>f</i><i>o</i><i>r</i><i>b</i><i>e</i><i>s</i><i>.</i><i>c</i><i>o</i><i>m</i><i>.</i>
                  </b>
                  <b>
                    <i>s</i><i>i</i><i>t</i><i>e</i><i>s</i><i>/</i><i>k</i><i>u</i><i>r</i><i>t</i><i>m</i><i>c</i><i>v</i><i>e</i><i>y</i><i>/</i>
                  </b>
                  <b>
                    <i>2</i><i>0</i><i>1</i><i>7</i><i>/</i><i>0</i><i>2</i><i>/</i><i>2</i><i>2</i><i>/</i><i>o</i><i>l</i><i>y</i><i>a</i><i>-</i>
                  </b>
                  <b>
                    <i>p</i><i>e</i><i>t</i><i>r</i><i>o</i><i>v</i><i>a</i><i>-</i><i>j</i><i>a</i><i>c</i><i>k</i><i>s</i><i>o</i><i>n</i><i>s</i><i>-</i>
                  </b>
                  <b>
                    <i>f</i><i>a</i><i>s</i><i>h</i><i>i</i><i>o</i><i>n</i><i>-</i><i>l</i><i>i</i><i>n</i><i>e</i><i>-</i>
                  </b>
                  <b>
                    <i>a</i><i>b</i><i>s</i><i>c</i><i>r</i><i>e</i><i>e</i><i>n</i><i>w</i><i>e</i><i>a</i><i>r</i><i>-</i>
                  </b>
                  <b>
                    <i>d</i><i>e</i><i>c</i><i>l</i><i>a</i><i>r</i><i>e</i><i>s</i><i>-</i><i>r</i><i>g</i><i>b</i><i>-</i>
                  </b>
                  <b>
                    <i>t</i><i>h</i><i>e</i><i>-</i><i>n</i><i>e</i><i>w</i><i>-</i><i>b</i><i>l</i><i>a</i><i>c</i><i>k</i>
                  </b>
                  <b>
                    <i>/</i><i>{'#'}</i><i>7</i><i>1</i><i>f</i><i>c</i><i>f</i><i>4</i><i>8</i><i>4</i><i>1</i><i>c</i><i>7</i><i>a</i>
                  </b>
                </a>
              </div>


              <img className="parallax layer-2" src={ require('../images/press/press_k_1.jpg') } style={{ height: '2.5em', width: '1.6665em', marginLeft: '1.2em', marginTop: '-0.2em' }} />
              <img className="parallax layer-2" src={ require('../images/press/press_k_4.jpg') } style={{ height: '2.5em', width: '1.6665em', right: '1.2em', marginTop: '-0.2em' }} />

              <span className="text">
                <b>
                  <i>B</i>
                  <img src={ require('../images/press/press_k_2.jpg') } style={{ height: '1em', width: '0.6667em', marginLeft: '2.2em' }} />
                  <i>O</i>
                  <img src={ require('../images/press/press_k_3.jpg') } style={{ height: '1em', width: '0.6667em', marginRight: '2.2em' }} />
                  <i>N</i>
                </b>
              </span>
              <span className="text">
                <b>
                  <i>0</i>
                  <i>2</i>
                  <i>/</i><i>2</i><i>0</i><i>1</i><i>7</i><i>S</i>
                  <i>E</i>
                </b>
              </span>
              <a href="https://bon.se/article/raf-simons-gor-calvin-klein-great-again/" target="_blank" className="text url">
                <b style={{ height: '0.85em' }}>
                  <i>h</i><i>t</i><i>t</i><i>p</i><i>s</i><i>:</i><i>/</i><i>/</i><i>w</i><i>w</i><i>w</i><i>.</i>
                </b>
                <b style={{ height: '0.85em' }}>
                  <i>b</i><i>o</i><i>n</i><i>.</i><i>s</i>
                  <i><img className="" src={ require('../images/press/press_k_5.jpg') } style={{ height: '1em', width: '0.6667em', marginTop: '-0.1em' }} /></i>
                  <i>/</i><i>a</i><i>r</i><i>t</i><i>i</i><i>c</i><i>l</i><i>e</i><i>/</i>
                </b>
                <b style={{ height: '0.85em' }}>
                  <i>r</i><i>a</i><i>f</i><i>s</i><i>i</i><i>m</i><i>o</i><i>n</i><i>s</i><i>-</i><i>g</i>
                  <i><img src={ require('../images/press/press_k_6.jpg') } style={{ height: '1em', width: '0.6667em', marginTop: '-0.1em' }} /></i>
                  <i>r</i><i>-</i>
                </b>
                <b style={{ height: '0.85em' }}>
                  <i>c</i>
                  <i><img src={ require('../images/press/press_k_7.jpg') } style={{ height: '1em', width: '0.6667em', marginTop: '-0.1em' }} /></i>
                  <i>l</i><i>v</i><i>i</i><i>n</i>
                  <i><img className="" src={ require('../images/press/press_k_8.jpg') } style={{ height: '1em', width: '0.6667em', marginTop: '-0.1em' }} /></i>
                  <i>k</i><i>l</i><i>e</i><i>i</i><i>n</i><i>-</i>
                </b>
                <b style={{ height: '0.85em' }}>
                  <i>g</i><i>r</i><i>e</i>
                  <i><img src={ require('../images/press/press_k_9.jpg') } style={{ height: '1em', width: '0.6667em', marginTop: '-0.1em' }} /></i>
                  <i>t</i><i>-</i><i>a</i><i>g</i>
                  <i><img className="" src={ require('../images/press/press_k_10.jpg') } style={{ height: '1em', width: '0.6667em', marginTop: '-0.1em' }} /></i>
                  <i>i</i><i>n</i><i>/</i>
                </b>
              </a>



              <img className="parallax" src={ require('../images/press/press_l_1.jpg') } style={{ width: '100%', marginTop:'5%' }} />


              <span className="text"><i>M</i><i>e</i><i>t</i><i>r</i><i>o</i></span>
              <span className="text"><i>0</i><i>3</i><i>/</i><i>2</i><i>0</i><i>1</i><i>7</i><i>U</i><i>K</i></span>
              <span className="text"><i>p</i><i>r</i><i>i</i><i>n</i><i>t</i></span>

              <img className="parallax" src={ require('../images/press/press_l_2.jpg') } style={{ width: '100%', marginTop:'-1.2em' }} />







              <span className="text start"><i>A</i><i>t</i><i>l</i><i>a</i><i>s</i></span>
              <span className="text"><i>0</i><i>2</i><i>/</i><i>2</i><i>0</i><i>1</i><i>7</i><i>U</i><i>S</i></span>
              <a href="http://theatlasmagazine.com/show-ab-screenwear-fw17/" target="_blank" className="text url">
                <b>
                  <i>h</i><i>t</i><i>t</i><i>p</i><i>:</i><i>/</i><i>/</i><i>t</i><i>h</i><i>e</i>
                </b>
                <b>
                  <i>a</i><i>t</i><i>l</i><i>a</i><i>s</i><i>_</i><i>m</i><i>a</i><i>g</i><i>a</i><i>z</i><i>i</i><i>n</i><i>e</i>
                </b>
                <b>
                  <i>.</i><i>c</i><i>o</i><i>m</i><i>/</i><i>s</i><i>h</i><i>o</i><i>w</i><i>-</i><i>a</i><i>b</i><i>-</i>
                </b>
                <b>
                  <i>s</i><i>c</i><i>r</i><i>e</i><i>e</i><i>n</i><i>w</i><i>e</i><i>a</i><i>r</i><i>-</i><i>f</i><i>w</i><i>1</i><i>7</i><i>/</i>
                </b>
              </a>
              <img className="parallax layer-1" src={ require('../images/press/press_m_1.jpg') } style={{ width: '35%', marginTop:'0', left: '5%' }} />
              <img className="parallax layer-2 glow" src={ require('../images/press/press_m_2.jpg') } style={{ width: '60%', marginTop:'-1.2em', right: '5%' }} />



              <span className="text" style={{ marginTop: '35%' }}><i>B</i><i>u</i><i>r</i><i>o</i> <i>2</i><i>4</i><i>/</i><i>7</i></span>
              <span className="text"><i>0</i><i>1</i><i>/</i><i>2</i><i>0</i><i>1</i><i>7</i><i>R</i><i>U</i></span>
              <a href="https://www.buro247.ru/fashion/fashionshows/novoe-imya-ab-screenwear.html" target="_blank" className="text url">
                <b>
                  <i>h</i><i>t</i><i>t</i><i>p</i><i>s</i><i>:</i><i>/</i><i>/</i><i>w</i><i>w</i><i>w</i><i>.</i><i>b</i><i>u</i><i>r</i><i>o</i><i>2</i><i>4</i><i>7</i>
                </b>
                <b>
                  <i>.</i><i>r</i><i>u</i><i>/</i><i>f</i><i>a</i><i>s</i><i>h</i><i>i</i><i>o</i><i>n</i><i>/</i>
                </b>
                <b>
                  <i>f</i><i>a</i><i>s</i><i>h</i><i>i</i><i>o</i><i>n</i><i>s</i><i>h</i><i>o</i><i>w</i><i>s</i>
                </b>
                <b>
                  <i>/</i><i>n</i><i>o</i><i>v</i><i>o</i><i>e</i><i>-</i><i>i</i><i>m</i><i>y</i><i>a</i><i>-</i>
                </b>
                <b>
                  <i>a</i><i>b</i><i>-</i><i>s</i><i>c</i><i>r</i><i>e</i><i>e</i><i>n</i><i>w</i><i>e</i><i>a</i><i>r</i><i>.</i><i>h</i><i>t</i><i>m</i><i>l</i>
                </b>
              </a>
              <img className="parallax layer-1" src={ require('../images/press/press_n_1.jpg') } style={{ width: '33%', marginTop:'-4em', left: '33%' }} />


              <span className="text start"><i>E</i><i>L</i><i>L</i><i>E</i></span>
              <span className="text"><i>1</i><i>2</i><i>/</i><i>2</i><i>0</i><i>1</i><i>6</i><i>R</i><i>U</i></span>

              <img className="parallax" src={ require('../images/press/press_o_1.jpg') } style={{ width: '100%' }} />


              <span className="text"><i>p</i><i>r</i><i>i</i><i>n</i><i>t</i></span>

              <span className="text start"><i>C</i><i>a</i><i>l</i><i>v</i><i>e</i><i>r</i><i>t</i></span>
              <span className="text"><i>1</i><i>1</i><i>/</i><i>2</i><i>0</i><i>1</i><i>6</i><i>G</i><i>B</i></span>

              <a href="https://www.calvertjournal.com/news/show/7143/check-out-this-contemplative-fashion-film-by-russian-director-nadia-bedzhan" target="_blank" className="text url">
                
                <img src={ require('../images/press/url_calvert_1.jpg') } style={{ height: '0.6em', width: '100%', display: 'block', paddingBottom: '0.2em' }} />
                
                <b>
                  <i>h</i><i>t</i><i>t</i><i>p</i><i>:</i><i>/</i><i>/</i><i>w</i><i>w</i><i>w</i><i>.</i><i>c</i><i>a</i><i>l</i><i>v</i><i>e</i><i>r</i>
                </b>
                <b>
                  <i>t</i><i>j</i><i>o</i><i>u</i><i>r</i><i>n</i><i>a</i><i>l</i><i>.</i><i>c</i><i>o</i><i>m</i><i>/</i>
                </b>
                <b>
                  <i>n</i><i>e</i><i>w</i><i>s</i><i>/</i><i>s</i><i>h</i><i>o</i><i>w</i><i>/</i><i>7</i><i>1</i><i>4</i><i>3</i><i>/</i>
                </b>
                <b>
                  <i><img src={ require('../images/press/url_calvert_2.jpg') } style={{ height: '0.5em', display: 'inline-block', verticalAlign: '10%' }} /></i><i>c</i><i>h</i><i>e</i><i>c</i><i>k</i><i>-</i><i>o</i><i>u</i><i>t</i>
                </b>
                <b>
                  <i>-</i><i>t</i><i>h</i><i>i</i><i>s</i><i>-</i><i>c</i><i>o</i><i>n</i><i>t</i><i>e</i><i>m</i>
                </b>
                <b>
                  <i>p</i><i>l</i><i>a</i><i>t</i><i>i</i><i>v</i><i>e</i><i><img src={ require('../images/press/url_calvert_3.jpg') } style={{ paddingLeft: '1em', paddingRight: '1em', height: '0.5em', display: 'inline-block', verticalAlign: '10%' }} /></i>
                </b>
                <b>
                  <i>f</i><i>a</i><i>s</i><i>h</i><i>i</i><i>o</i><i>n</i><i>-</i><i>f</i><i>i</i><i>l</i><i>m</i><i>-</i><i>b</i><i>y</i><i>-</i>
                </b>
                <b>
                  <i>r</i><i>u</i><i>s</i><i>s</i><i>i</i><i>a</i><i>n</i><i>-</i><i>d</i><i>i</i><i>r</i><i>e</i><i>c</i><i>t</i><i>o</i><i>r</i><i>-</i>
                </b>
                <b>
                  <i>n</i><i>a</i><i>d</i><i>i</i><i>a</i><i>-</i><i>b</i><i>e</i><i>d</i><i>z</i><i>h</i><i>a</i><i>n</i>
                </b>
              </a>


              <span className="text start"><i>M</i><i>e</i><i>t</i><i>a</i><i>l</i></span>
              <span className="text"><i>1</i><i>0</i><i>/</i><i>2</i><i>0</i><i>1</i><i>6</i><i>E</i><i>S</i></span>
              <img className="parallax layer-2 glow" src={ require('../images/press/press_p_1.jpg') } style={{ width: '70%', right: '5%', marginTop:'0.8em', left: '20%' }} />
              <a href="http://metalmagazine.eu/en/post/video/ab-screenwear-juxtaposing-skin-and-screen" target="_blank" className="text url">
                <b>
                  <i>h</i><i>t</i><i>t</i><i>p</i><i>:</i><i>/</i><i>/</i>
                </b>
                <b>
                  <i>m</i><i>e</i><i>t</i><i>a</i><i>l</i><i>m</i><i>a</i><i>g</i><i>a</i><i>z</i><i>i</i><i>n</i><i>e</i><i>.</i>
                </b>
                <b>
                  <i>e</i><i>u</i><i>/</i><i>e</i><i>n</i><i>/</i><i>p</i><i>o</i><i>s</i><i>t</i><i>/</i><i>v</i><i>i</i><i>d</i><i>e</i><i>o</i><i>/</i>
                </b>
                <b>
                  <i>a</i><i>b</i><i>-</i><i>s</i><i>c</i><i>r</i><i>e</i><i>e</i><i>n</i><i>w</i><i>e</i><i>a</i><i>r</i><i>-</i>
                </b>
                <b>
                  <i>j</i><i>u</i><i>x</i><i>t</i><i>a</i><i>p</i><i>o</i><i>s</i><i>i</i><i>n</i><i>g</i><i>-</i>
                </b>
                <b>
                  <i>s</i><i>k</i><i>i</i><i>n</i><i>-</i><i>a</i><i>n</i><i>d</i><i>-</i><i>s</i><i>c</i><i>r</i><i>e</i><i>e</i><i>n</i>
                </b>
              </a>


              <span className="text start"><i>E</i><i>L</i><i>L</i><i>E</i></span>
              <span className="text"><i>1</i><i>0</i><i>/</i><i>2</i><i>0</i><i>1</i><i>6</i><i>R</i><i>U</i></span>


              <img className="parallax" src={ require('../images/press/press_q_1.jpg') } style={{ width: '100%' }} />




              <span className="text"><i>p</i><i>r</i><i>i</i><i>n</i><i>t</i></span>

              <img className="parallax layer-2" src={ require('../images/press/press_r_1.jpg') } style={{ marginTop: '-0.6em', width: '100%', WebkitMaskImage: '-webkit-gradient(linear, 0 40%, 0 0, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))', maskImage: 'gradient(linear, 0 40%, 0 0, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))' }} />
              <span className="text start"><i>N</i><i>a</i><i>r</i><i>g</i><i>i</i><i>s</i></span>
              <span className="text"><i>1</i><i>0</i><i>/</i><i>2</i><i>0</i><i>1</i><i>6</i><i>R</i><i>U</i></span>
              <span className="text"><i>p</i><i>r</i><i>i</i><i>n</i><i>t</i></span>


              <span className="text" style={{ marginTop: '80%' }}><i>K</i><i>o</i><i>m</i><i>m</i><i>e</i><i>r</i><i>s</i><i>a</i><i>n</i><i>t</i><i>S</i><i>t</i><i>y</i><i>l</i><i>e</i></span>
              <span className="text"><i>0</i><i>9</i><i>/</i><i>2</i><i>0</i><i>1</i><i>6</i><i>R</i><i>U</i></span>
              <span className="text"><i>p</i><i>r</i><i>i</i><i>n</i><i>t</i><i>&</i></span>
              <a href="http://kommersant.ru/gallery/3095137#id=1329898" target="_blank" className="text url">
                <b>
                  <i>k</i><i>o</i><i>m</i><i>m</i><i>e</i><i>r</i><i>s</i><i>a</i><i>n</i><i>t</i><i>.</i><i>r</i><i>u</i><i>/</i>
                </b>
                <b>
                  <i>g</i><i>a</i><i>l</i><i>l</i><i>e</i><i>r</i><i>y</i><i>/</i><i>3</i><i>0</i><i>9</i><i>5</i><i>1</i><i>3</i><i>7</i>
                </b>
                <b>
                  <i>#</i><i>i</i><i>d</i><i>=</i><i>1</i><i>3</i><i>2</i><i>9</i><i>8</i><i>9</i><i>8</i>
                </b>
              </a>

              <img className="parallax layer-2" src={ require('../images/press/press_s_1.png') } style={{ width: '70%', marginLeft: '10%', marginTop: '-2em' }} />
              <img className="parallax" src={ require('../images/press/press_s_2.jpg') } style={{ width: '50%', marginLeft: '50%', marginTop: '50%' }} />


              <span className="text"><i>C</i><i>o</i><i>s</i><i>t</i><i>o</i><i>m</i><i>o</i><i>p</i><i>o</i><i>l</i><i>i</i><i>t</i><i>a</i><i>n</i> <i>s</i><i>h</i><i>o</i><i>p</i><i>p</i><i>i</i><i>n</i><i>g</i></span>
              <span className="text"><i>0</i><i>7</i><i>/</i><i>2</i><i>0</i><i>1</i><i>6</i><i>R</i><i>U</i></span>
              <span className="text"><i>p</i><i>r</i><i>i</i><i>n</i><i>t</i></span>

              <img className="parallax glow" src={ require('../images/press/press_t_1.jpg') } style={{ width: '98%', marginLeft: '1%' }} />












              <span className="text start"><i>C</i><i>o</i><i>o</i><i>l</i><i>h</i><i>u</i><i>n</i><i>t</i><i>i</i><i>n</i><i>g</i></span>
              <span className="text"><i>0</i><i>9</i><i>/</i><i>2</i><i>0</i><i>1</i><i>6</i><i>U</i><i>S</i></span>
              <a href="http://www.coolhunting.com/style/abscreenwear-tech-fashion" target="_blank" className="text url">
                <b>
                  <i>h</i><i>t</i><i>t</i><i>p</i><i>:</i><i>/</i><i>/</i><i>w</i><i>w</i><i>w</i><i>.</i>
                </b>
                <b>
                  <i>c</i><i>o</i><i>o</i><i>l</i><i>h</i><i>u</i><i>n</i><i>t</i><i>i</i><i>n</i><i>g</i><i>.</i>
                </b>
                <b>
                  <i>c</i><i>o</i><i>m</i><i>/</i><i>s</i><i>t</i><i>y</i><i>l</i><i>e</i><i>/</i>
                </b>
                <b>
                  <i>a</i><i>b</i><i>s</i><i>c</i><i>r</i><i>e</i><i>e</i><i>n</i><i>w</i><i>e</i><i>a</i><i>r</i><i>-</i>
                </b>
                <b>
                  <i>t</i><i>e</i><i>c</i><i>h</i><i>-</i><i>f</i><i>a</i><i>s</i><i>h</i><i>i</i><i>o</i><i>n</i>
                </b>
              </a>

              <img className="parallax layer-2" src={ require('../images/press/press_u_1.jpg') } style={{ width: '80%', right: '0', marginTop: '-35%' }} />


              <span className="text" style={{ marginTop: '25%' }}><i>L</i><i>a</i><i>d</i><i>y</i><i>g</i><i>u</i><i>n</i><i>n</i></span>
              <img className="parallax layer-2" src={ require('../images/press/press_v_1.jpg') } style={{ marginTop: '-1em', width: '100%', 'WebkitMaskImage': '-webkit-gradient(linear, 0 40%, 0 0, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))', 'maskImage': 'gradient(linear, 0 40%, 0 0, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))' }} />
              <span className="text"><i>1</i><i>0</i><i>/</i><i>2</i><i>0</i><i>1</i><i>5</i><i>U</i><i>S</i></span>
              <a href="http://ladygunn.com/fashion-style/ab-screenwear" target="_blank" className="text url" style={{ paddingBottom: '120%' }}>
                <b><i>h</i><i>t</i><i>t</i><i>p</i><i>:</i><i>/</i><i>/</i><i>l</i><i>a</i><i>d</i><i>y</i><i>g</i><i>u</i><i>n</i><i>n</i><i>.</i>
                </b>
                <b>
                  <i>c</i><i>o</i><i>m</i><i>/</i><i>f</i><i>a</i><i>s</i><i>h</i><i>i</i><i>o</i><i>n</i><i>-</i><i>s</i><i>t</i><i>y</i><i>l</i><i>e</i><i>/</i>
                </b>
                <b>
                  <i>a</i><i>b</i><i>-</i><i>s</i><i>c</i><i>r</i><i>e</i><i>e</i><i>n</i><i>w</i><i>e</i><i>a</i><i>r</i>
                </b>
              </a>



            </div>

        return (
          <div className="press">
    
            {favs}
            {favs}

          </div>
        );
    }
}

export default Press;
