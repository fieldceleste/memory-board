import React from 'react';
import Header from './Header';
import PostControl from './PostControl';
import MessageBoard from './MessageBoard';
// import Signin from "./Signin";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import './App.css';


function App(){
  return (
    <React.Fragment>
      <Header />
      <PostControl />
      <MessageBoard />
    </React.Fragment>
  );
}

export default App;
