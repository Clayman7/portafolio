import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/code2.gif';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github7.png';
import { HashLink } from 'react-router-hash-link';
import './NavBar.css';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () =>{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() =>{
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll)
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }
      return (
        <Router>
        <div >
          <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
             
              <Navbar.Brand href="/">
                <h1 class="text-secondary"><strong>Alan Salinas García</strong></h1>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                  <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                  <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projectos</Nav.Link>
                 

                </Nav>
                <span className="navbar-text">
                
                  <Nav className="ms-auto">
                  
                  <Nav.Link href="#footers" className={activeLink === 'footers' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('footers')}>
                    <button className="vvd"><span>¡Contactame!</span></button>
                    </Nav.Link>
                  
                  </Nav>
                </span>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          </div>
        </Router>
      )    
}