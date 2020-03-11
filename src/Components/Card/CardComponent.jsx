import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

import './CardComponent.scss';

function CardComponent(props) {

    function listProps(listP) {
        var arr = [];
        for (var x in listP) {
            if ((x !== 'id' && x !== 'name' && x !== 'thumbnail') && (arr.length < 3)) {    
                arr.push(x);
            }
        }
        console.log(arr)
        return (
            <ListGroup className="list-group-flush">

                {arr.map((el, idx) => {
                    return (
                        <ListGroupItem>{el}:{' ' + listP[el]}</ListGroupItem>
                    )
                })}
            </ListGroup>
        )
    }

    return (
        <Card onClick='' className="Card">
            <Card.Img className="holi" variant="top" src={props.element.thumbnail} />
            <Card.Body>
                <Card.Title>{props.element.name}</Card.Title>
            </Card.Body>
            {listProps(props.element)}
        </Card>
    );
}

export default CardComponent;