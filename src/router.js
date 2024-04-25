import Vue from 'vue'
import Router from 'vue-router'
import HomeMsg from '@/components/Home.vue'
import LoginPage from '@/components/Login.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/', components:HomeMsg
        },
        {
            path: '/login', components:LoginPage
        }
        
    ]
})