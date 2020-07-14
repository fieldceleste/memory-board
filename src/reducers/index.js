import formVisibleReducer from './form-visible-reducer';
import messgaeBoardReducer from './message-board-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({

  formVisibleOnPage: formVisibleReducer,
  masterMessgeBoard: messageBoardReducer,
  firestore: firestoreReducer
});

export default rootReducer;