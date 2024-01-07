import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../assets/img/Logos/LOGOORIGINAL.svg"
import IntagramLogo from "../../assets/icons/logo_instagram.svg"
import YoutubeLogo from "../../assets/icons/logo_youtube.svg"
import FacebookLogo from "../../assets/icons/logo_facebook.svg"
import "./Navbar.css"
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Arrow from "../../assets/icons/arrow.svg"



function NavbarHome() {
  return (
    <Navbar expand="lg" className="navbarHome">
      <Link to="/">
        <img src={Logo} alt="" className='LogoPaberater'/>
      </Link>
      <Container className='NavContainer'>
        <button className='btn-nav'>Quiero saber más <img src={Arrow} alt="" className='arrow-btn' /></button>
        <Navbar.Brand className='mediaLogo'>
        <img src={IntagramLogo} alt="instagram logo" className='socialMediaLogo' />
        <img src={YoutubeLogo} alt="youtube logo" className='socialMediaLogo' />
        <img src={FacebookLogo} alt="facebook logo" className='socialMediaLogo' />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link>
            <Link to="/">
              Inicio
            </Link>
            </Nav.Link>
            
            <Nav.Link>
              <Link to="/somos">
                Somos 
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/blog">
                Blog 
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/contacto">
                Contacto 
              </Link>
            </Nav.Link>
            
            <NavDropdown title="Servicios" id="basic-nav-dropdown">
              <NavDropdown.Item className='dropdown-item'> <Link to="/homologaciones">Homologación de títulos</Link></NavDropdown.Item>
              <NavDropdown.Item className='dropdown-item'> <Link to="/reconocimiento">Reconocimiento profesional</Link>
                
              </NavDropdown.Item>
              <NavDropdown.Item className='dropdown-item'> <Link to="/traduccionesjuradas">Traducciones juradas</Link> </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHome;