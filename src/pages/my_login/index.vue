<template>
    <div class="renzheng">
        <van-tabs :active="active" @change="onChange">
            <van-tab title="已有帐号">
                <van-cell-group>
                    <van-field
                        :value="username"
                        v-model.lazy="username"
                        placeholder="请输入用户名/手机号"
                        :border="true"
                        left-icon="contact"
                        :error-message="username_error"
                    />
                    <van-field
                        :value="userpwd"
                        placeholder="请输入登录密码"
                        :border="true"
                        left-icon="password-view"
                        :error-message="userpwd_error"
                    >
                    </van-field>
                </van-cell-group>
                <div class="btn">
                    <van-button size="normal" custom-class="bc" block>绑定</van-button>
                </div>
            </van-tab>
            <van-tab title="快速注册">
                <van-cell-group>
                    <van-field
                        :value="mobile_phone"
                        v-model.lazy="mobile_phone"
                        placeholder="请输入手机号"
                        :border="true"
                       
                        :error-message="mobile_phone_error"
                        @change="onChangePhone"
                    />
                    <van-field
                        :value="mobile_code"
                        placeholder="请输入验证码"
                        :border="true"
                        @change="onChange"
                        use-button-slot
                    >
                    <van-button slot="button" size="small" type="primary" @click="getSms">{{sms_name}}</van-button>
                    </van-field>
                    <van-field
                        :value="pwd"
                        v-model.lazy="pwd"
                        placeholder="请输入密码"
                        :border="true"
                        :error-message="pwd_error"
                        @change="onChangePwd"
                    />
                    <van-field
                        :value="apwd"
                        v-model.lazy="apwd"
                        placeholder="请输入确认密码"
                        :border="true"
                        :error-message="apwd_error"
                        @change="onChangeApwd"
                    />
                </van-cell-group>

                <div class="btn">
                    <van-button size="normal" custom-class="bc" block>立即注册</van-button>
                </div>

            </van-tab>
            
        </van-tabs> 
        
    </div>
</template>
<script>

export default {
    data() {
        return {
           isCode: true
           ,sms_name: '发送验证码'
           ,realName: '' // 真实姓名
           ,idcard: ''  // 身份证号
           ,idcard_error: ''  // 错误提示身份证号
           ,ibankcard: '' //银行名称
           ,ibanknum: '' //银行卡号
           ,ibanknum_error: '' //错误提示银行卡号
           ,mobile_phone: '' // 手机号
           ,mobile_phone_error: ''
           ,mobile_code: '' // 验证码
           ,proson_z: '/static/imgs/ren_p.png' // 身份证正面
           ,proson_f: '/static/imgs/ren_b.png' // 身份证反面
           ,isSub: false // 数据能否提交
           ,reg_phone: /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/ // 验证手机号
           ,reg_idcard: /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/ // 验证身份证
           ,reg_ibankcard: /^([1-9]{1})(\d{14}|\d{18})$/ // 验证银行卡号
        }
    }
    ,watch: {
        mobile_phone(val,oldVal) {
           
            this.mobile_phone_error = this.reg_phone.test(val)?  '':'手机号码格式错误'
        }
        ,idcard(val,oldVal) {
            //console.log(val)
            this.idcard_error = this.reg_idcard.test(val)?  '':'身份证格式错误'
        }
        ,ibanknum(val,oldVal) {
            this.ibanknum_error = this.ibanknum.test(val)?  '':'银行卡号格式错误'
        }
    }
    ,methods: {
        getSms(){
            if(this.isCode) {
                this.daojishi()  
            }           
        }
        
        ,getImage(index){
            let _this = this
            wx.chooseImage({
                count: 1
                ,sizeType: ['original', 'compressed']
                ,sourceType: ['album', 'camera']
                ,success(res) {
                    
                    if(index ==1) {
                       _this.proson_z = res.tempFilePaths[0]
                    } else {
                        _this.proson_f = res.tempFilePaths[0]
                    }
                    
                }
                ,fail(res) {
                    console.log(res)
                }
            })
        }
        ,daojishi(){
            let miao = 60
            this.isCode = false
            let itime = setInterval(()=>{
                if(--miao == 1) {
                   this.sms_name = `重新获取` 
                   this.isCode = true
                    clearInterval(itime)

                } else {
                    this.sms_name = `重新获取(${miao}s)` 
                }
                
            },1000)
        }
        ,onChangePhone(event){
            this.mobile_phone = event.mp.detail
        }
        ,onChangeIdcard(event) {
             this.idcard = event.mp.detail
        }
        ,onChangeIbanknum(event){
            this.ibankcard = event.mp.detail
        }
        
    }
}
</script>
<style lang="less">
.renzheng {
    background: #F9F9F9;
    .btn {
        width:90%;
        margin: 0 auto;
        padding-bottom: 40px;
        .bc {
            background: #5887F9;
            color: #ffffff;
        }
    }
}
</style>

