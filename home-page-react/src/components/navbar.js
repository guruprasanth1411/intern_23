import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="trasnparent" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Moto</Navbar.Brand>
          <Nav className="me-auto m-3">
            <Nav.Link href="#home" className="p-3">Home</Nav.Link>
            <Nav.Link href="#pricing" className="p-3">About</Nav.Link>
            <Nav.Link href="#features" className="p-3">Features</Nav.Link>
            <Nav.Link href="#pricing" className="p-3">Testimonials</Nav.Link>
            <Nav.Link href="#pricing" className="p-3">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
