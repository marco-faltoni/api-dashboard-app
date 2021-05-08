import styled, { css } from "styled-components";
// framer motion
import {motion} from "framer-motion";

const StyledForm = styled(motion.form)`
  position: absolute;
  background: rgb(30,27,75);
  background: linear-gradient( 318deg,rgb(30,27,75) 0%,rgba(29,26,67,0.7) 54%,rgba(29,26,67,0.7) 100%);
  backdrop-filter: blur(2rem);
  box-shadow: -13px 23px 59px 10px rgba(0,0,0,0.23);
  -webkit-box-shadow: -13px 23px 59px 10px rgba(0,0,0,0.23);
  -moz-box-shadow: -13px 23px 59px 10px rgba(0,0,0,0.23);
  border-radius: 1.5rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 4rem;
  display: flex;
  flex-direction: column;
  opacity: 1;
  transition: all 0.5s ease;
  z-index: 10;
  min-width: 70rem;
  .buttons {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const StyledLabels = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(27rem,1fr));
  grid-gap: 6rem 6rem;
  padding: 3rem 0;
  .label-tite, .label-desc, .category, .price, .employee {
    display: flex;
    flex-direction: column;
  }
  label {
    font-size: 1.5rem;
    font-weight: 600;
    padding-bottom: 2rem;
  }
  input {
    background: rgba(36,33,81,0.74);
    border: none;
    border-radius: 1rem;
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1.5rem 1rem;
    color: #B1AFCD;
    &:focus-visible {
      outline: none;
    }
  }
`;

const StyledButton = styled(motion.button)`
  background: none;
  border: none;
  padding: 2rem;
  color: #ffffff;
  background: linear-gradient(
  140deg
  , rgba(255,64,154,1) 0%, rgba(196,56,239,1) 63%);
  border-radius: 5rem;
  cursor: pointer;
  margin-right: 3rem;
  span {
    font-weight: 600;
    font-size: 1.8rem;
  }
`;

const StyledButtonBack = styled(motion.button)`
  background: none;
  padding: 2rem;
  border: 2px solid #5B5A99;
  border-radius: 5rem;
  cursor: pointer;
  span {
    color: #B1AFCD;
    font-weight: 600;
    font-size: 1.8rem;
  }
`;


export {
  StyledForm,
  StyledLabels,
  StyledButton,
  StyledButtonBack
};
