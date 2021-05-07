import React from "react";
// import routing
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  StyledSidebar,
  StyledToHome,
  StyledToChart
} from "../styles/Sidebar.styles";
import logo from '../assets/euris.png';
import home from '../assets/home.svg';
import chart from '../assets/chart.svg';
// Redux
import {useSelector} from 'react-redux';

const SideBar = () => {
  const { pathname } = useLocation();
  return (
    <StyledSidebar>
      <div className="logo"> 
        <img className="logo" src={logo} alt="euris" title="euris"/>
      </div>
      <div className="home">
        <Link to="/" className= {pathname === "/" ? "active" : ""}>
          <img src={home} alt="home" />
          <h1>Dashboard</h1>
        </Link>
      </div>
      <div className="chart">
        <Link to="/chart" className= {pathname === "/chart" ? "active" : ""}>
          <img src={chart} alt="home" />
          <h1>Chart</h1>
        </Link>
      </div>
    </StyledSidebar>
  );
};


export default SideBar;