import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Contact from './pages/Contact.vue';
import NotFound from './pages/NotFound.vue';
import Projects from './pages/Projects.vue';

//import add contact
import NewContact from './pages/AddContact.vue';


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
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },    
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        }, 
        {
            path: '/addcontact',
            name: 'addcontact',
            component: NewContact
        },    
        {
            // path: "*",
            path: '/:pathMatch(.*)*',
           // component: require('./views/Errors/NotFound').default,
            component: NotFound
        }
    ],
    scrollBehavior(){
        return {x: 0, y: 0}
    }
});

export default router;