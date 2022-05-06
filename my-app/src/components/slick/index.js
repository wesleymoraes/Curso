import React, { Component } from "react";
import Slider from "react-slick";
import './style.css';
import "slick-carousel/slick/slick.css"; 





export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
          <img src={require('../../assets/imagens/imagem.jpg')}/>
          </div>
          <div>
          <img src={require('../../assets/imagens/imagem.jpg')}/>
          </div>
          <div>
          <img src={require('../../assets/imagens/imagem.jpg')}/>
          </div>
          <div>
          <img src={require('../../assets/imagens/imagem.jpg')}/>
          </div>
          <div>
          <img src={require('../../assets/imagens/imagem.jpg')}/>
          </div>
          <div>
          <img src={require('../../assets/imagens/imagem.jpg')}/>
          </div>
        </Slider>

      </div>
    );
  }
}