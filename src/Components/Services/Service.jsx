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
      <div className="service__card_left">
        {/* <div className="service__card_wapper"> */}
        <img src={image} alt="img" className="img" />
        <div className="icon_wapper">
          <img src={icons} alt="" className="icon" />
        </div>
        {/* </div> */}
      </div>
      <div className="p-2">
        <h3>
          <div className="lg:text-[22px] md:text-[20px] text-[19px] font-semibold font-Roboto text-main transition-all hover:text-primary">
            {title}
          </div>
        </h3>
        <p className="text-[15px] text-secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
          dolores, illum earum vero aut veritatis.
        </p>
        <div className="mt-3">
          <div className="text-primary font-semibold flex items-center space-x-2 group transition-all hover:text-black/80">
            <span>Read More</span>{" "}
            <HiOutlineArrowRight className="group-hover:ml-3 transition-all" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Service;
