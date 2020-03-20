import React, { useEffect, useState } from 'react';
import NavBar from './../NavBar/NavBar';
import CardComponent from './../Card/CardComponent';
import PaginationComponent from './../Pagination/Pagination';
import { Spinner } from 'react-bootstrap';

import './PeopleComponent.scss';

function People() {

    const [count, SetCount] = useState(1);
    const [content, setContent] = useState(undefined);
    const [filter, setFilter] = useState(['', '']);
    useEffect(() => {
        setContent(JSON.parse(localStorage.getItem('Myinfo')));
    }, []);

    var number;

    function maping() {


        console.log(filter);
        if (content !== undefined) {
            console.log(count);
            number = content.length;
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
                            if (count === 1) {
                                while (idx <= 23) {
                                    return (
                                        <CardComponent element={el} key={idx} />
                                    )
                                }
                            }
                            else {
                                while (idx >= (count*23) && idx <= (count*23+23)) {
                                    return (
                                        <CardComponent element={el} key={idx} />
                                    )
                                }
                            }
                        })}
                    </div>
                )
            }
        }
        else return <div> <Spinner animation="grow" variant="light" /></div>
    }
    // console.log(Object.keys(content).length);

    return (
        <div>
            <NavBar page="Town" filt={setFilter} />
            <div className="stylecard">
                {maping()}
                <div className="Pagination">
                    <PaginationComponent pag={SetCount} currentPag={count} num={number} />
                </div>
            </div>
        </div>
    )
}


export default People;