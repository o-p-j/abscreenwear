import React from 'react';
// new
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router';

const links = [{
    to: '/about',
    text: `About;`
    }, {
    to: '/editorial',
    text: (
    `Press;`
    )
    }, {
    to: '/labs',
    text: `Labs;`
    }, {
    to: '/loves',
    text: `Loves;`
    }, {
    to: '/editorial',
    text: (
    `

        News
    sign up; 
    `
    )
}];

const rightPanelItems = links.map((link, idx) => (
    <li key={idx}>
        <Link activeClassName="active" to={link.to}>
            <pre>{link.text}</pre>
        </Link>
    </li>
));

var RightPanel = () => {
    return (
        <aside className="rightpanel">
            <ul className="menu">

              <h1 className="shopButton">
                  <img width="150" src={require('../images/Ab_shop_button.png')}/>
              </h1>

              {rightPanelItems}
            </ul>


            <ul className="links">
                <li>
                    <a href="mailto:ab@abscreenwear.com"><span className="text">email;</span></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/abscreenwear/" target="_blank">
                        <span className="text">ig;</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/AbScreenwear-1656694317934158/" target="_blank"><span className="text">fb;</span>   </a>
                </li>
                <li>
                    <a href="https://abscreenwear.tumblr.com" target="_blank"><span className="text">Tumblr</span></a>
                </li>
                <li>]   </li>
            </ul>
        </aside>
    );
};

export default RightPanel;
