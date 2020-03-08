import React from 'react';
import NavBar from './../NavBar/NavBar';
import CardComponent from './../Card/CardComponent';

function People() {
    return (
        <div>
            <NavBar />
            <div className="stylecard">
                <CardComponent />
            </div>
        </div>
    )
};

export default People;