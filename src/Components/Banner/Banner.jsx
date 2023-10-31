import React from "react";
import { motion } from "framer-motion";

import bg1 from "../../assets/images/bg-1.jpg";
const Banner = () => {
  return (
    <section className="banner" name="/home">
      <motion.div
        className="banner__wapper"
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="banner__content ">
          <h5>Our Progression</h5>
          <h1>
            NEED24 A Cleaning Componay
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            vel possimus adipisci fugiat quibusdam veniam eveniet nemo itaque
            officia et.
          </p>
        </div>
      </motion.div>
      {/* left side end  */}
      <motion.div
        className="banner__imageBox"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src={bg1} alt="bg" />
      </motion.div>
    </section>
  );
};

export default Banner;
