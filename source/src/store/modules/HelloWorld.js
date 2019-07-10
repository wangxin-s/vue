
const state = {//设置全局访问的state对象
    name: '123',
    age: '456'
};
const getters = {//实时监听 state 值的变化
    name(state) {
        return state.name;
    },
    age(state) {
        return state.age
    }
}

const mutations = {// 改变state 值触发方法
    nameSet(state) {
        state.name = 'libai'
    },
    ageSet(state,items=1) {
        state.age += items
    }
};

const actions = {
    //自定义触发 mutations 里函数的方法 context和store实例具有相同的方法和属性
    nameSetFun(context) {
        context.commit('nameSet');
    },
    ageSetFun(context,item) {
       context.commit('ageSet',item);
    }
};
export default {
    namespaced:true,//true 表示当你在别的模块使用（mapGetters，mapActions） 时，里面的方法需要注明来自哪一个模块
    state,
    getters,
    mutations,
    actions
}
