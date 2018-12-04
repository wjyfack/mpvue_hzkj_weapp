<template>
<div>
    <van-search :value="value" placeholder="请输入搜索内容" @search="onSearch"/>
</div>
</template>

<script>
export default {
    data(){
        return{
            value: ''
            ,opt: ''
        }
    }
    ,methods: {
        onSearch(event) {
            this.value = event.mp.detail
            wx.navigateTo({
            url: '../repair_list/main?keyword='+this.value
            })
        }
    }
    ,mounted() {
        this.opt = this.$mp.query.opt
    },
} 
</script>
<style lang="less" scoped>

</style>
