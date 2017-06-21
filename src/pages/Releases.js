import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';


import ParallaxPage from '../components/ParallaxPage'

class Releases extends ParallaxPage {

    render() {

        var items = [];

          if (this.props.params.release === 'marfa'){
              items = [];
              for (let num = 0; num < 10; num++) {    
                items.push(require(`../images/marfa/Ab_marfa${num}.jpg`));
              }
          }

          if (this.props.params.release === 'kahn'){
              items = [];
              for (let num = 0; num < 31; num++) {
                items.push(require(`../images/kahn/AbScreenwear_Kahn${num}.jpg`));
              }
          }

          else console.log('I don\'t have images for the gallery you\'re looking for')

        const images = items.concat(items).map((src, idx) => <img key={idx} src={src}/>);
        if (this.props.params.release) {
          console.log('my parameter is: ', this.props.params.release)
        }
        else {
          console.log('param aint workin')
        }

        return (
            <div className="releases">
                {images}
            </div>
        );
    }
}

export default Releases;
