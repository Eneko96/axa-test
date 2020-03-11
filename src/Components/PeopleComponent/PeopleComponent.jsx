import React, { useEffect, useState } from 'react';
import NavBar from './../NavBar/NavBar';
import CardComponent from './../Card/CardComponent';
import PaginationComponent from './../Pagination/Pagination';

import './PeopleComponent.scss';

function People() {

    const [content, setContent] = useState(undefined);
    useEffect(() => {
        setContent(JSON.parse(localStorage.getItem('Myinfo')));
    }, []);

    function maping() {

        if (content !== undefined) {
            return (
                <div className="card-group cardTam">
                    {content.map((el, idx) => {
                        while (idx <= 23) {
                            return (
                                <CardComponent element={el} key={idx} />
                            )
                        }
                    })
                    }
                </div>
            )
        }
        else return <div>loading</div>
    }

    return (
        <div>
            <NavBar page="T own" />
            <div className="stylecard">
                {maping()}
                <PaginationComponent />
            </div>
        </div>
    )
}


export default People;