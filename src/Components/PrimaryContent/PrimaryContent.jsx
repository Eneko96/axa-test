import React from 'react';
import NavBar from './../NavBar/NavBar';

import './PrimaryContent.scss';


function PrimaryContent() {
    return (
        <div >
            <NavBar/>
            <div className="container style">
                Hello Primary Content
            </div>
        </div>
    );
}
export default PrimaryContent;