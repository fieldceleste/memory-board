import formVisibleReducer from './form-visible-reducer';
import messageBoardReducer from './message-board-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({

  formVisibleOnPage: formVisibleReducer,
  masterMessageBoard: messageBoardReducer,
  firestore: firestoreReducer
});

export default rootReducer;