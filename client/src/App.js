import Home from "./pages/home/Home";
import "./app.scss";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "./authContext/AuthContext"

function App() {

  const {user} = useContext(AuthContext)
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/register"/>}
        </Route>
        <Route  path="/register">
        {!user ? <Register /> : <Redirect to="/"/>}
        </Route>
        <Route path="/login">
        {!user ? <Login /> : <Redirect to="/"/>}
        </Route>
        {user &&  <>
        <Route path="/series">
          <Home type="series" />
        </Route>
        <Route path="/movies">
          <Home type="movies" />
        </Route>
        <Route path="/watch">
          <Watch />
        </Route> 
        </>
        }
      </Switch>
    </Router>
  );
}

export default App;
