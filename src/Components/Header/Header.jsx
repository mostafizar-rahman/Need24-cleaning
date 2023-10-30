import React, { useState } from "react";
import {FaBars, } from "react-icons/fa"
import Menus from "./Menus";

const Header = () => {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleMenuShow = () => {
    setIsMenuShow(true);
  };
  const handleMenuHide = () => {
    setIsMenuShow(false);
  };

  function handleopenModal() {
    setModalIsOpen(true);
  }

  return (
    <>
      <div className="header ">
        <h1>
          <a href={""} className=" header__logo ">
            <small> NEED</small>
            <span>24</span>
          </a>
        </h1>

        <nav className={`header__menu__dextop `}>
          <Menus handleMenuHide={handleMenuHide} />
        </nav>
        {/* ------- Menu for small divices */}
        <nav
          className={`header__menu__mobile fixed  
         
          `}
        >
          <Menus handleMenuHide={handleMenuHide} />
        </nav>
        <div className="right__side">
          <button
            className="big__btn"
            onClick={handleopenModal}
          >
            Book Service
          </button>
          <div className=" header__menu_icon" onClick={handleMenuShow}>
            <FaBars className="icon" />
          </div>
        </div>
      </div>
      {/* <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} /> */}
    </>
  );
};

export default Header;
