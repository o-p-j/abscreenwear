import React from 'react';
import { Link } from 'react-router';

const getMenu = (items) => (
    <ul className="c-menu">
        {items.map((item, index) => {
            const preText = <pre>{item.text}</pre>

            return (
                <li
                    key={index}
                    className={`c-menu__item ${item.className || ''}`}
                >
                    { item.to ? (
                        <Link activeClassName="active" to={item.to}>
                            {preText}
                        </Link>
                    ) : item.href ? (
                        <a href={item.href} target="_blank">
                            {preText}
                        </a>
                    ) : preText }
                    { item.children ? getMenu(item.children) : null }
                </li>
            )
        })}
    </ul>
);

export default getMenu
