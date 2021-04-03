import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import About from './pages/About.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        
        // {
        //     path: "*",
        //    // component: require('./views/Errors/NotFound').default,
        //     component: NotFound
        // },
    ],
    scrollBehavior(){
        return {x: 0, y: 0}
    }
});

export default router;