import styled from "styled-components";

export const Container =  styled.div`

    margin: 0;
    padding: 0;
    color: #f2f2f2;
    font-family: montserrat;

nav{
    padding: 10px 2px 2px 2px;
    height: 60px;
    width: 100%;    
}
nav ul{

    display: flex;
    list-style: none;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
}
label.logo{
    
    position: abosute;
    left: -5px;
    font-size: 8px;
    font-weight: 450;
    margin-left: 20px;
    margin-right: 500px;
    line-height : 40px;
}
nav ul{
    float : right;
    margin-right : 40px;
    line-height : 30px;

}
nav ul div.items{
    
    padding: 0 25px;
    display: inline-flex;
}
nav ul div.items a{
    color: white;
    text-decoration: none;
    font-size: 12px;
    padding: 0 12px;
    text-transform : uppercase;

}
nav ul div.items a:hover{
    color: #ff3d00;;
    transition: .5s ease;
}
nav #icon{
    color : white;
    font-size : 30px;
    line-height : 30px;
    float : right;
    margin-right : 40px; 
    cursor : pointer;
}
@media (max width : 1048px){

    label.logo{

        font-size : 32px;
        padding-left : 60px;

    }

    nav ul{

        margin-right: 20px;
    }

    nav a{
        font-size : 17px;
    }

    @media (max width : 909px){
        nav #icon{
            display : block;
        }
        nav ul{
            position : fixed;
            width : 100%;
            height : 100vh;
            top : 60px;
            left : 0;
            text-align : center;
        }
        nav li{
            display : block;
            margin: 50px 0;
            line-height: 30px;
        }
    }
}
        
`;