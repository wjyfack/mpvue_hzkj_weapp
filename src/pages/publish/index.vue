<template>
    <div class="content">
        <div class="publish">
            <div class="img_select">
                <div class="img_select_item" @click="onImage">
                    <img src="../../../static/imgs/add.png" class="img">
                </div> 
                <div class="img_select_item" v-for="(item,index) in imgArr" :key="key">
                    <img :src="item" class="img">
                    <img src="../../../static/imgs/close.png" class="close" @click="onClose(index)">
                </div>
            </div> 
            <div class="textarea-hi">
                <van-cell-group class="textarea-hi">
                    <van-field
                        :value="title"
                        placeholder="在此填写标题"
                        :border=" true"
                        maxlength= "30"
                        @change="onChangeTittle"
                    />
                    <van-field
                        :value="deatil"
                        placeholder="在此输入更加详细的信息~"
                        type="textarea"
                        :border="false"
                        autosize
                        @change="onChangedetail" 
                    />

                </van-cell-group> 
            </div>
            <div class="addr" @click="onCloseAddr">
                <van-icon name="location"></van-icon>
                <div class="addr_detail">{{area.province}} {{area.city}}</div>
            </div>
            <div class="bell">
                <div class="cells van-hairline--bottom" @click="onCloseSort">
                    <div class="name">分类</div>
                    <div class="detail">分类 <img src="../../../static/imgs/arrow.png" class="arrow"></div>
                </div>
            </div>
            <div class="more_add">
                <van-cell-group>
                    <van-field
                        label="预算"
                        :value="yunsuan"
                        placeholder="输入您预算的金额~"
                        :border=" true"
                        
                    />
                    <van-field
                        label="联系手机"
                        :value="phone"
                        placeholder="输入您的手机号码~"
                        :border=" true"
                        
                    />
                    <van-field
                        label="联系人"
                        :value="concat"
                        placeholder="怎么称呼您呢？"
                        :border=" true"
                        
                    />
                </van-cell-group>
            </div>
            <div class="tips">填写完毕，按下方按钮发布~</div>
            <van-toast id="van-toast"/>
            <div class="set_btn" v-if="isBtn">    
                <van-button size="large" square type="danger" @click="onPublish">发布</van-button>
            </div>
        </div>
        <van-popup :show="isSort" @close="onCloseSort" position="bottom" custom-class="sort_tree">
            <div class="back"><van-button size="small" type="default" @click="onCloseSort">返回</van-button></div>
            <div class="tree-select">
                <div class="tree-select__nav">
                    <div
                    v-for="(item, index) in 5"
                    :key="key"
                    class="tree-select__nitem van-ellipsis"
                    @click="onClickNav(index)"
                    :class="{'tree-select__nitem--active': index == sortOne}"
                    >
                    分类１
                    </div>
                </div>
                <div class="tree-select__content">
                    <div
                    v-for="(item, index) in 5"
                    :key="key"
                    class="tree-select__item van-ellipsis"
                    :class="{'tree-select__item--active': index == sortTwo}"
                    @click="onSelectItem(index)"
                    >
                    分类２
                    </div>
                </div>
            </div>
        </van-popup>
        <van-popup :show="isAddr" @close="onCloseAddr" position="bottom" custom-class="sort_tree">
            <van-area :area-list="areaList" :columns-num="2" @cancel="onCloseAddr" @confirm="getAddr"/>
        </van-popup>
    </div>
