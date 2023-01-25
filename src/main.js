import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcwGj5Rn2gsoEF07MODFgif9Mpsg-iGa8",
  authDomain: "frameworks-assignment-1.firebaseapp.com",
  projectId: "frameworks-assignment-1",
  storageBucket: "frameworks-assignment-1.appspot.com",
  messagingSenderId: "233688395537",
  appId: "1:233688395537:web:8511aecb8b37c2ffdfa6b0"
};
// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
