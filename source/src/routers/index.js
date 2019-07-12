import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '../components/HelloWorld.vue';
//import Demo from '../components/demo/demo.vue';

Vue.use(Router);

//路由懒加载
const HelloWorld= () => import('../components/HelloWorld.vue');
const Demo= () => import('../components/demo/demo.vue');
const ElementUi= () => import('../components/ElementUi/index.vue');
const DragAndDrop=()=>import('../components/DragAndDrop/index.vue');
const VideoPlay=()=>import('../components/VideoPlay/index.vue');

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'HelloWorld',
            component:HelloWorld,
            children:[
                {
                    path:'sin',
                    name:'sin',
                    component:Demo,
                }
            ]
        },
        {
            path:'/ElementUi',
            name:'ElementUi',
            component:ElementUi,
        },
        {
            path:'/DragAndDrop',
            name:'DragAndDrop',
            component:DragAndDrop
        },
        {
            path:'/VideoPlay',
            name:'/VideoPlay',
            component:VideoPlay,
        }
    ]
})
