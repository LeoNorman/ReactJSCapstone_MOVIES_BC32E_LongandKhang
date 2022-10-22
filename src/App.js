import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router";
import Checkout from "./pages/Checkout/Checkout";
import Contact from "./pages/Contact/Contact";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import News from "./pages/News/News";
import Register from "./pages/Register/Register";
import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTemplate";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import { Suspense, lazy } from 'react'
import Loader from "./templates/HomeTemplate/Loader";
import UserTemplate from "./templates/UserTemplate/UserTemplate";

const CheckoutTemplateLazy = lazy(() => import('./templates/CheckoutTemplate/CheckoutTemplate'))

export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path='/' exact Component={Home} />
        <HomeTemplate path='/home' exact Component={Home} />
        <HomeTemplate path='/contact' exact Component={Contact} />
        <HomeTemplate path='/news' exact Component={News} />
        <HomeTemplate path='/detail/:id' exact Component={Detail} />
        <UserTemplate path='/login' exact Component={Login} />
        <CheckoutTemplate path='/checkout/:id' exact Component={Checkout} />

        {/* Suspense bọc những Component muốn tạo hiệu ứng Loading bằng 1 component Loader */}
        {/* <Suspense fallback={<Loader />}>
          <CheckoutTemplateLazy path='/checkout/:id' exact Component={Checkout} />
        </Suspense> */}

        <Route path='/register' exact component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
