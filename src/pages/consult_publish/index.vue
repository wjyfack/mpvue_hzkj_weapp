<template>

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
        <van-cell-group class="">
            <van-field
                :value="title"
                placeholder="在此填写标题"
                :border=" true"
                maxlength= "30"
                @change="onChangeTittle"
            />
        </van-cell-group>
        <van-cell-group >
            <van-field
                :value="deatil"
                placeholder="在此输入更加详细的信息~"
                :border="false"
                type="textarea"
                autosize
                @change="onChangedetail" 
            />
        </van-cell-group>
        </div>
        <div class="tips">问题描述的更清晰方便于他人为您解答哦~</div>
        <van-toast id="van-toast" />
        <div class="set_btn">
            <van-button size="large" type="danger" @click="onPublish">发布</van-button>
        </div>
    </div>
</template>
<script>
import Toast from '../../../static/vant/toast/toast';
export default {
    data() {
        return {
            title: ''
            ,detail: ''
            ,imgArr: []
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
        }
    }

}
</script>
<style lang="less" scoped>
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
    }
}
</style>

