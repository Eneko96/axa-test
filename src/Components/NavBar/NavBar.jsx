import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, DropdownButton, ButtonGroup, Dropdown } from 'react-bootstrap';

import './NavBar.scss';

function NavBar(props) {
    const [act, setAct] = useState(['', '', '']);
    const [text, setText] = useState('');
    const [filtElem, setFiltElement] = useState('');

    function dropDown() {

        function isActive(elem, id) {
            if (elem === '') elem = 'active';
            else elem = '';
            var aux = ['', '', ''];
            aux[id] = elem;
            setAct(aux);
            
            if (id === '0') {
                setFiltElement('Age');
            }
            else if (id === '1') {
                setFiltElement('Profession');
            }
            else setFiltElement('Name');
        }

        return (
            <div>
                <DropdownButton
                    as={ButtonGroup}
                    key={'variant'}
                    id={`dropdown-variants-${'variant'}`}
                    variant={'variant.toLowerCase()'}
                    title="Filter"
                    >
                    <Dropdown.Item eventKey="0" onClick={() => isActive(act[0], '0')} active={`${act[0]}`}>Age</Dropdown.Item>
                    <Dropdown.Item eventKey="1" onClick={() => isActive(act[1], '1')} active={act[1]}>Profession</Dropdown.Item>
                    <Dropdown.Item eventKey="2" onClick={() => isActive(act[2], '2')} active={act[2]}>
                        Name
                    </Dropdown.Item>
                </DropdownButton>
            </div>
        )
    }

    const handleChange = event => {
        setText(event.target.value);
    }

    function sendParent() {
        props.filt([filtElem,text]);
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">{props.page}</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/People">Barstlewark</Nav.Link>
                </Nav>
                {dropDown()}
                <Form inline>
                    <FormControl type="text" value={text} onChange={handleChange} placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info" onClick={sendParent}>Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default NavBar;