import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

import '../styles/about.css';

import ParallaxPage from '../components/ParallaxPage'

class About extends ParallaxPage {

    componentDidMount() {
        this.onMount()
    }

    render() {
        const about = 
        <div>
            <div className="gradients">
              <div className="parallax gradient-1"></div>
              <div className="parallax gradient-2"></div>              
            </div>
            <div className="text">

                <div className="parallax gradient-3"></div>
                
                <p>
                    AB[Screenwear] is New York-based line that creates “contemporary bespoke” experience IRL and online by crafting versatile luxe pieces for people to collect.
                </p>
                <p>
                    Founded by Russian-born New Yorker Olya Petrova Jackson, AB[Screenwear] made its NYFW debut in February 2017 in Postmasters Gallery in Tribeca. AB[Screenwear] atelier, based in Chinatown, is open to her clients, moved by art, design, architecture. 
                </p>
                <p>
                    Line’s signature screenwear garments lean futurist. They pair down leather and shearling with light-responsive panels, normally used in industrial glass, hand-treated to behave like textile, and reference the materiality of the screen - “technology’s skin”. 
                </p>
                <p>
                    Softwear line offers essentials in fine silk and mesh, in fleshtones. It emphasizes tactility and movement, however subtle. A customer, 
                    adding a number of pieces to her existing wardrobe, is inspired, in every way possible, to edit, play with and enjoy her collection.
                </p>
                <p>
                    In AB[Screenwear], there’s little friction between classic materials and those that are technologically loaded. Together they create an interlocking, slowly evolving wardrobe, a system of dress. 
                </p>

                <p>
                    Team
                </p>
                <ul>
                    <li><a href="https://instagram.com/a_______________b" target="_blank">@a_______________b</a> creative director</li>
                    <li><a href="https://instagram.com/e__tat" target="_blank">@e__tat</a> multimedia</li> 
                    <li><a href="https://instagram.com/andrevvm" target="_blank">@andrevvm</a> code</li>
                    <li><a href="https://instagram.com/zakharday" target="_blank">@zakharday</a> eshop</li>
                    <li><a href="https://instagram.com/florencedeschampsshowroom" target="_blank">@florencedeschampsshowroom</a> showroom</li>
                </ul>

                <p>
                    Special thank yous for past,
                    present, and future contributions to
                </p>
                <ul>
                    <li>
                        <a href="https://instagram.com/bedj" target="_blank">@bedj </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/benmorrisphoto" target="_blank">@benmorrisphoto </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/crosbystudios" target="_blank">@crosbystudios </a>
                    </li>
                    <li>
                        <a href="http://forofficeuseonly.com/" target="_blank">forofficeuseonly.com</a>
                    </li>
                    <li>
                        <a href="https://instagram.com/i_ira" target="_blank">@i_ira</a>
                    </li>
                    <li>
                        <a href="https://instagram.com/jamesorlandooo" target="_blank">@jamesorlandooo </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/jeniafilatova" target="_blank">@jeniafilatova  </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/kulachek" target="_blank">@kulachek</a>
                    </li>
                    <li>
                        <a href="https://instagram.com/postmastersgallery" target="_blank">@postmastersgallery</a>
                    </li>
                    <li>
                        <a href="https://instagram.com/spencerkohn" target="_blank">@spencerkohn </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/sputniksupervision" target="_blank">@sputniksupervision </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/statepr" target="_blank">@statepr</a>
                    </li>
                    <li>
                        <a href="https://instagram.com/rogerforlovers" target="_blank">@rogerforlovers</a>
                    </li>
                    <li>
                        <a href="https://instagram.com/tmr.design" target="_blank">@tmr.design</a>
                    </li>
                    <li>
                        <a href="https://instagram.com/zennovaart" target="_blank">@zennovaart</a>
                    </li>
                </ul>

            </div>
        </div>

        return (
            <div className="releases about font-size-large">
                {about}
                {about}
                {about}
                {about}
            </div>
        );
    }
}

export default About;
