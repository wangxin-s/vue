import Vue from 'vue';
import Vuex from 'vuex';
import helloWorld from './modules/HelloWorld';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{//引入集成的各个模块的store
        helloWorld
    }
})
