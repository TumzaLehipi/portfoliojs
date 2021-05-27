import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
 
  width: 60px;
  z-index: 1;
  min-height: 100vh;
  max-height: 100vh;
  text-align: center;
  border-right : 1px solid #ff3d00;

  @media screen and (min-width: 320px) and (max-width: 819px) and (orientation: landscape) {
    min-height: 100vw;
  }
`;

export const LinkBlank = styled.a``;


export const List = styled.ul`
  position: absolute;
  height: 60px;
  bottom: 50%;
  width: 100%;
  display: block;
  padding: 0;
  list-style: none;

  @media only screen and (max-height: 619px) {
    display: none;
  }
`;

export const ChildrenList = styled.li`
  > a {
    padding: 5px 0;
    display: block;
    width: 30%;
    margin: auto;
    color: #ffffff  ;

    &#github:hover {
      color: #283e4a;
    }
    &#facebook:hover {
      color: #4267b2;
    }
    &#linkedin:hover {
      color: #285aeb;
    }
    &#instagram:hover {
      color: #bc1888;
    }
  }
`;


