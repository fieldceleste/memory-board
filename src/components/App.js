import React  from 'react';
import Header from './Header';
import PostControl from './PostControl';
import Signin from "./Signin";
import firebase from '../firebase';
import 'firebase/auth';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var email = user.email;
      var uid = user.uid
      console.log(email)
      console.log (uid)
    } else {
    }
  })


  return ( 
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <PostControl />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;