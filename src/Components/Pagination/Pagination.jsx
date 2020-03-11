import React from 'react';
import { Pagination } from 'react-bootstrap';


function PaginationComponent() {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    const paginationBasic = (
        <div>
            <Pagination size="sm">{items}</Pagination>
        </div>
    );

    return(paginationBasic);
}

export default PaginationComponent;