<template>
    <div class="hello">
        HelloWorld
        <div>
            这是第一个颜色是blue
        </div>
        <div class="name" v-on:click="plus">
            名字：name
            <span style="color:gray">
              {{name}}
            </span>
            <br/>
            age:<span v-on:click.stop="ageSetFun(2)">{{age}}</span>
        </div>
        <div @click="jumpClick">点击跳转到ElementUi</div>
        <router-view/>
        <img src="../assets/2.jpg" alt="">
        <img v-bind:src="src" alt="">
    </div>
</template>

<script>
    import './HelloWorld.scss';
    import {mapState,mapGetters,mapActions} from 'vuex';

    export default {
        name: 'HelloWorld',
        data: function () {
            return {
                msg: 'Welcome to Your Vue.js App',
                src:''
            }
        },
        methods: {
            plus: function () {
                alert('提示：子路由渲染内容被点击了');
                let name = {age: 18, home: 'beijing'};
                let {age, home} = name;
                console.log(age, home);
                let dt = () => {
                    return 123;
                };
                console.log('dt', dt());
                this.src=require('../assets/2.jpg');
                console.log(this.$store.state);
               /* this.$store.commit('nameSet');
                this.$store.dispatch('nameSetFun');*/
                this.$store.dispatch('helloWorld/nameSetFun');
                this.ageSetFun(3);
            },
            ...mapActions('helloWorld',[
                'ageSetFun'
            ]),
            jumpClick:function(){
                this.$router.push({name:'ElementUi'})
            }
        },
        computed:{
           /* name:function(){
                console.log(this.$store.getters.name);
                return this.$store.getters.name
            },*/
            ...mapState({//指向state下 helloWorld 模块下state里的name属性
                name:state=>state.helloWorld.name,
                age:state=>state.helloWorld.age,
            }),
            /*...mapGetters('helloWorld',{//helloWorld 指的是modules文件夹下的 helloWorld.js 模块
                name:'name'//key 为当前 页面变量名 value 为 对应helloWorld.js 里 getters 里的 name
            })*/
        },
        watch:{//监听属性

        },
        created:function(){
            /*this.axios.post('/api/getNewList').then((response)=>{
                console.log('接口请求成功',response);
            }).catch((response)=>{
                console.log(response);
            })*/
            this.postAxios('/api/getNewList',{name:123,age:123}).then((res)=>{
                console.log(res);
            }).catch((res)=>{
                console.log(res);
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .hello {
        color: red;
        background: url('../assets/1.jpg') no-repeat;
        div {
            color: blue;
        }
    }

</style>
