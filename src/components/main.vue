<template>
  <scroll-view scroll-y="true" class="container" @scrolltolower="onLoadMore">
    <div class="search-bar">
      <div class="search">
        搜索您需要的服务<img src="../../static/imgs/search.png" class="search-icon"/>
      </div>
      <!-- <div><img src="../../static/imgs/filters.png" alt="" class="filter"></div> -->
    </div>
   <!-- 轮播图 -->
    <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000"> 
      <block v-for="(item, index) in banners" :index="index" :key="key">
        <swiper-item> 
          <image :src="item.url" class="slide-image" mode="scaleToFill"/> 
        </swiper-item> 
      </block> 
    </swiper>
    <!-- 轮播图 end-->
    <div class="bg-f9">
      <div class="service">
       <div class="service-item">
         <img src="../../static/imgs/weixiu.png" alt="" class="service-img">
         <div class="service-name">项目维修</div>
       </div>
       <div class="service-item">
         <img src="../../static/imgs/xuqiu.png" alt="" class="service-img">
         <div class="service-name">需求发布</div>
       </div>
       <div class="service-item">
         <img src="../../static/imgs/wenda.png" alt="" class="service-img">
         <div class="service-name">问题咨询</div>
       </div>
       <div class="service-item">
         <img src="../../static/imgs/zhuanjia.png" alt="" class="service-img">
         <div class="service-name">专家服务</div>
       </div>
      </div>
    </div>
    
    
    <div class="connt">
      <!-- 专家列表 -->
      <div class="head">
        <div class="titl">专家列表</div>
        <div class="more">更多>></div>
      </div>
      <div class="expert">
        <div class="expert-item" v-for="(item, index) in 10" :key="key">
          <img src="http://placehold.it/100x100" alt="" class="expert-img">
          <div class="expert-name">刘家祥</div>
        </div>
      </div>
      <!-- 文章列表 -->
      <div class="head">
          <div class="titl">文章列表</div>
          <a href="/pages/counter/main" class="more">更多>></a>
        </div>
      <div class="article">
        <a href="/pages/article/main" class="article-item" v-for="(item, index) in 2" :key="key">
          <div class="art-title van-ellipsis van-hairline--bottom">什么是齿式联轴器？什么是齿式联轴器？</div>
          <div class="min_time">1分钟前</div>
        </a>
      </div>
    </div>
    <van-tabs :active="active" @change="onChange" :color="'#5887F9'" custom-class="tabbars">
      <!-- 选择框 -->
      <div class="select">
        <div class="select-item">
          <div class="select-item-name" :class="{'active': isPrice}" @click="onSelect(1)"> <span>默认排序<van-icon name="arrow" class="arrow-icon"/></span></div>
          <van-transition :show="isPrice" :name="'fade-down'">
            <div class="select-pos">
              <div class="pos-item van-hairline--top">默认排序</div>
              <div class="pos-item van-hairline--top">价格由高到底</div>
              <div class="pos-item van-hairline--top">价格由低到高</div>
            </div>
          </van-transition>
        </div>
        <div class="select-item">
          <div class="select-item-name" :class="{'active': isSort}" @click="onSelect(2)"> <span>分类<van-icon name="arrow" class="arrow-icon"/></span></div>
          <van-transition :show="isSort" :name="'fade-down'">
            <div class="select-pos">
              <div class="pos-item van-hairline--top">默认排序</div>
              <div class="pos-item van-hairline--top">价格由高到底</div>
              <div class="pos-item van-hairline--top">价格由低到高</div>
            </div>
          </van-transition>
        </div>
      </div>
      <van-tab title="项目维修">
        <div class="repair">
          <a href="" class="repair-item" v-for="(items, indexs) in 3" :key="key">
            <div class="repair-header">
              <img src="http://placehold.it/100x100" alt="" class="actor">
              <div class="self">
                <div class="name">涨价先</div>
                <div class="info">
                  <div class="addr">广东佛山&nbsp;|</div>
                  <div class="online">当前在线</div>
                  <div class="unline">当前离线</div>
                </div>
              </div>
            </div>
            <div class="repair-imgs">
              <div class="img-item" v-for="(item, index) in 5" :key="key"><img src="http://placehold.it/100x100" alt="" class="img"></div>
            </div>
            <div class="repair-title">服务标题标题标题标题标题标题标题标题标题标题标题标题...</div>
            <div class="repair-price"><div class="yy">¥</div>　<div>1000.00</div>  </div>
          </a>
        </div>
      </van-tab>
      <van-tab title="需求列表">
        <div class="xuqiu">
          <div class="xuqiu-item" v-for="(items, indexs) in 3" :key="key">
              <div class="title title van-multi-ellipsis--l">标题彼岸他哦提</div>
              <div class="cont title van-multi-ellipsis--l">内容内容内容</div>
              <div class="xuqiu-imgs">
                <div class="img-item" v-for="(item, index) in 5" :key="key"><img src="http://placehold.it/100x100" alt="" class="img"></div>
              </div>
              <div class="name">
                <div>联系人:张*****</div>
                <div>联系方式:136****2645</div>
                <div>2018-11-11</div>
              </div>
              <div class="bar">
                <div class="bar-item">正在进行</div>
                <div class="bar-item">已有999+人报价</div>
              </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="问题咨询">
        <div class="consult">
            
            <a href="" class="consult-item van-hairline--bottom" v-for="(item, index) in 5" :key="key">
                <div class="cont">
                    <div class="title van-multi-ellipsis--l2">什么联轴器才是最好用的呢用的呢用的呢用的呢用的呢用的呢</div>
                    <div class="mini">
                        <div>追风少年刘全有</div>
                        <div>2 评论</div>
                    </div>
                </div>
                <img src="http://placehold.it/100x100" alt="" class="img">
            </a>
       </div>
      </van-tab>
    </van-tabs>
    
  </scroll-view>
