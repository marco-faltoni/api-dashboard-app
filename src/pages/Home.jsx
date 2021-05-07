import React from "react";
// Redux
import { useSelector, useDispatch} from 'react-redux';
// actions
// import {loadLocation} from '../actions/LocalWeatherAction';
import {
  StyledContainer,
} from "../styles/Home.styles";
// import routing
import { Link } from "react-router-dom";
// framer motion
import {motion} from "framer-motion";
// import { pageAnimation, pageAnimationMobile, fade } from "../animation";

const Home = () => {

  return (
    <StyledContainer >
      <h1>home</h1>
    </StyledContainer>
  );
};


export default Home;