import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Ração1 from "../imgs/ração1.webp";
import Ração2 from "../imgs/ração2.webp";
import Ração3 from "../imgs/ração3.webp";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export function ProductCarousel() {
  const [index, setIndex] = useState(0);

  const carouselImgs = [Ração1, Ração2, Ração3];

  const CarouselComponent = carouselImgs.map((image) => (
    <Carousel.Item onClick={(e) => console.log(`index`)}>
      <img className="d-block w-100" src={image} alt="nth slide" />
    </Carousel.Item>
  ));

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  const navigate = useNavigate();

  const handleOnClick = () => navigate("/login");

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {CarouselComponent}
    </Carousel>
  );
}
export function Footer() {
  const [counter, setCounter] = useState(1);
  function plus() {
    setCounter(counter + 1);
  }
  function minus() {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  }

  return (
    <footer className="fixed">
      <div className="cart-footer-info">
        <div className="wraper">
          <div className="plusminus" onClick={minus}>
            <AiOutlineMinus />
          </div>
          <div className="counter">{counter}</div>
          <div className="plusminus" onClick={plus}>
            <AiOutlinePlus />
          </div>
        </div>
      </div>

      <div className="add-to-cart">
        Adicionar ao carrinho
      </div>
    </footer>
  );
}
