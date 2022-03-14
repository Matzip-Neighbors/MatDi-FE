import React from 'react';
// import Maptest from '../src/search/mainsearch';
import Maptest from '../src/map/location';
import './App.css';
// import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
// import Auth from "./Auth";
// import Profile from "./Profile";

function App() {
  // const CLIENT_ID = process.env.REACT_APP_KAKAO_API_KEY;
  // const REDIRECT_URI = "http://localhost:3000/api/user/kakao/callback";
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div className="App">
     <Maptest/>
    </div>
  );
}

export default App;
