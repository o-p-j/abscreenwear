import React from 'react';
import { stripIndent } from 'common-tags';
import Button from './Button';
import getMenu from './getMenu';

const topLinks = [
    {
        to: `/editorial`,
        text: `Ab[Press;`
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

const appointmentsLabel = stripIndent`
    Appoint-
        ments
`

const RightPanel = (props) => (
    <aside className="c-panel c-panel--right">
        <div className="shopButton">
            <a href="http://abscreenwear.shop/" target="_blank">
                <Button>Shop</Button>
            </a>
        </div>

        {getMenu(topLinks)}

        <div>
            <a href="mailto:ab@abscreenwear.com">
                <Button slowly>{appointmentsLabel}</Button>
            </a>
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
                    instagram;
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
