import React, {useState} from "react";
// Redux
import {useDispatch, useSelector} from 'react-redux';
// actions
import {loadForm} from '../actions/LocalStoreAction';
// import routing
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  StyledSidebar,
  StyledToHome,
  StyledToChart
} from "../styles/Sidebar.styles";
import logo from '../assets/euris.png';
import Form from '../components/Form';
import {ReactComponent as HomeIcon} from '../assets/home.svg';
import {ReactComponent as ChartIcon} from '../assets/chart.svg';
import {ReactComponent as PlusIcon} from '../assets/plus.svg';

const SideBar = () => {
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  // dispatch(loadForm());

  // getting back the data from redux
  const {store, products, isLoading, isFormOpen} = useSelector((store) => store.store);

  return (
    <StyledSidebar>
      <div className="logo">
        <img className="logo" src={logo} alt="euris" title="euris"/>
      </div>
      <div className="home">
        <Link to="/" className= {pathname === "/" ? "active" : ""}>
          <i>
            <HomeIcon />
          </i>
          <h1>Dashboard</h1>
        </Link>
      </div>
      <div className="chart">
        <Link to="/chart" className= {pathname === "/chart" ? "active" : ""}>
          <i>
            <ChartIcon />
          </i>
          <h1>Chart</h1>
        </Link>
      </div>
      <div className="add">
        <i> 
          <PlusIcon />
        </i>
        <h1 onClick={() => dispatch(loadForm())}>Aggiungi Prodotto</h1>
      </div>
      {isFormOpen && (
        <Form />
      )}
      
    </StyledSidebar>
  );
};


export default SideBar;