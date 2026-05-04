import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MyNav = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container className="justify-content-start gap-3">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Browse</Nav.Link>
            </Container>
        </Navbar>
    );
};

export default MyNav;
