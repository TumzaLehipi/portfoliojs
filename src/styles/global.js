import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;

}

html,
body,
#app {
  height: 100vh;
  min-height: 100vh;
  max-height: 50vh;
  max-width: 100vw;
}

body {
  background: #202126;

}

@media screen and (min-width: 320px) and (max-width: 819px) and (orientation: landscape) {
  html {
  max-width: 100vh;
  min-height: 100vw;
  max-height: 100vw;
  }
}
`;

export const Page = styled.div`
  position: absolute;
  width: 100%;
  height: 90%;

   @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
    min-height: 100vw;
    min-width: 100vh;
  }
`;
export const Container = styled.div`
  position: absolute;
  will-change: contents;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  top: 0px;
  bottom: 5vh;
  

 
  
`;