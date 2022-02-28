import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Auth from "./Auth";
import Profile from "./Profile";

function App() {
  const CLIENT_ID = process.env.KAKAO_API_KEY;
  const REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <h1>
              <a href={KAKAO_AUTH_URL}>Login</a>
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
    </Router>
  );
}

export default App;
