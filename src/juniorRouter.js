import VueRouter from 'vue-router'

// COMPONENT IMPORTS
import App from '@/components/App'
import Welcome from '@/components/Welcome'
import FurtherInstructions from '@/components/FurtherInstructions'

const appRoutes = [
    {
        path: 'welcome',
        name: 'welcome',
        component: Welcome
    },
    {
        path: 'instructions',
        name: 'instructions',
        component: FurtherInstructions
    }
];

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/app',
      name: 'app',
      component: App,
      children: appRoutes
    },
    {
      path: '*', redirect: '/app/welcome'
    }
  ]
});