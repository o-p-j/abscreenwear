import React, { PropTypes } from 'react';
import ParallaxPage from '../components/ParallaxPage'

import '../styles/labs.css';

class Labs extends ParallaxPage {

    render() {

      const labs = <div>

                    <a href="https://en.wikipedia.org/wiki/Flexible_display" target="_blank">
                      <b><i>h</i><i>t</i><i>t</i><i>p</i><i>s</i><i>:</i><i>/</i><i>/</i><i>e</i><i>n</i><i>.</i><i>w</i><i>i</i><i>k</i><i>i</i><i>-</i></b>
                       <b><i>p</i><i>e</i><i>d</i><i>i</i><i>a</i><i>.</i><i>o</i><i>r</i><i>g</i><i>/</i><i>w</i><i>i</i><i>k</i><i>i</i><i>/</i></b>
                      <b><i>F</i><i>l</i><i>e</i><i>x</i><i>i</i><i>b</i><i>l</i><i>e</i><i>_</i><i>d</i><i>i</i><i>s</i><i>p</i><i>l</i><i>a</i><i>y</i></b>
                      <img className="parallax layer-2 glow-2" style={{ width: '30%', marginLeft: '40%', marginTop: '10px' }} src={ require('../images/labs/labs_a_1.jpg') } />
                    </a>

                    <img className="parallax layer-1 no-glow" style={{ width: '90%', marginLeft: '5%', marginTop: '-1em' }} src={ require('../images/labs/labs_a_2.jpg') } />

                    <a href="http://web.mit.edu/allanmc/www/mcluhan.mediummessage.pdf" target="_blank">
                      <b><i>h</i><i>t</i><i>t</i><i>p</i><i>:</i><i>/</i><i>/</i><i>w</i><i>e</i><i>b</i><i>.</i><i>m</i><i>i</i><i>t</i><i>.</i><i>e</i><i>d</i><i>u</i><i>/</i></b>
                      <b><i>a</i><i>l</i><i>l</i><i>a</i><i>n</i><i>m</i><i>c</i><i>/</i><i>w</i><i>w</i><i>w</i><i>/</i><i>m</i><i>c</i><i>l</i><i>u</i><i>h</i><i>a</i><i>n</i><i>.</i></b>
                      <b><i>m</i><i>e</i><i>d</i><i>i</i><i>u</i><i>m</i><i>m</i><i>e</i><i>s</i><i>s</i><i>a</i><i>g</i><i>e</i><i>.</i><i>p</i><i>d</i><i>f</i></b>
                      <img className="parallax layer-2 glow-3" style={{ width: '40%', marginLeft: '50%', marginTop: '0' }} src={ require('../images/labs/labs_b_1.jpg') } />
                      <img className="parallax layer-2 glow-2" style={{ width: '27%', marginLeft: '0', marginTop: '3.5em' }} src={ require('../images/labs/labs_b_2.jpg') } />
                    </a>

                    <a href="http://www.prnewswire.com/news-releases/flexible-display-market-to-reach-151-billion-by-2022---driven-by-rising-demand-for-smartphones-smartwatches-wearables-televisions-pc-monitors--laptops---research-and-markets-300471772.html" target="_blank">
                      <b><i>h</i><i>t</i><i>t</i><i>p</i><i>:</i><i>/</i><i>/</i><i>w</i><i>w</i><i>w</i><i>.</i><i>p</i><i>r</i><i>n</i><i>e</i><i>w</i><i>s</i><i>-</i></b>
                      <b><i>w</i><i>i</i><i>r</i><i>e</i><i>.</i><i>c</i><i>o</i><i>m</i><i>/</i><i>n</i><i>e</i><i>w</i><i>s</i><i>-</i><i>r</i><i>e</i><i>-</i></b>
                      <b><i>l</i><i>e</i><i>a</i><i>s</i><i>e</i><i>s</i><i>/</i><i>f</i><i>l</i><i>e</i><i>x</i><i>i</i><i>b</i><i>l</i><i>e</i><i>-</i><i>d</i><i>i</i><i>s</i><i>-</i></b>
                      <b><i>p</i><i>l</i><i>a</i><i>y</i><i>-</i><i>m</i><i>a</i><i>r</i><i>k</i><i>e</i><i>t</i><i>-</i><i>t</i><i>o</i><i>-</i></b>
                      <b><i>r</i><i>e</i><i>a</i><i>c</i><i>h</i><i>-</i><i>1</i><i>5</i><i>1</i><i>-</i><i>b</i><i>i</i><i>l</i><i>l</i><i>i</i><i>o</i><i>n</i><i>-</i></b>
                      <b><i>b</i><i>y</i><i>-</i><i>2</i><i>0</i><i>2</i><i>2</i><i>-</i><i>-</i><i>-</i><i>d</i><i>r</i><i>i</i><i>v</i><i>e</i><i>n</i><i>-</i><i>b</i><i>y</i><i>-</i></b>
                      <b><i>r</i><i>i</i><i>s</i><i>i</i><i>n</i><i>g</i><i>-</i><i>d</i><i>e</i><i>m</i><i>a</i><i>n</i><i>d</i><i>-</i><i>f</i><i>o</i><i>r</i><i>-</i></b>
                      <b><i>s</i><i>m</i><i>a</i><i>r</i><i>t</i><i>p</i><i>h</i><i>o</i><i>n</i><i>e</i><i>s</i><i>-</i><i>s</i><i>m</i><i>a</i><i>r</i><i>t</i></b>
                      <b><i>w</i><i>a</i><i>t</i><i>c</i><i>h</i><i>e</i><i>s</i><i>-</i><i>w</i><i>e</i><i>a</i><i>r</i><i>a</i><i>b</i><i>l</i><i>e</i><i>s</i><i>-</i></b>
                      <b><i>t</i><i>e</i><i>l</i><i>e</i><i>v</i><i>i</i><i>s</i><i>i</i><i>o</i><i>n</i><i>s</i><i>-</i><i>p</i><i>c</i><i>-</i><i>m</i><i>o</i><i>n</i></b>
                      <b><i>i</i><i>t</i><i>o</i><i>r</i><i>s</i><i>-</i><i>-</i><i>l</i><i>a</i><i>p</i><i>t</i><i>o</i><i>p</i><i>s</i><i>-</i><i>-</i><i>-</i></b>
                      <b><i>r</i><i>e</i><i>s</i><i>e</i><i>a</i><i>r</i><i>c</i><i>h</i><i>-</i><i>a</i><i>n</i><i>d</i><i>-</i><i>m</i><i>a</i><i>r</i><i>k</i><i>-</i></b>
                      <b><i>e</i><i>t</i><i>s</i><i>-</i><i>3</i><i>0</i><i>0</i><i>4</i><i>7</i><i>1</i><i>7</i><i>7</i><i>2</i><i>.</i><i>h</i><i>t</i><i>m</i><i>l</i></b>
                      <img className="parallax layer-1 no-glow" style={{ width: '98%', marginLeft: '1%', marginTop: '5em' }} src={ require('../images/labs/labs_c_1.jpg') } />
                    </a>

                    <a href="http://www.pocket-lint.com/news/141424-lg-rolls-out-the-world-s-first-77-inch-flexible-oled-display" target="_blank">
                      <b><i>h</i><i>t</i><i>t</i><i>p</i><i>:</i><i>/</i><i>/</i><i>w</i><i>w</i><i>w</i><i>.</i><i>p</i><i>o</i><i>c</i><i>k</i><i>e</i><i>t</i><i>-</i><i>l</i><i>i</i><i>n</i><i>t</i><i>.</i></b>
                      <b><i>c</i><i>o</i><i>m</i><i>/</i><i>n</i><i>e</i><i>w</i><i>s</i><i>/</i><i>1</i><i>4</i><i>1</i><i>4</i><i>2</i><i>4</i><i>-</i><i>l</i><i>g</i><i>-</i></b>
                      <b><i>r</i><i>o</i><i>l</i><i>l</i><i>s</i><i>-</i><i>o</i><i>u</i><i>t</i><i>-</i><i>t</i><i>h</i><i>e</i><i>-</i><i>w</i><i>o</i><i>r</i><i>l</i><i>d</i><i>-</i></b>
                      <b><i>s</i><i>-</i><i>f</i><i>i</i><i>r</i><i>s</i><i>t</i><i>-</i><i>7</i><i>7</i><i>-</i><i>i</i><i>n</i><i>c</i><i>h</i><i>-</i><i>f</i><i>l</i><i>e</i><i>x</i><i>-</i></b>
                      <b><i>i</i><i>b</i><i>l</i><i>e</i><i>-</i><i>o</i><i>l</i><i>e</i><i>d</i><i>-</i><i>d</i><i>i</i><i>s</i><i>p</i><i>l</i><i>a</i><i>y</i></b>
                      <img className="parallax layer-2 glow-2" style={{ width: '25%', right: '0', marginTop: '-0.5em' }} src={ require('../images/labs/labs_d_1.jpg') } />
                    </a>

                    <a href="https://www.youtube.com/watch?v=L-cxg8mF_Lw" target="_blank">
                      <b><i>h</i><i>t</i><i>t</i><i>p</i><i>s</i><i>:</i><i>/</i><i>/</i><i>w</i><i>w</i><i>w</i><i>.</i><i>y</i><i>o</i><i>u</i><i>t</i><i>u</i><i>b</i><i>e</i><i>.</i></b>
                      <b><i>c</i><i>o</i><i>m</i><i>/</i><i>w</i><i>a</i><i>t</i><i>c</i><i>h</i><i>?</i><i>v</i><i>=</i></b>
                      <b><i>L</i><i>-</i><i>c</i><i>x</i><i>g</i><i>8</i><i>m</i><i>F</i><i>_</i><i>L</i><i>w</i></b>
                      <img className="parallax layer-2 glow-2" style={{ width: '25%', left: '0', marginTop: '-1.25em' }} src={ require('../images/labs/labs_e_1.jpg') } />
                      <img className="parallax layer-2" style={{ width: '10%', left: '35%', marginTop: '-0.5em' }} src={ require('../images/labs/labs_e_2.jpg') } />
                      <img className="parallax layer-2" style={{ width: '28%', right: '0', marginTop: '-0.6em' }} src={ require('../images/labs/labs_e_3.jpg') } />
                      <img className="parallax layer-2 glow-3" style={{ width: '35%', left: '20%', marginTop: '1em' }} src={ require('../images/labs/labs_e_4.jpg') } />
                      <img className="parallax layer-2 glow-2" style={{ width: '20%', right: '10%', marginTop: '1em' }} src={ require('../images/labs/labs_e_5.jpg') } />
                    </a>

                    <a href="http://www.androidauthority.com/when-will-flexible-displays-arrive-688227/" target="_blank">
                      <b><i>h</i><i>t</i><i>t</i><i>p</i><i>:</i><i>/</i><i>/</i><i>w</i><i>w</i><i>w</i><i>.</i><i>a</i><i>n</i><i>d</i><i>r</i><i>o</i><i>i</i><i>d</i><i>-</i></b>
                      <b><i>a</i><i>u</i><i>t</i><i>h</i><i>o</i><i>r</i><i>i</i><i>t</i><i>y</i><i>.</i><i>c</i><i>o</i><i>m</i><i>/</i></b>
                      <b><i>w</i><i>h</i><i>e</i><i>n</i><i>-</i><i>w</i><i>i</i><i>l</i><i>l</i><i>-</i><i>f</i><i>l</i><i>e</i><i>x</i><i>i</i><i>b</i><i>l</i><i>e</i><i>-</i><i>d</i><i>i</i><i>s</i><i>-</i></b>
                      <b><i>p</i><i>l</i><i>a</i><i>y</i><i>s</i><i>-</i><i>a</i><i>r</i><i>r</i><i>i</i><i>v</i><i>e</i><i>-</i><i>6</i><i>8</i><i>8</i><i>2</i><i>2</i><i>7</i><i>/</i></b>
                      <img className="parallax layer-2" style={{ width: '38%', right: '5%', marginTop: '-0.2em' }} src={ require('../images/labs/labs_f_1.jpg') } />
                    </a>

                    <a href="http://today.ucf.edu/color-flexible-display/" target="_blank">
                      <b><i>h</i><i>t</i><i>t</i><i>p</i><i>:</i><i>/</i><i>/</i><i>t</i><i>o</i><i>d</i><i>a</i><i>y</i><i>.</i><i>u</i><i>c</i><i>f</i><i>.</i></b>
                      <b><i>e</i><i>d</i><i>u</i><i>/</i><i>c</i><i>o</i><i>l</i><i>o</i><i>r</i><i>-</i><i>f</i><i>l</i><i>e</i><i>x</i><i>-</i></b>
                      <b><i>i</i><i>b</i><i>l</i><i>e</i><i>-</i><i>d</i><i>i</i><i>s</i><i>p</i><i>l</i><i>a</i><i>y</i><i>/</i></b>
                      <img className="parallax layer-2" style={{ width: '40%', left: '20%', marginTop: '-0.5em' }} src={ require('../images/labs/labs_g_1.jpg') } />
                    </a>

                    <a href="https://longreads.com/2017/06/13/a-sociology-of-the-smartphone/" target="_blank">
                      <b><i>h</i><i>t</i><i>t</i><i>p</i><i>s</i><i>:</i><i>/</i><i>/</i><i>l</i><i>o</i><i>n</i><i>g</i><i>r</i><i>e</i><i>a</i><i>d</i><i>s</i><i>.</i></b>
                      <b><i>c</i><i>o</i><i>m</i><i>/</i><i>2</i><i>0</i><i>1</i><i>7</i><i>/</i><i>0</i><i>6</i><i>/</i><i>1</i><i>3</i><i>/</i></b>
                      <b><i>a</i><i>-</i><i>s</i><i>o</i><i>c</i><i>i</i><i>o</i><i>l</i><i>o</i><i>g</i><i>y</i><i>-</i><i>o</i><i>f</i><i>-</i></b>
                      <b><i>t</i><i>h</i><i>e</i><i>-</i><i>s</i><i>m</i><i>a</i><i>r</i><i>t</i><i>p</i><i>h</i><i>o</i><i>n</i><i>e</i><i>/</i></b>
                      <img className="parallax layer-2 glow-3" style={{ width: '28%', left: '0%', marginTop: '-0.25em' }} src={ require('../images/labs/labs_h_1.jpg') } />
                    </a>

                    <a href="http://www.prnewswire.com/news-releases/royole-develops-worlds-thinnest-001-mm-full-color-amoled-flexible-display-300010265.html" target="_blank">
                      <b><i>h</i><i>t</i><i>t</i><i>p</i><i>:</i><i>/</i><i>/</i><i>w</i><i>w</i><i>w</i><i>.</i><i>p</i><i>r</i><i>n</i><i>e</i><i>w</i><i>s</i><i>-</i></b>
                      <b><i>w</i><i>i</i><i>r</i><i>e</i><i>.</i><i>c</i><i>o</i><i>m</i><i>/</i><i>n</i><i>e</i><i>w</i><i>s</i><i>-</i><i>r</i><i>e</i><i>-</i></b>
                      <b><i>l</i><i>e</i><i>a</i><i>s</i><i>e</i><i>s</i><i>/</i><i>r</i><i>o</i><i>y</i><i>o</i><i>l</i><i>e</i><i>-</i><i>d</i><i>e</i><i>v</i><i>e</i><i>l</i><i>-</i></b>
                      <b><i>o</i><i>p</i><i>s</i><i>-</i><i>w</i><i>o</i><i>r</i><i>l</i><i>d</i><i>s</i><i>-</i><i>t</i><i>h</i><i>i</i><i>n</i><i>n</i><i>e</i><i>s</i><i>t</i><i>-</i></b>
                      <b><i>0</i><i>0</i><i>1</i><i>-</i><i>m</i><i>m</i><i>-</i><i>f</i><i>u</i><i>l</i><i>l</i><i>-</i><i>c</i><i>o</i><i>l</i><i>o</i><i>r</i><i>-</i></b>
                      <b><i>a</i><i>m</i><i>o</i><i>l</i><i>e</i><i>d</i><i>-</i><i>f</i><i>l</i><i>e</i><i>x</i><i>i</i><i>b</i><i>l</i><i>e</i><i>-</i><i>d</i><i>i</i><i>s</i><i>-</i></b>
                      <b><i>p</i><i>l</i><i>a</i><i>y</i><i>-</i><i>3</i><i>0</i><i>0</i><i>0</i><i>1</i><i>0</i><i>2</i><i>6</i><i>5</i><i>.</i><i>h</i><i>t</i><i>m</i><i>l</i></b>
                      <img className="parallax layer-2" style={{ width: '45%', left: '28%', marginTop: '-1em' }} src={ require('../images/labs/labs_i_1.jpg') } />
                    </a>

                    <a href="https://www.nature.com/articles/ncomms8337" target="_blank">
                      <b><i>h</i><i>t</i><i>t</i><i>p</i><i>s</i><i>:</i><i>/</i><i>/</i><i>w</i><i>w</i><i>w</i><i>.</i><i>n</i><i>a</i><i>t</i><i>u</i><i>r</i><i>e</i><i>.</i><i>c</i><i>o</i><i>m</i></b>
                      <b><i>/</i><i>a</i><i>r</i><i>t</i><i>i</i><i>c</i><i>l</i><i>e</i><i>s</i><i>/</i><i>n</i><i>c</i><i>o</i><i>m</i><i>m</i><i>s</i><i>8</i><i>3</i><i>3</i><i>7</i></b>
                      <img className="parallax layer-2" style={{ width: '28%', left: '8%', marginTop: '0em' }} src={ require('../images/labs/labs_j_1.jpg') } />
                      <img className="parallax layer-2" style={{ width: '15%', right: '0%', marginTop: '1.1em' }} src={ require('../images/labs/labs_j_2.jpg') } />
                    </a>

                    <a href="http://www.sciencedirect.com/science/article/pii/S1369702106714468" target="_blank">
                      <b><i>h</i><i>t</i><i>t</i><i>p</i><i>:</i><i>/</i><i>/</i><i>w</i><i>w</i><i>w</i><i>.</i><i>s</i><i>c</i><i>i</i><i>e</i><i>n</i><i>c</i><i>e</i><i>-</i></b>
                      <b><i>d</i><i>i</i><i>r</i><i>e</i><i>c</i><i>t</i><i>.</i><i>c</i><i>o</i><i>m</i><i>/</i><i>s</i><i>c</i><i>i</i><i>-</i></b>
                      <b><i>e</i><i>n</i><i>c</i><i>e</i><i>/</i><i>a</i><i>r</i><i>t</i><i>i</i><i>c</i><i>l</i><i>e</i><i>/</i><i>p</i><i>i</i><i>i</i><i>/</i></b>
                      <b><i>S</i><i>1</i><i>3</i><i>6</i><i>9</i><i>7</i><i>0</i><i>2</i><i>1</i><i>0</i><i>6</i><i>7</i><i>1</i><i>4</i><i>4</i><i>6</i><i>8</i></b>
                      <img className="parallax layer-2" style={{ width: '40%', left: '48%', marginTop: '2em' }} src={ require('../images/labs/labs_k_1.jpg') } />
                    </a>

                    <a href="https://phys.org/news/2015-06-world-full-color-flexible-skin-like.html#jCp" target="_blank">
                      <b><i>h</i><i>t</i><i>t</i><i>p</i><i>s</i><i>:</i><i>/</i><i>/</i><i>p</i><i>h</i><i>y</i><i>s</i><i>.</i><i>o</i><i>r</i><i>g</i><i>/</i></b>
                      <b><i>n</i><i>e</i><i>w</i><i>s</i><i>/</i><i>2</i><i>0</i><i>1</i><i>5</i><i>-</i><i>0</i><i>6</i><i>-</i><i>w</i><i>o</i><i>r</i><i>l</i><i>d</i><i>-</i></b>
                      <b><i>f</i><i>u</i><i>l</i><i>l</i><i>-</i><i>c</i><i>o</i><i>l</i><i>o</i><i>r</i><i>-</i><i>f</i><i>l</i><i>e</i><i>x</i><i>i</i><i>b</i><i>l</i><i>e</i><i>-</i></b>
                      <b><i>s</i><i>k</i><i>i</i><i>n</i><i>-</i><i>l</i><i>i</i><i>k</i><i>e</i><i>.</i><i>h</i><i>t</i><i>m</i><i>l</i><i>#</i><i>j</i><i>C</i><i>p</i></b>
                      <img className="parallax layer-2" style={{ width: '20%', left: '10%', marginTop: '1em' }} src={ require('../images/labs/labs_l_1.jpg') } />
                      <img className="parallax layer-2" style={{ width: '15%', left: '20%', marginTop: '3.9em' }} src={ require('../images/labs/labs_l_2.jpg') } />
                    </a>

                    <a href="https://www.researchandmarkets.com/research/lcsf8p/flexible_display" target="_blank">
                      <b><i>h</i><i>t</i><i>t</i><i>p</i><i>s</i><i>:</i><i>/</i><i>/</i><i>w</i><i>w</i><i>w</i><i>.</i><i>r</i><i>e</i><i>-</i></b>
                      <b><i>s</i><i>e</i><i>a</i><i>r</i><i>c</i><i>h</i><i>a</i><i>n</i><i>d</i><i>m</i><i>a</i><i>r</i><i>k</i><i>e</i><i>t</i><i>s</i><i>.</i></b>
                      <b><i>c</i><i>o</i><i>m</i><i>/</i><i>r</i><i>e</i><i>s</i><i>e</i><i>a</i><i>r</i><i>c</i><i>h</i><i>/</i><i>l</i><i>c</i><i>s</i><i>-</i></b>
                      <b><i>f</i><i>8</i><i>p</i><i>/</i><i>f</i><i>l</i><i>e</i><i>x</i><i>i</i><i>b</i><i>l</i><i>e</i><i>_</i><i>d</i><i>i</i><i>s</i><i>p</i><i>l</i><i>a</i><i>y</i></b>
                    </a>

                    <a href="http://www.tweaktown.com/news/57680/samsung-unveils-bendable-stretchable-oled-display/index.html" target="_blank">
                      <b><i>h</i><i>t</i><i>t</i><i>p</i><i>:</i><i>/</i><i>/</i><i>w</i><i>w</i><i>w</i><i>.</i><i>t</i><i>w</i><i>e</i><i>a</i><i>k</i><i>t</i><i>o</i><i>w</i><i>n</i><i>.</i></b>
                      <b><i>c</i><i>o</i><i>m</i><i>/</i><i>n</i><i>e</i><i>w</i><i>s</i><i>/</i><i>5</i><i>7</i><i>6</i><i>8</i><i>0</i><i>/</i><i>s</i><i>a</i><i>m</i><i>-</i></b>
                      <b><i>s</i><i>u</i><i>n</i><i>g</i><i>-</i><i>u</i><i>n</i><i>v</i><i>e</i><i>i</i><i>l</i><i>s</i><i>-</i><i>b</i><i>e</i><i>n</i><i>d</i><i>-</i></b>
                      <b><i>a</i><i>b</i><i>l</i><i>e</i><i>-</i><i>s</i><i>t</i><i>r</i><i>e</i><i>t</i><i>c</i><i>h</i><i>-</i></b>
                      <b><i>a</i><i>b</i><i>l</i><i>e</i><i>-</i><i>o</i><i>l</i><i>e</i><i>d</i><i>-</i><i>d</i><i>i</i><i>s</i><i>-</i></b>
                      <b><i>p</i><i>l</i><i>a</i><i>y</i><i>/</i><i>i</i><i>n</i><i>d</i><i>e</i><i>x</i><i>.</i><i>h</i><i>t</i><i>m</i><i>l</i></b>
                      <img className="parallax layer-2" style={{ width: '50%', left: '20%', marginTop: '-1em' }} src={ require('../images/labs/labs_m_1.jpg') } />
                      <img className="parallax layer-2" style={{ width: '50%', left: '24%', marginTop: '-1.5em' }} src={ require('../images/labs/labs_m_1.jpg') } />
                      <img className="parallax layer-2" style={{ width: '50%', left: '28%', marginTop: '-2em' }} src={ require('../images/labs/labs_m_1.jpg') } />
                      <img className="parallax layer-2" style={{ width: '50%', left: '32%', marginTop: '-2.5em' }} src={ require('../images/labs/labs_m_1.jpg') } />
                    </a>

                    <a href="https://phys.org/news/2014-04-peek-mist-technology-future.html" target="_blank">
                      <b><i>h</i><i>t</i><i>t</i><i>p</i><i>s</i><i>:</i><i>/</i><i>/</i><i>p</i><i>h</i><i>y</i><i>s</i><i>.</i><i>o</i><i>r</i><i>g</i><i>/</i></b>
                      <b><i>n</i><i>e</i><i>w</i><i>s</i><i>/</i><i>2</i><i>0</i><i>1</i><i>4</i><i>-</i><i>0</i><i>4</i><i>-</i><i>p</i><i>e</i><i>e</i><i>k</i><i>-</i></b>
                      <b><i>m</i><i>i</i><i>s</i><i>t</i><i>-</i><i>t</i><i>e</i><i>c</i><i>h</i><i>n</i><i>o</i><i>l</i><i>o</i><i>-</i></b>
                      <b><i>g</i><i>y</i><i>-</i><i>f</i><i>u</i><i>t</i><i>u</i><i>r</i><i>e</i><i>.</i><i>h</i><i>t</i><i>m</i><i>l</i></b>
                      <img className="parallax layer-2" style={{ width: '35%', left: '7%', marginTop: '-0.15em' }} src={ require('../images/labs/labs_n_1.jpg') } />
                    </a>

                    <a href="https://www.youtube.com/watch?time_continue=8&v=XXsfO_jIvg4" target="_blank">
                      <b><i>h</i><i>t</i><i>t</i><i>p</i><i>s</i><i>:</i><i>/</i><i>/</i><i>w</i><i>w</i><i>w</i><i>.</i><i>y</i><i>o</i><i>u</i><i>t</i><i>u</i><i>b</i><i>e</i><i>.</i></b>
                      <b><i>c</i><i>o</i><i>m</i><i>/</i><i>w</i><i>a</i><i>t</i><i>c</i><i>h</i><i>?</i><i>t</i><i>i</i><i>m</i><i>e</i><i>_</i><i>c</i><i>o</i><i>n</i><i>-</i></b>
                      <b><i>t</i><i>i</i><i>n</i><i>u</i><i>e</i><i>=</i><i>8</i><i>&</i><i>v</i><i>=</i><i>X</i><i>X</i><i>s</i><i>f</i><i>O</i><i>_</i><i>j</i><i>I</i><i>v</i><i>g</i><i>4</i></b>
                      <img className="parallax layer-2 glow-2" style={{ width: '65%', left: '15%', marginTop: '-0.5em' }} src={ require('../images/labs/labs_o_1.jpg') } />
                    </a>

                    <a href="https://phys.org/news/2012-08-efficient-filter-applications.html#jCp" target="_blank">
                      <b><i>h</i><i>t</i><i>t</i><i>p</i><i>s</i><i>:</i><i>/</i><i>/</i><i>p</i><i>h</i><i>y</i><i>s</i><i>.</i><i>o</i><i>r</i><i>g</i><i>/</i></b>
                      <b><i>n</i><i>e</i><i>w</i><i>s</i><i>/</i><i>2</i><i>0</i><i>1</i><i>2</i><i>-</i><i>0</i><i>8</i><i>-</i><i>e</i><i>f</i><i>f</i><i>i</i><i>-</i></b>
                      <b><i>c</i><i>i</i><i>e</i><i>n</i><i>t</i><i>-</i><i>f</i><i>i</i><i>l</i><i>t</i><i>e</i><i>r</i><i>-</i><i>a</i><i>p</i><i>p</i><i>l</i><i>i</i><i>-</i></b>
                      <b><i>c</i><i>a</i><i>t</i><i>i</i><i>o</i><i>n</i><i>s</i><i>.</i><i>h</i><i>t</i><i>m</i><i>l</i><i>#</i><i>j</i><i>C</i><i>p</i></b>
                      <img className="parallax layer-2" style={{ width: '30%', left: '48%', marginTop: '3.25em' }} src={ require('../images/labs/labs_p_1.jpg') } />
                    </a>

                    <a href="https://en.wikipedia.org/wiki/Gyricon" target="_blank">
                      <b><i>h</i><i>t</i><i>t</i><i>p</i><i>s</i><i>:</i><i>/</i><i>/</i><i>e</i><i>n</i><i>.</i><i>w</i><i>i</i><i>k</i><i>i</i><i>p</i><i>e</i><i>-</i></b>
                      <b><i>d</i><i>i</i><i>a</i><i>.</i><i>o</i><i>r</i><i>g</i><i>/</i><i>w</i><i>i</i><i>k</i><i>i</i><i>/</i><i>G</i><i>y</i><i>r</i><i>i</i><i>c</i><i>o</i><i>n</i></b>
                    </a>

                    <a href="https://en.wikipedia.org/wiki/Electronic_paper" target="_blank">
                      <b><i>h</i><i>t</i><i>t</i><i>p</i><i>s</i><i>:</i><i>/</i><i>/</i><i>e</i><i>n</i><i>.</i><i>w</i><i>i</i><i>k</i><i>i</i><i>-</i></b>
                      <b><i>p</i><i>e</i><i>d</i><i>i</i><i>a</i><i>.</i><i>o</i><i>r</i><i>g</i><i>/</i><i>w</i><i>i</i><i>k</i><i>i</i><i>/</i></b>
                      <b><i>E</i><i>l</i><i>e</i><i>c</i><i>t</i><i>r</i><i>o</i><i>n</i><i>i</i><i>c</i><i>_</i><i>p</i><i>a</i><i>p</i><i>e</i><i>r</i></b>
                      <img className="parallax layer-2 glow-2" style={{ width: '40%', left: '10%', marginTop: '-.25em' }} src={ require('../images/labs/labs_q_1.jpg') } />
                    </a>

                    <a href="https://phys.org/news/2016-01-flexible-screens.html" target="_blank">
                      <b><i>h</i><i>t</i><i>t</i><i>p</i><i>s</i><i>:</i><i>/</i><i>/</i><i>p</i><i>h</i><i>y</i><i>s</i><i>.</i><i>o</i><i>r</i><i>g</i><i>/</i></b>
                      <b><i>n</i><i>e</i><i>w</i><i>s</i><i>/</i><i>2</i><i>0</i><i>1</i><i>6</i><i>-</i><i>0</i><i>1</i><i>-</i><i>f</i><i>l</i><i>e</i><i>x</i><i>-</i></b>
                      <b><i>i</i><i>b</i><i>l</i><i>e</i><i>-</i><i>s</i><i>c</i><i>r</i><i>e</i><i>e</i><i>n</i><i>s</i><i>.</i><i>h</i><i>t</i><i>m</i><i>l</i></b>
                      <img className="parallax layer-2" style={{ width: '20%', left: '65%', marginTop: '-.4em' }} src={ require('../images/labs/labs_r_1.jpg') } />
                    </a>

                    <a href="https://www.youtube.com/watch?v=UoCrx0scCkM" target="_blank">
                      <b><i>h</i><i>t</i><i>t</i><i>p</i><i>s</i><i>:</i><i>/</i><i>/</i><i>w</i><i>w</i><i>w</i><i>.</i><i>y</i><i>o</i><i>u</i><i>t</i><i>u</i><i>b</i><i>e</i><i>.</i></b>
                      <b><i>c</i><i>o</i><i>m</i><i>/</i><i>w</i><i>a</i><i>t</i><i>c</i><i>h</i><i>?</i><i>v</i><i>=</i></b>
                      <b><i>U</i><i>o</i><i>C</i><i>r</i><i>x</i><i>0</i><i>s</i><i>c</i><i>C</i><i>k</i><i>M</i></b>
                      <img className="parallax layer-2" style={{ width: '35%', left: '45%', marginTop: '-0.5em' }} src={ require('../images/labs/labs_s_1.jpg') } />
                    </a>

                    </div>






        return (
            <div className="labs">
    
            {labs}
            {labs}

          </div>
        );
    }
}

export default Labs;
