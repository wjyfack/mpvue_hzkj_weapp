<template>
    <div class="detail">
        <van-tabs :active="active" color="#5887F9" bind:change="onChange">
            <van-tab title="服务">
                <div class="content">
                    <!-- 轮播图 -->
                    <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000"> 
                    <block v-for="(item, index) in banners" :index="index" :key="key">
                        <swiper-item> 
                        <image :src="item.url" class="slide-image" mode="scaleToFill"/> 
                        </swiper-item> 
                    </block> 
                    </swiper>
                    <!-- 轮播图 end-->
                    <div class="tou">
                        <div class="head">
                            <div class="price"><div class="yan">￥</div><div>400.00/次</div></div>
                           <img src="../../../static/imgs/rp_share.png" class="share">
                        </div>
                        <div class="detail van-multi-ellipsis--l2">维修项目详情详情详情详情详情详情详情详情详情详维修项目详情详情详情详情详情详情详情详情详情详</div>
                        <div class="infos">
                            <div>总计销量&nbsp;100</div>
                            <div>收藏&nbsp;1000</div>
                            <div>广东佛山</div>
                        </div>
                    </div>
                    <div class="baozhang">
                        <div class="hd">传动先生，全程保障交易安全</div>
                        <div class="tiao">
                            <div class="tiao-item">
                                <img src="../../../static/imgs/rp_gou.png" class="img">
                                <div>验收合格后，再付款给服务商</div>
                            </div>
                            <div class="tiao-item">
                                <img src="../../../static/imgs/rp_gou.png" class="img">
                                <div>所有服务商，100%实名认证</div>
                            </div>
                            <div class="tiao-item">
                                <img src="../../../static/imgs/rp_gou.png" class="img">
                                <div>交易出问题，可获保证金赔付</div>
                            </div>
                            <div class="tiao-item">
                                <img src="../../../static/imgs/rp_gou.png" class="img">
                                <div>承诺不向雇主收取任何费用&nbsp;</div>
                            </div>
                        </div>
                    </div>
                    <div class="info">
                        <img src="//placehold.it/100x100" alt="" class="avatar">
                        <div class="person-info">
                            <div class="info-name">
                                <div class="name">张家祥</div>
                                <div class="bar">个人</div>
                            </div>
                            <div class="haopin">
                                <div class="haopin-item">
                                    <div>好评率 </div>
                                    <div class="cl">100%</div>
                                </div>
                                <div class="haopin-item">
                                    <div>诚信度 </div>
                                    <div class="cl">100</div>
                                </div>
                                <div class="haopin-item">
                                    <div>已缴纳保证金 </div>
                                    <div class="cl">100</div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="pingjia">
                        <div class="hd van-hairline--bottom">
                            <div class="left">
                                <div class="biao">客户评价</div>
                                <div class="tiao">(100条)</div>
                            </div>
                            <div class="right">
                                <div>查看全部</div>
                                <img src="../../../static/imgs/arrow.png" alt="" class="img">
                            </div>
                        </div>
                        <div class="pingjia-item van-hairline--bottom" v-for="(item,index) in 3" :key="k">
                             <div class="pingjia-info">
                                 <div class="name">
                                     <img src="http://placehold.it/100x100" alt="" class="img">
                                     <div>bbbbb</div>
                                </div>
                                 <div class="ping">
                                     <div>好评</div>
                                     <img src="../../../static/imgs/rp_star.png" alt="" class="img">
                                 </div>
                             </div> 
                             <div class="cont van-multi-ellipsis--l2">
                                 工程师注重细节，维修的时候细节处理的非常好，服务周到，服务态度特别好，希望以后能继续合作！
                             </div>        
                        </div>
                    </div>
                    <div class="service">
                        <div class="hd van-hairline--bottom">
                            <div class="left">
                                <div class="biao">服务详情</div>
                                <div class="tiao"></div>
                            </div>
                        </div>
                        <div class="cont">

                        </div>
                    </div>
                    <div class="fixed-tab van-hairline--top">
                        <div class="tabb">
                            <div class="tabl">
                                <img src="../../../static/imgs/rp_shouc.png" class="sh-img"> 收藏
                            </div>
                            <div class="tabr">
                                <div class="tabr-item c1">电话联系</div>
                                <div class="tabr-item c2">购买服务</div>
                                <div class="clear"></div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </van-tab>
            <van-tab title="评价">内容 2</van-tab>
            <van-tab title="详情">内容 3</van-tab>
        </van-tabs>
    </div>
</template>
<script>

