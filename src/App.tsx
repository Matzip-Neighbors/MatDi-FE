import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

const CLIENT_ID = "7e089ce9768f1024ea0759453ecf5460";
const REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao";

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <h1>
              <a href={KAKAO_AUTH_URL}>Login</a>
            </h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
