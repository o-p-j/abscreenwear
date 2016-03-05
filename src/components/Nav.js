import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router';

function flatMap(array, fn) {
    var result = [];

    array.forEach((item, idx) => fn(item, idx).forEach(resultItem => result.push(resultItem)));

    return result;
}

function replaceSpaces(parentKey, str, idx) {
    const key = `${parentKey}.${idx}`;

    if (/^\s+$/.test(str)) {
        return str.split('').map((space, spaceIndex) => <span key={`${key}.${spaceIndex}`}> </span>);
    }
    return [<span className="text" key={key}>{str}</span>];
}

function linkRenderer(parentKey, text) {
    return flatMap(text.split(/\n/), (chunk, idx) => {
        return flatMap(chunk.split(/\b/), replaceSpaces.bind(this, `${parentKey}.${idx * 2}`))
            .concat(<br key={`${parentKey}.${idx * 2 + 1}`} />);
    });
}

const links = [{
    to: '/releases',
    text: (
`Ab[Releas-
es:
  A1/16_
  Marfa/b1.1;
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
}, {
    to: '/about',
    text: `About;`
}, {
    to: '/editorial',
    text: (
`Ab[Edi-
  torial]`
    )
}];

const navItems = links.map((link, idx) => (
    <li key={idx}>
        <Link activeClassName="active" to={link.to}>{linkRenderer(idx, link.text)}</Link>
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
