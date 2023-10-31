import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Team = ({ name, image }) => {
  return (
    <div className="temas__card ">
      <img src={image} alt="" />
      <div className="temas__card_footer">
        <div>
          <div className="temas__card_info">
            <b>{name}</b>
            <br />
            <small>Founder</small>
          </div>
          <ul className="temas__card_icons">
            <li className=" ">
              <a href="">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Team;
