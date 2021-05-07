import styled, { css } from "styled-components";
// framer motion
import {motion} from "framer-motion";

const StyledForm = styled(motion.div)`
  position: absolute;

  background: linear-gradient( 318deg,rgb(30,27,75) 0%,rgba(29,26,67,0.7) 54%,rgba(29,26,67,0.7) 100%);
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
  &.active-form {
    opacity: 1;
  }
  .buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    button {
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
    }
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
    font-size: 1.8rem;
    font-weight: 600;
    padding-bottom: 2rem;
  }
  input {
    background: rgba(36,33,81,0.74);
    border: none;
    padding: 1rem 1rem;
    color: #B1AFCD;
  }
`;

const StyledButton = styled(motion.button)`

`;

const StyledButtonBack = styled(motion.button)`

`;


export {
  StyledForm,
  StyledLabels,
  StyledButton,
  StyledButtonBack
};
