<template>
    <div class="order">
       <van-tabs :active="active" @change="onChange" :color="'#5887F9'" >
            <van-tab title="全部订单" @touchstart="onTouchStart" @touchend="onTouchEnd">
                <div class="order-item" v-for="(item, index) in allOrderList" :key="key">
                    <div class="heard">
                        <div class="info">
                            <div class="name">{{item.real_name}}</div>
                        </div>

                        <div class="status" v-if="item.order_status == 1">待接</div>
                        <div class="status" v-else-if="item.order_status == 2">待付款</div>
                        <div class="status" v-else-if="item.order_status == 3">待服务</div>
                        <div class="status" v-else-if="item.order_status == 4">进行中</div>
                        <div class="status" v-else-if="item.order_status == 5">售后中</div>
                        <div class="status" v-else-if="item.order_status == 6">待评论</div>
                        <div class="status" v-else-if="item.order_extend_status == 2">退款售后</div>
                        <div class="status" v-else-if="item.order_status == 7">已完成</div>
                    </div>
                   <a :href="'../detail_order/main?id='+item.id" class="cont">
                        <img :src="item.good_pic" alt="" class="or_img">
                        <div class="or_cont">
                             <div class="title van-multi-ellipsis--l2" >{{item.good_name}}</div>
                            <div class="mini-title">服务：{{item.attr_names}}</div>
                        </div>
                    </a>
                    <div class="prices">
                        <div></div>
                        <div class="service">共{{item.buy_count}}次服务 实付款：<div class="price">¥{{item.total_pay}}</div> </div>
                    </div>
                    <div class="btn-list">
                        <!-- <div class="btn-item">取消订单</div>
                        <div class="btn-item cl">取消订单</div>  -->
                        <div class="btn-item" v-if="item.order_status == 4" @click="fuwuCheck(item.id)">服务验收</div> 
                        <a :href="'../detail_order/main?id='+item.id" class="btn-item">订单详情</a>
                    </div>
                </div>
            </van-tab>
            <van-tab title="待接" @touchstart="onTouchStart" @touchend="onTouchEnd">
                <div v-if="daijieList.length != 0">
                
                <div class="order-item"  v-for="(item, index) in daijieList" :key="key">
                    <div class="heard">
                        <div class="info">
                            <div class="name">{{item.real_name}}</div>
                        </div>

                        <div class="status" v-if="item.order_status == 1">待接</div>
                        <div class="status" v-else-if="item.order_status == 2">待付款</div>
                        <div class="status" v-else-if="item.order_status == 3">待服务</div>
                        <div class="status" v-else-if="item.order_status == 4">进行中</div>
                        <div class="status" v-else-if="item.order_status == 5">售后中</div>
                        <div class="status" v-else-if="item.order_status == 6">待评论</div>
                        <div class="status" v-else-if="item.order_extend_status == 2">退款售后</div>
                        <div class="status" v-else-if="item.order_status == 7">已完成</div>
                    </div>
                    <a :href="'../detail_order/main?id='+item.id" class="cont">
                        <img :src="item.good_pic" alt="" class="or_img">
                        <div class="or_cont">
                             <div class="title van-multi-ellipsis--l2" >{{item.good_name}}</div>
                            <div class="mini-title">服务：{{item.attr_names}}</div>
                        </div>
                       
                    </a>
                    <div class="prices">
                        <div></div>
                        <div class="service">共{{item.buy_count}}次服务 实付款：<div class="price">¥{{item.total_pay}}</div> </div>
                    </div>
                    <div class="btn-list">
                        <!-- <div class="btn-item">取消订单</div>
                        <div class="btn-item cl">取消订单</div> -->
                        <a :href="'../detail_order/main?id='+item.id" class="btn-item">订单详情</a>
                    </div>
                </div>
                    
                </div>
            </van-tab>
            <van-tab title="待付款" @touchstart="onTouchStart" @touchend="onTouchEnd">
                <div v-if="fukuangList.length != 0">
                
                <div class="order-item"  v-for="(item, index) in fukuangList" :key="key">
                    <div class="heard">
                        <div class="info">
                            <div class="name">{{item.real_name}}</div>
                        </div>

                        <div class="status" v-if="item.order_status == 1">待接</div>
                        <div class="status" v-else-if="item.order_status == 2">待付款</div>
                        <div class="status" v-else-if="item.order_status == 3">待服务</div>
                        <div class="status" v-else-if="item.order_status == 4">进行中</div>
                        <div class="status" v-else-if="item.order_status == 5">售后中</div>
                        <div class="status" v-else-if="item.order_status == 6">待评论</div>
                        <div class="status" v-else-if="item.order_extend_status == 2">退款售后</div>
                        <div class="status" v-else-if="item.order_status == 7">已完成</div>
                    </div>
                    <a :href="'../detail_order/main?id='+item.id" class="cont">
                        <img :src="item.good_pic" alt="" class="or_img">
                        <div class="or_cont">
                             <div class="title van-multi-ellipsis--l2" >{{item.good_name}}</div>
                            <div class="mini-title">服务：{{item.attr_names}}</div>
                        </div>
                       
                    </a>
                    <div class="prices">
                        <div></div>
                        <div class="service">共{{item.buy_count}}次服务 待付款：<div class="price">¥{{item.total_pay}}</div> </div>
                    </div>
                    <div class="btn-list">
                        <!-- <div class="btn-item">取消订单</div>
                        <div class="btn-item cl">取消订单</div> -->
                        <a :href="'../detail_order/main?id='+item.id" class="btn-item">订单详情</a>
                    </div>
                </div>
                    
                </div>
            </van-tab>
            <van-tab title="待服务" @touchstart="onTouchStart" @touchend="onTouchEnd">
                <div v-if="fuwuList.length != 0">
                
                <div class="order-item"  v-for="(item, index) in fuwuList" :key="key">
                    <div class="heard">
                        <div class="info">
                            <div class="name">{{item.real_name}}</div>
                        </div>

                        <div class="status" v-if="item.order_status == 1">待接</div>
                        <div class="status" v-else-if="item.order_status == 2">待付款</div>
                        <div class="status" v-else-if="item.order_status == 3">待服务</div>
                        <div class="status" v-else-if="item.order_status == 4">进行中</div>
                        <div class="status" v-else-if="item.order_status == 5">售后中</div>
                        <div class="status" v-else-if="item.order_status == 6">待评论</div>
                        <div class="status" v-else-if="item.order_extend_status == 2">退款售后</div>
                        <div class="status" v-else-if="item.order_status == 7">已完成</div>
                    </div>
                    <a :href="'../detail_order/main?id='+item.id" class="cont">
                        <img :src="item.good_pic" alt="" class="or_img">
                        <div class="or_cont">
                             <div class="title van-multi-ellipsis--l2" >{{item.good_name}}</div>
                            <div class="mini-title">服务：{{item.attr_names}}</div>
                        </div>
                       
                    </a>
                    <div class="prices">
                        <div></div>
                        <div class="service">共{{item.buy_count}}次服务 实付款：<div class="price">¥{{item.total_pay}}</div> </div>
                    </div>
                    <div class="btn-list">
                        <!-- <div class="btn-item">取消订单</div>
                        <div class="btn-item cl">取消订单</div> -->
                        <a :href="'../detail_order/main?id='+item.id" class="btn-item">订单详情</a>
                    </div>
                </div>
                    
                </div>
            </van-tab>
            <van-tab title="进行中" @touchstart="onTouchStart" @touchend="onTouchEnd">
                <div v-if="jinxinList.length != 0">
                
                <div class="order-item"  v-for="(item, index) in jinxinList" :key="key">
                    <div class="heard">
                        <div class="info">
                            <div class="name">{{item.real_name}}</div>
                        </div>

                        <div class="status" v-if="item.order_status == 1">待接</div>
                        <div class="status" v-else-if="item.order_status == 2">待付款</div>
                        <div class="status" v-else-if="item.order_status == 3">待服务</div>
                        <div class="status" v-else-if="item.order_status == 4">进行中</div>
                        <div class="status" v-else-if="item.order_status == 5">售后中</div>
                        <div class="status" v-else-if="item.order_status == 6">待评论</div>
                        <div class="status" v-else-if="item.order_extend_status == 2">退款售后</div>
                        <div class="status" v-else-if="item.order_status == 7">已完成</div>
                    </div>
                    <a :href="'../detail_order/main?id='+item.id" class="cont">
                        <img :src="item.good_pic" alt="" class="or_img">
                        <div class="or_cont">
                             <div class="title van-multi-ellipsis--l2" >{{item.good_name}}</div>
                            <div class="mini-title">服务：{{item.attr_names}}</div>
                        </div>
                       
                    </a>
                    <div class="prices">
                        <div></div>
                        <div class="service">共{{item.buy_count}}次服务 实付款：<div class="price">¥{{item.total_pay}}</div> </div>
                    </div>
                    <div class="btn-list">
                        <!-- <div class="btn-item">取消订单</div>
                        <div class="btn-item cl">取消订单</div> -->
                        <div class="btn-item" v-if="item.order_status == 4" @click="fuwuCheck(item.id)">服务验收</div> 
                        <a :href="'../detail_order/main?id='+item.id" class="btn-item">订单详情</a>
                    </div>
                </div>
                    
                </div>
            </van-tab>
            <van-tab title="售后中" @touchstart="onTouchStart" @touchend="onTouchEnd">
                 <div v-if="shouhuoList.length != 0">
                
                <div class="order-item"  v-for="(item, index) in shouhuoList" :key="key">
                    <div class="heard">
                        <div class="info">
                            <div class="name">{{item.real_name}}</div>
                        </div>

                        <div class="status" v-if="item.order_status == 1">待接</div>
                        <div class="status" v-else-if="item.order_status == 2">待付款</div>
                        <div class="status" v-else-if="item.order_status == 3">待服务</div>
                        <div class="status" v-else-if="item.order_status == 4">进行中</div>
                        <div class="status" v-else-if="item.order_status == 5">售后中</div>
                        <div class="status" v-else-if="item.order_status == 6">待评论</div>
                        <div class="status" v-else-if="item.order_extend_status == 2">退款售后</div>
                        <div class="status" v-else-if="item.order_status == 7">已完成</div>
                    </div>
                    <a :href="'../detail_order/main?id='+item.id" class="cont">
                        <img :src="item.good_pic" alt="" class="or_img">
                        <div class="or_cont">
                             <div class="title van-multi-ellipsis--l2" >{{item.good_name}}</div>
                            <div class="mini-title">服务：{{item.attr_names}}</div>
                        </div>
                       
                    </a>
                    <div class="prices">
                        <div></div>
                        <div class="service">共{{item.buy_count}}次服务 实付款：<div class="price">¥{{item.total_pay}}</div> </div>
                    </div>
                    <div class="btn-list">
                        <!-- <div class="btn-item">取消订单</div>
                        <div class="btn-item cl">取消订单</div> -->
                        <a :href="'../detail_order/main?id='+item.id" class="btn-item">订单详情</a>
                    </div>
                </div>
                    
                </div>
            </van-tab>
            <van-tab title="待评论" @touchstart="onTouchStart" @touchend="onTouchEnd">
                 <div v-if="pinjiaList.length != 0">
                
                <div class="order-item"  v-for="(item, index) in pinjiaList" :key="key">
                    <div class="heard">
                        <div class="info">
                            <div class="name">{{item.real_name}}</div>
                        </div>

                        <div class="status" v-if="item.order_status == 1">待接</div>
                        <div class="status" v-else-if="item.order_status == 2">待付款</div>
                        <div class="status" v-else-if="item.order_status == 3">待服务</div>
                        <div class="status" v-else-if="item.order_status == 4">进行中</div>
                        <div class="status" v-else-if="item.order_status == 5">售后中</div>
                        <div class="status" v-else-if="item.order_status == 6">待评论</div>
                        <div class="status" v-else-if="item.order_extend_status == 2">退款售后</div>
                        <div class="status" v-else-if="item.order_status == 7">已完成</div>
                    </div>
                    <a :href="'../detail_order/main?id='+item.id" class="cont">
                        <img :src="item.good_pic" alt="" class="or_img">
                        <div class="or_cont">
                             <div class="title van-multi-ellipsis--l2" >{{item.good_name}}</div>
                            <div class="mini-title">服务：{{item.attr_names}}</div>
                        </div>
                       
                    </a>
                    <div class="prices">
                        <div></div>
                        <div class="service">共{{item.buy_count}}次服务 实付款：<div class="price">¥{{item.total_pay}}</div> </div>
                    </div>
                    <div class="btn-list">
                        <!-- <div class="btn-item">取消订单</div>
                        <div class="btn-item cl">取消订单</div> -->
                        
                        <a :href="'../detail_order/main?id='+item.id" class="btn-item">订单详情</a>
                    </div>
                </div>
                    
                </div>
            </van-tab>
            <van-tab title="已完成" @touchstart="onTouchStart" @touchend="onTouchEnd">
                 <div v-if="wanchengList.length != 0">
                
                <div class="order-item"  v-for="(item, index) in wanchengList" :key="key">
                    <div class="heard">
                        <div class="info">
                            <div class="name">{{item.real_name}}</div>
                        </div>

                        <div class="status" v-if="item.order_status == 1">待接</div>
                        <div class="status" v-else-if="item.order_status == 2">待付款</div>
                        <div class="status" v-else-if="item.order_status == 3">待服务</div>
                        <div class="status" v-else-if="item.order_status == 4">进行中</div>
                        <div class="status" v-else-if="item.order_status == 5">售后中</div>
                        <div class="status" v-else-if="item.order_status == 6">待评论</div>
                        <div class="status" v-else-if="item.order_extend_status == 2">退款售后</div>
                        <div class="status" v-else-if="item.order_status == 7">已完成</div>
                    </div>
                    <a :href="'../detail_order/main?id='+item.id" class="cont">
                        <img :src="item.good_pic" alt="" class="or_img">
                        <div class="or_cont">
                             <div class="title van-multi-ellipsis--l2" >{{item.good_name}}</div>
                            <div class="mini-title">服务：{{item.attr_names}}</div>
                        </div>
                       
                    </a>
                    <div class="prices">
                        <div></div>
                        <div class="service">共{{item.buy_count}}次服务 实付款：<div class="price">¥{{item.total_pay}}</div> </div>
                    </div>
                    <div class="btn-list">
                        <!-- <div class="btn-item">取消订单</div>
                        <div class="btn-item cl">取消订单</div> -->
                        <a :href="'../detail_order/main?id='+item.id" class="btn-item">订单详情</a>
                    </div>
                </div>
                    
                </div>
            </van-tab>
            <van-tab title="退款售后" @touchstart="onTouchStart" @touchend="onTouchEnd">
                 <div v-if="tuikuangList.length != 0">
                
                <div class="order-item"  v-for="(item, index) in tuikuangList" :key="key">
                    <div class="heard">
                        <div class="info">
                            <div class="name">{{item.real_name}}</div>
                        </div>

                        <div class="status" v-if="item.order_status == 1">待接</div>
                        <div class="status" v-else-if="item.order_status == 2">待付款</div>
                        <div class="status" v-else-if="item.order_status == 3">待服务</div>
                        <div class="status" v-else-if="item.order_status == 4">进行中</div>
                        <div class="status" v-else-if="item.order_status == 5">售后中</div>
                        <div class="status" v-else-if="item.order_status == 6">待评论</div>
                        <div class="status" v-else-if="item.order_extend_status == 2">退款售后</div>
                        <div class="status" v-else-if="item.order_status == 7">已完成</div>
                    </div>
                    <a :href="'../detail_order/main?id='+item.id" class="cont">
                        <img :src="item.good_pic" alt="" class="or_img">
                        <div class="or_cont">
                             <div class="title van-multi-ellipsis--l2" >{{item.good_name}}</div>
                            <div class="mini-title">服务：{{item.attr_names}}</div>
                        </div>
                       
                    </a>
                    <div class="prices">
                        <div></div>
                        <div class="service">共{{item.buy_count}}次服务 实付款：<div class="price">¥{{item.total_pay}}</div> </div>
                    </div>
                    <div class="btn-list">
                        <!-- <div class="btn-item">取消订单</div>
                        <div class="btn-item cl">取消订单</div> -->
                        <a :href="'../detail_order/main?id='+item.id" class="btn-item">订单详情</a>
                    </div>
                </div>
                    
                </div>
            </van-tab>
        </van-tabs>
        <van-toast id="van-toast" />
        <van-dialog id="van-dialog" />
    </div>
