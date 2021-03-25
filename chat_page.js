//YOUR FIREBASE LINKS
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

    room_name=localStorage.getItem("room")
    username=localStorage.getItem("username")

    function send() {
          msg=document.getElementById("msg").value
          firebase.database().ref(room_name).push({
                USER:username,
                MSG:msg,
                LIKES:0
             })
             document.getElementById("output").innerHTML=username+":"+msg
             document.getElementById("msg").value=""
    }
 
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("room")
      localStorage.removeItem("username")
      window.location="login.html"

}
