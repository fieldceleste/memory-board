import React from 'react';
import FixPostForm from './FixPostForm';
import PostInfo from './PostInfo';
import MessageBoard from './MessageBoard';
import NewPostTemplete from './NewPostTemplete';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import "firebase/auth";
import { withFirestore, isLoaded } from 'react-redux-firebase';

class PostControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedPost: null
    };

  }
//toggle form
  handleFormClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  // add post to board
  handleAddingNewPostToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  // for updating
  handleChangingSelectedPost = (id) => {
    this.props.firestore.get({collection: 'posts', doc: id}).then((post) => {
      const firestorePost = {
        name: post.get("name"),
        country: post.get("country"),
        city: post.get("city"),
        id: post.id
      }
      this.setState({selectedPost: firestorePost});
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    const auth = this.props.firebase.auth();
    
    if (this.state.selectedPost != null) {
      currentlyVisibleState = 
      <PostInfo
        post = {this.state.selectedPost} />
      buttonText = "Return to Posts";

    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = 
      <NewPostTemplete 
      onNewPostCreation={this.handleAddingNewPostToList} />
      buttonText = "Return to Posts";
    } else {
      currentlyVisibleState = 
      <PostInfo 
      postInfo={this.props.masterPostInfo} 
      onPostSelection={this.handleChangingSelectedPost} />
      buttonText = "Add Post";
    }

    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h3>Loading...</h3>
        </React.Fragment>
      )
    }

    if (isLoaded(auth) && (auth.currentUser === null)) {
      return (
        <React.Fragment>
          <h3>Please sign in to access the queue!</h3>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleFormClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
 }
} 


PostControl.propTypes = {
  formVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage

  }
}

PostControl = connect(mapStateToProps)(PostControl);

export default withFirestore(PostControl);