<template>
  <div id="app">
    <div class="header">
      <div class="container">
        <div class="logo">
          <img src="./assets/images/logo.png" alt="">
        </div>
        <ul class="nav">
          <!--<router-link to="/">Home</router-link>-->
          <!--<router-link to="/about">About</router-link>-->
          <router-link tag="li" :to="{name: 'home'}">首页</router-link>
          <router-link tag="li" :to="{name: 'learn'}">课程学习</router-link>
          <router-link tag="li" :to="{name: 'student'}">学员展示</router-link>
          <router-link tag="li" :to="{name: 'about'}">关于</router-link>
          <router-link tag="li" :to="{name: 'community'}">社区</router-link>
        </ul>
      </div>
    </div>
    <div class="main">
      <router-view class="container"/>
      <router-view class="container" name="academic"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #app {
    .container{
      width: 1000px;
      margin: 0 auto;
    }
    .header{
      width: 100%;
      padding: 5px 0;
      background: #000;
      .container{
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
    .logo{
      img{
        display: block;
        width: 50px;
        height: 50px;
      }
    }
    .nav{
      li{
        display: inline-block;
        padding: 20px 20px;
        font-size: 20px;
        color: #fff;
        &.exact-active,
        &.active{
          border-bottom: 1px solid #fff;
        }
      }
    }
    .main{
      margin-top: 20px;
    }
  }
</style>
