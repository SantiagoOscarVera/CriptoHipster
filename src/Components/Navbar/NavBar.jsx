import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Cripto Hipster</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Criptomonedas"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Por capitalización de mercado</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Nuevas criptomonedas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Ganadoras y perdedoras</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Comprar criptomonedas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="NFT"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Precio base de NFT</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Monedas relacionadas a NFT
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Comprar NFT
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Capacitate"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Articulos sobre criptomonedas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Videos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Podcast</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Boletin informativo
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
            <Nav.Link href="#pricing">Comunidad</Nav.Link>
          </Nav>
          
          <Nav>
            <Nav.Link href="#deets">Iniciar Sesion</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             Registrarse
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;