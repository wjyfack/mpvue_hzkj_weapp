<template>
    <div class="renzheng">
        <div class="title">请填写您的个人信息</div>
        <van-cell-group>
            <van-field
                :value="realName"
                placeholder="请输入真实姓名"
                :border="true"
                label="真实姓名："
                @change="onChange"
            />
            <van-field
                :value="idcard"
                placeholder="请输入身份证"
                :border="true"
                label="身份证号："
                @change="onChange"
            />
            <van-field
                :value="ibankcard"
                placeholder="请输入银行名称"
                :border="true"
                label="银行名称："
                @change="onChange"
            />
            <van-field
                :value="ibanknum"
                placeholder="请输入银行卡号"
                :border="true"
                label="银行卡号："
                @change="onChange"
            />
            <van-field
                :value="mobile_phone"
                placeholder="请输入手机号"
                :border="true"
                label="手机号："
                @change="onChange"
            />
            <van-field
                :value="mobile_code"
                placeholder="请输入验证码"
                :border="true"
                label="验证码："
                @change="onChange"
                use-button-slot
            >
            <van-button slot="button" size="small" type="primary">发送验证码</van-button>
            </van-field>
        </van-cell-group>
        <div class="title">请拍摄身份证正反面照片</div>
        <div class="idcard">
            <img src="../../../static/imgs/ren_p.png" alt="" class="idcard-item">
            <img src="../../../static/imgs/ren_b.png" alt="" class="idcard-item">
        </div>
        <div class="tips">
            <div class="tips-item">1.身份证信息仅供传动先生平台提供诚信保证使用。</div>
            <div class="tips-item">2.传动先生承诺不向其他第三方透露您的个人信息。</div>
        </div>
        <div class="btn">
            <van-button size="normal" custom-class="bc">提交申请</van-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
           
        }
    }
  
}
</script>
<style lang="less" >
.renzheng {
    background: #F9F9F9;
    .title {
        font-size: 12px;
        color:#828282;
        padding: 10px 20px;
    }
    .idcard {
        background: #ffffff;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding:20px 0;
        &-item {
            width: 127px;
            height: 87px;
        }
    }
    .tips {
        padding-top: 20px;
        padding-bottom: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        &-item {
            font-size: 12px;
            color:#828282;
        }
    }
    .btn {
        width:90%;
        .bc {
            background: #5887F9;
        }
    }
}
</style>

