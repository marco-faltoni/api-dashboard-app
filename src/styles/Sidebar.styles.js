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
    font-size: 1.6rem;
    min-width: 10rem;
    font-weight: 500;
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
  .home, .chart {
    position: relative;
    width: 100%;
  }
  a {
    text-decoration: none;
    color: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 4rem 0;
    img {
      margin-right: 5rem;
      width: 2.5rem;
      @media (max-width: 1500px) {
        margin-right: 3rem;
      }
    }
    &.active {
      h1 {
        font-weight: 700;
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