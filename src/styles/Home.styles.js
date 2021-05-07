import styled, { css } from "styled-components";
// framer motion
import {motion} from "framer-motion";

const StyledContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
  h1 {
    font-size: 2.8rem;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    height: 100vh;
    justify-content: center;
  }
`;

export {
  StyledContainer
};