var firebaseConfig = {
    apiKey: "AIzaSyAnio4aGQxF0HyMQNUd2qpfsKOebPWTvVY",
    authDomain: "chitter-chat-9ce06.firebaseapp.com",
    projectId: "chitter-chat-9ce06",
    storageBucket: "chitter-chat-9ce06.appspot.com",
    messagingSenderId: "171390478745",
    appId: "1:171390478745:web:a4c754fe75e165864f8b08",
    measurementId: "G-ZPWQWENX8Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("main");
document.getElementById("h").innerHTML = "Welcome " + username + "!";