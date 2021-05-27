import styled from "styled-components";
import propic from '../../assets/profilepic.jpg';

export const ProPic = styled.div`

    position: absolute;
    height: 190px;
    width: 200px;
    margin: 0;
    top: 250px;
    bottom: 0;
    right: 6vw;
    left: auto;
    background : red;
    border-radius :50%;
    background-image : url(${propic});

   

`;