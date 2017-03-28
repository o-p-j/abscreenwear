import { stripIndent } from 'common-tags'
import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router';

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

const Menu = (props) => (
    <ul className="c-menu">
        {props.children}
    </ul>
)

const getNavItems = (items) => items.map((item, idx) => (
    <li key={idx} className={`c-menu__item ${item.className || ''}`}>
        { item.to ?
            <Link activeClassName="active" to={item.to}>
                <pre>{item.text}</pre>
            </Link> :
            <pre>{item.text}</pre>
        }
        { item.children ? (
            <Menu>
                {getNavItems(item.children)}
            </Menu>
        ) : null }
    </li>
));

const LeftNav = (props) => (
    <nav className="c-left-menu">
      <h1 className="logo">
        <IndexLink to="/" activeClassName="active">
            <img width="180" src={require('../images/logo.svg')}/>
        </IndexLink>
      </h1>

      <Menu>{getNavItems(links)}</Menu>
    </nav>
);

export default LeftNav;
