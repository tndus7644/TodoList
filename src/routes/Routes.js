import {Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import Todos from "../pages/Todos";
import Photos from "../pages/Photos";
import Videos from "../pages/Videos";
import React from "react";

const Routes = () => {
    return(
        <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route path={'/todos'} component={Todos}/>
            <Route path={'/photos'} component={Photos}/>
            <Route path={'/videos'} component={Videos}/>
        </Switch>
    )
}

export default Routes;