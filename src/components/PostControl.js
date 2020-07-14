import React from 'react';
import EditPostForm from './EditPostForm';
import PostInfo from './PostInfo';
import MessageBoard from './MessageBoard';
import NewPostForm from './NewPostForm';
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

  handleChangingSelectedTicket = (id) => {
    this.props.firestore.get({collection: 'posts', doc: id}).then((post) => {
      const firestoreTicket = {
        name: post.get("name"),
        country: 
      }
    })
  }

}



PostControl = connect(mapStateToProps)(PostControl);

export default withFirestore(PostControl);