export default {
    data() {
        return {
            active: 0
            ,banners: [{url: 'http://placehold.it/320x100'},{url: 'http://placehold.it/320x100'},{url: 'http://placehold.it/320x100'}]
        }
    }
    ,methods: {
        onChange(event) {
            this.active = event.mp.detail
        }
    }
}
</script>
<style lang="less" scoped>
.detail {
    background: #F9F9F9;
    .content {
        padding-bottom: 40px;
        .tou {
            background: #FFFFFF;
            padding: 10px 20px;
            margin-bottom: 10px;
            .head {
                display: flex;
                justify-content: space-between;
                .price {
                    display: flex;
                    color: #FC5F6B;
                    font-size: 16px;
                    .yan {
                        font-size: 12px;
                    }
                    
                }
                .share {
                    width: 14px;
                    height: 16px;
                }
            }
            .detail {
                color: #000000;
                font-size: 14px;
            }
            .infos {
                display: flex;
                justify-content: space-between;
                color: #8B8B8B;
                font-size: 10px;
            }
        }
        .baozhang {
             margin-bottom: 10px;
             background: #FFFFFF;
            padding: 10px 20px;
            .hd {
                color:#8B8B8B;
                font-size: 12px;
            }
            .tiao {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                &-item {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width:50%;
                    color:#8B8B8B;
                    font-size: 10px;
                    padding: 5px 0;
                    .img {
                        width: 13px;
                        height: 13px;
                        margin-right: 5px;
                    }

                }
            }
        }
        .info {
            padding: 10px 20px;
            display: flex;
            background: #FFFFFF;
            margin-bottom: 10px;
            .avatar{width:47px;height:47px;border-radius: 50%;}
            .person-info {
                flex:1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
               
                .info-name {
                    display: flex;
                    align-items: center;
                    .name {
                        font-size: 14px;
                        color:#4C5264;
                        margin-right:10px;
                    }
                    .bar {
                        background: #8A95FF;
                        color:#FFFFFF;
                        font-size: 10px;
                    }
                }
                .haopin {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 5px 0;
                    font-size: 10px;
                    color:#8B8B8B;
                    .haopin-item {
                        display: flex;
                        align-items: center;   
                        .cl {
                            color:#FC5F6B;
                            font-size: 10px;
                        }
                    }
                    
                }
            }
        }
        .pingjia {
            background: #FFFFFF;
            .hd {
                padding: 10px 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .left {
                    display: flex;
                    .biao {
                        border-left: 5px solid #5887F9;
                        padding-left: 5px;
                        color:#4C5264;
                        font-size: 14px;
                        margin-right: 5px;
                    }
                    .tiao {
                        font-size: 14px;
                        color:#8B8B8B;
                    }
                    
                }
                .right {
                    display: flex;
                    align-items: center;
                    color:#5887F9;
                    font-size: 12px;
                    .img {
                        width: 6px;
                        height: 12px;
                        margin-left: 5px;
                    }
                }
            }
            .pingjia-item {
                padding: 10px 20px;
                display: flex;
                flex-direction: column;
                .pingjia-info {
                    display: flex;
                    justify-content: space-between;
                    .name {
                        display: flex;
                        align-items: center;
                        color:#8B8B8B;
                        font-size: 12px;
                        .img {
                            width: 20px;
                            height: 20px;
                            border-radius: 50%;
                            margin-right: 5px;
                        }

                    }
                    .ping {
                        font-size: 12px;
                        color: #F6B503;
                        display: flex;
                        align-items: center;
                        min-width: 80px;
                        .img {
                            width:12px;
                            height: 11px;
                        }
                    }
                }
                .cont {
                    font-size: 12px;
                    color:#4C5264;
                }
            }
        }
        .service {
           background: #FFFFFF;
            .hd {
                padding: 10px 20px;
                display: flex;
                .left {
                    display: flex;
                    .biao {
                        border-left: 5px solid #5887F9;
                        padding-left: 5px;
                        color:#4C5264;
                        font-size: 14px;
                        margin-right: 5px;
                    }
                    .tiao {
                        font-size: 14px;
                        color:#8B8B8B;
                    }
                    
                }
            } 
            .cont {
                min-height: 100px;
            }
        }
    }
}
.fixed-tab {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #FFFFFF;
    .tabb {
        padding: 10px 20px;
        display: flex;
        background: #FFFFFF;
        .tabl {
            width: 30%;
            display: flex;
            align-items: center;
            color:#8B8B8B;
            font-size: 14px;
            .sh-img {
               width: 23px; 
               height: 22px;
               margin-left: 5px;
            }
        }
        .tabr {
            flex: 1;
            border-radius: 5px;
            .tabr-item {
               float: left;
               width: 50%;
               font-size: 14px;
               color:#FFFFFF;
               box-sizing: border-box;
               text-align: center;
               padding: 5px 0;
            }
            .c1 {background: #5887F9;border-bottom-left-radius: 3px;border-top-left-radius: 3px;}
            .c2 {background: #FC5F6B;border-bottom-right-radius: 3px;border-top-right-radius: 3px;}
            .clear {
                clear: both;
            }
        }
    }
}
</style>

