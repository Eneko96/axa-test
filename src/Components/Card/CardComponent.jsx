import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import './CardComponent.scss';

function CardComponent(props) {

    function listProps(listP) {
        var arr = [];
        for (var x in listP) {
            if ((x !== 'id' && x !== 'name' && x !== 'thumbnail') && (arr.length < 3)) {
                arr.push(x);
            }
        }
        return (
            <ListGroup className="list-group-flush">

                {arr.map((el, idx) => {
                    return (
                        <ListGroupItem key={idx}>{el}:{' ' + listP[el]}</ListGroupItem>
                    )
                })}
            </ListGroup>
        )
    }

    const history = useHistory();

    function handleClick() {
        localStorage.setItem('element',JSON.stringify(props.element));
        history.push(`/User:${props.element.id}`);
    }

    return (
        <Card onClick={handleClick} className="Card">
            <Card.Img className="holi" variant="top" src={props.element.thumbnail} />
            <Card.Body>
                <Card.Title>{props.element.name}</Card.Title>
            </Card.Body>
            {listProps(props.element)}
        </Card>
    );
}

export default CardComponent;