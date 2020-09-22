import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from 'react';
import Funny from './pages/funny' 
import Home from './pages/home';

export default function IRouter(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/funny" component={Funny}></Route>
            </Switch>
        </BrowserRouter>
    );
}