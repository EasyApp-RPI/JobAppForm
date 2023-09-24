// Navbar Imports
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

function NavbarComp() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Job Application Form</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Nothing" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Nothing 1
              </NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.2">
                Nothing 2
              </NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.3">
                Nothing 3
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;