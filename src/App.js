import React, { Component } from 'react';

import {
    BrowserRouter as Router, 
    Route, 
    Link
  } from 'react-router-dom'

import Routes from "./routes";

import NavBar from './components/navBar/index';

import SideBar from './components/sideBar/index';

import { 
  GlobalStyle, 
  Page, Container
  } from "./styles/global";

class App extends Component {

    render() {
        return (
          <Router>
            <GlobalStyle />
            <SideBar  />
              <NavBar />
                <Page>
                  <Container>
                    <Routes />
                  </Container>
                </Page>
            </Router>
        );
    }
}

export default App
