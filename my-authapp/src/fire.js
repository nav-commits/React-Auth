import firebase from "firebase";

const {REACT_APP_APIKEY,REACT_APP_DOMAIN,REACT_APP_PROJECTID,REACT_APP_STORAGEBUC,REACT_APP_MESSAGESEND,REACT_APP_APID } = process.env

 const firebaseConfig = {
    apiKey: REACT_APP_APIKEY,
    authDomain: REACT_APP_DOMAIN,
    projectId: REACT_APP_PROJECTID,
    storageBucket: REACT_APP_STORAGEBUC,
    messagingSenderId: REACT_APP_MESSAGESEND,
    appId: REACT_APP_APID
  };
 
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;