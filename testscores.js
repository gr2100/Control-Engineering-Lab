import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";
    import { getDatabase,set,ref } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
    import { getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const database = getDatabase(app);
    const auth = getAuth();
    console.log(app);

    let submit = document.getElementById("starttest");
    let regno = document.getElementById("regno")
    let section = document.getElementById("section")
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const userID = user.uid;
          submit.addEventListener("click",()=>{
            console.log(regno,section);
            set(ref(database,`studentsloggedin/${section}/${user.uid}`),{
                "loggedin":true,
                "prelab":"",
                "testmarks":"",
                "postlab":""

            })
        })
          console.log(user.uid);
        }
    }
    )
    