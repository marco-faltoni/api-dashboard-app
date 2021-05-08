import React, {useEffect, useState} from "react";
// Redux
import {useDispatch, useSelector} from 'react-redux';
//Router
import { Switch, Route, useLocation } from "react-router-dom";
// axios
import axios from 'axios';
// actions
import {loadStoreAndProducts} from './actions/LocalStoreAction';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'; 
//Import Pages
import Home from "./pages/Home";
import Chart from "./pages/Chart";
import Loader from "./components/Loader";
import Sidebar from "./components/SideBar";
// framer motion
import { AnimatePresence, motion } from "framer-motion";
// import { fade } from "./animation";

// optional configuration for alerts
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 2200,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}


function App() {
  // for routing
  const location = useLocation();
  // for fetching data and redux
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(loadStoreAndProducts());
  },[dispatch]);

  // getting back the data from redux
  const {store, products, isLoading} = useSelector((store) => store.store);
  console.log(store, products);

  return (
    <div className="App">
      <AlertProvider  template={AlertTemplate} {...options}>
        <Sidebar />
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/chart" exact>
            <Chart  />
          </Route>
        </Switch>
      </AlertProvider>
    </div>
  );
}

export default App;
