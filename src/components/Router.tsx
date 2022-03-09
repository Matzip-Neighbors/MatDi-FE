import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Profile from "../routes/Profile";
import Success from "./../routes/Success";
import Login from "./../routes/Login";
import SignUp from "./../routes/SignUp";

const Router = () => {
  const CLIENT_ID = process.env.REACT_APP_KAKAO_API_KEY;
  const REDIRECT_URI = "http://localhost:3000/api/user/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

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
          <Route exact path={KAKAO_AUTH_URL}>
            <h1>
              <Success />
            </h1>
          </Route>
          <Route path="/oauth/kakao/callback">
            <Auth />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
