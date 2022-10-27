import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router";
import Checkout from "./pages/Checkout/Checkout";
import Contact from "./pages/Contact/Contact";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Register from "./pages/Register/Register";
import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTemplate";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import React from 'react'
import Login from "./pages/Login/Login";
import UserTemplate from "./templates/UserTemplate/UserTemplate";

// const CheckoutTemplatelazy=lazy(()=>import('./templates/CheckoutTemplate/CheckoutTemplate'))
 export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path='/home' exact Component={Home} />
        <HomeTemplate path='/contact' exact Component={Contact} />
        <HomeTemplate path='/news' exact Component={News} />
        <HomeTemplate path='/detail/:id' exact Component={Detail} />
        <CheckoutTemplate path='/register' exact Component={Register} />

        <CheckoutTemplate path="/checkout/:id" exact Component={Checkout}/>
        <UserTemplate path='/login' exact Component={Login} />
       
        <HomeTemplate path='/' exact Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
