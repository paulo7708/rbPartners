import { HashLink as Link } from 'react-router-hash-link';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';

import car1 from '../../assets/carrosel/Artboard-3_1.png'
import car2 from '../../assets/carrosel/Artboard-3_2.png'
import car3 from '../../assets/carrosel/Artboard-3_3.png'
import "./index.css"



function CarroselBootstrap() {
  return (
    <Carousel id='Home' slide className='carousel'>
      <Carousel.Item className='carousel-item'>
        <img
          className="d-block w-100"
          src={car1}
          alt="First slide"
        />
        <Carousel.Caption className='desfoque carText'>
          <h3>Pagamentos Pix Instantâneos</h3>
          <p>Agilizando seu Negócio.</p>
          <Nav.Link type="button" id='btn' className="nav-links ms-auto me-auto"
            as={Link}
            to={"/faleconosco"}
          >Saiba mais
          </Nav.Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <img
          className="d-block w-100"
          src={car2}
          alt="Second slide"
        />

        <Carousel.Caption className='desfoque'>
          <h3>Pensado para seu negócio!</h3>
          <p>Personalizado</p>
          <Nav.Link type="button" id='btn' className="nav-links ms-auto me-auto"
            as={Link}
            to={"/faleconosco"}
          >Clique aqui
          </Nav.Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <img
          className="d-block w-100"
          src={car3}
          alt="Third slide"
        />

        <Carousel.Caption className='desfoque'>
          <h3>Você a um click</h3>
          <p>
            Do sucesso!
          </p>
          <Nav.Link type="button" id='btn' className="nav-links ms-auto me-auto"
            as={Link}
            to={"/faleconosco"}
          >Saiba mais
          </Nav.Link>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarroselBootstrap;