import React from 'react';
import NavBar from './../NavBar/NavBar';
import {Button} from 'react-bootstrap';

import './PrimaryContent.scss';


function PrimaryContent() {
    return (
        <div >
            <NavBar page="Main"/>
            <div className="container style">
                <div className="centeredDiv">
                    <h1>Welcome to Brastlewark!</h1>
                    <h2>Click here to go through the city</h2>
                    <Button variant='primary' href='/People'>Enter</Button>
                </div>
            </div>
        </div>
    );
}
export default PrimaryContent;