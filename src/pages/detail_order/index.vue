<template>
    <div class="detail">
        <div class="order-item" v-for="(item, index) in 3" :key="key">
            <div class="heard">
                <div class="info">
                    <div class="name">黄老铁</div>
                    
                </div>
                <div class="status">待付款</div>
            </div>
            <div class="cont">
                <img src="//placehold.it/100x100" alt="" class="or_img">
                <div class="or_cont">
                        <div class="title van-multi-ellipsis--l2">tittle</div>
                    <div class="mini-title">分裂了</div>
                </div>
                
            </div>
            <div class="prices">
                <div>状态</div>
                <div class="service">共1次服务 实付款：<div class="price">¥1000.00</div> </div>
            </div>
            <div class="btn-list">
                <div class="btn-item">取消订单</div>
                <div class="btn-item cl">取消订单</div>
            </div>
        </div>
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
            .name {
                color: #4C5264;
                font-size: 12px;
            }
            }
            .status {
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
            padding: 10px 20px;
            .service {
                display:flex;
                .price {
                    font-size: 14px;
                    font-weight: bold;
                }
            }
            
        }
        .btn-list {
            padding: 10px 20px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .btn-item {
                color: #5887F9;
                border: 1px solid #5887F9;
                font-size: 12px;
                min-width: 66px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-left: 5px;  
                border-radius: 20px;
            }
            .c1 {
                color:rgb(11, 13, 17);
                border-color:#4C5264;
            }
        }
    }
}


</style>

