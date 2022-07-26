import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyAPA0gkEj_MDBp9hXpv6RTmha6-tF62c0Y",

  authDomain: "instagram-clone-c28f8.firebaseapp.com",

  projectId: "instagram-clone-c28f8",

  storageBucket: "instagram-clone-c28f8.appspot.com",

  messagingSenderId: "294247052089",

  appId: "1:294247052089:web:4d9be5721fb61c1e4b6ee8"

};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;


export {firebase,FieldValue}