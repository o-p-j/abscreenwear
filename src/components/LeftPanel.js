import { stripIndent } from 'common-tags'
import React from 'react';
import { IndexLink } from 'react-router';
import getMenu from './getMenu';

const links = [
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
                    2/17_
                    Postmasters;
                `
            },
            {
                to: `/releases/kahn`,
                text: stripIndent`
                    1/17_
                    Kahn;
                `
            },
            {
                to: '/releases/marfa',
                text: stripIndent`
                    1/16_
                    Marfa;
                `
            }
        ]
    }
];

const bottomLinks = [
    {
        to: '/about',
        text: `About`
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

      {getMenu(links)}
      {getMenu(bottomLinks)}
    </nav>
);

export default LeftPanel;