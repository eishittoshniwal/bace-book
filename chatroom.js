 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyCp-7Ckgz_MMs_cB3LTOhfqqJcbuUwnk-U",
      authDomain: "bace-book.firebaseapp.com",
      databaseURL: "https://bace-book-default-rtdb.firebaseio.com",
      projectId: "bace-book",
      storageBucket: "bace-book.appspot.com",
      messagingSenderId: "922308197134",
      appId: "1:922308197134:web:9ad5a7d2fa9550ddb5b55f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
