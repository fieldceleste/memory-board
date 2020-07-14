import React from 'react';
import FixPostForm from './FixPostForm';
import PostInfo from './PostInfo';
import MessageBoard from './MessageBoard';
import NewPostTemplete from './NewPostTemplete';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import { withFirestore } from 'react-redux-firebase';

class PostControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedPost: null
    };
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        selectedPost: null
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

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
    if (this.state.selectedPost != null) {
      currentlyVisibleState = 
      <PostInfo
        post = {this.state.selectedPost} />
      buttonText = "Return to Posts";

    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewPostTemplete onNewPostCreation={this.handleAddingNewPostToList} />
      buttonText = "Return to Posts";
    } else {
      currentlyVisibleState = <PostInfo postInfo={this.props.masterPostInfo} 
      onPostSelection={this.handleChangingSelectedPost} />
      buttonText = "Add Post";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

PostControl.propTypes = {

}

const mapStateToProps = state => {
  return {

  }
}

PostControl = connect(mapStateToProps)(PostControl);

export default withFirestore(PostControl);