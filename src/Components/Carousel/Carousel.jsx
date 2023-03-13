import Carousel from 'react-bootstrap/Carousel';
import estilos from "./carousel.module.css"
import foto1 from "./cripto3.jpg"
import foto2 from "./nft.jpg"
import foto3 from "./dogecoin2.jpg"

function CarouselCripto() {
  return (
    <Carousel fade>

      <Carousel.Item>
        <img
            className={estilos.slide}
          alt="First slide"
          src= {foto1}/* "https://img.freepik.com/fotos-premium/hipster-hombre-sosteniendo-dedos-mostrando-moneda-oro-bitcoin-crypto-moneda-dinero-virtual-electronico_416530-30579.jpg" */
        />
        <Carousel.Caption>
          <h3>Revolución Cripto</h3>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className={estilos.slide}
          src={foto2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Mundo Nft</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className={estilos.slide}
          src={foto3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Memecoins</h3>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselCripto;