import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenPostClicked(props.id)}>
        <h1>{props.username}</h1>
        <h2>{props.country}-{props.city}</h2>
        <h3>{props.date}</h3>
        <p>{props.message}</p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Post.propTypes = {
  username: PropTypes.string,
  country: PropTypes.string,
  city: PropTypes.string,
  date: PropTypes.string,
  message: PropTypes.string,
  whenPostClicked: PropTypes.func
};

export default Post;