const firebaseConfig = {
    apiKey: AIzaSyDiOV0QRbhwrffF-V5CmXxv27BGq2Wv3Vs,
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "dream-journal-community",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            document.getElementById("user-info").innerText = "Signed up: " + userCredential.user.email;
        })
        .catch(error => alert(error.message));
}

function signIn() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            document.getElementById("user-info").innerText = "Logged in: " + userCredential.user.email;
            document.getElementById("journal-container").style.display = "block";
        })
        .catch(error => alert(error.message));
}

function signOut() {
    auth.signOut()
        .then(() => {
            document.getElementById("user-info").innerText = "Signed out";
            document.getElementById("journal-container").style.display = "none";
        })
        .catch(error => alert(error.message));
}