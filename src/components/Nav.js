import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router';

const links = [{
    to: '/releases',
    text: (
`Ab[Releas-
es:

  A2/17_
  Post-
    masters;

  A1/17_
    Kanh;

  A1/16_
    Marfa;
  ]`
    )
}, {
    to: '/codes',
    text: (
`Ab[Codes:
   A; b;
   S;c; r;
   ee; n
  ]`
    )
}];

const navItems = links.map((link, idx) => (
    <li key={idx}>
        <Link activeClassName="active" to={link.to}>
            <pre>{link.text}</pre>
        </Link>
    </li>
));

var Nav = (props) => {
    return (
        <nav className="leftbar">
          <h1 className="logo">
            <IndexLink to="/" activeClassName="active">
                <img width="180" src={require('../images/logo.svg')}/>
            </IndexLink>
          </h1>

          <ul className="menu">
            {navItems}
          </ul>
        </nav>
    );
};

export default Nav;
