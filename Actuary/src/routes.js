import React from "react";
import { Route } from "react-router-dom";
import LoginForm from './containers/LoginForm';
import Signup from './containers/Signup';
import ListView from './containers/ListView';
import ArticleDetail from './containers/ArticleDetailView'
//import Login from "./containers/Login";
//import Signup from "./containers/Signup";
//
const BaseRouter = () => (
  <div>
    <Route exact path="/" component={ListView} />{" "}
    <Route exact path="/articles/:articleID/" component={ArticleDetail} />{" "}
    <Route exact path="/login/" component={LoginForm} />{" "}
    <Route exact path="/signup/" component={Signup} /> {" "}

  </div>

);

export default BaseRouter;
