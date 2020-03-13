import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, DropdownButton, ButtonGroup, Dropdown } from 'react-bootstrap';

function NavBar(props) {
    const [act,setAct] = useState(['','',''])

    function dropDown() {

        function isActive(elem) {
            if (elem !== '') {
                setAct[0]('active')
            }
            else setAct('');
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
                    <Dropdown.Item eventKey="1">Age</Dropdown.Item>
                    <Dropdown.Item eventKey="2" onChange={isActive(act[0])} active={act}>Profession</Dropdown.Item>
                    <Dropdown.Item eventKey="3" active={isActive(act)}>
                        Active Item
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>{' '}

            </div>
        )
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
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default NavBar;