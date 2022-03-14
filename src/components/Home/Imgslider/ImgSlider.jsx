import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/07003EE660ABB5B858A4F0F766C79EE7BE1ADE41E2C8FD4E8998DF9E04505A77/scale?width=1440&aspectRatio=3.91&format=jpeg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/68CA3C99BB5EF67A9BBBBA9580A0F03811BA82BF9C5689FE8CE544C1F67B2F04/badging?width=1440&aspectRatio=3.91&format=jpeg&label=scrim391" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/46B428B48739ED520A3ED05C60E048ADA6FC0BCC2DB2B2F897092C466BF6F5FA/scale?width=1440&aspectRatio=3.91&format=jpeg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EE1A5A21FD503240A3D781CB05A17B528318E8429D879BCC42BFEBD644EF9C54/badging?width=1440&aspectRatio=3.91&format=jpeg&label=scrim391" alt="" />
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default ImgSlider;