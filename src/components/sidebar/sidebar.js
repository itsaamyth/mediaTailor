import React from "react";
import { NavLink} from "react-router-dom";
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="col-auto col-md-3 col-xl-2 bg-dark nav-div">
      <div className="d-flex flex-column align-items-center align-items-sm-start pt-2 text-white min-vh-100">
         <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li className="nav-item">
          <NavLink className="nav-link align-middle px-2" to="/mediaTailorStatus">Media Tailor</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;