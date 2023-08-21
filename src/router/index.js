import VueRouter from 'vue-router'
import home from './../template/pages/home.vue'
import Vue from 'vue'

Vue.use(VueRouter)

export default new VueRouter({
    //配置路由
    routes: [
        {
            name: 'home',
            path: '/',
            component: home
        }
    ]
})

