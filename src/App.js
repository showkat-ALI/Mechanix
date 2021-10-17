import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Pages/Home/Home/Home";
import Notfound from "../src/Pages/Notfound/Notfound";
import Details from './Pages/Details/Details'
import Navigation from "./Pages/Shared/Navigation/Navigation";
import Login from "./Pages/Signin/Login/Login";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./Pages/Signin/Privateroute/Privateroute";

function App() {
  return (
    <div className="App" >
      <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/details/:serviceId">
            <Details></Details>
            </PrivateRoute>
            <Route path="/login">
              <Login> </Login>
              </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
