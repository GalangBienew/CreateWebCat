import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "../Component/Asset/Cat.png";
import { Link } from "react-router-dom";
import Containerhed from "./Container";
import Aboutme from "./About";
import Corouselme from "./Corousel";
import Footer from "./footer/Footer";
import AfterFoo from "./Afterfooter/AfterFoo";

const Headers = () => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="warning" expand={expand}>
          <Container fluid>
            <Navbar.Brand>CatStore</Navbar.Brand>
            <img src={Image} style={{ width: "25px" }} />
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Hai Caters!
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav
                  className="justify-content-end flex-grow-1 pe-3 "
                  style={{ background: "yellow" }}
                >
                  <Nav.Link as={Link} to={"/Login"}>
                    Log In
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/Pemesanan"}>
                    Pemesanan
                  </Nav.Link>

                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/">
                      Referensi Vitamin Cat
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/">
                      Stock jenis Cat Ready
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <div>
        <Containerhed />
        <Aboutme />
        <Corouselme />
        <AfterFoo />
        <Footer />
      </div>
    </>
  );
};

export default Headers;
