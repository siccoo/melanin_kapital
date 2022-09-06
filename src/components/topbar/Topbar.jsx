import React from "react";
import "./topbar.css";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiEnvelope } from "react-icons/bi";

import MelaninKapita from "../../assets/images/melanin.png";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar__wrapper">
        <div className="topbar__left">
          <img
            className="melanin-logo"
            src={MelaninKapita}
            alt="melanin-logo"
            loading="lazy"
            width="230"
          />
        </div>
        <div className="topbar__text">
          <p>Funding</p>

        </div>
        <div className="topbar__right">
          <div className="icons__container">
            <BiEnvelope className="notify" />
            <span className="badge">2</span>
          </div>
          <div className="icons__container">
            <IoNotificationsOutline className="notify" />
            <span className="badge">2</span>
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topbar__avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
