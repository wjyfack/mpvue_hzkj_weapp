<template>
    <div class="setting">
        <img src="//placehold.it/100x100" alt="" class="avatar">
        <div class="nicheng van-hairline--top">
            <van-field
                :value="username"
                required
                clearable
                label="昵称"
                placeholder="请输入昵称" 
            />
        </div>
        <div class="btn">
            <van-button type="danger" size="large">提交</van-button>
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

