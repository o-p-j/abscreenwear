import React, { PropTypes } from 'react';
import ParallaxPage from '../components/ParallaxPage'

import lazysizes from 'lazysizes';

import '../styles/press.css';

class Press extends ParallaxPage {

    componentDidMount() {
        this.onMount()
    }

    render() {

      const press = 
            <div className="press-items">
              
              <div className="press-item"> 
                <p>
                  Su La Po
                </p>
                <p>
                  <a href="http://su-la-po.com/content/2018/the-future-females-and-fashion" target="_blank">su-la-po.com/content/2018/the-future-females-and-fashion</a>
                </p>
                <img className="parallax transparent" width="70.5%" style={{ }} src={ require('../images/pressV2/01/sulapo.png') } />
                <img className="lazyload" width="83%" src={ require('../images/pressV2/01/1.gif') } data-src={ require('../images/pressV2/01/1.jpg') } />
                <img className="parallax layer-2" width="24%" style={{ marginLeft: '0%', marginTop: '14%' }} src={ require('../images/pressV2/01/thefuture.png') } />
                <img className="parallax layer-1" width="18%" style={{ marginLeft: '35.5%', marginTop: '27%' }} src={ require('../images/pressV2/01/females.png') } />
                <img className="parallax layer-2" width="27%" style={{ marginLeft: '6.5%', marginTop: '43%' }} src={ require('../images/pressV2/01/andfashion.png') } />
                <img className="parallax layer-2" width="30%" style={{ left: 'auto', right: '8.5%', marginTop: '80%' }} src={ require('../images/pressV2/01/whatsnext.png') } />

                <img className="parallax layer-1" width="44%" style={{ marginLeft: '1.5%', marginTop: '58%' }} src={ require('../images/pressV2/01/text.png') } />
                <img className="parallax layer-2" width="44%" style={{ marginLeft: '1.5%', marginTop: '72%' }} src={ require('../images/pressV2/01/text.png') } />
                <img className="parallax layer-1" width="44%" style={{ marginLeft: '1.5%', marginTop: '95%' }} src={ require('../images/pressV2/01/text.png') } />
              </div>

              <div className="press-item">
                <p>Harper’s Bazaar</p>
                <p>150 anniversary print issue</p>
                <img className="layer-2" width="55%" style={{ marginLeft: '-2%' }} src={ require('../images/pressV2/02/bazaar.png') } />
                <img className="lazyload" width="70%" style={{ marginLeft: '-4%' }} src={ require('../images/pressV2/02/01.gif') } data-src={ require('../images/pressV2/02/01.jpg') } />
                <img width="24%" className="lazyload parallax layer-1" style={{ marginLeft: '46%', marginTop: '40%' }} src={ require('../images/pressV2/02/02.gif') } data-src={ require('../images/pressV2/02/02.png') } />
              </div>
              <div className="press-item">

                <p>Garage magazine</p>
                <p>
                  <a href="http://garage.vice.com/en_us/article/43n85w/art-and-fashion-get-a-room-you-two" target="_blank">garage.vice.com/en_us/article/43n85w/art-and-fashion-get-a-room-you-two</a>
                </p>
                <img className="lazyload" width="67%" src={ require('../images/pressV2/03/garage.gif') } data-src={ require('../images/pressV2/03/garage.jpg') } />
                <img className="parallax layer-1" style={{ marginTop: '2%', marginLeft: '68%' }} width="14%" src={ require('../images/pressV2/03/vice.png') } />
                <img className="lazyload" width="80%" style={{ marginTop: '4%' }} src={ require('../images/pressV2/03/01.gif') } data-src={ require('../images/pressV2/03/01.jpg') } />
                <img className="lazyload" style={{ left: 0, marginTop: '5%' }} width="100%" src={ require('../images/pressV2/03/garage_crop.gif') } data-src={ require('../images/pressV2/03/garage_crop.jpg') } />
                
              </div>
              <div className="press-item">
                <p>Artsy</p>
                <p>
                  <a href="http://artsy.net/artist/ab-screenwear" target="_blank">artsy.net/artist/ab-screenwear</a>
                </p>
                <img className="layer-2" width="59%" style={{ marginTop: '1.5%' }} src={ require('../images/pressV2/04/artsy.png') } />
                <img className="parallax layer-1" width="48%" style={{ marginTop: '16%', marginLeft: '31%' }} src={ require('../images/pressV2/04/bg.png') } />
                <img className="layer-2" width="58%" style={{ marginTop: '2%' }} src={ require('../images/pressV2/04/text.png') } />
                <img className="layer-2 lazyload" width="83%" src={ require('../images/pressV2/04/01.gif') } data-src={ require('../images/pressV2/04/01.jpg') } />
              </div>
              
              <div className="press-item">
                <p>Address Magazine</p>
                <p>
                  <a href="http://addresspublications.com/get-a-room-exhibition" target="_blank">addresspublications.com/get-a-room-exhibition</a>
                </p>
                <img className="parallax layer-2" width="94%" style={{ marginLeft: '-4%', marginTop: '1%' }} src={ require('../images/pressV2/05/address.png') } />
                <img className="transparent lazyload" width="83%" style={{ marginTop: '10%', zIndex: 5 }} src={ require('../images/pressV2/05/01.gif') } data-src={ require('../images/pressV2/05/01.jpg') } />
                <img className="parallax lazyload" width="83%" style={{ marginTop: '-14%', zIndex: 0 }} src={ require('../images/pressV2/05/text.gif') } data-src={ require('../images/pressV2/05/text.png') } />
              </div>
              <div className="press-item">

                <p>Office magazine</p>
                <p>
                  <a href="http://officemagazine.net/abscreenwear-and-your-bodys-full-potential" target="_blank">officemagazine.net/abscreenwear-and-your-bodys-full-potential</a>
                </p>
                <img className="" width="47%" style={{ marginTop: '1%' }} src={ require('../images/pressV2/06/office.png') } />
                <img className="parallax transparent layer-2 lazyload" width="58%" style={{ marginTop: '28%' }} src={ require('../images/pressV2/06/text.gif') } data-src={ require('../images/pressV2/06/text.png') } />
                <img className="lazyload" width="83%" style={{ marginTop: '', zIndex: 0 }} src={ require('../images/pressV2/06/01.gif') } data-src={ require('../images/pressV2/06/01.jpg') } />
              
              </div>
              <div className="press-item">

                <p>Elle magazine</p>
                <p>
                  <a href="http://elle.ru/moda/fashion-blog/tehnika-molodeji-vyisokie-tehnologii-v-mode/" target="_blank">elle.ru/moda/fashion-blog/tehnika-molodeji-vyisokie-tehnologii-v-mode/</a>
                </p>
                <img className="layer-2 transparent" width="34%" style={{ marginTop: '1%', zIndex: 25 }} src={ require('../images/pressV2/07/01.png') } />

                <img className="parallax layer-2" width="74%" style={{ marginLeft: '-3%', marginTop: '35%' }} src={ require('../images/pressV2/07/02.png') } />

                <img className="parallax layer-2" width="27%" style={{ marginLeft: '30%', marginTop: '16%' }} src={ require('../images/pressV2/07/03.png') } />

                <img width="73%" style={{ marginTop: '', zIndex: 0 }} src={ require('../images/pressV2/07/04.png') } />

                <img className="lazyload" width="83%" style={{ marginTop: '', zIndex: 0 }} src={ require('../images/pressV2/07/05.gif') } data-src={ require('../images/pressV2/07/05.jpg') } />
              
              </div>

              <div className="press-item">

                <p>Wall Street International</p>
                <p>
                  <a href="https://wsimag.com/fashion/31918-ab-screenwear" target="_blank">wsimag.com/fashion/31918-ab-screenwear</a>
                </p>
                <img className="layer-2 transparent" width="20%" style={{ marginTop: '1%', zIndex: 25 }} src={ require('../images/pressV2/08/01.png') } />
                <br/>
                <img className="lazyload" width="78%" style={{ marginLeft: '6%', marginTop: '-5%' }} src={ require('../images/pressV2/08/03.gif') } data-src={ require('../images/pressV2/08/03.jpg') } />

                <img className="parallax transparent layer-2" width="32%" style={{ marginTop: '22%' }} src={ require('../images/pressV2/08/02.png') } />
              
              </div>

              <div className="press-item">

                <p>Bullet magazine</p>
                <p>
                  <a href="http://bullettmedia.com/article/studio-visit-abscreenwear-reinvents-wearable-tech/" target="_blank">bullettmedia.com/article/studio-visit-abscreenwear-reinvents-wearable-tech/</a>
                </p>
                <img className="layer-1 lazyload" width="95%" style={{ marginTop: '28%' }} src={ require('../images/pressV2/09/02.gif') } data-src={ require('../images/pressV2/09/02.jpg') } />
                <img className="parallax transparent layer-2 lazyload" width="86%" style={{ marginLeft: '-9%', marginTop: '1%', zIndex: 25 }} src={ require('../images/pressV2/09/01.gif') } data-src={ require('../images/pressV2/09/01.png') } />
                
              
              </div>

              <div className="press-item">

                <p>Harper's Bazaar</p>
                <p>
                  print
                </p>
                <img className="layer-1" width="56%" style={{ }} src={ require('../images/pressV2/10/01.png') } />
                <img className="parallax layer-2 lazyload" width="34%" style={{ marginLeft: '54%', marginTop: '35%', zIndex: 25 }} src={ require('../images/pressV2/10/03.gif') } data-src={ require('../images/pressV2/10/03.png') } />
                <img className="layer-1 lazyload" width="100%" style={{marginLeft: '-4%' }} src={ require('../images/pressV2/10/02.gif') } data-src={ require('../images/pressV2/10/02.jpg') } />
                
              </div>

              <div className="press-item">

                <img className="parallax layer-1 lazyload" width="95%" style={{ zIndex: 0 }} src={ require('../images/pressV2/11/03.gif') } data-src={ require('../images/pressV2/11/03.jpg') } />
                <p style={{ position: 'relative', zIndex: 0 }}>The Cut</p>
                <p style={{ position: 'relative', zIndex: 0 }}>
                  <a href="https://www.thecut.com/2017/02/ab-screenwear-olya-petrova-jackson-interview-nyfw.html" target="_blank">nymag.com/thecut/2017/02/ab-screen-wear-olya-petrova-jackson-interview-nyfw.html</a>
                </p>
                
                <img className="transparent" width="57%" style={{ zIndex: 0 }} src={ require('../images/pressV2/11/01.png') } />

                <br/>

                <img className="transparent" width="22%" style={{ }} src={ require('../images/pressV2/11/05.png') } />

                <img className="layer-1 transparent" width="77%" style={{ marginLeft: '5%', marginTop: '20%' }} src={ require('../images/pressV2/11/04.png') } />
                
              </div>

              <div className="press-item">

                
                <p>The Cut</p>
                <p>
                  <a href="https://www.wgsn.com/blogs/ny-tech-forward-fashion-label-ab-screenwear/" target="_blank">wgsn.com/blogs/ny-tech-forward-fashion-label-ab-screenwear</a>
                </p>

                
                <img className="" width="48%" style={{ zIndex: 0 }} src={ require('../images/pressV2/12/01.png') } />

                <img className="parallax layer-2 lazyload" width="60%" style={{ marginTop: '40%', marginLeft: '4%' }} src={ require('../images/pressV2/12/03.gif') } data-src={ require('../images/pressV2/12/03.png') } />

                <img className="parallax layer-2 lazyload" width="50%" style={{ marginTop: '30%', marginLeft: '32%' }} src={ require('../images/pressV2/12/04.gif') } data-src={ require('../images/pressV2/12/04.png') } />


                <img className="lazyload" width="78%" style={{ position: 'relative', zIndex: 0 }} src={ require('../images/pressV2/12/02.gif') } data-src={ require('../images/pressV2/12/02.png') } />


                <img className="lazyload" width="75%" style={{ }} src={ require('../images/pressV2/12/05.gif') } data-src={ require('../images/pressV2/12/05.png') } />
                
              </div>


              <div className="press-item">

                
                <p>Forbes</p>
                <p>
                  <a href="https://www.forbes.com/sites/kurtmcvey/2017/02/22/olya-petrova-jacksons-fashion-line-abscreenwear-declares-rgb-the-new-black/#520ccde241c7" target="_blank">forbes.com/sites/kurtmcvey/2017/02/22/olya-petrova-jacksons-fashion-line-abscreenwear-declares-rgb-the-new-black/#520ccde241c7</a>
                </p>

                
                <img className="" width="56%" style={{ zIndex: 0 }} src={ require('../images/pressV2/13/01.png') } />

                <img className="transparent parallax layer-2 lazyload" width="80%" style={{ marginTop: '44%', marginLeft: '4%' }} src={ require('../images/pressV2/13/03.gif') } data-src={ require('../images/pressV2/13/03.png') } />


                <img className="lazyload" width="96%" style={{ position: 'relative', zIndex: 0 }} src={ require('../images/pressV2/13/02.gif') } data-src={ require('../images/pressV2/13/02.jpg') } />
                
              </div>
              
              <div className="press-item">

                
                <p>Metro UK newspaper</p>
                <p>
                  print
                </p>

                
                <img className="parallax transparent layer-2" width="55%" style={{ }} src={ require('../images/pressV2/14/01.png') } />

                <img className="lazyload parallax layer-2 transparent" width="62%" style={{ marginTop: '15%', marginLeft: '22%' }} src={ require('../images/pressV2/14/02.gif') } data-src={ require('../images/pressV2/14/02.png') } />

                <img className="lazyload" width="125%" style={{ marginLeft: '-35%', marginTop: '0%' }} src={ require('../images/pressV2/14/03.gif') } data-src={ require('../images/pressV2/14/03.jpg') } />
                
              </div>

              <div className="press-item">
                
                <p>DiFa</p>
                <p>
                  <a href="https://www.difa.me/22514/ab-screenwear-interview" target="_blank">difa.me/22514/ab-screenwear-interview</a>
                </p>

                
                <img className="" width="45%" style={{ }} src={ require('../images/pressV2/15/01.png') } />

                <img className="parallax transparent layer-2" width="70%" style={{ marginTop: '15%' }} src={ require('../images/pressV2/15/02.png') } />

                <img className="lazyload parallax transparent layer-2" width="50%" style={{ marginLeft: '20%', marginTop: '35%' }} src={ require('../images/pressV2/15/03.gif') } data-src={ require('../images/pressV2/15/03.png') } />

                <img className="lazyload" width="82%" style={{ marginTop: '15%' }} src={ require('../images/pressV2/15/04.gif') } data-src={ require('../images/pressV2/15/04.jpg') } />

                <img className="parallax transparent" width="82%" style={{  }} src={ require('../images/pressV2/15/05.png') } />
                
              </div>

              <div className="press-item">
                
                <p>Nylon Magazine</p>
                <p>
                  <a href="https://nylon.com/articles/april-showers-shoot" target="_blank">nylon.com/articles/april-showers-shoot</a>
                </p>

                
                <img className="transparent layer-2" width="85%" style={{ }} src={ require('../images/pressV2/16/01.png') } />

                <img className="parallax lazyload layer-2" width="42%" style={{ marginLeft: '35%', marginTop: '15%' }} src={ require('../images/pressV2/16/02.gif') } data-src={ require('../images/pressV2/16/02.png') } />

                <img className="parallax layer-2" width="28%" style={{ marginLeft: '60%', marginTop: '42%' }} src={ require('../images/pressV2/16/03.png') } />

                <img className="lazyload layer-1" width="82%" style={{ marginTop: '-10%' }} src={ require('../images/pressV2/16/04.gif') } data-src={ require('../images/pressV2/16/04.png') } />

              </div>

              <div className="press-item">
                
                <p>Buro 24/7</p>
                <p>
                  <a href="https://www.buro247.ru/fashion/fashionshows/13-mar-2017-ab-screenwear-aw-2017.html" target="_blank">buro247.ru/fashion/fashionshows/13-mar-2017-ab-screenwear-aw-2017.html</a>
                </p>

                
                <img className="transparent layer-2" width="43%" style={{ }} src={ require('../images/pressV2/17/01.png') } />

                

                <img className=" transparent parallax lazyload layer-1" width="90%" style={{ marginTop: '19%' }} src={ require('../images/pressV2/17/02.gif') } data-src={ require('../images/pressV2/17/02.png') } />

                <img className="parallax lazyload layer-2" width="65%" style={{ marginLeft: '20%', marginTop: '12%' }} src={ require('../images/pressV2/17/03.gif') } data-src={ require('../images/pressV2/17/03.png') } />

                <img className=" lazyload layer-2" width="70%" style={{ marginTop: '-30%' }} src={ require('../images/pressV2/17/04.gif') } data-src={ require('../images/pressV2/17/04.png') } />


              </div>




            </div>





        return (
          <div className="press">
    
            {press}
            {press}

          </div>
        );
    }
}

export default Press;
