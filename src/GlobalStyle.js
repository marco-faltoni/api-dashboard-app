import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #6F6C99;
    }
    &::-webkit-scrollbar-track {
      background: #59588D;
    }
  }
  html {
    font-size: 62.5%;

  }
  body {
    /* font-family: 'Lato', sans-serif; rgba(45,40,110,1) */
    font-family: 'Poppins', sans-serif;
    width:100%;
    background: linear-gradient(318deg
, rgb(30, 27, 75) 0%, rgba(29,26,67,1) 54%, rgba(29,26,67,1) 100%);
    color: #FFFFFF;
    position: relative;
    .App {
      min-height: 100vh;
      width: 100%;
      display: flex;
      justify-content: space-between;
      position: relative;
      .user-no-position {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;

export {
  GlobalStyles
}