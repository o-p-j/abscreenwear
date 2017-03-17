import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

import { Postmasters } from './Postmasters.jsx';

class Releases extends React.Component {
    componentDidMount() {

        //if(this.props.params.release === 'postmasters') {
            //return false;
            //var scrollableContainer = document.getElementById('parallax-scroller');
        //}

        const scrollableContainer = findDOMNode(this);
        
        scrollableContainer.scrollTop = 1;

        scrollableContainer.addEventListener('scroll', updateScrollPosition, false);

        function updateScrollPosition() {
            window.requestAnimationFrame(() => {
                const { scrollTop, scrollHeight, clientHeight } = scrollableContainer;

                // reached top scroll down
                if (!scrollTop) {
                    scrollableContainer.scrollTop = scrollHeight / 2 - 1;
                }
                // reached bottom
                else if (scrollTop >= scrollHeight / 2) {
                    scrollableContainer.scrollTop = scrollTop - (scrollHeight / 2);
                }
            });
        }
    }

    render() {

        if (this.props.params.release === 'postmasters'){
            return(
                <div id="Postmasters" className="releases">
                    <Postmasters />
                </div>
            )
        }

        const items = [];
            for (let num = 0; num < 10; num++) {

              if (this.props.params.release === 'marfa'){
                items.push(require(`../images/marfa/Ab_marfa${num}.jpg`));
              }

              if (this.props.params.release === 'kahn'){
                items.push(require(`../images/kahn/AbScreenwear_Kahn${num}.jpg`));
              }

              else console.log('I don\'t have images for the gallery you\'re looking for')

            }

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
