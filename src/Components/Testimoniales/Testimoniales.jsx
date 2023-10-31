import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Testimonial from "./Testimonial";
import { SampleNextArrow, SamplePrevArrow } from "../../Utlits/sliderArrows";
import { reviewList } from "../../Utlits/reviewList";
import Slider from "react-slick";

const Testimoniales = () => {
  let settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    verticalSwiping: true,
    swipeToSlide: true,
    dots: false,
    nextArrow: <SampleNextArrow centerArrow={false} />,
    prevArrow: <SamplePrevArrow centerArrow={false} />,
  };
  return (
    <section className="testimonial">
      <div className="container">
        <Slider {...settings}>
          {reviewList.map(({ id, image, name, review }) => (
            <Testimonial key={id} name={name} image={image} review={review} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimoniales;
