import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

import lazysizes from 'lazysizes'

class DefaultPage extends React.Component {

  constructor(props){
        super(props);
        this.container = null
        this.dampen = true
        var $this = this
        this.updateScrollPosition = function() {
          window.requestAnimationFrame(() => {
              const { scrollTop, scrollHeight, clientHeight } = $this.container;

              // reached top scroll down
              if (!scrollTop || scrollTop <= 0) {
                  $this.container.scrollTop = scrollHeight / 2 - 1;
                  $this.dampen = false;
              }
              // reached bottom
              else if (scrollTop >= scrollHeight / 2) {
                  $this.container.scrollTop = scrollTop - (scrollHeight / 2);
                  $this.dampen = false;
              }
          });
        }
    }

    componentDidMount() {

        this.container = document.querySelector('.c-app__content');

        var $this = this
        
        $this.container.scrollTop = 1;

        $this.container.addEventListener('scroll', $this.updateScrollPosition, false);

        var scrollPos = $this.container.scrollTop;

        const speed = 1.5;
            
        var lastScrollPos = 0;
        var scrollDamp = 0;

        const parallaxChildren = document.querySelectorAll(".parallax");

        parallaxAnim();

        function parallaxAnim() {
            
            window.requestAnimationFrame(() => {

                scrollPos = $this.container.scrollTop;
                
                scrollDamp += (scrollPos - lastScrollPos) / 15;
                
                if($this.dampen)
                    scrollDamp *= 0.96;
                else
                    scrollDamp = 0;

                var scrollH = -(scrollPos) / speed;

                for (var i=0; i < parallaxChildren.length; i++) {

                    var el = parallaxChildren[i];

                    var modifier = 0;

                    if(i % 2 == 0) {
                        var modifier = 0.5;
                    }

                    if(i % 3 == 0) {
                        var modifier = 1.5;
                    }

                    var damp = scrollDamp + scrollDamp * modifier;
                    var scroll = damp;

                    //if(isInView(el)) {

                        el.style.transform = 'translate3d(0,'+(round(scroll))+'px,0)'
                        // if(el.style.opacity < 1)
                        //     el.style.opacity = 1
                    //} 

                }

                lastScrollPos = scrollPos;

                if($this.dampen === false)
                    $this.dampen = true;

                parallaxAnim();
                    
            });

        }

        function round(num) {
          return Math.round(num * 10) / 10
        }
    }

    componentWillUnmount() {
      this.container.removeEventListener('scroll', this.updateScrollPosition, false);
    }

}

export default DefaultPage;
