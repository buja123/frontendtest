import VueRouter from 'vue-router'

// COMPONENT IMPORTS
import App from '@/components/App'
import Welcome from '@/components/Welcome'
import FurtherInstructions from '@/components/FurtherInstructions'

/**
 * A rubbish comment that should be removed. It serves no purpose.
 * Remove me
 */

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