import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import News from "./pages/News/News";
import Register from "./pages/Register/Register";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";

export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path='/' exact Component={Home} />
        <HomeTemplate path='/home' exact Component={Home} />
        <HomeTemplate path='/contact' exact Component={Contact} />
        <HomeTemplate path='/news' exact Component={News} />
        <Route path='/login' exact Component={Login} />
        <Route path='/register' exact Component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
