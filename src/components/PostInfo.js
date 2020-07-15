import React from "react";
import PropTypes from "prop-types";

function PostInfo(props) {
  const { post, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Post Information</h1>
      <h2>{post.username}</h2>
      <h3>{post.country}-{post.city}</h3>
      <h4>{post.date}</h4>
      <p>{post.message}</p>
      <button onClick={props.onClickingEdit}>Update Post</button>
      <br />
      <button onClick={() => onClickingDelete(post.id)}>Delete Post</button>
    </React.Fragment>
  );
}
PostInfo.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};
export default PostInfo;