</template>

<script>
export default {
  data () {
    return {
       active: 0
      ,userInfo: {}
      ,banners: [{url: 'http://placehold.it/320x100'},{url: 'http://placehold.it/320x100'},{url: 'http://placehold.it/320x100'}]
      ,isPrice: false // 价格高低框
      ,isSort: false // 分类
      ,scrollTop: 0 // 
    }
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
    ,onChange(event) {
      console.log(event)
    }
    ,onSelect(num) {
      switch(num) {
        case 1: 
        this.isPrice = !this.isPrice
        break
        case 2:
        this.isSort = !this.isSort
        break

      }
    }
    ,onLoadMore() {
      console.log(123)
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
  }

  ,onReachBottom(){ // 底部添加更多
    console.log(1222)
  }
  ,onPageScroll(event){
    this.scrollTop = event.scrollTop
    
  }
}
</script>

<style scoped lang="less">
// .container {
//   padding-bottom: 50px;
// }
.tabbars{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}
.consult {
   background: #F9F9F9;
    &-item {
        background: #FFFFFF;
        display: flex;
        padding:10px 20px;
        margin-bottom: 10px;
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
    .name {font-size:10px;color: #A7A7A7;display: flex;justify-content: space-between;align-items: center;}
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
    }
  }
}
.repair{
  background: #F9F9F9;
  .repair-item {
    padding: 10px 20px;
    margin-bottom: 10px;
    background: #FFFFFF;
    .repair-header {
      display: flex;
      padding: 5px 0;
      .actor {width: 27px;height: 27px;margin-right: 10px;border-radius: 50%;}
      .self{
        flex: 1;
        display: flex;
        flex-direction: column;
        .name {font-size:12px;color:#4C5264; border-radius: 50%;}
        .info{
          font-size: 8px;
          display: flex;

          .addr {color: #A7A7A7;}
          .online {color:#2ECB8B;}
          .unline {color: #A7A7A7;}
        }
      }
    }
    .repair-imgs {
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
    .repair-title {
      font-size: 12px;
      color:#4C5264;
      padding-bottom: 5px;
    }
    .repair-price {
      display:flex;
      align-items: center;
      justify-content: flex-start;

      color: #FC5F6B;
      font-size: 12px;
      .yy {
        font-size: 8px;
      }
    }
  }
}
.select {
  display: flex;
  color: #A7A7A7;
  font-size: 12px;
  z-index: 99;
  &-item {
    width: 50%;
    background: #F9F9F9;
    position: relative;
    .select-item-name {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px 0;
      .arrow-icon{
        margin-left: 5px;
        display: inline-block;
        vertical-align: middle;
        transform: rotate(90deg);
      }
    }
   
  }
 
  &-pos {
    position: absolute;
    width: 100%;
   
    background: #FFFFFF;
    .pos-item {
      text-align: center;
      padding: 5px 0;;
     
    }
  }
   .active {
    background: #FFFFFF;
    .select-item-name {
      color: #FC5F6B;
    }
    .arrow-icon {
      transform: rotate(-90deg) !important;
    }
    
  }
}
.search-bar {
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #5887F9;
  vertical-align: middle;
}
.search {
  flex: 1;
  background: #ffffff;
  border-radius: 20px;
  padding: 5px;
  text-align: center;
  color: #8E8E8E;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  margin-right: 10px;
}
.filter {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.search-icon {
  width:15px;
  height: 15px;
  vertical-align: middle;
  margin-left: 5px; 
}
.bg-f9 {
 background: #F9F9F9;
  padding: 10px 20px;
}
.service {
 
  border-radius: 14px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
}
.service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.service-img {
  width: 52px;
  height: 52px;
  margin: 0 auto;
}
.service-name {
  font-size: 16px;
  color:#4C5264;
}
.connt {
  padding: 5px 20px;
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:5px 0 ;
}
.head .titl {
  font-size: 16px;
  color: #5887F9;
}
.head .more {
  font-size: 12px;
  color: #BCC5D3;
}
.expert {
  display: -webkit-box;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  &-item {
    margin-right: 10px;
    .expert-img {
      width:55px;
      height: 55px;
      border-radius: 50%;
    }
    .expert-name {
      color: #4C5264;
      font-size: 14px;
      text-align: center;
    }
  }
}
.article {
  &-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #8E8E8E;
   
    .art-title {
      
      padding: 10px 0;
      font-size: 12px;
    }
    .min_time {
      text-align: right;
      width: 40px;
      font-size: 10px;
    }
    
  }
}

</style>
