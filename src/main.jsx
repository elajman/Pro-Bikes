import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnRtxggKMiG0EP6W6mt0GvwWDWPc-jop0",
    authDomain: "usbikes-24967.firebaseapp.com",
    projectId: "usbikes-24967",
    storageBucket: "usbikes-24967.appspot.com",
    messagingSenderId: "495331585636",
    appId: "1:495331585636:web:a11182218e922a748b7971"
  };


// Initialize Firebase
initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
/**
 * apiKey: "AIzaSyAUPIsr-WKn_jdJmFxN38ub837vIPmL9eA",
  authDomain: "boardgames-26b95.firebaseapp.com",
  projectId: "boardgames-26b95",
  storageBucket: "boardgames-26b95.appspot.com",
  messagingSenderId: "324110716731",
  appId: "1:324110716731:web:6961cf904201b833e3711e
 */