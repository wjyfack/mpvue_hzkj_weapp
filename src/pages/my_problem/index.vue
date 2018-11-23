<template>
    <div class="problem">
        <div class="problem-item" v-for="(item,index) in 5" :key="key">
            <div class="head" @click="toOpen(index)">
                <div class="title van-ellipsis">我觉得你这个人有点小问题？我觉得你这个人有点小问题？</div>
                <img src="../../../static/imgs/arrow.png" alt="" class="img" :class="{'act': active == index}">
            </div>
            <div class="cont" :class="{'active': active == index}">
                <div class="con">ssssss</div>
                <div class="user">
                    <div class="item">
                        <img src="../../../static/imgs/p_use.png" alt="" class="gg_img">
                        <div class="gd">有用</div>
                    </div>
                    <div class="item">
                        <img src="../../../static/imgs/p_no_use.png" alt="" class="gg_img">
                        <div class="">没用</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            active: 0
        }
    }
    ,methods: {
        toOpen(index){
            this.active = index
        }
    }
    
}
</script>
<style lang="less" scoped>
.problem {
    background: #f9f9f9;
    &-item {
        padding: 10px 20px;
        margin-bottom: 10px;
        
        background: #ffffff;
        .head {
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            color:#4C5264;
            .title {
                flex: 1;
            }
            .img {
                width:  6px;
                height: 11px;
                -moz-transform: rotate(90deg);
                -webkit-transform:rotate(90deg);
                transform: rotate(90deg);
            }
            .act {
                -moz-transform: rotate(-90deg);
                -webkit-transform:rotate(-90deg);
                transform: rotate(-90deg);
            }
        }
        
        .cont {
            display: none;
            flex-direction: column;
            .con {
                color:#828282;
                font-size: 12px; 
                min-height: 30px;
            }
            .user {
                display: flex;
                width:100%;
                .item {
                    width: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color:#BCC5D3;
                    font-size: 12px;
                    .gg_img {
                        width:16px;
                        height: 16px;
                        margin-right: 10px;
                    }
                    .gd {
                        color:#5887F9;
                    }
                }
            }
        }
        .active {
            display: flex;
        }
    }
}
</style>
