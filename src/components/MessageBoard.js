import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import PostInfo from "./PostInfo";

function MessageBoard(props) {
  useFirestoreConnect([
    { collection: 'posts' }
  ]);

  const posts = useSelector(state => state.firestore.ordered.posts);

  if (isLoaded(posts)) {
    return (
      <React.Fragment>
      <hr />
      {posts.map((post) => {
        return <Post
        whenPostClicked = { props.selectingPost }
        username = {post.username}
        country = {post.country}
        city = {post.city}
        date = {post.date}
        message = {post.message}
        id = {post.id}
        key = {post.id}
        />
      })}
      </React.Fragment>
   );
  } else {
    return (
      <React.Fragment>
      <h3>Loading Your Information...</h3>
      </React.Fragment>
    )
  }
}
MessageBoard.propTypes = {
  selectingPost: PropTypes.func
};

export default PostInfo;