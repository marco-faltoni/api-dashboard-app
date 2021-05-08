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
      svg {
        width: 2.2rem;
      }
      margin-right: 6rem;
    }
    .reload path {
      fill: #5B5A99;
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
`;


const StyledCard = styled(motion.div)`
  min-height: 30rem;
  background: rgba(36, 33, 81, 0.74);
  border-radius: 1rem;
  box-shadow: -13px 23px 59px 10px rgba(0,0,0,0.23);
  -webkit-box-shadow: -13px 23px 59px 10px rgba(0,0,0,0.23);
  -moz-box-shadow: -13px 23px 59px 10px rgba(0,0,0,0.23);
  position:relative;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .a-tool {
    position: absolute;
    cursor: pointer;
    top: 12%;
    right: 5%;
    transform: translate(-50%, -50%);
    .menu-icon {
      transition: all 0.8s ease;
      &:hover {
        transition: all 0.8s ease;
        path {
          fill: white;
          transition: all 0.6s ease;
        }
      }
    }
  }

  #price {
    font-size: 3.2rem;
    display: flex;
    flex-direction: row;
    span {
      font-size: 1.6rem;
      padding-top: 0.5rem;
      padding-right: 0.5rem;
    }
  }
  .custom-tooltip {
    padding: 1rem 2rem;
    border-radius: 0.7rem;
    background: #5B5A99;
    pointer-events: unset;
    h3 {
      cursor: pointer;
      font-size: 1.3rem;
    }
  }
`;

const StyledTitle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 2.2rem;
  }
  p {
    font-size: 1.3rem;
    color: #B1AFCD;
    font-weight: 500;
  }
`;

const StyledReview = styled(motion.div)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  .rev {
    max-width: 50%;
    overflow-y: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  h3 {
    font-size: 1.4rem;
  }
  p {
    font-size: 1.3rem;
    color: #B1AFCD;
    font-weight: 500;
  }
`;

const StyledCategory = styled(motion.div)`
  position: absolute;
  top: 95%;
  left: 98%;
  transform: translate(-50%, -50%);
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
  background: linear-gradient(140deg, rgba(255,64,154,1) 0%, rgba(196,56,239,1) 63%);
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    display: flex;
    svg {
      height: 4rem;
    }
  }
`;

export {
  StyledContainer,
  StyledNav,
  StyledCards,
  StyledCard,
  StyledOverlay,
  StyledTitle,
  StyledReview,
  StyledCategory,
};