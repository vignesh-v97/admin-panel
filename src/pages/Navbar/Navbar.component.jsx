import React from "react";
import SideBar from "../../components/SideBar/sidebar.component";
import TopBar from "../../components/TopBar/topBar.component";
import Dashboard from "../Dashboard/dashboard.component";
import Footer from "../../components/Footer/footer.component";
import { Outlet } from "react-router-dom";

const Navbar = () => {
 return (
  <>
   <div id="wrapper">
    <SideBar></SideBar>
    <div id="content-wrapper" className="d-flex flex-column">
     <div id="content">
      <TopBar></TopBar>
      <div className="container-fluid">
       <Outlet></Outlet>
      </div>
     </div>
     <Footer></Footer>
    </div>
   </div>
  </>
 );
};

export default Navbar;
