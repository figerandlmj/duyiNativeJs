<template>
    <div class="content" id="app">
        hello world
        <router-link to="/">home</router-link>
        <router-link to="/about">about</router-link>
        <router-link to="/test">test</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .content{
        font-size: 16px;
        color: #f00;
    }
</style>