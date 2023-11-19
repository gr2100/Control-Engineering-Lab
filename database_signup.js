import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyByTijZ-d9dB2fkOeyWCbDCWcmVrb26Prg",
    authDomain: "student-fb692.firebaseapp.com",
    databaseURL: "https://student-fb692-default-rtdb.firebaseio.com",
    projectId: "student-fb692",
    storageBucket: "student-fb692.appspot.com",
    messagingSenderId: "978847295313",
    appId: "1:978847295313:web:8431d071e9d50b28781570",
    measurementId: "G-VRLZ34YR9R"
  };

  const app = initializeApp(firebaseConfig);
  console.log(app)
  const analytics = getAnalytics(app);
  const database = getDatabase(app);
  const auth = getAuth();
  


  let signup = document.getElementById("butsignup");

  signup.addEventListener("click",async ()=>{
    console.log("hello");
    var name = document.getElementById("login__name1").value
    var rno = document.getElementById("login__regno").value
    var email = document.getElementById("login__email").value
    var password = document.getElementById("login__pwd").value
    var section = document.getElementById("section").value

    var usercredentials = await createUserWithEmailAndPassword(auth,email,password)
    var user = usercredentials.user;
    console.log(user);
    await set(ref(database, `${section}/`+user.uid),{
            name:name,
            regno:rno,
            email:email
    })

    })

    console.log(name,rno,email,password,section);
