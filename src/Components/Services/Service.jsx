import React from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";

const Service = ({ image, icons, title, id }) => {
  return (
    <motion.div
      className="service__card "
      key={id}
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="service__card_img_box">
        <img src={image} alt="img" className="img" />
        <div className="icon_wapper">
          <img src={icons} alt="" className="icon" />
        </div>
      </div>
      <div className="service__card_content">
        <h3>{title}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
          dolores, illum earum vero aut veritatis.
        </p>
        <div>
          <div className="btn">
            <span>Read More</span>{" "}
            <HiOutlineArrowRight />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Service;
