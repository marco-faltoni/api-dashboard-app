import styled, { css } from "styled-components";
// framer motion
import {motion} from "framer-motion";

const StyledSidebar = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(180deg, rgb(30, 27, 75) 0%, rgba(29,26,67,1) 87%, rgba(29,26,67,1) 100%);
  h1 {
    font-size: 1.5rem;
    min-width: 13rem;
    font-weight: 500;
    color: #6F6C99;
  }
  .logo {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 5rem;
    padding-bottom:12rem;
    img {
      width: 9rem;
      padding: 0;
    }
  }
  .home, .chart, .add  {
    position: relative;
    width: 100%;
  }
  .add {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 4rem 0;
    cursor: pointer;
    i {
    margin-right: 5rem;
      svg {
        width: 2rem;
      }
      @media (max-width: 1500px) {
        margin-right: 3rem;
      }
    }
    h1 {
      background: linear-gradient(140deg, rgba(255,64,154,1) 0%, rgba(196,56,239,1) 63%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-box-decoration-break: clone;
      font-weight: 600;
    }
  }

  a {
    text-decoration: none;
    color: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 4rem 0;
    i {
      margin-right: 5rem;
      svg {
        width: 2rem;
      }
      @media (max-width: 1500px) {
        margin-right: 3rem;
      }
    }
    &.active {
      i svg path {
        fill: #4A3DFF;
      }
      h1 {
        font-weight: 700;
        color: #FFFFFF;
      }
      &::after {
        content: "";
        position: absolute;
        background: #4A3DFF;
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
        top: 50%;
        left: 0%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;

export {
  StyledSidebar,
};