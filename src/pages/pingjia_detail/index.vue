<template>
    <div class="detail">
        <div class="zhonghe">
            <div class="left van-hairline--right">
                <div class="zong">综合评分</div>
                <div class="fen">100</div>
                <div class="star_img">
                    <img src="../../../static/imgs/rp_star.png" alt="" class="img">
                </div>
            </div>
            <div class="right">
                <div class="r-item">服务评价：<span class="fe">100</span> 分</div>
                <div class="r-item">态度评价：<span class="fe">100</span> 分</div>
                <div class="r-item">专业评价：<span class="fe">100</span> 分</div>
            </div>
        </div>
        <van-tabs :active="active" color="#5887F9" bind:change="onChange">
            <van-tab title="好评">
                <div class="content">
                    <div class="pingjia">
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
                             <div class="footer">
                                 <span>2018-11-24</span>
                                 <span>交易金额¥400</span>
                             </div>        
                        </div>
                    </div>
                   
                </div>
            </van-tab>
            <van-tab title="中评">内容 2</van-tab>
            <van-tab title="差评">内容 3</van-tab>
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
        .pingjia {
            background: #FFFFFF;
            
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
                .footer {
                    display: flex;
                    padding: 5px 0;
                    justify-content: space-between;
                    color:#8B8B8B;
                    font-size: 12px;
                }
            }
        }
       
    }
    .zhonghe {
        display: flex;
        padding: 10px 0;
        .left {
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .zong {font-size: 12px; color:#4C5264;}
            .fen {color:#F6B503;font-size: 18px;}
            .star_img {
                display: flex;
                .img {width:12px;height: 12px;}
            }
        }
        .right {
            display: flex;
            width: 50%;
            flex-direction: column;
             justify-content: center;
            align-items: center;
            padding: 5px 0;
            .r-item {
                font-size: 12px;
                color:#4C5264;
                .fe {
                    color: #F6B503;
                    font-size: 14px;
                }
            }
        }
    }
}
</style>

