import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase';

function FixPostForm(props) {
  const firestore = useFirestore();
  const { post } = props;

  function handleFixPostFormSubmission(event) {
    event.preventDefault();
    props.onFixPost();
    const propertiesToUpdate = {
      username: event.target.username.value,
      country: event.target.country.value,
      city: event.target.city.value,
      date: event.target.date.value,
      message: event.target.message.value,
    }
    return firestore.update({collection: 'posts', doc: post.id }, propertiesToUpdate)
  }

    
  return (
    <React.Fragment>
      <ReusableForm 
         formSubmissionHandler={handleFixPostFormSubmission} 
         buttonText="Update Memory Post" />
    </React.Fragment>
  );
}
FixPostForm.propTypes = {
  onFixPost: PropTypes.func
};
export default FixPostForm;
