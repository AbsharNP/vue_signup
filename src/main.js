import { createApp } from 'vue';
import App from './App.vue';
//import './assets/style.css';
//import './assets/style1.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRouter , createWebHistory } from 'vue-router';
import HomeMsg from './components/Home.vue';
import LoginPage from './components/Login.vue';
import SignUp from './components/SignUp.vue';



   const routes= [
        {
            path: '/', component:LoginPage
        },
        {
            path: '/login', component:LoginPage
        },
        {
        path: '/signup', component:SignUp
        },
        {
            path: '/home', component:HomeMsg
            },
        
    ]

    const router = createRouter({
        history: createWebHistory(),
        routes
    })


createApp(App).use(router).mount('#app')




