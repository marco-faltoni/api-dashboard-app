import styled, { css } from "styled-components";
// framer motion
import {motion} from "framer-motion";

const StyledLoader = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .loader {
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #1c335a;
    -webkit-animation: spin 1.5s linear infinite;
    animation: spin 1.7s linear infinite;
    z-index: 11;
    &:before {
      content: "";
      position: absolute;
      top: 3px;
      left: 3px;
      right: 3px;
      bottom: 3px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-top-color: #0f4270;
      -webkit-animation: spin-reverse 0.6s linear infinite;
      animation: spin-reverse 0.6s linear infinite;
    }
    &:after {
      content: "";
      position: absolute;
      top: 9px;
      left: 9px;
      right: 9px;
      bottom: 9px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-top-color: #507daa;
      -webkit-animation: spin 1s linear infinite;
      animation: spin 1.1s linear infinite;
    }
  }
  /* Animation */
  @-webkit-keyframes spin {
      0% {
          -webkit-transform: rotate(0deg);
      }
      100% {
          -webkit-transform: rotate(360deg);
      }
  }
  @keyframes spin {
      0% {
          transform: rotate(0deg);
      }
      100% {
          transform: rotate(360deg);
      }
  }
  @-webkit-keyframes spin-reverse {
      0% {
          -webkit-transform: rotate(0deg);
      }
      100% {
          -webkit-transform: rotate(-360deg);
      }
  }
  @keyframes spin-reverse {
      0% {
          transform: rotate(0deg);
      }
      100% {
          transform: rotate(-360deg);
      }
  }
`;

export {
  StyledLoader
};