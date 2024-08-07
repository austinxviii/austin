import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../Assets/img/retro/austinxviii-logo-white.png';


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
    <Container>
        <Navbar.Brand href="home">
        <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#blogs" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Blogs</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#tabs" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}>Tabs</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}