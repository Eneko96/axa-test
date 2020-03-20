import React, { useEffect, useState } from 'react';
import NavBar from './../NavBar/NavBar';
import CardComponent from './../Card/CardComponent';
import PaginationComponent from './../Pagination/Pagination';
import { Spinner } from 'react-bootstrap';

import './PeopleComponent.scss';

function People() {

    const [count,SetCount] = useState(1);
    const [content, setContent] = useState(undefined);
    const [filter, setFilter] = useState(['', '']);
    useEffect(() => {
        setContent(JSON.parse(localStorage.getItem('Myinfo')));
    }, []);

    function maping() {

        console.log(filter);
        if (content !== undefined) {
            if (filter[0] !== '' && filter[1] !== '') {
                return (
                    <div className="card-group cardTam">
                        {content.map((el, idx) => {
                            if (el.age === parseInt(filter[1])) {
                                return (
                                    <CardComponent element={el} key={idx} />
                                )
                            }
                        })
                        }
                    </div>
                )
            }
            else {

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
        }
        else return <div> <Spinner animation="grow" variant="light" /></div>
    }

    function counter() {
        console.log(count);
    }

    return (
        <div>
         {counter()}
            <NavBar page="Town" filt={setFilter} />
            <div className="stylecard">
                {maping()}
                <div className="Pagination">
                    <PaginationComponent pag={SetCount}/>
                </div>
            </div>
        </div>
    )
}


export default People;