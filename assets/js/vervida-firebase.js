// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyANDxzOnUzg5xt54YoDBQgKLxHKcNoDrjM",
  authDomain: "vervida-976d5.firebaseapp.com",
  databaseURL: "https://vervida-976d5.firebaseio.com",
  projectId: "vervida-976d5",
  storageBucket: "vervida-976d5.appspot.com",
  messagingSenderId: "725684081232",
  appId: "1:725684081232:web:4a11398d0812f114ea3755",
  measurementId: "G-7C46JCS99Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)

function VervidaFirebaseRegister(email, password){

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function() {
    window.location.replace("/examples/login.html")
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(`Register failed. Error: ${errorMessage}`)
  })
};

function VervidaFirebaseSignIn(email, password){
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function() {
    window.location.replace("/")
    // do nothing
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(`Sign In failed. Error: ${errorMessage}`)
  })
};


function VervidaSignOut(){
  firebase.auth().signOut()
    .then(function() {
      window.location.replace("examples/register.html")
    })
    .catch(function(error) {
      // TODO FIXME
      alert(`Couldn't sign you out. Some Error occureed `)
    });
}

function VervidaRedirectNotLoggedIn(){

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // proceed
    } else {
      window.location.replace("examples/register.html");
    }
  });
}
