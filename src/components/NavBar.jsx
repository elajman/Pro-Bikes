import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <Navbar className='nav-bar' collapseOnSelect expand="lg" >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img alt="" src="../src/assets/logo.png" width="130" height="130" className="d-inline-block align-top"/>
          {' '}
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Productos</Nav.Link>
          <Nav.Link as={Link} to="/Contact">Contacto</Nav.Link>
          <NavDropdown title="Categorias" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to={`/category/${"MTB"}`} >MTB</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={`/category/${"Enduro"}`}>
              Enduro
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to={`/category/${"DH"}`}>DH</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/cart"><CartWidget /></Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar