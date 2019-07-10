import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import './components/base.scss'
import store from './store/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ApiAxios from './api/axios';

Vue.use(ElementUI);
Vue.use(ApiAxios);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    router,
    store,//使用store
    render: h => h(App)
}).$mount("#app");
