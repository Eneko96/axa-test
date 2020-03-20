import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';

import './Paginator.scss';

function PaginationComponent(props) {
    const [active, setActive] = useState(1);
    let items = [];
    var rounded = (Math.round(props.num / 23));
    console.log(props.currentPag)
    console.log(props.currentPag+5)
    for (let number = props.currentPag; number <= props.currentPag+3; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={() => paginator(number)}>{number}</Pagination.Item>
        );
    }

    function paginator(element) {
        setActive(element);
        props.pag(element);
    }
    console.log(props.num)
    return (
        <div className="Paginator">
            <Pagination size="sm">
                <Pagination.Prev onClick={() => paginator(props.currentPag-1)}/>
                {items}
                <Pagination.Next onClick={() => paginator(props.currentPag+1)}/>
            </Pagination>
        </div>
    );
}

export default PaginationComponent;