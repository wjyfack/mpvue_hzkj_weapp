<template>
    <div class="setting">
        <img :src="baseInfo.user_picture" alt="" class="avatar" @click="onImage">
        <div class="nicheng van-hairline--top">
            <van-field
                v-model="baseInfo.nick_name"
                required
                clearable
                label="昵称"
                placeholder="请输入昵称" 
            />
        </div>
        <div class="btn">
            <van-button @click="onSubmit" type="danger" size="large">提交</van-button>
        </div>
    </div>
</template>
<script>
import fly from '@/utils/fly'
import * as Params from '@/utils/params'
import Toast from '../../../static/vant/toast/toast';
export default {
    data() {
        return {
           avatar: ''
           ,baseInfo: {
               nick_name: ''
               ,user_picture: ''
           }
        }
    }
    ,methods :{
        onSubmit () {
            // http://cdzj.demo.com/Apiapi/?v=V1&g=Doctor&c=User&a=getMyRealInfo
            // review_status   0未审核1通过2不通过
            fly.post('/?v=V1&g=Doctor&c=User&a=getMyRealInfo'+Params.default.param)
                .then((res)=> {
                    console.log(res)
                })
        }
        ,getAd() {
            fly.post('/?v=V1&g=Common&c=User&a=getMyRealInfo'+Params.default.param)
                .then((res)=> {
                    this.baseInfo = res.data.base_info
                })
        }
        ,onImage() {
            let _this = this
            
            wx.chooseImage({
                count: 1
                ,sizeType: ['original', 'compressed']
                ,sourceType: ['album', 'camera']
                ,success(res) {
                    // console.log(res)
                    _this.avatar = res.tempFilePaths[0]
                   
                    //console.log(res)
                    wx.uploadFile({
                        url: Params.default.host+'/?v=V1&g=Common&c=Upload&a=uploadImage'+Params.default.param,
                        filePath: res.tempFilePaths[0],
                        name: 'file',
                        formData: {
                            'img_classify': 'doctor'
                        },
                        success (data){
                            if(data.code == 0) {
                                 _this.img = data.data.img_path
                            } else {
                                Toast('上传失败')
                            }
                        }
                    })
                }
                ,fail(res) {
                    console.log(res)
                }
            })    
        }
    }
    ,mounted() {
        this.getAd()
    }
}
</script>
<style lang="less" scoped>
.setting {
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin:30px 0;
    }
    .nicheng{
        width:100%;
        padding: 10px 0;
    }
    .btn {
        width:90%;
    }
}
</style>

