import React from 'react';


var RightPanel = () => {
    return (
        <aside className="rightpanel">

            <h1 className="labsLogo">
                <img width="90" src={require('../images/ab_lab_logo.png')}/>
            </h1>

            <ul className="links">
                <li>
                    <a href="mailto:ab@abscreenwear.com"><span className="text">email;</span></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/abscreenwear/" target="_blank">
                        <span className="text">ig;</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/AbScreenwear-1656694317934158/" target="_blank"><span className="text">fb;</span>   </a>
                </li>
                <li>
                    <a href="https://abscreenwear.tumblr.com" target="_blank"><span className="text">Tumblr</span></a>
                </li>
                <li>]   </li>
            </ul>
        </aside>
    );
};

export default RightPanel;
