import React from "react";
import { Link ,NavLink} from "react-router-dom";
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="col-auto col-md-3 col-xl-2 bg-dark nav-div">
      <div className="d-flex flex-column align-items-center align-items-sm-start pt-2 text-white min-vh-100">
        {/* <a
          href="/"
          className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-5 d-none d-sm-inline">Menu</span>
        </a> */}
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li className="nav-item">
            <NavLink className="nav-link align-middle px-2" activeClassName="is-active" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link align-middle px-2" to="/channelCreate">Channel Creation</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link align-middle px-2" to="/mediaTailor">Media Tailor</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
