import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase'

function NewPostTemplete(props) {
  const firestore = useFirestore();

  function addPostToFirestore(event) {
    event.preventDefault();
    props.creatingNewPost();

    return firestore.collection('posts').add(
      {
        username: event.target.username.value,
        country: event.target.country.value,
        city: event.target.city.value,
        date: event.target.date.value,
        message: event.target.message.value,
      }
    );
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={addPostToFirestore}
        buttonText="Add Post to Board" />
    </React.Fragment>
  );
}
NewPostTemplete.propTypes = {
  creatingNewPost: PropTypes.func
}
export default NewPostTemplete;