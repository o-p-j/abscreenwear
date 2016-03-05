import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

const items = [];
for (let num = 0; num < 10; num++) {
    items.push(require(`../images/Ab_marfa${num}.jpg`));
}

class Releases extends React.Component {
    componentDidMount() {
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
        const images = items.concat(items).map((src, idx) => <img key={idx} src={src}/>);

        return (
            <div className="releases">
                {images}
            </div>
        );
    }
}

export default Releases;
