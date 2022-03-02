<<<<<<< HEAD
import React from 'react';

import './App.css';
=======
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Auth from "./Auth";
import Profile from "./Profile";
>>>>>>> 3b684468acf6cd2738e0c3e5d763ca3823305ec2

function App() {
  const CLIENT_ID = process.env.REACT_APP_KAKAO_API_KEY;
  const REDIRECT_URI = "http://localhost:3000/api/user/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
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
>>>>>>> 3b684468acf6cd2738e0c3e5d763ca3823305ec2
  );
}

export default App;
