import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router';

var Nav = (props) => {
    return (
        <nav className="leftbar">
          <h1 className="logo">
            <IndexLink to="/">
            Ab[Screen-<br/>
               wear]<br/><br/>
            </IndexLink>
          </h1>

          <ul className="menu">
            <li>
              <Link to="/releases" activeClassName="active">
                Ab[Releas-<br/>
                es:<br/>
                   Ab_Marfa/<br/>
                   SS_2016;<br/>
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
}

export default Nav;
