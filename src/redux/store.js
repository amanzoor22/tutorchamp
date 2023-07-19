import { configureStore  } from "@reduxjs/toolkit";
//import {createStore, applyMiddleware} from 'redux';
//import logger from "redux-logger";
//import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import {firestoreReducer, reduxFirestore} from 'redux-firestore'
import {firebaseReducer, reactReduxFirebase} from 'react-redux-firebase'
import fbConfig from '../config/firebase'

/*const middleware = [thunk];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}
export const store = createStore(
 rootReducer,
  applyMiddleware(...middleware)
   
);*/
export const store=configureStore({
  reducer:{
    firebase:firebaseReducer,
    firestore:firestoreReducer,
  },
  middleware:(getDefaultMiddleware)=>
  getDefaultMiddleware({
    serializableCheck:false,
  }),
  enhancers:[reduxFirestore(fbConfig)],
})
