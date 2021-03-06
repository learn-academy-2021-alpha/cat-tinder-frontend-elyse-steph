import React, { Component } from "react";
import { Nav, NavItem, NavLink, Jumbotron, Container  } from 'reactstrap';

class Header extends Component {

    render () {
        return (
            <>
            <div>
                <Nav className="navbar">
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/catindex">Index</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/catnew">New</NavLink>
                    </NavItem>
                </Nav>
            </div>
            <div>
                <Jumbotron fluid className="app-title-container">
                    <Container fluid className="app-title">
                        <h1 className="display-3">Cat Tinder</h1>
                        <p className="lead">A place where cats can find their meow-mates!</p>
                    </Container>
                </Jumbotron>
            </div>

            </>
        )
    }
}

export default Header
