import React, { PropTypes } from 'react';
import ParallaxPage from '../components/ParallaxPage'

import '../styles/press.css';

class Press extends ParallaxPage {

    componentDidMount() {
        this.onMount()
    }

    render() {

      const press = 
            <div>
              
              <div className="press-item"> 
                <p>
                  Su La Po
                </p>
                <p>
                  <a href="http://su-la-po.com/content/2018/the-future-females-and-fashion" target="_blank">su-la-po.com/content/2018/the-future-females-and-fashion</a>
                </p>
                <img className="parallax" width="70.5%" style={{ mixBlendMode: 'multiply' }} src={ require('../images/pressV2/01/sulapo.png') } />
                <img width="83%" src={ require('../images/pressV2/01/1.jpg') } />
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
                <img width="70%" style={{ marginLeft: '-4%' }} src={ require('../images/pressV2/02/01.jpg') } />
                <img width="24%" className="parallax layer-1" style={{ marginLeft: '46%', marginTop: '40%' }} src={ require('../images/pressV2/02/02.png') } />
              </div>
              <div className="press-item">

                <p>Garage magazine</p>
                <p>
                  <a href="http://garage.vice.com/en_us/article/43n85w/art-and-fashion-get-a-room-you-two" target="_blank">garage.vice.com/en_us/article/43n85w/art-and-fashion-get-a-room-you-two</a>
                </p>
                <img width="67%" src={ require('../images/pressV2/03/garage.jpg') } />
                <img className="parallax layer-1" style={{ marginTop: '2%', marginLeft: '68%' }} width="14%" src={ require('../images/pressV2/03/vice.png') } />
                <img width="80%" style={{ marginTop: '4%' }} src={ require('../images/pressV2/03/01.jpg') } />
                <img style={{ left: 0, marginTop: '5%' }} width="100%" src={ require('../images/pressV2/03/garage_crop.jpg') } />
                
              </div>
              <div className="press-item">
                <p>Artsy</p>
                <p>
                  <a href="http://artsy.net/artist/ab-screenwear" target="_blank">artsy.net/artist/ab-screenwear</a>
                </p>
                <img className="layer-2" width="59%" style={{ marginTop: '1.5%' }} src={ require('../images/pressV2/04/artsy.png') } />
                <img className="parallax layer-1" width="48%" style={{ marginTop: '16%', marginLeft: '31%' }} src={ require('../images/pressV2/04/bg.png') } />
                <img className="layer-2" width="58%" style={{ marginTop: '2%' }} src={ require('../images/pressV2/04/text.png') } />
                <img className="layer-2" width="83%" src={ require('../images/pressV2/04/01.jpg') } />
              </div>
              
              <div className="press-item">
                <p>Address Magazine</p>
                <p>
                  <a href="http://addresspublications.com/get-a-room-exhibition" target="_blank">addresspublications.com/get-a-room-exhibition</a>
                </p>
                <img className="parallax layer-2" width="94%" style={{ marginLeft: '-4%', marginTop: '1%' }} src={ require('../images/pressV2/05/address.png') } />
                <img className="" width="83%" style={{ marginTop: '10%', zIndex: 5, mixBlendMode: 'multiply' }} src={ require('../images/pressV2/05/01.jpg') } />
                <img className="parallax" width="83%" style={{ marginTop: '-14%', zIndex: 0 }} src={ require('../images/pressV2/05/text.png') } />
              </div>
              <div className="press-item">

                <p>Office magazine</p>
                <p>
                  <a href="http://officemagazine.net/abscreenwear-and-your-bodys-full-potential" target="_blank">officemagazine.net/abscreenwear-and-your-bodys-full-potential</a>
                </p>
                <img className="" width="47%" style={{ marginTop: '1%' }} src={ require('../images/pressV2/06/office.png') } />
                <img className="parallax layer-2" width="58%" style={{ marginTop: '28%', mixBlendMode: 'multiply' }} src={ require('../images/pressV2/06/text.png') } />
                <img width="83%" style={{ marginTop: '', zIndex: 0 }} src={ require('../images/pressV2/06/01.jpg') } />
              
              </div>
              <div className="press-item">

                <p>Elle magazine</p>
                <p>
                  <a href="http://elle.ru/moda/fashion-blog/tehnika-molodeji-vyisokie-tehnologii-v-mode/" target="_blank">elle.ru/moda/fashion-blog/tehnika-molodeji-vyisokie-tehnologii-v-mode/</a>
                </p>
                <img className="" width="47%" style={{ marginTop: '1%' }} src={ require('../images/pressV2/06/office.png') } />
                <img className="parallax layer-2" width="58%" style={{ marginTop: '28%', mixBlendMode: 'multiply' }} src={ require('../images/pressV2/06/text.png') } />
                <img width="83%" style={{ marginTop: '', zIndex: 0 }} src={ require('../images/pressV2/06/01.jpg') } />
              
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
