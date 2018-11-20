<template>
    <div class="order">
       <van-tabs :active="active" @change="onChange" :color="'#5887F9'">
            <van-tab title="全部订单">
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
            </van-tab>
            <van-tab title="待付款">内容 2</van-tab>
            <van-tab title="待服务">内容 3</van-tab>
            <van-tab title="评价">内容 4</van-tab>
            <van-tab title="售后">内容 4</van-tab>
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
        onChange(event){
            console.log(event);
        }
        ,getdata() {
            console.log(this)
        }
    }
    ,onShow() {
        this.getdata()
    }
}
</script>
<style lang="less" scoped>
.order {
 background:#F9F9F9;
.order-item{
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

