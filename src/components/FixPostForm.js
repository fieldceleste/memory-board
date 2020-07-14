import React from "react";
import PropTypes from "prop-types";
import NewPostTemplete from './NewPostTemplete';
import { useFirestore } from 'react-redux-firebase';

function FixPostForm(props) {
  const firestore = useFirestore();
  const { post } = props;

  function handleFixPostFormSubmission(event){
    event.preventDefault();
    props.onFixPost();
    const areasToChange = {
      username: event.target.username.value,
      country: event.target.country.value,
      city: event.target.city.value,
      date: event.target.date.value,
      message: event.target.message.value,
    }
    return firestore.update({collection: 'posts', doc: post.id }, areasToChange)
  }
  return (
    <React.Fragment>
    <form onSubmit={handleFixPostFormSubmission}>
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
          <button type='submit'>Edit</button>
      </form>
    </React.Fragment>
  );
}
FixPostForm.propTypes = {
  onFixPost: PropTypes.func
};
export default FixPostForm;
