<template>
    <div class="community">
        <ul class="header">
            <router-link tag="li" :to="{name: 'academic'}">学术讨论</router-link>
            <router-link tag="li" :to="{name: 'download'}">资源下载</router-link>
            <router-link tag="li" :to="{name: 'personal'}">个人中心</router-link>
        </ul>
        <router-view class="main"></router-view>
    </div>
</template>

<script>
    export default {
        name: 'community',
    }
</script>

<style lang="scss" scoped>
    .community{
        .header{
            li{
                display: inline-block;
                padding: 10px 20px;
                font-size: 16px;
                color: #000;
                &.exact-active,
                &.active{
                    color: #fff;
                    background: #000;
                }
            }
        }
        .main{
            margin: 20px 0 0 20px;
        }
    }
</style>
