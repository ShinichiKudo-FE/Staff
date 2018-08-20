import Jsonp from "jsonp";
import axios from "axios";

export default class Axios{
    // 封装jsonp
    static jsonp(options){
        return new Promise((resolve,reject) =>{
            Jsonp(options.url,{
                param: "callback" 
            },function(err,response){
                if(response.status === "success"){
                    resolve(response)
                }else{
                    reject(response.message)
                }
            })
       })
    }
    // 封装axion
    static ajax(options){
        let baseUrl = "https://easy-mock.com/mock/5b7a5509f0e3593f3614140a/staffApi";
        return new Promise((resolve,reject) =>{
            axios({
                url:options.url, // 请求
                method: "get", // 请求方法
                baseURL: baseUrl, // 请求
                timeout: 5000, // 设置请求等待时间，超过断开请求
                params: (options.data && options.data.param) || ''
            }).then((response) =>{
                if(response.status == '200'){
                    let res = response.data;
                    if(res.code == "0"){
                        resolve(res)
                    }else{
                        console.log(res.msg);
                    }
                }
            }).catch((error) =>{
                console.log(error);
            })
        })
    }
}