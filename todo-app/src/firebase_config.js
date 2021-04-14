import firebase from "firebase";

var firebaseConfig = {
    apiKey: "",
    authDomain: "todo-325cc.firebaseapp.com",
    projectId: "todo-325cc",
    storageBucket: "todo-325cc.appspot.com",
    messagingSenderId: "",
    appId: ""
};

firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export {db};

 
