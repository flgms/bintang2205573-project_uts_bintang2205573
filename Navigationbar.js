import { Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return (
    <div>
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand>HOME</Navbar.Brand>
                <Nav>
                <Nav.Link>About</Nav.Link>
                <Nav.Link>Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
    );
}

export default NavigationBar