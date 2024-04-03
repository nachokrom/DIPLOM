import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";

const app = createApp(App)

const firebaseConfig = {
    apiKey: "AIzaSyDrbSifeDM31LKs9N0cZ1DpwIxKrGOkJfA",
    authDomain: "kinohome-af875.firebaseapp.com",
    projectId: "kinohome-af875",
    storageBucket: "kinohome-af875.appspot.com",
    messagingSenderId: "194941073486",
    appId: "1:194941073486:web:a83098545e42eafc85ab1f"
};

initializeApp(firebaseConfig);

app.use(createPinia())
app.use(router)

app.mount('#app')
