import React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router';
import { stripIndent } from 'common-tags'
import getMenu from './getMenu'

const topLinks = [
    {
        to: `/editorial`,
        text: `Press;`
    },
    {
        to: `/labs`,
        text: `Labs;`
    },
    {
        to: `/loves`,
        text: `Loves;`
    }
];

const RightPanel = (props) => (
    <aside className="c-panel c-panel--right">
        <h1 className="shopButton">
            <img
                width="170"
                src={require('../images/shop.gif')}
            />
        </h1>

        {getMenu(topLinks)}

        <div>
            <img
                width="170"
                src={require('../images/appointments.gif')}
            />
        </div>

        <ul className="c-links">
            <li onClick={props.toggleSubscribeForm}>
                <pre>News</pre>
                <pre>sign up;</pre>
            </li>
            <li className="c-links__space">
                <a href="mailto:ab@abscreenwear.com">
                    email;
                </a>
            </li>
            <li className="c-links__indent--1">
                <a href="https://www.instagram.com/abscreenwear/" target="_blank">
                    ig;
                </a>
            </li>
            <li className="c-links__indent--2">
                <a href="https://www.facebook.com/AbScreenwear-1656694317934158/" target="_blank">
                    fb;
                </a>
            </li>
            <li>
                <a href="https://twitter.com/Abscreenwear" target="_blank">
                    twitter;
                </a>
            </li>
            <li className="c-links__indent--2">]</li>
        </ul>
    </aside>
);

export default RightPanel;
