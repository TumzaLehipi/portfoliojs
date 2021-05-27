import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function Routes() {
    return (
       <Switch>
           <Route path = '/' 
                        exact render = {()=>
                        <Home 
                    />
                }/> 
                
                <Route path = '/About' 
                        exact render = {()=>
                        <About 
                    />
                }/> 
        
                <Route path = '/Contact' 
                        exact render = {()=>
                        <Contact 
                      //title = {this.state.contact.title}
                    />
                }/> 
                    <Route path = '/Skills' 
                        exact render = {()=>
                        <Skills 
                      //  title = {this.state.contact.title}
                    />
                }/> 
       </Switch>

    );
}

export default Routes;
