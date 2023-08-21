import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import './style.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


new Vue({
    render: h => h(App),
    //注册路由
    router,
}).$mount('#app')