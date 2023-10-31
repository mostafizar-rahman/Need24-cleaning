import React from "react";
import { FaTimes } from "react-icons/fa";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const menuList = [
  {
    id: 1,
    path: "/home",
    name: "Home",
  },
  {
    id: 2,
    path: "/about",
    name: "About",
  },
  {
    id: 3,
    path: "/services",
    name: "Services",
  },
  {
    id: 8,
    path: "/projects",
    name: "Projects",
  },
  {
    id: 5,
    path: "/teams",
    name: "Teams",
  },
  {
    id: 4,
    path: "/price",
    name: "Price",
  },

  {
    id: 6,
    path: "/testimoinal",
    name: "Testimoinal",
  },
  {
    id: 7,
    path: "/contact",
    name: "Contact",
  },
];
const Menus = ({ handleMenuHide }) => {
  return (
    <div>
      {/* --------- Close icon */}
      <div className=" menu__close_icon " onClick={handleMenuHide}>
        <FaTimes />
      </div>
      {/* -----------Menus */}
      <ul className="menu__list">
        {menuList.map(({ id, name, path }) => {
          return (
            <li key={id}>
              <Link
                onClick={() => handleMenuHide(true)}
                activeClass="active_item"
                to={path}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menus;
