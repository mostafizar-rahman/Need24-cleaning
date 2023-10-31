import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
const Testimonial = ({ review, name, image }) => {
  return (
    <div className="testimonial__card">
      <div className="testimonial__card_content">
        <BiSolidQuoteAltLeft className="icon " />
        <div className="review">
          <i>{review}</i>
          <br />
          <b>{name}</b>
        </div>
      </div>
      <div className="">
        <img src={image} alt="" className="testimonial__card_img " />
      </div>
    </div>
  );
};

export default Testimonial;
