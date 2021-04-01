import Vue from 'vue';
import VueRouter from 'vue-router';

//declare the pages that are to be added in the nav by the router.
import Home from './pages/Home.vue';
import About from './About.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '*',
            name: 'home', //this is 404 navigation.
            component: Home
        },
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
    ]
});

export default router;