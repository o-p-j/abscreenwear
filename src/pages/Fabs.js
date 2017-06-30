import React, { PropTypes } from 'react';

import '../styles/fabs.css';

class Fabs extends React.Component {

    componentWillUnmount() {
      window.clearInterval(window.fab_interval1);
      window.clearInterval(window.fab_interval2);
    }

    render() {

        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }

        var coming_soon = [];

        var cs_0 = <i>comingsoon</i>

        var cs_1 = <i>comingsoon comingsoon</i>

        var cs_2 = <i>comingsooncomingsoon</i>

        var cs_3 = <i> </i>

        var cs_4 = <i>comingsoon</i>

        var cs_5 = <i>comingsoon</i>

        var cs_6 = <i>comingsoon comingsoon</i>

        var cs_7 = <i>comingsooncomingsoon</i>

        var cs_8 = <i>coming soon</i>

        var cs_9 = <i>comingsoon</i>

        var coming_soon_parts = [cs_0,cs_1,cs_2,cs_3,cs_4,cs_5,cs_6,cs_7,cs_8,cs_9];
        shuffleArray(coming_soon_parts);
        for(var n=0; n<5; n++) {
          for(var i=0; i < 5; i++) {
            coming_soon.push(coming_soon_parts[i]);
          }
        }

        coming_soon.join(' ');

        

        window.fab_interval1 = setInterval(function() {
          shuffleArray(coming_soon_parts)
        }, 2000);

        window.fab_interval2 = setInterval(function() {
          
          const cs = document.getElementById('cs');
          var new_parts = coming_soon_parts;

          console.log(new_parts);
          
          for(var c=0; c<coming_soon_parts.length; c++) {
            var parent = document.createElement("i");
            parent.append(coming_soon_parts[c].props.children);
            cs.prepend(parent);
          }
          
        }, 250)

        return (
          <div className="fabs">
          <b id="cs">
            
          </b>
            

          </div>
        );
    }
}

export default Fabs;
