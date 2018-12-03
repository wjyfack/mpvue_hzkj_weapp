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
        }
    }
    ,methods: {
        onSearch(event) {
            console.log(event)
        }
    }
    
}
</script>
<style lang="less" scoped>

</style>
