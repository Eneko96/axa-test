import React, { useEffect, useState } from 'react';
import NavBar from './../NavBar/NavBar';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

import './UserComponent.scss';


function User(props) {

    const [el, setEl] = useState(0);
    useEffect(() => {
        setEl(JSON.parse(localStorage.getItem('element')));
    }, []);

    function getListArray() {
        var array = [];
        Object.keys(el).map((elem,idx) => {
            if (elem !== 'thumbnail' && elem !== 'id') {
                array.push(elem);
            }
        });
        return array;
    }

    function InfoList() {
        return (
            <ListGroup className="list-group-flush">
                {
                    getListArray().map((elem,idx) => {
                        return (
                            <ListGroupItem>{elem}:{' ' + el[elem]}</ListGroupItem> 
                        )
                    })
                }
            </ListGroup>
        )
    }

    return (
        <div>
            <NavBar page={el.name} />
            <div className="UserCard">
                <Card>
                    <Card.Body>
                        <Card.Title>{el.name}</Card.Title>
                    </Card.Body>
                    {InfoList()}
                </Card>
            </div>
        </div>
    )
}

export default User;