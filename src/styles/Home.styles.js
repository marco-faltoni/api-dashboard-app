import styled, { css } from "styled-components";
// framer motion
import {motion} from "framer-motion";

const StyledContainer = styled(motion.div)`
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  h1 {
    font-size: 3rem;
    letter-spacing: 1px;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    height: 100vh;
    justify-content: center;
  }
`;

const StyledNav = styled(motion.div)`
  width: 100%;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 10rem;
  .store {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 1.4rem;
      color: #B1AFCD;
      text-transform: uppercase;
      font-weight: 600;
    }
  }
  .icons {
    display: flex;
    align-items: center;
    i {
      cursor: pointer;
      svg {
        width: 2.2rem;
      }
      margin-right: 6rem;
    }
    .reload path {
      fill: #5B5A99;
    }
  }
  .custom-tooltip {
    padding: 1rem 2rem;
    border-radius: 0.7rem;
    background: #5B5A99;
    h3 {
      font-size: 1.3rem;
    }
  }
`;

const StyledOverlay = styled(motion.div)`
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: calc(100vh - 15rem);
`;

const StyledCards = styled(motion.div)`
  width: 100%;
  padding: 4rem 9rem;
  padding-bottom: 8rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-gap: 6rem 9rem;
  &.column-view {
    grid-template-columns: repeat(auto-fill, minmax(53rem, 1fr));
    transition: all 0.6s ease;
  }
`;

export {
  StyledContainer,
  StyledNav,
  StyledCards,
  StyledOverlay,
};