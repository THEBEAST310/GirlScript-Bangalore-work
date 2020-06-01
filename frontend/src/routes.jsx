import React from "react";
import { Route,  Redirect } from "react-router-dom";
import Lazy from "./components/Lazy/Lazy";

// components
const Home = Lazy(() => import("./components/Home/Home"));


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
        component={Home}
    />
]

export default Routes;