  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDLLUUkqKX7ncWTZzvhToj2JZ5s8qk3ZV0",
    authDomain: "gilmatiendacesde.firebaseapp.com",
    projectId: "gilmatiendacesde",
    storageBucket: "gilmatiendacesde.appspot.com",
    messagingSenderId: "186064098306",
    appId: "1:186064098306:web:a8a7705799efc9e357031b",
    measurementId: "G-Z291LB5HDK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);