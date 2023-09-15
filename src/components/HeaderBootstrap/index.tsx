import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink as Link } from 'react-router-hash-link';

import logo from '../../assets/logo/4logoNav.png'
import logoDark from '../../assets/logo/4logoNavGray.png'
import "./index.css"
import { User, WhatsappLogo } from 'phosphor-react';
import { useState } from 'react';
//xl|lg|md|sm

export const HeaderBootstrap = () => {
  const [ darkLogo, setDarkLogo ] = useState(false)

  window.addEventListener("scroll", function () {
    const header = document.querySelector('header')
    //@ts-ignore
    header.classList.toggle('rolagem', window.scrollY )
    if(scrollY === 0 ) {
      setDarkLogo(false)
    } else {
      setDarkLogo(true)
    }
  })

  return (
    <header className="header">
      <Navbar collapseOnSelect id='nave' expand="lg" variant="light">
        <Container className="px-4">
          <Navbar.Brand className='d-flex px-1 text-secondary'
            as={Link}
            to={"/#Home"}
          >
            <img className='img' src={ darkLogo ? logo : logoDark } alt="" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* posição no navItem do toggle .ml-* e .mr-* para .ms-* e .me-* 
          me = margin-right and ms = margin-left*/}
            <Nav className="containerCss ms-auto">
              <Nav.Link eventKey="1" id='nav-links' className='ms-auto me-auto'
                as={Link}
                to={"/#Home"}
                >
                Início
              </Nav.Link>

              <Nav.Link eventKey="2" id='nav-links' className='ms-auto me-auto'
                as={Link}
                to={"/#products"}>Serviços
              </Nav.Link>

              <Nav.Link eventKey="3" id='nav-links' className='ms-auto me-auto'
                as={Link}
                to={"/#API"}>Institucional
              </Nav.Link>

              <Nav.Link eventKey="4" type="button" id='btn' className="nav-links ms-auto me-auto"
                as={Link}
                to={"/faleconosco"}
              ><User size={28}/>Atendimento
              </Nav.Link>

              <a className='whatsNav' href="https://wa.me/5511920181537" target="_blank"><WhatsappLogo size={33} /></a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
