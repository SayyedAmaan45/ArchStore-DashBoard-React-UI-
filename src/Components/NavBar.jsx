import React from 'react';
import goku from "../goku.jpg"; // Make sure the path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faChartBar, faLayerGroup, faShareSquare, faClock, faUserFriends, faLifeRing, faCog } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-icons">

                <div className="navbar-icon">
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="navbar-icon">
                    <FontAwesomeIcon icon={faHome} />
                </div>
                <div className="navbar-icon active">
                    <FontAwesomeIcon icon={faChartBar} />
                </div>
                <div className="navbar-icon">
                    <FontAwesomeIcon icon={faLayerGroup} />
                </div>
                <div className="navbar-icon">
                    <FontAwesomeIcon icon={faShareSquare} />
                </div>
                <div className="navbar-icon">
                    <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="navbar-icon">
                    <FontAwesomeIcon icon={faUserFriends} />
                </div>
            </div>
            <div className="navbar-bottom-icons">
                <div className="navbar-icon">
                    <FontAwesomeIcon icon={faLifeRing} />
                </div>
                <div className="navbar-icon">
                    <FontAwesomeIcon icon={faCog} />
                </div>
                <div className="navbar-profile-picture">
                    <img src={goku} alt="Profile Picture" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
