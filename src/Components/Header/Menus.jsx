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
    path: "/",
    name: "About",
  },
  {
    id: 3,
    path: "/",
    name: "Services",
  },
  {
    id: 4,
    path: "/",
    name: "Price",
  },
  {
    id: 5,
    path: "/",
    name: "Teams",
  },
  {
    id: 6,
    path: "/",
    name: "Testimoinal",
  },
  {
    id: 7,
    path: "/",
    name: "Contact",
  },
  {
    id: 8,
    path: "/",
    name: "Home",
  },
];
const Menus = ({ handleMenuHide }) => {
  const pathname = "/";

  return (
    <div>
      {/* --------- Close icon */}
      <div
        className=" menu__close_icon "
        onClick={handleMenuHide}
      >
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
