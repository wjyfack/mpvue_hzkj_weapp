<template>
    <div class="my">
        <div class="person">
            <img src="//placehold.it/100x100" alt="" class="avatar_img">
            <div class="info">
                <div class="name">刘老头</div>
                <div class="id">ID:1919191919</div>
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
                    <div class="price">0.00</div>
                    <div class="bell_name">账户余额</div>
                </div>
                <div class="item">
                    <div class="price">2</div>
                    <div class="bell_name">优惠券</div>
                </div>
                <div class="item">
                    <div class="price">200</div>
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
            <a href="" class="nongne_item van-hairline--bottom">
                <img src="../../static/imgs/my_shouc.png" alt="" class="nongne_img" mode="widthFix">
                <div class="name">我的收藏</div>
                <img src="../../static/imgs/arrow.png" alt="" class="arrow">
            </a>
            <a href="" class="nongne_item van-hairline--bottom">
                <img src="../../static/imgs/my_dizhi.png" alt="" class="nongne_img" mode="widthFix">
                <div class="name">我的地址</div>
                <img src="../../static/imgs/arrow.png" alt="" class="arrow">
            </a>
            <a href="" class="nongne_item van-hairline--bottom">
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
export default {
    
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
