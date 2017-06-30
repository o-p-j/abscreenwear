import React from 'react';
import cls from 'classnames';
import { stripIndent } from 'common-tags';
import BarcodeButton from './BarcodeButton';
import * as Icons from './icons'
import getMenu from './getMenu';

const topLinks = [
    {
        to: `/labs`,
        text: `ab:labs;`
    }
]

const middleLinks = [
    {
        to: `/fabs`,
        className: 'u-mg-none--b c-links__indent--1',
        text: `ab:fabs;`
    },
    {
        to: `/favs`,
        className: 'u-mg-none--t',
        text: `ab:favs;`
    }
];

const RightPanel = (props) => (
    <aside className={cls('c-panel', 'c-panel--right', props.className)}>
        <div className="c-shop-button-container">
            <a href="http://abscreenwear.shop/" target="_blank">
                <BarcodeButton>Shop</BarcodeButton>
            </a>
        </div>

        {getMenu(topLinks)}
        {getMenu(middleLinks)}

        <div>
            <a href="mailto:ab@abscreenwear.com">
                request<br/>
                appointment;
            </a>
        </div>

        <ul className="c-links">
            <li>
                <button
                    className="c-button"
                    onClick={props.toggleSubscribeForm}
                >
                    ab:news;
                </button>
            </li>
            <li>
                <a href="mailto:ab@abscreenwear.com">
                    email
                </a>
            </li>
            <li className="c-links__indent--06">
                <a href="https://www.facebook.com/AbScreenwear-1656694317934158/" target="_blank">
                    http<span className="_short-spacing">s://</span><Icons.Facebook />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/abscreenwear/" target="_blank">
                    insta <Icons.Instagram />
                </a>
            </li>
            <li>
                <a href="https://vimeo.com/user57806152" target="_blank">
                    <Icons.Vimeo />.com
                </a>
            </li>
            <li>
                <a href="https://twitter.com/Abscreenwear" target="_blank">
                    <Icons.Twitter />
                </a>
            </li>
        </ul>
    </aside>
);

export default RightPanel;
