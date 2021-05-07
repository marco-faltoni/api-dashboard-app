import React, {useEffect, useState} from "react";
// Redux
import {useDispatch, useSelector} from 'react-redux';
//Router
import { Switch, Route, useLocation } from "react-router-dom";
// axios
import axios from 'axios';
//Import Pages
import Home from "./pages/Home";
import Chart from "./pages/Chart";
import Loader from "./components/Loader";
import Sidebar from "./components/SideBar";
// framer motion
import { AnimatePresence, motion } from "framer-motion";
// import { fade } from "./animation";


function App() {
  // for routing
  const location = useLocation();
  // for fetching data and redux
  // const dispatch = useDispatch();

  return (
    <div className="App">
      <Sidebar />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/chart" exact>
          <Chart  />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
