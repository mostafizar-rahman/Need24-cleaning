import React from "react";
import map from "../../assets/icons/map.png";
import call from "../../assets/icons/telephone.png";
import email from "../../assets/icons/mail.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const links = [
  {
    id: 1,
    title: "Services",
    items: [
      {
        id: 1,
        link: "Home Cleaning",
      },
      {
        id: 2,
        link: "Office Cleaning",
      },
      {
        id: 3,
        link: "Toilet Cleaning",
      },
      {
        id: 4,
        link: "Window Cleaning",
      },
      {
        id: 5,
        link: "Kitchen Cleaning",
      },
    ],
  },
  {
    id: 2,
    title: "Company",
    items: [
      {
        id: 1,
        link: "About",
      },
      {
        id: 2,
        link: "Meet the Team",
      },
      {
        id: 3,
        link: "Accounts Review",
      },
    ],
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wapper">
          {/* --------------------left side logo content and socil icon */}
          <div className="left__side">
            <div>
              <div>
                <h1>
                  <a href={""} className="footer__logo ">
                    <small> NEED</small>
                    <span>24</span>
                  </a>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, harum deserunt nesciunt praesentium, repellendus
                  eum perspiciatis ratione pariatur a aperiam eius numquam
                  doloribus asperiores sunt.
                </p>
              </div>
              <ul className="icons">
                <li>
                  <a href="">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ------------- right side link and address */}
          <div className="right__side">
            <div className=" right__side_wapper">
              {links.map(({ id, items, title }) => {
                return (
                  <div key={id}>
                    <p className="font-semibold text-lg text-gray-50">
                      {title}
                    </p>

                    <ul className="mt-6 space-y-4 text-sm">
                      {items.map(({ id, link }) => {
                        return (
                          <li key={id}>
                            <a
                              href=""
                              className="text-gray-400 transition hover:opacity-75"
                            >
                              {link}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}

              <div className="office__info">
                <p className="font-semibold text-lg text-gray-50">
                  Office Info
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li className="flex items-start space-x-3">
                    <img src={map} alt="" className="w-4 mt-1" />
                    <p className="text-gray-400">
                      Lalmonirhat
                      <br />
                      Bangladesh
                    </p>
                  </li>

                  <li className="flex items-start space-x-3">
                    <img src={email} alt="" className="w-4 mt-1" />
                    <p className="text-gray-400">dev.mostafizar@gamil.com</p>
                  </li>

                  <li className="flex items-start space-x-3">
                    <img src={call} alt="" className="w-4 mt-1" />
                    <p className="text-gray-400">+88 01575699193</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------- Copyright area */}
      <div className="bootom__footer">
        <p>
          &copy; 2023. All rights reserved.{" "}
          <a
            href={"https://mostafizar.netlify.app/"}
          >
            Mostafizar
          </a>
        </p>
      </div>
      {/* <Shap /> */}
    </footer>
  );
};

export default Footer;
