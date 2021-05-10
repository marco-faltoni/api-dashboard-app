import styled, { css } from "styled-components";
// framer motion
import {motion} from "framer-motion";

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
  transition: all 0.6s ease;
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

  &.column-view {
    min-height: 16rem;
    flex-direction: row;
    padding: 2rem 5rem;
    padding-right: 3rem;
    transition: all 0.6s ease;
    .a-tool {
      top: 15%;
      right: 3%;
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
      transition: all 0.6s ease;
    }
  }
`;

const StyledTitle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 2rem;
    transition: all 0.6s ease;
  }
  p {
    font-size: 1.3rem;
    color: #B1AFCD;
    font-weight: 500;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    transition: all 0.6s ease;
  }
  &.column-view {
    align-items: flex-start;
    min-width: 25rem;
    transition: all 0.6s ease;
    p {
      max-width: 25rem;
      -webkit-line-clamp: 4;
      transition: all 0.6s ease;
    }
  }
`;

const StyledReview = styled(motion.div)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  transition: all 0.6s ease;
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
    transition: all 0.6s ease;
  }
  p {
    font-size: 1.3rem;
    color: #B1AFCD;
    font-weight: 500;
    transition: all 0.6s ease;
  }
  &.column-view {
    width: unset;
    transition: all 0.6s ease;
  }
`;

const StyledCategory = styled(motion.div)`
  position: absolute;
  top: 95%;
  left: 98%;
  transform: translate(-50%, -50%);
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  background: linear-gradient(140deg, rgba(255,64,154,1) 0%, rgba(196,56,239,1) 63%);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.6s ease;
  i {
    display: flex;
    svg {
      height: 3rem;
    }
  }
  &.column-view {
    top: 48%;
    left: 0%;
    transition: all 0.6s ease;
  }
`;

export {
  StyledCard,
  StyledTitle,
  StyledReview,
  StyledCategory,  
};