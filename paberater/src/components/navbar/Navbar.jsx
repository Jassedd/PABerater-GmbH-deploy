import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../assets/img/Logos/LOGOORIGINAL.svg"
import IntagramLogo from "../../assets/icons/logo_instagram.svg"
import YoutubeLogo from "../../assets/icons/logo_youtube.svg"
import FacebookLogo from "../../assets/icons/logo_facebook.svg"
import "./Navbar.css"


function NavbarHome() {
  return (
    <Navbar expand="lg" className="navbarHome">
        <img src={Logo} alt="" className='LogoPaberater'/>
      <Container className='NavContainer'>
        <Navbar.Brand className='mediaLogo'>
        <button className='btn-nav'>Quiero saber más</button>
        <img src={IntagramLogo} alt="instagram logo" className='socialMediaLogo' />
        <img src={YoutubeLogo} alt="youtube logo" className='socialMediaLogo' />
        <img src={FacebookLogo} alt="facebook logo" className='socialMediaLogo' />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHome;