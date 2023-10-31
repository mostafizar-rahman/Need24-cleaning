import React from "react";
import { FaTimes } from "react-icons/fa";

const menuList = [
  {
    id: 1,
    path: "/",
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
    path: "/",
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
  const pathname = "/";

  return (
    <div>
      {/* --------- Close icon */}
      <div className=" menu__close_icon " onClick={handleMenuHide}>
        <FaTimes className="text-2xl cursor-pointer" />
      </div>
      {/* -----------Menus */}
      <ul className="menu__list">
        {menuList.map(({ id, name, path }) => {
          return (
            <li key={id}>
              <a
                href={path}
                className={` ${pathname === "/" && "text-primary"} `}
              >
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menus;
