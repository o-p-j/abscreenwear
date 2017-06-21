import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

class Releases extends React.Component {

    constructor(props){
        super(props);
        this.container = null
        var $this = this
        this.updateScrollPosition = function() {
          window.requestAnimationFrame(() => {
              const { scrollTop, scrollHeight, clientHeight } = $this.container;

              // reached top scroll down
              if (!scrollTop || scrollTop <= 0) {
                  $this.container.scrollTop = scrollHeight / 2 - 1;
              }
              // reached bottom
              else if (scrollTop >= scrollHeight / 2) {
                  $this.container.scrollTop = scrollTop - (scrollHeight / 2);
              }
          });
        }
    }

    componentDidMount() {

        this.container = document.querySelector('.c-app__content');
        
        this.container.scrollTop = 1;

        this.container.addEventListener('scroll', this.updateScrollPosition, false);

    }

    componentWillUnmount() {
      this.container.removeEventListener('scroll', this.updateScrollPosition, false);
    }

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
