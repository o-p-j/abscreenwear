import React from 'react';
import cls from 'classnames';
import { stripIndent } from 'common-tags'
import { IndexLink } from 'react-router';
import getMenu from './getMenu';

const topLinks = [
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
                    2:17
                    postmasters;
                `
            },
            {
                to: `/releases/kahn`,
                text: stripIndent`
                    1:17
                    kahn;
                `
            },
            {
                to: '/releases/marfa',
                text: stripIndent`
                    1:16
                    marfa;
                `
            }
        ]
    }
];

const middleLinks = [
    {
        to: '/about',
        className: 'u-mg-none--b',
        text: `About;`,
        children: [
            {
                to: `/press`,
                className: 'u-mg-none--t',
                text: `Press;`
            },
        ]
    },
    

]

const bottomLinks = [
    {
        to: '/codes',
        text: ``,
        className: `u-mg-none--b`,
        children: [
            {
                to: '/codes',
                text: `Codes:`,
                className: `u-mg-none--t`,
            },
            {
                to: '/codes',
                className: 'u-mg-none--t',
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
    <aside className={cls('c-panel', 'c-panel--left', props.className)}>
      <h1 className="logo">
        <IndexLink to="/" activeClassName="active">
            <img width="164" src={require('../images/logo.svg')} />
        </IndexLink>
      </h1>

      {getMenu(topLinks)}
      {getMenu(middleLinks)}
      {getMenu(bottomLinks)}
    </aside>
);

export default LeftPanel;
