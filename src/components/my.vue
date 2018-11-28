<template>
    <div class="my">
        <div class="person">
            <img :src="baseInfo.user_picture" alt="" class="avatar_img">
            <div class="info">
                <div class="name">{{baseInfo.nick_name}}</div>
                <div class="id">{{baseInfo.user_name}}</div>
            </div>
            <a class="setting" href="../setting/main"><img src="../../static/imgs/my_setting.png" class="set"> <div class="sett">设置</div></a>
        </div>
        <div class="option">
            <a href="../my_order/main" class="option_item">
                <img src="../../static/imgs/my_fukuan.png" alt="" class="img">
                <div class="name">待付款</div>
            </a>
            <a href="../my_order/main" class="option_item">
                <img src="../../static/imgs/my_fuwu.png" alt="" class="img">
                <div class="name">待服务</div>
            </a>
            <a href="../my_order/main" class="option_item">
                <img src="../../static/imgs/my_pinjia.png" alt="" class="img">
                <div class="name">评价</div>
            </a>
            <a href="../my_order/main" class="option_item">
                <img src="../../static/imgs/my_shouhou.png" alt="" class="img">
                <div class="name">售后</div>
            </a>
            <a href="../my_order/main" class="option_item">
                <img src="../../static/imgs/my_all.png" alt="" class="img">
                <div class="name">全部订单</div>
            </a>
        </div>
        <div class="bell">
            <a href="../my_bell/main" class="cells van-hairline--bottom">
                <div class="name">我的钱包</div>
                <div class="detail">账单、提现 <img src="../../static/imgs/arrow.png" class="arrow"></div>
            </a>
            <div class="bell_my_bell">
                <div class="item">
                    <div class="price">{{baseInfo.user_money}}</div>
                    <div class="bell_name">账户余额</div>
                </div>
                <div class="item">
                    <div class="price">{{accountInfo.coupon_count}}</div>
                    <div class="bell_name">优惠券</div>
                </div>
                <div class="item">
                    <div class="price">{{baseInfo.pay_points}}</div>
                    <div class="bell_name">账户积分</div>
                </div>
                
            </div>
        </div>
        <div class="nongne">
            <a href="../my_publish/main" class="nongne_item van-hairline--bottom">
                <img src="../../static/imgs/my_fabu.png" alt="" class="nongne_img" mode="widthFix">
                <div class="name">我的发布</div>
                <img src="../../static/imgs/arrow.png" alt="" class="arrow">
            </a>
            <a href="../my_shou/main" class="nongne_item van-hairline--bottom">
                <img src="../../static/imgs/my_shouc.png" alt="" class="nongne_img" mode="widthFix">
                <div class="name">我的收藏</div>
                <img src="../../static/imgs/arrow.png" alt="" class="arrow">
            </a>
            <a href="" class="nongne_item van-hairline--bottom">
                <img src="../../static/imgs/my_dizhi.png" alt="" class="nongne_img" mode="widthFix">
                <div class="name">我的地址</div>
                <img src="../../static/imgs/arrow.png" alt="" class="arrow">
            </a>
            <a href="../my_renzheng/main" class="nongne_item van-hairline--bottom">
                <img src="../../static/imgs/my_card.png" alt="" class="nongne_img" mode="widthFix">
                <div class="name">实名认证 <div class="res">(立即去认证)</div></div>
                <img src="../../static/imgs/arrow.png" alt="" class="arrow">
            </a>
            <a href="../my_problem/main" class="nongne_item van-hairline--bottom">
                <img src="../../static/imgs/my_wenti.png" alt="" class="nongne_img" mode="widthFix">
                <div class="name">常见问题</div>
                <img src="../../static/imgs/arrow.png" alt="" class="arrow">
            </a>
            <a href="" class="nongne_item van-hairline--bottom">
                <img src="../../static/imgs/my_kefu.png" alt="" class="nongne_img" mode="widthFix">
                <div class="name">客服咨询</div>
                <img src="../../static/imgs/arrow.png" alt="" class="arrow">
            </a>
            <a href="" class="nongne_item van-hairline--bottom">
                <img src="../../static/imgs/my_women.png" alt="" class="nongne_img" mode="widthFix">
                <div class="name">关于我们</div>
                <img src="../../static/imgs/arrow.png" alt="" class="arrow">
            </a>
        </div>
    </div>
</template>

<script>
import fly from '@/utils/fly'

