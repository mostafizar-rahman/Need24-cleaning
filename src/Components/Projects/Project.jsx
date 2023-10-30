import React from "react";
import { motion } from "framer-motion";

const Project = ({ title, image, isLarge }) => {
  return (
    <motion.div
      className={`projects__card ${isLarge}`}
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div>
        <img src={image} alt="" />
        <div className="projects__card_info">
          <h3>{title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
