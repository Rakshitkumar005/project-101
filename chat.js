// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAD5Z2SfIy44082_sz8iKH7-g0WAB1M8aU",
    authDomain: "project-101-8fd90.firebaseapp.com",
    projectId: "project-101-8fd90",
    storageBucket: "project-101-8fd90.appspot.com",
    messagingSenderId: "508502387318",
    appId: "1:508502387318:web:62bdd50067632c2a0e4d57"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



