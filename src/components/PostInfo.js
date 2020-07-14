import React from "react";
import PropTypes from "prop-types";

function PostInfo(props) {
  const { postSelected, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Post Information</h1>
      <h2>{postSelected.username}</h2>
      <h3>{postSelected.country}-{postSelected.city}</h3>
      <h4>{postSelected.date}</h4>
      <p>{postSelected.message}</p>
      <button onClick={props.onClickingEdit}>Update Post</button>
      <br />
      <button onClick={() => onClickingDelete(postSelected.id)}>Delete Post</button>
    </React.Fragment>
  );
}
PostInfo.propTypes = {
  postSelected: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};
export default PostInfo;