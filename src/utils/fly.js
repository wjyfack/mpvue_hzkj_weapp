import Fly from "flyio/dist/npm/wx";

const fly = new Fly;

//配置请求基地址
fly.config.baseURL = "https://www.cdxscn.com/Apiapi" // "https://www.cdxscn.com/Apiapi"

//添加请求拦截器
fly.interceptors.request.use((config, promise) => {
    //给所有请求添加自定义header
    config.headers["content-type"] = "application/x-www-form-urlencoded";
    //可以通过promise.reject／resolve直接中止请求
    //promise.resolve("fake data")
    return config;
})

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
    (response, promise) => {
        //只将请求结果的data字段返回
        let data = response.data
        if(data.code == 2) {
            wx.getSetting({
                success (res) {
                    if(res.authSetting['scope.userInfo']) {
                        wx.clearStorage()
             wx.login({
                success (res) {
                    if (res.code) {
                       console.log('abc')
                        wx.getUserInfo({
                         success: function(data) {
                            // console.log(data)
                            wx.setStorageSync('userInfo', data)
                            let userData = data
                            //发起网络请求
                            fly.post('/?d=wx_minprogram&v=V1&g=Common&c=Login&a=login', {
                                login_type: 'wx_minprogram'
                                ,encrypted_data: userData.encryptedData
                                ,iv: userData.iv
                                ,raw_data: userData.rawData
                                ,signature: userData.signature
                                // ,useInfo: userData.useInfo
                                ,js_code: res.code
                            }).then(function (response) {
                                // console.log(response.data)
                                if(response.code == 0) {
                                   wx.setStorage({
                                    key:"userData",
                                    data:response.data
                                    })
                                    wx.setStorageSync('userData', response.data)
                                   
                                   if(response.data.user_id > 0) {// 有用户信息
                                       
                                   } else { // 前去绑定帐号
                                    wx.navigateTo({url: '../my_login/main'})
                                   }
                                }
                            }).then(() => {
                                   
                            })
                        }   
                        })
                    } else {
                    console.log('登录失败！' + res.errMsg)
                    }
                }
              })
        
                    } else {
                    // 跳到授权页面
                    wx.navigateTo({ url: '../login/main' })
                    }
                    
                }
            })
        }
        return data
    },
    (err, promise) => {
        //发生网络错误后会走到这里
        //promise.resolve("ssss")
    }
)
export default fly
