import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBfN8zBrUx2OonF7o-AJre_QpE1xrF4uUY",
  authDomain: "noted-evernote-clone.firebaseapp.com",
  projectId: "noted-evernote-clone",
  storageBucket: "noted-evernote-clone.appspot.com",
  messagingSenderId: "205710695638",
  appId: "1:205710695638:web:2bc83ec8565e64bdcdfd77",
  measurementId: "G-SHD54Q6HSQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };

export default firebase;
