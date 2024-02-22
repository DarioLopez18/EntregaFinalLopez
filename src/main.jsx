import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAw-t_HHGsZrlr__XUzolfK8XhjE76K4CA",
  authDomain: "coderhouse-ecommerce-d771b.firebaseapp.com",
  projectId: "coderhouse-ecommerce-d771b",
  storageBucket: "coderhouse-ecommerce-d771b.appspot.com",
  messagingSenderId: "939568691128",
  appId: "1:939568691128:web:40934607c53b6a6321014d",
  measurementId: "G-8MKP7MVCWN"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
