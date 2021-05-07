import React from "react";
import {
  StyledContainer,
} from "../styles/Home.styles";
// Redux
import { useSelector, useDispatch} from 'react-redux';
// actions
// import {loadLocation} from '../actions/LocalWeatherAction';
// import routing
import { Link } from "react-router-dom";
// framer motion
import {motion} from "framer-motion";
// import { pageAnimation, pageAnimationMobile, fade } from "../animation";

const Chart = () => {
  
  return (
    <StyledContainer>
      <h1>Chart</h1>
    </StyledContainer>
  );
};


export default Chart;