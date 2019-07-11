import axios from 'axios';

//添加请求拦截器， 在发送请求前 做些什么 例如添加接口公参，
axios.interceptors.request.use(function(config){
    //添加接口 loading 状态
    return config;
},function(error){
  //去请求错误时弹框提示，路由重定向等
  return Promise.reject(error);
});

//添加接口响应拦截器
axios.interceptors.response.use(function(response){
    // 对接口响应数据做处理 ，

    //如果要返回全部 则返回 response 如果仅仅数据 则返回 response，data
    return response.data;
},function(error){
    //错误响应处理

    return Promise.reject(error);
});

// 封装 数据返回失败提示函数
function errorState(response){
    // 隐藏 loading

    //响应状态码 判断 如果正常返回数据
    let errorType=response.status;
    let status=response.status;
    if (errorType == "abort") { //无网络

    } else if (errorType == "timeout") { //超时

    } else if (errorType == "error") { //服务器或者客户端错误
        switch (status) {
            case 401://登录超时，请重新登录

                break;
            case 402://您的帐号在其他设备登录，您被迫下线

                break;
            case 403://没有权限，禁止访问

                break;
            case 404://未找到服务器,请重新登录试试

                break;
            case 500://服务器未响应,请重新登录试试

                break;
            case 503://服务器不可用,请重新登录试试

                break;
            case 504://网关超时,请重新登录试试

                break;
        }
    }
}

//封装 成功返回提示
function successState(response){
    if(response.data.code){

    }
    return response;
}

//封装 axios

function apiAxios(method,url,params){
    console.log(1);
    let httpDefault={
        method:method,
        baseUrl:'',
        url:url,
        params:method==='GET'||method==='DELETE'?params:null,
        data:method==='POST'||method==='PUT'?params:null,
        timeout:1000,
    }
    console.log(2);
    return new Promise((resolve,reject)=>{
        axios(httpDefault).then((res)=>{
            successState(res);
            resolve(res);
            console.log(3);
        }).catch((res)=>{
            errorState(res);
            reject(res);
        })
    })
}
export default{
    install:function(Vue){
        Vue.prototype.getAxios=(url,params)=>apiAxios('GET',url,params);
        Vue.prototype.postAxios=(url,params)=>apiAxios('POST',url,params);
        Vue.prototype.putAxios=(url,params)=>apiAxios('PUT',url,params);
        Vue.prototype.deleteAxios=(url,params)=>apiAxios('DELETE',url,params)
    }
}
