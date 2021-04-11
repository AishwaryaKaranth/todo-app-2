import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAbT_GiaeFh9cZASyYTzVH8iKUbcARPXmc",
    authDomain: "todo-325cc.firebaseapp.com",
    projectId: "todo-325cc",
    storageBucket: "todo-325cc.appspot.com",
    messagingSenderId: "344011275129",
    appId: "1:344011275129:web:cb8c52bc9fd006aa414da8"
};

firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export {db};

 