import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home';
import Details from '@/components/Details';

Vue.use(Router);

export default new Router({
    routes: [
      {
            path: '*',
            redirect: '/Home',

            
        },
        {
            path: '/',
            redirect: '/Home',

        },
        {
            path: '/Home',
            name: 'Home',
            component: Home
        },
        {
            path: '/Details',
            name: 'Details',
            component: Details,
            props: (route) => ({
                ...route.params
            })  
        },
    ]
  })