export default {
    data(){
        return {
            baseInfo: {
                user_picture: ''
                ,nick_name: ''
                ,user_money:0
                ,pay_points: 0
            }
            ,accountInfo: {
                coupon_count: 0
            }
        }
    }
    ,computed: {
        userData() {
            var value = wx.getStorageSync('userData')
            return value
        }
    }
    ,methods: {
        bindViewTap (url) {
            // const url = '../logs/main'
            wx.navigateTo({ url })
        }
        ,getInfo() {
            // 我的个人中心（必须登录）
            // http://cdzj.demo.com/Apiapi/?v=V1&g=Doctor&c=User&a=getMyInfo
            fly.post('/?d=wx_minprogram&v=V1&g=Common&c=User&a=getMyInfo&s='+this.userData.session_id)
                .then((res)=>{
                    if(res.code == 0) {
                        this.accountInfo = res.data.account_info
                        this.baseInfo = res.data.base_info
                    }
                })
        }
    }
    ,mounted(){
        let _this = this
        wx.checkSession({
            success (key) {
                console.log(key)
                //session_key 未过期，并且在本生命周期一直有效
                // 获取个人信息
                _this.getInfo()
            },
            fail () { 
               
              wx.login({
                success (res) {
                    if (res.code) {
                       wx.getStorage({
                        key: 'userInfo',
                        success (data) {
                            // console.log(data.data)
                            let userData = data.data
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
                                console.log(response.data)
                                if(response.code == 0) {
                                   wx.setStorage({
                                    key:"userData",
                                    data:response.data
                                    })
                                   if(response.data.user_id > 0) {// 有用户信息

                                   } else { // 前去绑定帐号
                                    wx.navigateTo({url: '../my_login/main'})
                                   }
                                }
                            })
                            
                        }
                        })
                     
                    } else {
                    console.log('登录失败！' + res.errMsg)
                    }
                }
              })
            }
        })
    //  if(true) {
    //      this.bindViewTap('../my_login/main')
    //  }   
    }   
}
</script>
<style lang="less" scoped>
.my {
    background: #F9F9F9;
    .person {
        display: flex;
        align-items: center;
        background: #5887F9;
        padding: 20px;
        .avatar_img {
            width: 64px;
            height: 64px;
            border-radius: 5px;
        }
        .info {
            flex:1;
            display: flex;
            flex-direction: column;
            color: #FFFFFF;
            padding-left: 10px;
            .name{font-size: 16px;}
            .id {font-size: 12px;}
        }
        .setting {
            color: #ffffff;
            font-size: 14px;
            display: flex;
            align-items: center;
            .set {
                width: 12px;
                height: 12px;
                vertical-align:middle;
                margin-right: 5px;
            }
            .sett {
                display: inline-block;
            }
        }
    }
    .option {
        padding: 20px 0;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: #FFFFFF;
        &_item  {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .img {width: 20px;height: 20px;}
            .name {
                padding-top: 10px;
                font-size: 12px;
                color:#606060;
            }
        }
    }
    .bell {
        background: #FFFFFF;
        .cells {
            display: flex;
            justify-content: space-between;
            padding: 10px 20px;
            .name{
                font-size: 14px;
                color:#4C5264;
            }
            .detail {
                display: flex;
                align-items: center;
                font-size: 12px;
                color:#B2B2B2;
                .arrow {
                    margin-left: 5px;
                    width:  6px;
                    height: 11px;
                    color: #5887F9;
                }
            }
        }
        &_my_bell {
            padding: 20px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-bottom: 10px;
            .item {
                display: flex;
                justify-content:center;
                align-items: center;
                flex-direction: column;
                .price {
                    font-size: 16px;
                    color:#FC5F6B;
                }
                .bell_name {
                    font-size: 12px;
                    color: #606060;
                }
            }
        }
    }
    .nongne {
       
        padding-bottom: 40px; 
        &_item {
            display: flex;
            justify-content: space-between;
            padding: 10px 20px;
            align-items: center;
            background: #FFFFFF;
            .nongne_img {
                width: 20px;
                // height: 20px;
            }
            .name {
                flex: 1;
                font-size: 12px;
                color:#606060;
                padding-left: 10px;
                display: flex;
                align-items: center;
                .res {
                    color:#FC5F6B;
                    font-size: 10px;
                    margin-left: 5px;
                }
            }
            .arrow {
                width:  6px;
                height: 11px;
                color: #5887F9;
            }
        }
    }
}
</style>
