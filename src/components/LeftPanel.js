import { stripIndent } from 'common-tags'
import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router';
import getMenu from './getMenu'

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
                    A2/17_
                    Postmasters;
                `
            },
            {
                to: `/releases/kahn`,
                text: stripIndent`
                    A1/17_
                    Kahn;
                `
            },
            {
                to: '/releases/marfa',
                text: stripIndent`
                    A1/16_
                    Marfa;
                `
            }
        ]
    },
    {
        to: '/about',
        text: `About`
    },
    {
        to: '/codes',
        text: `Ab[Codes:`,
        className: `c-menu__last`,
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
];

const LeftPanel = (props) => (
    <nav className="c-panel c-panel--left">
      <h1 className="logo">
        <IndexLink to="/" activeClassName="active">
            <img width="180" src={require('../images/logo.svg')}/>
        </IndexLink>
      </h1>

      {getMenu(links)}
    </nav>
);

export default LeftPanel;
