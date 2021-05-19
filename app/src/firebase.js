import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBfpc5E8qSu7QYi5L76QcIWi3p3TcwWHpk",
    authDomain: "reacc-auth.firebaseapp.com",
    projectId: "reacc-auth",
    storageBucket: "reacc-auth.appspot.com",
    messagingSenderId: "745219778052",
    appId: "1:745219778052:web:6e5741a143beb9e03fb751",
    measurementId: "G-7JVS20F9JM"

})

export const auth = app.auth()
export default app