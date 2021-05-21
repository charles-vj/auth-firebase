import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "keyhere",
    authDomain: "domainhere",
    projectId: "projectIdhere",
    storageBucket: "buckethere",
    messagingSenderId: "msidhere",
    appId: "appidhere",
    measurementId: "msmentidhere"

})

export const auth = app.auth()
export default app
