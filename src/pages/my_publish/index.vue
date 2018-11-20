<template>
    <div class="publish">
       <van-tabs :active="active" @change="onChange" :color="'#5887F9'">
            <van-tab title="维修">
                <div class="publish-item" v-for="(item, index) in 3" :key="key">
                    <div class="cont">
                        <img src="//placehold.it/100x100" alt="" class="or_img">
                        <div class="or_cont">
                             <div class="title van-multi-ellipsis--l2">tittle</div>
                             <div class="price"><div class="ya">￥</div><div class="men">1000.00</div></div>
                            <div class="mini-title"><div class="mini">评价 50</div><div class="mini">浏览 5651</div></div>
                        </div>
                       
                    </div>
                   
                    <div class="btn-list">
                        <div class="status">正在展示</div>
                        <div class="item">
                            <div class="btn-item">取消订单</div>
                            <div class="btn-item cl">取消订单</div>
                        </div>
                        
                    </div>
                </div>
            </van-tab>
            <van-tab title="需求">内容 2</van-tab>
            <van-tab title="咨询">内容 3</van-tab>
           
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
.publish {
 background:#F9F9F9;
.publish-item{
    background: #ffffff;
    padding: 10px 20px;
    margin-bottom: 10px;
     .cont {
         display: flex;
         .or_img {width:80px;height: 80px;border-radius: 5px;}
         .or_cont {
             flex: 1;
             display: flex;
             flex-direction: column;
             justify-content: space-around;
             padding-left: 10px;
             .title {
                 color:#4C5264;
                 font-size: 12px;
                 font-weight: bold;
             }
             .price {
                 display: flex;
                 align-items: center;
                 color:#FC5F6B;
                 .ya {font-size: 8px;}
                 .men {font-size: 12px;}
             }
             .mini-title {
                 display: flex;
                 .mini {
                    color:#A2A2A2;
                    font-size: 10px;
                    margin-right: 20px;  
                 } 
             }
         }
     }
    .btn-list {
        display: flex;
        align-items: center;
        .status {font-size: 10px;color:#393939;}
        .item {
            flex: 1;
            display: flex;
            justify-content: flex-end;
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
}
</style>

