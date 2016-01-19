import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';


export class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <nav classname="leftbar">
          <h1 className="logo">
            Ab[Screen-wear]
          </h1>
          <ul className="menu">
            <li>
              <IndexLink to="/">
                Ab[Releas-
                es;
              </IndexLink>
            </li>
            <li>
              <Link to="/about">
                Ab[Codes:]

              </Link>
            </li>
            <li>
              <a href="#">
                About;<br/><br/>
              </a>
            </li>
            <li>
              <a href="#">
                Ab[Edi-torial]
              </a>
            </li>
          </ul>
        </nav>

        <main className="main">{this.props.children}</main>

        <aside className="rightbar">
          <a href="#">Ab[Loves;</a>

          <ul className="links">
            <li>fb;</li>
            <li>ig;</li>
            <li>Tumblr]</li>
          </ul>
        </aside>
      </div>
    );
  }
}
