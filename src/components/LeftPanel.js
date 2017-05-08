import { stripIndent } from 'common-tags'
import React from 'react';
import { IndexLink } from 'react-router';
import getMenu from './getMenu';

const middleLinks = [
    {
        className: `u-mg--bottom`,
        text: stripIndent`
            Ab[Releas-
            es:
        `,
        children: [
            {
                to: `/releases/postmasters`,
                text: stripIndent`
                    2/17
                    Postmasters;
                `
            },
            {
                to: `/releases/kahn`,
                text: stripIndent`
                    1/17
                    Kahn;
                `
            },
            {
                to: '/releases/marfa',
                text: stripIndent`
                    1/16
                    Marfa;
                `
            }
        ]
    }
];

const bottomLinks = [
    {
        to: '/about',
        className: 'u-mg-none--b',
        text: `About;`
    },
    {
        to: `/editorial`,
        className: 'u-mg-none--t',
        text: `   Press;`
    },
    {
        to: '/codes',
        text: `Ab[Codes:`,
        className: `u-mg-none`,
        children: [
            {
                to: '/codes',
                className: 'u-mg-none',
                text: stripIndent`
                    A; b;
                    S;c; r;
                    ee; n
                    ]
                `,
            }
        ]
    }
]

const LeftPanel = (props) => (
    <nav className="c-panel c-panel--left">
      <h1 className="logo">
        <IndexLink to="/" activeClassName="active">
            <img width="164" src={require('../images/logo.svg')} />
        </IndexLink>
      </h1>

      {getMenu(middleLinks)}
      {getMenu(bottomLinks)}
    </nav>
);

export default LeftPanel;
