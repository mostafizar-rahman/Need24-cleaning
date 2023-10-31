import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Team = ({ name, image }) => {
  return (
    <div className="temas__card ">
      <img src={image} alt="" />
      <div className="temas__card_footer">
        <div className="relative w-full">
          <div className="temas__card_info">
            <b className=" text-lg">{name}</b>
            <br />
            <small className=" font-medium text-[15px]">Founder</small>
          </div>
          <ul className="temas__card_icons">
            <li className=" ">
              <a href="">
                <FaFacebook className="text-lg" />
              </a>
            </li>
            <li className="bg-white group-hover:bg-main group-hover:text-white w-7 h-7 text-black flex justify-center items-center border-t">
              <a href="">
                <FaInstagram />
              </a>
            </li>
            <li className="bg-white group-hover:bg-main group-hover:text-white w-7 h-7 text-black flex justify-center items-center border-t">
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
