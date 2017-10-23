import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

import '../styles/favs.css';

import ParallaxPage from '../components/ParallaxPage'

class Favs extends ParallaxPage {

    componentDidMount() {
        this.onMount()
    }

    render() {

      const favs = 
            <div>
            <div className="gradients">
              <video className="parallax video-1" autoPlay loop>
                <source src={ require('../images/favs/shell-1.mp4') } type="video/mp4" />
              </video>
              <video className="parallax video-2" autoPlay loop>
                <source src={ require('../images/favs/shell-2.mp4') } type="video/mp4" />
              </video>
              <video className="parallax video-3" autoPlay loop>
                <source src={ require('../images/favs/shell-3.mp4') } type="video/mp4" />
              </video>
              <video className="parallax video-4" autoPlay loop>
                <source src={ require('../images/favs/shell-4.mp4') } type="video/mp4" />
              </video>
              <div className="parallax gradient-1"></div>
              <div className="parallax gradient-2"></div>
              <div className="parallax gradient-3"></div>
              <div className="parallax gradient-4"></div>
              <div className="parallax gradient-5"></div>
            </div>
            <a target="_blank" className="fav" href="https://www.youtube.com/watch?v=XABVJCmJzj0">
              <b><i>Adam</i> <i>Pendleton</i></b>
            </a>
            <a target="_blank" className="fav" href="http://performa-arts.org/magazine/entry/behind-the-scenes-agatha-gothe-snape">
              <b><i>A</i><i>g</i><i>a</i><i>t</i><i>h</i><i>a</i></b>
              <b><i>Gothe</i><i>Snape</i></b>
            </a>
            <a target="_blank" className="fav" href="https://www.youtube.com/watch?v=Ez8ilu7L6ZI">
              <b><i>A</i><i>g</i><i>n</i><i>i</i><i>e</i><i>s</i><i>z</i><i>k</i><i>a</i></b>
              <b><i>P</i><i>o</i><i>l</i><i>s</i><i>k</i><i>a</i></b>
            </a>
            <a target="_blank" className="fav" href="https://www.youtube.com/watch?v=vOHEEYIsUHY">
              <b><i>A</i><i>l</i><i>e</i><i>x</i><i>a</i><i>n</i><i>d</i><i>r</i><i>a</i></b>
              <b><i>B</i><i>a</i><i>c</i><i>h</i><i>z</i><i>e</i><i>t</i><i>s</i><i>i</i><i>s</i></b>
            </a>
            <a target="_blank" className="fav" href="https://www.google.com/search?q=anni+albers&rlz=1C5CHFA_enUS706US706&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjD5tmDlNnTAhWG2yYKHfUQAg8Q_AUICigB&biw=1426&bih=656#tbm=isch&q=anni+albers+weaving&imgrc=tIoQ4oAhiNKtmM:">
              <b><i>Ani</i> <i>Albers</i></b>
            </a>
            <a target="_blank" className="fav" href="https://www.youtube.com/watch?v=bjVGOLmWmRw">
              <b><i>A</i><i>n</i><i>n</i><i>e</i></b>
              <b><i>I</i><i>m</i><i>h</i><i>o</i><i>f</i></b>
            </a>
            <a target="_blank" className="fav" href="http://distantfeel.com/"><b><i>Antoine</i> <i>Catala</i></b></a>
            <a target="_blank" className="fav" href="http://datenform.de/point-of-view-eng.html"><b><i>Aram</i> <i>Bartholl</i></b></a>
            <a target="_blank" className="fav" href="https://www.google.com/search?q=Atsuko+Tanaka+electric+dress&rlz=1C5CHFA_enUS706US706&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi8o9LDldnTAhWGPiYKHVGMDiUQ_AUIDCgD&biw=1426&bih=656">
              <b><i>A</i><i>t</i><i>s</i><i>u</i><i>k</i><i>o</i></b>
              <b><i>T</i><i>a</i><i>n</i><i>a</i><i>k</i><i>a</i></b>
            </a>
            <a target="_blank" className="fav" href="http://www.austinlee.net/index.html">
              <b><i>Austin</i> <i>Lee</i></b>
            </a>
            <a target="_blank" className="fav" href="http://reas.com/"><i>Casey</i> <i>Reas</i></a>
            <a target="_blank" className="fav" href="https://www.youtube.com/watch?v=HhMG-QCJVsE">
              <b><i>D</i><i>a</i><i>r</i><i>a</i></b>
              <b><i>B</i><i>i</i><i>r</i><i>n</i><i>b</i><i>a</i><i>u</i><i>m</i></b>
            </a>
            <a target="_blank" className="fav" href="https://www.google.com/search?q=david+shrigley&rlz=1C5CHFA_enUS706US706&source=lnms&tbm=isch&sa=X&ved=0ahUKEwji2OfAj9zTAhVD2yYKHSfFAJUQ_AUIBigB&biw=1426&bih=656"><i>David</i> <i>Shrigley</i></a>
            <a target="_blank" className="fav" href="https://vimeo.com/156339313">
              <b><i>D</i><i>o</i><i>r</i><i>a</i></b>
              <b><i>B</i><i>u</i><i>d</i><i>o</i><i>r</i></b>
            </a>
            <a target="_blank" className="fav" href="https://www.google.com/search?q=ellsworth+kelly&rlz=1C5CHFA_enUS706US706&source=lnms&tbm=isch&sa=X&ved=0ahUKEwici974i9nTAhVCRyYKHaNSA4EQ_AUICigB&biw=1426&bih=656"><i>Ellsworth</i> <i>Kelly</i></a>
            <a target="_blank" className="fav" href="https://www.esmeraldakosmatopoulos.com/climax">
              <b><i>E</i><i>s</i><i>m</i><i>e</i><i>r</i><i>a</i><i>l</i><i>d</i><i>a</i></b>
              <b><i>K</i><i>o</i><i>s</i><i>m</i><i>a</i><i>t</i><i>o</i><i>p</i><i>o</i><i>u</i><i>l</i><i>o</i><i>s</i></b>
            </a>
            <a target="_blank" className="fav" href="http://0100101110101101.org/">
              <b><i>E</i><i>v</i><i>a</i><i>&</i></b>
              <b><i>Franco</i> <i>Mattes</i></b>
            </a>
            <a target="_blank" className="fav" href="https://frieze.com/fair-programme/eva-lewitt">
              <b><i>E</i><i>v</i><i>a</i></b>
              <b><i>L</i><i>e</i><i>w</i><i>i</i><i>t</i><i>t</i></b>
            </a>
            <a target="_blank" className="fav" href="www.moma.org/calendar/exhibitions/3643?locale=en"><b><i>James</i> <i>Turrel</i></b></a>
            <a target="_blank" className="fav" href="https://www.youtube.com/watch?v=exARgsB0pkM&t=159s">
              <b><i>J</i><i>o</i><i>a</i><i>n</i></b>
              <b><i>J</i><i>o</i><i>n</i><i>a</i><i>s</i></b>
            </a>
            <a target="_blank" className="fav" href="http://jonrafman.com/betamale/">
              <b><i>Jon</i> <i>Rafman</i></b>
            </a>
            <a target="_blank" className="fav" href="https://www.google.com/search?q=josef+albers+interaction+of+color&rlz=1C5CHFA_enUS706US706&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiY_9X2k9nTAhXFQiYKHUJtBC4Q_AUIBygC&biw=1426&bih=656"><i>Josef</i> <i>Albers</i></a>
            <a target="_blank" className="fav" href="https://www.youtube.com/watch?v=KMql9zLnYRU"><i>K</i><i>i</i><i>m</i><i>s</i><i>o</i><i>o</i><i>j</i><i>a</i></a>
            <a target="_blank" className="fav" href="https://vimeo.com/166903742"><i>L</i><i>a</i> <i>T</i><i>u</i><i>r</i><i>b</i><i>o</i> <i>A</i><i>v</i><i>e</i><i>d</i><i>o</i><i>n</i></a>
            <a target="_blank" className="fav" href="https://www.google.com/search?q=laszlo+moholy+nagy+light+space+modulator&rlz=1C5CHFA_enUS706US706&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiJzafakdnTAhUG3SYKHR9PAjsQ_AUIBygC&biw=1426&bih=656">
              <b><i>L</i><i>a</i><i>s</i><i>z</i><i>l</i><i>ó</i></b>
              <b><i>M</i><i>o</i><i>h</i><i>o</i><i>l</i><i>y</i><i>-</i><i>N</i><i>a</i><i>g</i><i>y</i></b>
            </a>
            <a target="_blank" className="fav" href="http://mdorf.com/"><b><i>M</i><i>a</i><i>r</i><i>k</i> <i>D</i><i>o</i><i>r</i><i>f</i></b></a>
            <a target="_blank" className="fav" href="http://martinroth.at/en/i-used-a-donald-judd-as-a-living-habitat-for-snails/"><b><i>Martin</i> <i>Roth</i></b> </a>
            <a target="_blank" className="fav" href="https://www.google.com/search?q=Nam+June+Paik&rlz=1C5CHFA_enUS706US706&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjjpN2GktnTAhWGZCYKHZ8tCdkQ_AUICigB&biw=1426&bih=656#tbm=isch&q=nam+june+paik+tv+cello"><b><i>Nam</i> <i>June</i> <i>Paik</i></b></a>
            <a target="_blank" className="fav" href="http://olafureliasson.net/realitymachines/"><b><i>Olafur</i> <i>Eliasson</i></b></a>
            <a target="_blank" className="fav" href="https://www.moma.org/explore/multimedia/videos/28/499">
              <b><i>P</i><i>i</i><i>p</i><i>i</i><i>l</i><i>o</i><i>t</i><i>t</i><i>i</i></b>
              <b><i>R</i><i>i</i><i>s</i><i>t</i></b>
            </a>
            <a target="_blank" className="fav" href="https://www.youtube.com/watch?v=6AjFqYUCjcI">
              <b><i>R</i><i>a</i><i>c</i><i>h</i><i>e</i><i>l</i></b>
              <b><i>R</i><i>o</i><i>s</i><i>e</i></b>
            </a>
            <a target="_blank" className="fav" href="https://vimeo.com/199359297">
              <b><i>R</i><i>a</i><i>f</i><i>a</i><i>e</i><i>l</i> <i>L</i><i>o</i><i>z</i><i>a</i><i>-</i></b>
              <b><i>n</i><i>o</i><i>-</i><i>H</i><i>e</i><i>m</i><i>m</i><i>e</i><i>r</i></b>
            </a>
            <a target="_blank" className="fav" href="http://www.blankwindows.com/">
              <b><i>R</i><i>a</i><i>f</i><i>a</i><i>ë</i><i>l</i></b>
              <b><i>R</i><i>o</i><i>z</i><i>e</i><i>n</i><i>d</i><i>a</i><i>a</i><i>l</i></b>
            </a>
            <a target="_blank" className="fav" href="https://www.google.com/search?q=Sarah+Charlesworth&rlz=1C5CHFA_enUS706US706&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjToMHik9nTAhUBdiYKHQY0C2cQ_AUICigB&biw=1426&bih=656">
              <b className="squeeze"><i>S</i><i>a</i><i>r</i><i>a</i><i>h</i> <i>C</i><i>h</i><i>a</i><i>r</i><i>l</i><i>e</i><i>s</i><i>w</i><i>o</i><i>r</i><i>t</i><i>h</i></b>
            </a>
            <a target="_blank" className="fav" href="http://pirogovasasha.com/mono/">
              <b><i>S</i><i>a</i><i>s</i><i>h</i><i>a</i></b>
              <b><i>P</i><i>i</i><i>r</i><i>o</i><i>g</i><i>o</i><i>v</i><i>a</i></b>
            </a>
            <a target="_blank" className="fav" href="https://www.google.com/search?q=Sol+LeWitt&rlz=1C5CHFA_enUS706US706&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjUrI2bqNnTAhUI5IMKHUdjB_oQ_AUICigB&biw=1426&bih=656#tbm=isch&q=sol+lewitt+dia+beacon">
              <b><i>Sol</i> <i>LeWitt</i></b></a>
            <a target="_blank" className="fav" href="https://www.google.com/search?q=Tauba+Auerbach+gradient&rlz=1C5CHFA_enUS706US706&tbm=isch&imgil=GHVpaAfWT8k4AM%253A%253Bc-1MnXmC_V66rM%253Bhttp%25253A%25252F%25252Farts.mit.edu%25252Ftauba-auerbach%25252F&source=iu&pf=m&fir=GHVpaAfWT8k4AM%253A%252Cc-1MnXmC_V66rM%252C_&usg=__kDjqPyAXw7CjouQM5lg2AWLNEDY%3D&biw=1426&bih=656&ved=0ahUKEwiMqISqqNnTAhVJ74MKHRMXChwQyjcIMw&ei=UbsMWcy7IcnejwSTrqjgAQ#imgrc=GHVpaAfWT8k4AM:">
              <b><i>T</i><i>a</i><i>u</i><i>b</i><i>a</i></b>
              <b><i>A</i><i>u</i><i>e</i><i>r</i><i>b</i><i>a</i><i>c</i><i>h</i></b>
            </a>
            <a target="_blank" className="fav" href="http://www.thomson-craighead.net/horizon.html">
              <b><i>Thomson</i> <i>&</i></b>
              <b><i>C</i><i>r</i><i>a</i><i>i</i><i>g</i><i>h</i><i>e</i><i>a</i><i>d</i></b>
            </a>
            <a target="_blank" className="fav" href="https://www.google.com/search?q=Wolfgang+Tillmans&rlz=1C5CHFA_enUS706US706&tbm=isch&source=lnms&sa=X&ved=0ahUKEwjOnPDBqNnTAhWETCYKHSffAmc4FBD8BQgGKAE&biw=1426&bih=656#tbm=isch&q=Wolfgang+Tillmans++ink+in+water">
              <b className="squeeze"><i>W</i><i>o</i><i>l</i><i>f</i><i>g</i><i>a</i><i>n</i><i>g</i> <i>T</i><i>i</i><i>l</i><i>l</i><i>m</i><i>a</i><i>n</i><i>s</i></b>
            </a>
            <a target="_blank" className="fav" href="http://www.postmastersart.com/">
              <b><i>Z</i><i>a</i><i>c</i><i>h</i> <i>G</i><i>a</i><i>g</i><i>e</i></b>
            </a>
            </div>

        return (
          <div className="favs">
    
            {favs}
            {favs}

          </div>
        );
    }
}

export default Favs;
