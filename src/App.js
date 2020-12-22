import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import Home from "./Containers/Home/Home";
import {Redirect,Router ,Route, Switch} from 'react-router-dom'
import Contact from "./Containers/contact/Contact";
import About from "./Containers/About/About";
import Service from "./Containers/Service/Service";
import Navbar from "./Containers/NavBar/Navbar";
import  './App.css'
import Login from "./Containers/Auth/Login/Login";
import ForgetPassword from "./Containers/Auth/ForgetPassword/ForgetPassword";
import SignUp from "./Containers/Auth/SignUp/SignUp";
import history from "./Common/history";
const App = () => {


    const onKeyPress = () => {
        console.log("ff")
    }
    return (

        <Router history={history}>

            <Switch>

                <Route exact path={"/"} component={Login}/>
                <Route exact path={"/SignUp"} component={SignUp}/>
                <Route exact path={"/ForgetPassword"} component={ForgetPassword}/>
                <Route exact path={"/Home"} component={Home}/>
                <Route exact path={"/about"} component={About}/>
                <Route exact path={"/contact"} component={Contact}/>
                <Route exact path={"/service"} component={Service}/>
                <Redirect to={"/"}/>
            </Switch>
        </Router>
    )

}

export default App;
