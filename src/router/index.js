import VueRouter from 'vue-router'
import index from '../template/pages/index.vue'
import hot from '../template/pages/home/hot.vue'
import message from '../template/pages/home/message.vue'
import info from '../template/pages/home/info.vue'
import home from '../template/pages/home/home.vue'
import Vue from 'vue'

Vue.use(VueRouter)

export default new VueRouter({
    //配置路由
    routes: [
        {
            path: '/',
            component: index,
            children: [
                {
                    name: 'hot',
                    path: 'hot',
                    component: hot
                },
                {
                    name: 'message',
                    path: 'message',
                    component: message
                },
                {
                    name: 'info',
                    path: 'info',
                    component: info
                },
                {
                    name: 'home',
                    path: '',
                    component: home
                },
            ]
        }
    ]
})

