<template>
    <div class="detail">
        <div class="status">
            <div class="sts"><img src="../../../static/imgs/order_bell.png" alt="" class="img">待付款</div>
            <div class="last">还剩30分钟自动关闭此订单</div>
        </div>
        <div class="addr">
            <img src="" alt="../../../static/imgs/order_addr.png" class="addr_img">
            <div class="addr_detail">
                <div class="name">吴先生<span class="phone">13211164483</span></div>
                <div class="detail">广东省 佛山市 南海区 大沥镇 大沥凤城一路9号秀慧养生馆3楼</div>
            </div>
        </div>
        <div class="order">
            <div class="heard">
                <div class="info">
                    <img src="../../../static/imgs/order_person.png" alt="" class="avator">
                    <div class="name">黄老铁</div>
                    
                </div>
                <div class="stat">待付款</div>
            </div>
            <div class="cont">
                <img src="//placehold.it/100x100" alt="" class="or_img">
                <div class="or_cont">
                        <div class="title van-multi-ellipsis--l2">tittle</div>
                    <div class="mini-title">分裂了</div>
                </div>
                
            </div>
            <div class="order-status">
                商品总价： ¥1099.00
            </div>
            <div class="order-status">
                平台优惠： -¥99.00
            </div>
            <div class="prices">
                <div></div>
                <div class="service">共1次服务 实付款：<div class="price">¥1000.00</div> </div>
            </div>
            
        </div>
        <div class="order-detail">
            <div class="header">订单详情</div>
            <div class="item">
                <div class="title">订单编号：</div>
                <div>1234567891234567897</div>
            </div>
            <div class="item">
                <div class="title">支付方式：</div>
                <div>微信支付</div>
            </div>
            <div class="item">
                <div class="title">交易编号：</div>
                <div>1234567891234567897234567897</div>
            </div>
            <div class="item">
                <div class="title">创建时间：</div>
                <div>2018-11-28  10:44</div>
            </div>
            <div class="item">
                <div class="title">付款时间：</div>
                <div>2018-11-28  10:44</div>
            </div>
            <div class="item">
                <div class="title">服务完成时间：</div>
                <div>2018-11-28  10:44</div>
            </div>
            <div class="item">
                <div class="title">售后时间：</div>
                <div>2018-11-28  10:44</div>
            </div>
        </div>
        <div class="order-btn">
            <img src="../../../static/imgs/order_phone.png" alt="" class="img">
            <div>联系卖家</div>
        </div>
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
        onChange(event) {
            this.active = event.mp.detail
        }
    }
}
</script>
<style lang="less" scoped>
.detail {
    background: #F9F9F9;
    .status {
        padding: 20px; 
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #ffffff;
        background: #5887F9;
        .sts {
            display: flex;
            align-items: center;
            font-size: 18px;
            
            .img {width:28px; height: 26px;margin-right: 10px;}

        }
        .last {
            font-size: 10px;
        }
    }
    .addr {
        padding: 10px 20px;
        display: flex;
        .addr_img {
            width: 23px;
            height: 32px;;
        }
        .addr_detail {
            padding-left: 5px;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .name {
                color: #4C5264;
                font-size: 14px;
                .phone {
                    color:#8A8A8A;
                    margin-left: 5px;
                }
            }
            .detail {
                font-size: 14px;
                color:#4C5264;
            }
        }
    }
    .order{
        background: #ffffff;
    
        margin-bottom: 10px;
        .heard {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding:5px 20px;
            .info {
                display: flex;
                align-items: center;
                .avator {
                    width:13px;
                    height: 14px;
                    margin-right: 5px;
                }
                .name {
                    color: #4C5264;
                    font-size: 12px;
                }
            }
            .stat {
                font-size: 12px;
                color:#FC5F6B;
            }
        }
        .cont {
            background: #F9F9F9;
            padding: 10px 30px;
            display: flex;
            .or_img {width:64px;height: 64px;}
            .or_cont {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                padding-left: 10px;
                .title {
                    color:#4C5264;
                    font-size: 12px;
                }
                .mini-title {
                    color:#A2A2A2;
                    font-size: 10px;
                }
            }
        }
        .prices {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color:#4C5264;
            font-size: 12px;
            padding: 5px 20px;
            .service {
                display:flex;
                align-items: center;
                .price {
                    font-size: 14px;
                    font-weight: bold;
                }
            }
            
        }
        .order-status {
            display: flex;
            justify-content: flex-end;
            padding: 3px 20px;
            color:#A2A2A2;
            font-size: 10px;
        }
    }
    .order-detail {
        padding: 10px 20px;
        background: #ffffff;
        margin-bottom: 40px;
        .header {
            display: flex;
            border-left: 5px solid #5887F9;
            padding-left: 5px;
            font-size: 14px;
            line-height: 1;
            color:#4C5264;
            margin-bottom: 5px;
        }
        .item {
            display: flex;
            color:#A2A2A2;
            padding: 2px 0;
            font-size: 10px;
            .title {min-width: 70px;}

        }
    }
    .order-btn {
        display: flex;
        margin: 0 20px;
        border-radius: 3px;
        background: #5887F9;
        color: #ffffff;
        align-items: center;
        justify-content: center;
        min-height: 40px;
        font-size: 14px;
        .img {
            width: 17px;
            height: 17px;
            margin-right: 5px;
        }
    }
}


</style>

