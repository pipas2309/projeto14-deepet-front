import Carousel from "react-bootstrap/Carousel";
import React from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineUser, AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import Banner1  from '../imgs/banner1.gif';
import Banner2 from '../imgs/banner2.png';
import Banner3 from '../imgs/banner3.webp';
import Banner4 from '../imgs/banner4.png';
import {
  Head,
  HeaderBox,
  SearchForm,
  SideBar,
  SideBarHeader,
  Theme
} from "./StyledComponentBanners";
import {Link} from "react-router-dom";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default function Banners() {

    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex) => setIndex(selectedIndex)
    
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item onClick={(e) => console.log('banner 1')}>
                <img
                className="d-block w-100"
                src={Banner1}
                alt="First slide"
                />
                {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item onClick={(e) => console.log('banner 2')}>
                <img
                className="d-block w-100"
                src={Banner2}
                alt="Second slide"
                />    
            </Carousel.Item>
            <Carousel.Item onClick={(e) => console.log('banner 3')}>
                <img
                className="d-block w-100"
                src={Banner3}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item onClick={(e) => console.log('banner 4')}>
                <img
                className="d-block w-100"
                src={Banner4}
                alt="Fourth slide"
                />    
            </Carousel.Item>
        </Carousel>
    );
      

}