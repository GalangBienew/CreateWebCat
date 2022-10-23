import Carousel from "react-bootstrap/Carousel";
import "./CSS/Corousel.css";

function Corouselme() {
  return (
    <Carousel>
      <div className="Corousel-start text-center mt-1">
        <h3>This my photos cat</h3>
      </div>
      <Carousel.Item interval={2000}>
        <img
          className="d-flex w-100"
          src="https://th.bing.com/th/id/OIP.t_Ky5yTgZXSrSRtkMGJvFQHaEK?pid=ImgDet&rs=1"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-flex w-100 "
          src="https://th.bing.com/th/id/OIP.N8EwSZlfSY6jardurn1rFAHaEK?pid=ImgDet&rs=1"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src="https://wallup.net/wp-content/uploads/2018/10/07/1044497-animals-cats-feline-gray-lazy.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Corouselme;
