import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./../routes/Login";
import SignUp from "./../routes/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
