import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAnlU99nDNra-5LD9e6MDKrZmAIGMAUylw",
    authDomain: "college-project-b397e.firebaseapp.com",
    projectId: "college-project-b397e",
    storageBucket: "college-project-b397e.appspot.com",
    messagingSenderId: "355996750736",
    appId: "1:355996750736:web:06ce14fd6923d1ae841915",
    measurementId: "G-1PF4K01QT8"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  console.log(app);

document.getElementById("logout").addEventListener("click",function(){
    const auth = getAuth();
signOut(auth).then(() => {
    let notib = document.querySelector("#notificationbox");
    let notification = document.createElement("div");
    notification.innerHTML = '<i class="fa-solid fa-circle-check"></i>Signing Out...';
    notification.querySelector('i').classList.add('one');
    notib.appendChild(notification);
    notification.setAttribute('class',"notification");
   setTimeout(() => {
        notification.remove()
        {
          window.open("index.html","_parent");
        }
   }, 5000)
}).catch((error) => {
  // An error happened.
});
})