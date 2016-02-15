import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router';

var Nav = (props) => {
    return (
        <nav className="leftbar">
          <h1 className="logo">
            <IndexLink to="/" activeClassName="active">
            Ab[Screen-<br/>
               wear]<br/><br/>
            </IndexLink>
          </h1>

          <ul className="menu">
            <li>
              <Link to="/releases" activeClassName="active">
                Ab[Releas-<br/>
                es:<br/>
                  A1/16/_<br/>
                  Marfa/b1.1;<br/>
                  ]<br/><br/>
              </Link>
            </li>
            <li>
              <Link to="/codes" activeClassName="active">
                Ab[Codes:<br/>
                   A; b;<br/>
                   S;c; r;<br/>
                   ee; n<br/>
                  ]<br/><br/>
              </Link>
            </li>
            <li>
              <Link to="/about" activeClassName="active">
                About;<br/><br/>
              </Link>
            </li>
            <li>
              <Link to="/editorial" activeClassName="active">
                Ab[Edi-<br/>
                  torial]
              </Link>
            </li>
          </ul>
        </nav>
    );
};

export default Nav;
