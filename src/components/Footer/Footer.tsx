import { Copyright, Envelope, FacebookLogo, GlobeHemisphereWest, InstagramLogo, PhoneCall, TwitterLogo } from "phosphor-react"
import { EndSection, RowSection, Section } from "./style"
import logo from '../../assets/logo/favicondARK.png'
import { Nav } from "react-bootstrap"
import { HashLink as Link } from 'react-router-hash-link';


export const Footer = () => {
  return (
    <Section>
      <RowSection>
        <div>
          <article>
            <img src={logo} alt="img" />
          </article>
          <span><Copyright size={20} weight="bold" />2023 Todos os direitos reservados</span>
        </div>
        <div>
          <h1>Fale Conosco</h1>
          <div>
            <a href="https://wa.me/5511920157473" target="_blank"><p><PhoneCall size={32} weight="duotone" />(11) 92018-1537
            </p></a>
            <p><Envelope size={32} weight="duotone" />atendimento@semprepagomeios.com</p>
          </div>
        </div>
        <div>
          <h1>Serviços</h1>

          <Nav.Link className='nav-links'
            as={Link}
            to={"/#API"}>
            Integração API
          </Nav.Link>
          <Nav.Link className='nav-links'
            as={Link}
            to={"/#cashIn"}>Cash-in
          </Nav.Link>
          <Nav.Link className='nav-links'
            as={Link}
            to={"/#cashOut"}>Cash-out
          </Nav.Link>


        </div>
        {/* <div>
          <h1>Institucional</h1>
          <Nav.Link className='d-flex align-items-center nav-links '
            href="/">
            Início</Nav.Link>
          <Nav.Link className='nav-links' 
            as={Link}
            to={"/#saibamais"}>Saiba Mais
          </Nav.Link>
          <Nav.Link className='nav-links'
            as={Link}
            to={"/#products"}>Serviços</Nav.Link>
        </div> */}

        <div></div>
      </RowSection>

      <EndSection>
        <div>
          <a href=""><InstagramLogo size={32} weight="bold" /></a>
          <a href=""><FacebookLogo size={32} weight="bold" /></a>
          <a href=""><TwitterLogo size={32} weight="bold" /></a>
        </div>
        <div>
          <a href="">Portuguese</a>
          <a href=""><GlobeHemisphereWest size={32} /></a>

        </div>
      </EndSection>

    </Section>
  )
}