import React from 'react';
import { Pagination } from 'react-bootstrap';

import './Paginator.scss';

function PaginationComponent(props) {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={props.pag(active)}>{number}</Pagination.Item>
        );
    }

    return (
        <div className="Paginator">
            <Pagination size="sm">{items}</Pagination>
        </div>
    );
}

export default PaginationComponent;