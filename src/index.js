import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from "./firebase";
import 'firebase/auth';


const store = createStore(rootReducer);

const reactReduxFirebaseProps = {
  firebase, 
   config: {
      userProfile: "users", 
      useFirestoreForProfile: true,
  },
  dispatch: store.dispatch,
  createFirestoreInstance
}

store.subscribe(() =>
 console.log(store.getState())
); 

ReactDOM.render(
  <Provider store={store}>
  <ReactReduxFirebaseProvider {...reactReduxFirebaseProps}>
    <App />
  </ReactReduxFirebaseProvider>
    </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
 