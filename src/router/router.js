import Vue from 'vue'
import Router from 'vue-router'
import Textos from '../components/Textos'
import Lembretes from '../components/Lembretes'
import Acessos from '../components/Acessos'


Vue.use(Router)


const routes  =   [
    {
        name: 'text',
        path: '/textos',
        component: Textos,
    },
    {
        name: 'lembretes',
        path: '/lembretes',
        component: Lembretes,
    },
    {
        name: 'acessos',
        path: '/acessos',
        component: Acessos,
    }
]


const router = new Router({routes})

export default router