import React from "react";
import { motion } from "framer-motion";

import mop from "../../assets/icons/mop.png";
import groceries from "../../assets/icons/groceries.png";
import Title from "../Title/Title";
const About = () => {
  return (
    <section className="about" name="/about">
      <div className="container">
        <div className="about__wapper">
          <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="about__left_side "
          >
            <img
              src="https://images.pexels.com/photos/6197122/pexels-photo-6197122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="about__year">
              <div className="about__year_inner">
                <h2>12</h2>
                <p>Year's Experience</p>
              </div>
            </div>
          </motion.div>
          <div className=" about__right_side ">
            <Title longTitle={"Why Choose us"} shortTitle={"ABOUT"} />
            <motion.div
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="mt-12 "
            >
              <p className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                minima sunt quisquam commodi voluptas dolore omnis saepe
                doloribus facilis. Sed libero dolorem blanditiis, possimus ex
                deserunt nobis labore repellendus corporis?
              </p>
              <div className="features">
                <div className="features__box">
                  <div className="features__box_inner">
                    <img src={groceries} alt="" />
                  </div>
                  <h5>
                    High Quality Cleaning
                  </h5>
                </div>
                <div className="features__box features__box-two">
                  <div className="features__box_inner">
                    <img src={mop} alt="" />
                  </div>
                  <h5>
                    Expert Cleaner Team
                  </h5>
                </div>
              </div>
              <p className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                minima sunt quisquam commodi voluptas dolore omnis saepe
                doloribus facilis. Sed libero dolorem blanditiis, possimus ex
                deserunt nobis labore repellendus corporis?
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
