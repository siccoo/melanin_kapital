import "./sidebar.css";

import { VscHome } from "react-icons/vsc";
import { FaRegFolder } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import {BsEnvelope} from "react-icons/bs"
import {ImInsertTemplate} from "react-icons/im";
import {AiOutlinePieChart} from "react-icons/ai"
import { HiOutlineUsers } from "react-icons/hi";
import { SiInstructables } from "react-icons/si";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <div className="sidebar__menu">
          <ul className="sidebar__list">
            <li className="sidebar__listItem ">
              <VscHome className="sidebar__icon" /> Home
            </li>
            <li className="sidebar__listItem">
              <FaRegFolder className="sidebar__icon" /> Business profile
            </li>
            <li className="sidebar__listItem">
              <ImInsertTemplate className="sidebar__icon" /> Risk profile
            </li>
            <li className="sidebar__listItem active">
              <AiOutlinePieChart className="sidebar__icon" /> Funding
            </li>
            <li className="sidebar__listItem">
              <HiOutlineUsers className="sidebar__icon" /> Konnect
            </li>
            <li className="sidebar__listItem">
              <SiInstructables className="sidebar__icon" /> Academy
            </li>
            <li className="sidebar__listItem">
              <BsEnvelope className="sidebar__icon" /> Support
            </li>
          </ul>
        </div>
        <div className="sidebar__btn">
          <ul className="sidebar__list">
            <li className="sidebar__listItem">
              <BiLogOut className="sidebar__icon" /> Log out
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