</template>
<script>
import fly from '@/utils/fly'
import Fun from '@/utils/index'
import * as Params from '@/utils/params'
import Toast from '../../../static/vant/toast/toast';
import Dialog from '../../../static/vant/dialog/dialog';

export default {
    data() {
        return {
            active: 0
            ,allOrderList: []
            ,daijieList: []
            ,fukuangList: []
            ,fuwuList: []
            ,jinxinList: []
            ,shouhuoList: []
            ,pinjiaList: []
            ,wanchengList: []
            ,tuikuangList: []
            ,order_type: 'repair_order'			//默认repair_order  ，demand_order
            ,order_status: 0		//默认0所有
            ,order_extend_status:0		//默认0
            ,keyword: ''
            ,page_size: 15 //默认15
            ,page:1 //默认1
            ,allOrderPage: 0
            ,taijiePage: 0
            ,daifukuangPage:0
            ,daifuwuPage: 0
            ,jingxinPage: 0
            ,shouhuoPage: 0
            ,pingjuPage: 0
            ,tuikuangPage: 0
            ,wanchenPage: 0
            ,pageX: 0
        }
    }
    ,methods: {
        onChange(event){
            this.active = event.mp.detail.index
            this.changeOpt()
        }
        ,getdata(act) {
            fly.post('/?v=V1&g=Doctor&c=Order&a=getMyOrderList'+Fun.getParam(),{
                order_type: this.order_type
                ,order_status: this.order_status		//默认0所有
                ,order_extend_status: this.order_extend_status		//默认0
                ,keyword: this.keyword
                ,page_size: this.page_size //默认15
                ,page:this.page //默认1 
            }).then((res)=> {
                if(res.code == 0) {
                    switch(act) {
                        case 0:
                        this.allOrderList = this.allOrderList.concat(res.data[0].list)
                        break
                         case 1:
                        this.daijieList = this.daijieList.concat(res.data[0].list)
                        break
                         case 2:
                        this.fukuangList = this.fukuangList.concat(res.data[0].list)
                        break
                         case 3:
                        this.fuwuList = this.fuwuList.concat(res.data[0].list)
                        break
                         case 4:
                        this.jinxinList = this.jinxinList.concat(res.data[0].list)
                        break
                         case 5:
                        this.shouhuoList = this.shouhuoList.concat(res.data[0].list)
                        break
                         case 6:
                        this.pinjiaList = this.pinjiaList.concat(res.data[0].list)
                        break
                        case 7:
                        this.wanchengList = this.wanchengList.concat(res.data[0].list)
                        break
                        case 8:
                        this.tuikuangList = this.tuikuangList.concat(res.data[0].list)
                        break
                    }
                } else {
                    console.log(res.message)
                }
            })
        }
        ,changeOpt (){
            this.order_status = this.active
            switch(this.active) {
                case 0:
                    this.page = this.allOrderPage ++
                    this.getdata()
                break
                case 1:
                    this.page = this.taijiePage ++
                    this.getdata()
                break
                case 2:
                    this.page = this.daifukuangPage ++
                    this.getdata()
                break
                case 3:
                    this.page = this.daifuwuPage ++
                    this.getdata()
                break
                case 4:
                    this.page = this.jingxinPage ++
                    this.getdata()
                break
                case 5:
                    this.page = this.shouhuoPage ++
                    this.getdata()
                break
                case 6:
                    this.page = this.pingjuPage ++
                    this.getdata()
                break
                case 7:
                    this.page = this.wanchenPage ++
                    this.getdata()
                break
                case 8:
                    this.page = this.tuikuangPage ++
                    this.order_status  = 0
                    this.getdata()
                break
            }
            this.getdata(this.active)
        }
        ,fuwuCheck(id) {
            console.log(id)
            Dialog.confirm({
            title: '确认验收服务？',
            }).then(() => {
            // on confirm
                fly.post('/?v=V1&g=Doctor&c=Order&a=operateMyOrder'+Fun.getParam(),{
                    op_type: 'fuwu_check'
                    ,order_id: id
                    ,order_type: 'repair_order'
                    ,val: 1
                }).then((res)=> {
                    if(res.code == 0) {
                        Toast('操作成功')
                        this.getdata(4)
                    } else {
                        Toast(res.message)
                    }
                })
            }).catch(() => {
            // on cancel
            });
             
        }
         ,onTouchStart(event) {
        //console.log(event)
        this.pageX = event.pageX
        }
        ,onTouchEnd(event) {
        //console.log(event)
        let x = event.mp.changedTouches[0].pageX
        //console.log(this.pageX,x)
          let num = ~~(this.pageX-x)
        if(num > 100 || num < -100)
        if(this.pageX < x) {
            this.active == 0 ? '' : --this.active
        } else {
            this.active == 8 ? '' : ++this.active
        }
        }
    }
    
    ,mounted() {
        // console.log(this)
        this.active = ~~this.$mp.query.id
        this.changeOpt()
    }
    ,onReachBottom(){ // 底部添加更多
        this.changeOpt()
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

