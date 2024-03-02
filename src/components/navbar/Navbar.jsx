import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/img/Logos/LOGOORIGINAL.svg";
import IntagramLogo from "../../assets/icons/logo_instagram.svg";
import YoutubeLogo from "../../assets/icons/logo_youtube.svg";
import FacebookLogo from "../../assets/icons/logo_facebook.svg";
import "./Navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import Arrow from "../../assets/icons/arrow.svg";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AuthContext } from "../../authContext/AuthContext";
import { useContext } from "react";

function NavbarHome() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const handleLogoCLick = () =>{
    if(user){
      const userType = user.type;
      if(userType === "admin"){
        navigate("/home");
      } else{
        navigate("/")
      }
    }else{
      navigate("/")
    }
  }

 const handleScrollToLanding = () => {
    const landingPath = '/landing';
    if (location.pathname === landingPath) {
      const formSection = document.getElementById('adviser-form-landing');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = landingPath;
    }
  };

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbarHome">
          <Navbar.Brand onClick={handleLogoCLick}>
            <img src={Logo} alt="" className="LogoPaberater" />
          </Navbar.Brand >
          <Container className="container-navbar" >
            <Link to="/landing">
            <button className="btn-nav" onClick={handleScrollToLanding}>
              Quiero saber más <img src={Arrow} alt="" className="arrow-btn" />
            </button>
            </Link>
            <Navbar.Brand className='mediaLogo'>
              <Link to="https://www.instagram.com/paberater_/?utm_source=ig_embed&ig_rid=331b1bec-9632-4b52-b1b5-18fc290548c9"  target="_blank">
                <img src={IntagramLogo} alt="instagram logo" className='socialMediaLogo' />
              </Link>
              <Link to="https://www.facebook.com/PABerater/" target="_blank">
                <img src={FacebookLogo} alt="facebook logo" className='socialMediaLogo' />
              </Link>
              <Link to="https://www.youtube.com/@paberater3375" target="_blank">
                <img src={YoutubeLogo} alt="youtube logo" className='socialMediaLogo' />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="newToggle"
            >
              
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menú
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="me-auto">

                  <Nav.Link>
                    <Link to="/somos">Somos</Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link to="/casos-exito">Casos de éxito</Link>
                  </Nav.Link>
                  
                  <Nav.Link>
                    <Link to="/blogPABerater">Blog</Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link to="/contacto">Contacto</Link>
                  </Nav.Link>
                  <NavDropdown
                    title="Servicios"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item className="dropdown-item">
                      {" "}
                      <Link to="/homologaciones">
                        Homologación de títulos de medicina
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropdown-item">
                      {" "}
                      <Link to="/reconocimiento">
                        Reconocimiento profesional
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropdown-item">
                      {" "}
                      <Link to="/reconocimiento-ingenieros">
                        Reconocimiento de Ingenieros
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropdown-item">
                      {" "}
                      <Link to="/traduccionesjuradas">
                        Traducciones juradas
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarHome;
