import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
    <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='username'
          placeholder='Username' />
        <input
          type='text'
          name='country'
          placeholder='Country Visited' />
        <input 
          type='text'
          name='city'
          placeholder='City Visited' />
          <input 
          type='text'
          name='date'
          placeholder='Date Visited' />
          <textarea
          name = 'message'
          placeholder = 'Please Describe your Memory' />
        <button type='submit'>{props.buttonText}</button>
      </form>
  </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};
export default ReusableForm;