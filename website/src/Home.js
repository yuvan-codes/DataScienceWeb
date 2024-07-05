import React from 'react';
import './Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Home = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="home">
      <h2>Welcome to the Data Science Club</h2>
      <Slider {...carouselSettings} className="carousel">
        <div>
          <img src="./p1.jpg" alt="Event 1" />
        </div>
        <div>
          <img src="./p2.png" alt="Event 2" />
        </div>
        <div>
          <img src="./p3.jpg" alt="Event 3" />
        </div>
      </Slider>
      <p>Our mission is to promote the understanding and application of data science principles.</p>
    </div>
  );
};

export default Home;
