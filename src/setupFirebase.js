import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyB4SwVHVUN8cyfe7Tn0kGETvvojtbpsFoY",
  authDomain: "calco-fit-app.firebaseapp.com",
  databaseURL: "https://calco-fit-app.firebaseio.com",
  projectId: "calco-fit-app",
  storageBucket: "calco-fit-app.appspot.com",
  messagingSenderId: "281142169831"
};

export default () => {
  firebase.initializeApp(config);
}