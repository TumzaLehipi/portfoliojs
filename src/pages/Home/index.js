import React from 'react';

import NavBar from '../../components/navBar/index'; 

import Text from '../../components/textArea/index';

import Logo from '../../components/LogoArea/Index';


function Home() {
    return (
        <React.Fragment>
            
            <Logo />
                <Text 
                 home = {true}
                 pre = {"Heita, Ke TumzaLehipi, Ke WebDeveloper!"}
                 title={"Hi, I'm TumzaLehipi, I'm WebDeveloper!"}
                 subtitle={"Back-End(NodeJS) / Front-End(ReactJS) / Desktop(ElectronJS)"}
                 />
        </React.Fragment>
    )
}

export default Home;
