import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase'

function NewPostTemplete(props){ 
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
  <form onSubmit={addPostToFirestore}>
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
NewPostTemplete.propTypes = {
  creatingNewPost: PropTypes.func
}
export default NewPostTemplete;