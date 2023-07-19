import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AOS from "aos";
import {Provider} from 'react-redux'
import { store } from "./redux/store";
import { createFirebaseConnect, createFirebaseInstance,createFirestoreInstance } from "react-redux-firebase";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from "./config/firebase"


// stlyes
// swiper CSS
import "aos/dist/aos.css";
import "swiper/swiper-bundle.min.css";
import "./styles/particles.css";
import "./styles/rc-slider.css";
import "./index.css";
import "./App.css"

const rrfConfig={
  userProfile:"users",
  useFirestoreForProfile:true,
  attachAuthIsReady:true,
  useFirestoreForStorageMeta: true
}
const rrfProps={
  firebase,
  config: rrfConfig,
  dispatch:store.dispatch,
  createFirestoreInstance,
}

AOS.init();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    
    <ReactReduxFirebaseProvider {...rrfProps}>
    <App />
    </ReactReduxFirebaseProvider>
   
  </React.StrictMode>
  </Provider>
);