</template>
<script>
import Toast from '../../../static/vant/toast/toast';
export default {
    data() {
        return {
            title: ''
            ,isSort: false // 分类
            ,isAddr: false //地址选择
            ,isBtn: true
            ,detail: ''
            ,imgArr: [] // 图片
            ,sortOne: 0
            ,sortTwo: 0
            ,area: { // 地区
                city: ''
                ,code: '0'
                ,province: '请选择'
            }
            ,areaList: {
                province_list: {
                    110000: '北京市',
                    120000: '天津市'
                },
                city_list: {
                    110100: '北京市',
                    110200: '县',
                    120100: '天津市'
                },
                county_list: {
                    110101: '东城区',
                    110102: '西城区',
                    110105: '朝阳区'                 
                }
            }
        }
    }
    
    ,methods: {
        onChangeTittle(event) {
           this.title = event.mp.detail
        }
        ,onChangedetail(event) {
           this.detail = event.mp.detail
        }
        ,onImage() {
            let _this = this
            if(_this.imgArr.length == 3) {
               Toast('最多显示3张图片');
               return false;
            }
            wx.chooseImage({
                count: 1
                ,sizeType: ['original', 'compressed']
                ,sourceType: ['album', 'camera']
                ,success(res) {
                    // console.log(res)
                    _this.imgArr.push(res.tempFilePaths)
                }
                ,fail(res) {
                    console.log(res)
                }
            })    
        }
        ,onClose(index) {
           this.imgArr.splice(index,1);
        }
        ,onPublish(){
            console.log('发表')
            wx.request({
            url: 'https://www.cdxscn.com/doctor_repair.php', //仅为示例，并非真实的接口地址
            data: {
                act:'ajax_repair_list'
                ,cat_id:0
                ,field_ids:	''
                ,keyword:''
                ,page:1
                ,region_sheng:0
                ,region_shi:0
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success (res) {
                console.log(res.data)
            }
            })
        }
       
        ,onCloseSort() {
            this.isSort = !this.isSort            
            this.isBtn = this.isSort ? false:true
          
        }
        ,onCloseAddr() { // 地址选择
            this.isAddr = !this.isAddr
            this.isBtn = this.isAddr ? false:true
        }
        ,getAddr(event) {
            // console.log(event.mp.detail)
            this.area = event.mp.detail.detail
            this.onCloseAddr()
        }
        ,onClickNav(index) {
            this.sortOne = index
        }
        ,onSelectItem(index){
            this.sortTwo = index
            this.onCloseSort()
        }
    }
    
}
</script>
<style lang="less" scoped>
.bg-ff {
    background: #FFFFFF;
}
.sort_tree {
    width: 100%;
    height: 100%;
    .back {padding: 10px;}
}
.publish {
    background: #F9F9F9;
    .img_select {
        background: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        margin-bottom: 10px;
        &_item {
            position: relative;
            width: 66px;
            height: 66px;
            box-sizing: border-box;
            border-radius: 5px;
            margin-right: 10px;
            .img {
                width: 66px;
                height: 66px;
                border-radius: 5px;
            }
            .close {
                position:absolute;
                width:17px;
                height: 17px;
                right: -7px;
                top: -7px;
            }
             &:last-child {
                margin-right: 0;
            }
        }
       
    }
    .textarea-hi {
        min-height: 200px;
        background: #FFFFFF;
        
    }
    .addr {
        padding: 10px 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background: #FFFFFF;
        margin-bottom: 10px;
        &_detail {
            padding: 5px 0 5px 10px;
            font-size: 12px;
            color:#4C5264;
        }
    }
    .tips {
        padding: 10px;
        text-align: center;
        color:#5887F9;
        font-size: 10px;
    }
    .set_btn {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 999;
        //padding: 5px 20px;
        background: #FFFFFF;
        .btn {
            display: flex;
            justify-content: center;
            align-items: center;
            background: #FC5F6B;
            color: #FFFFFF;
            padding:10px;
        }
    }
}
.content {
    padding-bottom: 50px;
}
.bell {
    background: #FFFFFF;
    .cells {
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
        .name{
            font-size: 16px;
            color:#333;
        }
        .detail {
            display: flex;
            align-items: center;
            font-size: 14px;
            color:#B2B2B2;
            .arrow {
                margin-left: 5px;
                width:  6px;
                height: 11px;
                color: #5887F9;
            }
        }
    }
    
}
.tree-select {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  font-size: 16px
}

.tree-select__nav {
  width: 35%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  overflow: scroll;
  background-color: #fff;
  -webkit-overflow-scrolling: touch
}

.tree-select__nitem {
  line-height: 44px;
  padding: 0 15px;
  background-color: #fff
}

.tree-select__nitem--active,
.tree-select__nitem:active {
  background-color: #f8f8f8
}

.tree-select__nitem--active {
  font-weight: 500
}

.tree-select__content {
  padding: 0 15px;
  margin-left: 35%;
  overflow: scroll;
  -webkit-overflow-scrolling: touch
}

.tree-select__item {
  position: relative;
  line-height: 44px;
  padding-left: 5px;
  padding-right: 18px
}

.tree-select__item--active,
.tree-select__item:active {
  color: #f44
}

.tree-select__selected {
  float: right;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  line-height: inherit
}

</style>

