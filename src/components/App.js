import React from 'react';
import Header from './Header';
import PostControl from './PostControl';
import MessageBoard from './MessageBoard';
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
