import React from "react";
import { Route,  Redirect } from "react-router-dom";
import Lazy from "./components/Lazy/Lazy";
import NavBar from "./components/NavBar/NavBar";

const componentsNames = {
    "HOME" : "home"
}
const components = {}
components[componentsNames.HOME] = Lazy(() => import("./components/Home/Home"));

function getComponent(props,comp) {
    const Component = components[comp]
    return (<>
                <NavBar current={comp} />
                <Component {...props} />
            </>)
}


let Routes = [
    <Route
        key="index"
        path="/"
        exact
        render={() => (
            <Redirect to="/home" />
            )}
    />,

    <Route
        key="home"
        path="/home"
        exact
        render={props=> getComponent(props,componentsNames.HOME)}
    />,

    <Route
    key="fallback"
    path="*"
    render={() => <Redirect to="/home" /> }
    />,

]

export default Routes;