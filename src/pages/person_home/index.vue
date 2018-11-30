<template>
<div class="person">
    <div class="header">
        <div class="ruzhu">
            <div>入驻时间: 2018-11-12</div>
            <div> 从业时间: 13年</div>
        </div>
        <div class="info">
            <img src="http://placehold.it/100x100" alt="" class="avatar">
            <div class="person">
                <div class="name">伍师傅</div>
                <div class="barnd">
                    <img src="../../../static/imgs/p_gong.png" alt="" class="b-img">
                    <img src="../../../static/imgs/p_zhuan.png" alt="" class="b-img">
                    <img src="../../../static/imgs/p_zuo.png" alt="" class="b-img">
                </div>
                <div class="jie">伍师傅</div>
            </div>
        </div>
    </div>
    <div class="cont">
            <div class="option">
                <div class="opt-btn">找他维修</div>
                <div class="opt-btn c1">关注Ta</div>
            </div>
            <div class="star">
                <div class="star-item van-hairline--right">
                    <div class="star-img"><img src="../../../static/imgs/rp_star.png" alt="" class="img"></div>
                    <div>好评率</div>
                </div>
                <div class="star-item van-hairline--right">
                    <div class="star-img"><img src="../../../static/imgs/rp_star.png" alt="" class="img"></div>
                    <div>专业程度</div>
                </div>
                <div class="star-item">
                   <div class="cride">100</div>
                    <div>好评率</div>
                </div>
            </div>
            <div class="goodfor van-hairline--bottom">
                <div class="goodfor-item">加工中心</div>
                <div class="goodfor-item">加工中心</div>
            </div>
            <div class="guangzu">
                <div class="guangzu-item van-hairline--right">
                    <span class="b">22，000</span>
                    <span>关注Ta的人</span>
                </div>
                <div class="guangzu-item">
                    <span class="b">22，000</span>
                    <span>Ta关注的人</span>
                </div>
            </div>
        </div>
    <van-tabs :active="active" @change="onChange" color="#5887F9">
        <van-tab title="动态">内容 1</van-tab>
        <van-tab title="参与问答">内容 2</van-tab>
        <van-tab title="维修项目">内容 3</van-tab>
        <van-tab title="文章">内容 4</van-tab>
    </van-tabs>
</div>
</template>
<script>

export default {
    data() {
        return {
            active: 0
        }
    }
    ,methods: {
        onChange(e) {
            
            this.active = e.mp.detail.index
        }
    }
}
</script>
<style lang="less" scoped>
.person {
    .header {
        position: relative;
        background: #5887F9;
        color: #ffffff;
        height: 100px;
        .ruzhu {
            display: flex;
            justify-content: space-between;
            padding: 10px 20px;
            font-size: 12px;
        }
        .info {
            position: absolute;
            display: flex;
            left: 20px;
            top: 50px;
            .avatar {width:70px;height: 70px;border-radius: 5px;}
            .person {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding-left: 10px;
                .name {color:#ffffff;font-size: 16px;}
                .barnd {
                    display: flex;
                    .b-img {
                        width: 22px;
                        height: 22px;
                        margin-right: 5px;
                    }
                }
                .jie {font-size: 12px;color:#8B8B8B;}
            }
        }
    }
    .cont {
        margin-top: 40px;
        .option {
            display: flex;
            justify-content: space-around;
            .opt-btn {
                font-size: 14px;
                color:#ffffff;
                padding: 5px 10px;
                border-radius: 5px;
                background: #4C5264;
            }
            .c1 {
                background: #5887F9;
            }
        }
        .star {
            display: flex;
            padding: 5px 20px;
            justify-content: space-around;
            align-items: center;
            .star-item {
                display: flex;
                flex-direction: column;
                justify-content: center;
                font-size: 14px;
                color:#4C5264;
                width:33%;
                text-align: center;
                .star-img {
                    display: flex;
                    justify-content: center;
                    .img {width:12px;height: 11px;}
                }
                .cride {font-size: 18px;color:#F6B503;text-align:center;}
            }
        }
        .goodfor {
            display: flex;
            justify-content: space-around;
            color:#5887F9;
            font-size: 12px;
            padding-bottom: 10px;
            margin: 0 20px;
            &-item {
                background: #D4E0FF;
                padding: 0 5px;
                border-radius: 4px;
            }
        }
        .guangzu {
            display: flex;
            margin: 10px 0;
            .guangzu-item {
                width: 50%;
                color: #4C5264;
                font-size: 14px;
                text-align: center;
                .b {font-weight: bold;}
            }
        }
    }
}
</style>

