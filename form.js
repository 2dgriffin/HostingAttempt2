// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyBDm0V8XP5oXCSNu0v8LvIIsMVMNKRfKFA",
	authDomain: "myteamprojectdb.firebaseapp.com",
	databaseURL: "https://myteamprojectdb.firebaseio.com",
	projectId: "myteamprojectdb",
	storageBucket: "myteamprojectdb.appspot.com",
	messagingSenderId: "869369411885",
	appId: "1:869369411885:web:3f890933eae82e5f247ba4",
	measurementId: "G-DQEY5KPJQS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics(); //not in demo
const auth = firebase.auth();

function signUp(){
	var email = document.getElementById("email");
	var password = document.getElementById("password");
	const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
	promise.catch(e => alert(e.message));
	
	alert("Signed Up");
}

function signIn(){
	var email = document.getElementById("email");
	var password = document.getElementById("password");
	const promise = auth.signInWithEmailAndPassword(email.value, password.value);
	promise.catch(e => alert(e.message));
	
	alert("Signed In");
}

function signOut(){
	auth.signOut();
	alert("Signed Out");
};