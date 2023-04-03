import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
 return (
  <div>
   <>
    <ul
     className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
     id="accordionSidebar"
    >
     <Link
      className="sidebar-brand d-flex align-items-center justify-content-center"
      to={`/dashboard`}
     >
      <div className="sidebar-brand-icon rotate-n-15">
       <i className="fas fa-laugh-wink" />
      </div>
      <div className="sidebar-brand-text mx-3">
       SB Admin <sup>2</sup>
      </div>
     </Link>
     <hr className="sidebar-divider my-0" />
     <li className="nav-item active">
      <Link className="nav-link" to={`/dashboard`}>
       <i className="fas fa-fw fa-tachometer-alt" />
       <span>Dashboard</span>
      </Link>
     </li>
     <hr className="sidebar-divider" />
     <div className="sidebar-heading">Interface</div>
     <li className="nav-item">
      <Link className="nav-link" to={`/create-user`}>
       <i className="fas fa-fw fa-cog" />
       <span>Learners</span>
      </Link>
     </li>
     <li className="nav-item">
      <Link className="nav-link" to={`/create-mentor`}>
       <i className="fas fa-fw fa-wrench" />
       <span>Mentors</span>
      </Link>
     </li>
     <li className="nav-item">
      <Link className="nav-link" to={`/table-view`}>
       <i className="fas fa-fw fa-wrench" />
       <span>Table</span>
      </Link>
     </li>
     <hr className="sidebar-divider" />
    </ul>
   </>
  </div>
 );
};

export default SideBar;
