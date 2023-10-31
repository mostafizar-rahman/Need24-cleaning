import React from "react";
import { motion } from "framer-motion";
import { TfiLocationPin, TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import Title from "../Title/Title";

const contactList = [
  {
    id: 1,
    name: "Office Addres",
    system: "Lalmonirhat, Bangladesh",
    icon: <TfiLocationPin className="i" />,
  },
  {
    id: 2,
    name: "Mail for information",
    system: "dev.mostafizar@gmail.com",
    icon: <TfiEmail className="i" />,
  },
  {
    id: 3,
    name: "Call for help",
    system: "+8801575699193",
    icon: <FiPhone className="i" />,
  },
];
const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <Title shortTitle={"CONTACT"} longTitle={"Have you any problem"} />
        <div className=" contact__wapper">
          <motion.div
            className=""
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {contactList.map(({ id, name, system, icon }) => {
              return (
                <div key={id} className="contact__left_box">
                  <div className="icon">{icon}</div>
                  <div>
                    <h4 className="font-bold font-Roboto text-xl text-main">
                      {name}
                    </h4>
                    <p className=" text-secondary  text-[15px]">{system}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            className="contact__right"
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <form>
              <div className="contact__right_form">
                <div className="input_box">
                  <label htmlFor="name" className="text-secondary">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    placeholder="Name"
                    className=""
                  />
                </div>
                <div className="input_box">
                  <label htmlFor="email" className="text-secondary">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="border bg-gray-50 text-secondary rounded-sm px-4 py-2 outline-none focus:outline-none w-full "
                  />
                </div>
                <div className="textarea_box">
                  <label htmlFor="message" className="text-secondary">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Message"
                    id="message"
                    className="border bg-gray-50 text-secondary rounded-sm px-4 py-2 outline-none w-full min-h-[170px]"
                  ></textarea>
                </div>
              </div>

              <div>
                <button className="big__round_btn">Submit</button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
