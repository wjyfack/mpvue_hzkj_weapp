<template>
    <div class="publish">
        <div class="consult">
            <div class="consult-item" v-for="(item, index) in 5" :key="key">
                <div class="head">
                    <div class="cont">
                        <div class="title van-multi-ellipsis--l2">什么联轴器才是最好用的呢用的呢用的呢用的呢用的呢用的呢</div>
                        <div class="mini">
                            <div>追风少年刘全有</div>
                            <div>2 评论</div>
                        </div>
                    </div>
                    <img src="http://placehold.it/100x100" alt="" class="img">
                </div>
                <div class="btn-list">
                    <div class="status"></div>
                    <div class="item">
                        <div class="btn-item c1">编辑</div>
                        <div class="btn-item">删除</div>
                    </div>
                </div>
            </div>   
        </div>
    
    </div>
</template>
<script>
import fly from '@/utils/fly'
import * as Params from '@/utils/params'
export default {
    data() {
        return {
            active: 0
            ,repairList: []
            ,consultList: []
            ,xuqiuList: []
            ,pageRepair: 0
            ,pageXuqiu: 0
            ,pageConsult: 0
        }
    }
    ,methods: {
        onChange(event){
            console.log(event)
        }
        ,getdata() {
           this.getrepirList()
           this.getxuqiuList()
           this.getconsultList()
        }
        ,getrepirList(){
            fly.post('/?v=V1&g=Doctor&c=Repair&a=getMyRepairList'+Params.default.param,{
                keyword: ''
                ,page: this.pageRepair
                ,page_size: 10
            }).then((res)=>{
                console.log(res)
                this.repairList = this.repairList.concat(res.data.list)
            })
        }
        ,getxuqiuList(){
            fly.post('/?v=V1&g=Doctor&c=Demand&a=getMyDemandList'+Params.default.param,{
                keyword: ''
                ,page: this.xuqiuList
                ,page_size: 10
            }).then((res)=>{
                this.xuqiuList = this.xuqiuList.concat(res.data.list)
            })
        }
        ,getconsultList(){
            fly.post('/?v=V1&g=Doctor&c=Consult&a=getMyConsultList'+Params.default.param,{
                keyword: ''
                ,type: 0
                ,page: this.pageConsult
                ,page_size: 10
            }).then((res)=>{
                this.consultList = this.consultList.concat(res.data.list)
            })
        }
    }
    ,mounted() {
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
    
 }
}
.btn-list {
    display: flex;
    align-items: center;
    padding: 5px 0;
    .status {font-size: 10px;color:#393939;}
    .item {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        .btn-item {
            color: #FC5F6B;
            border: 1px solid #FC5F6B;
            font-size: 12px;
            min-width: 66px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 5px;  
            border-radius: 20px;
        }
        .c1 {
            color:#393939;
            border-color:#C9C9C9;
        } 
    }
    
}
.xuqiu {
  background: #F9F9F9;
  &-item {
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    margin-bottom: 10px;
    background: #FFFFFF;
    .title {color:#4C5264;font-size: 12px;}
    .cont {color:#8D8D8D;font-size: 10px;}
    
    .xuqiu-imgs {
      display: -webkit-box;
      overflow-x: scroll;
      -webkit-overflow-scrolling: touch;
      height: 90px;
      .img-item {
        width: 80px;
        height: 80px;
        border-radius: 5px;
        margin-right: 10px;
        .img {width: 100%;height:100%;border-radius: 5px;}
      }
    }
    .bar {
      display: flex;
      margin-top: 5px;
      &-item {
        color:#5887F9;
        font-size: 10px;
        background: #E8EFFF;
        padding: 0px 12px;
        border-radius: 10px;
        margin-right: 10px;
      }
      .hl {
          color:#FC5F6B;
          background: #FCD7DA;
      }
      .time {
          flex:1;
          display: flex;
          justify-content: flex-end;
          font-size: 10px;
          color:#A7A7A7;
      }
    }
  }
}
.consult {
   background: #F9F9F9;
    &-item {
        background: #FFFFFF;
        padding:10px 20px 0 20px;
        margin-bottom: 10px;
        .head {
            display: flex;
            padding-bottom: 10px;
            justify-content: space-between;  
            .img {
                width: 111px;
                height: 67px;
                border-radius:5px;
            }
            .cont {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding-right: 10px;
                .title {
                    font-size: 14px;
                    color: #4C5264;
                }
                .mini {
                    display: flex;
                    justify-content: space-between;
                    color:#A1A1A1;
                    font-size: 10px;
                }
            }
        }

    }
}
</style>

