import { createRouter, createWebHistory } from 'vue-router';
/*import Menu from './components/Menu.vue'*/
import InicioComp from './components/SubComp/InicioComp.vue';
import Listening from './components/SubComp/Listening.vue';
import Speaking from './components/SubComp/Speaking.vue';
import Reading from './components/SubComp/Reading';
import writing from './components/SubComp/Writing.vue';
import Help from './components/SubComp/Help.vue';
import Unit1 from './components/SubComp/Unit1.vue';

const routes = [ 
    { path: '/', name: 'inicio', component: InicioComp },
    { path: '/listening', name: 'listening', component: Listening},
    { path: '/speaking', name: 'speaking', component: Speaking},
    { path: '/reading', name: 'reading', component: Reading},
    { path: '/writing', name: 'writing', component: writing},
    { path: '/help', name: 'help', component: Help},
    { path: '/Unit1', name: 'Unit1', component: Unit1},
]

const router = createRouter({ history: createWebHistory(process.env.BASE_URL), routes });
export default router;