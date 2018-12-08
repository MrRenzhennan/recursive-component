import Vue from 'vue'
import Router from 'vue-router'

const Login = () =>
    import ('@/page/login');
const Home = () =>
    import ('@/page/home')
const One = () =>
    import ('@/page/one')
const Two = () =>
    import ('@/page/two')
const WebScriptingLanguage = () => import ('@/page/1-1') 
const object = () => import ('@/page/2-1') 
const usestatic = () => import ('@/page/2-2') 
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            children: [
                {
                    path: '/home/1-1',
                    name: '1-1',
                    component: WebScriptingLanguage
                },
                {
                    path: '/home/2-1',
                    name: '2-1',
                    component: object
                },
                {
                    path: '/home/2-2',
                    name: '2-2',
                    component: usestatic
                },
                {
                    path: '',
                    name: 'one',
                    component: One
                },
                {
                    path: '/home/two',
                    name: 'two',
                    component: Two
                }
            ]
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            savedPosition;
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
})