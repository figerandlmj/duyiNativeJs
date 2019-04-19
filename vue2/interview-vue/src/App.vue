<template>
  <div id="app">
    <div class="require">
      请注意需要完成6个逻辑要求：<br><br>
      1、从单独的JSON数据文件里读取商品信息，包括品牌、款号、价格、颜色、尺码、库存等全部商品信息，显示在当前页面上，并按照颜色尺码一一对应的方式显示。<br>
      2、必须是输入框输入下单量，而且必须是大于等于0的数字。(注意科学计数中的e符号在type=number的input中也是能输入的)<br>
      3、输入的下单量超出库存，必须提示，并且光标置于当前输入框。确认提示后，输入框的值可以自动输入为0或者输入为库存数量都可以。本案例是如果以前有输入值恢复到以前的值，无输入自动输入为库存数量。<br>
      4、数字输入后，可以在onchange事件或者onkeyup等事件后计算小计、总件数、总金额3个数据。<br>
      5、只有总计数量>0，下单按钮才可以变亮，等于0是变灰不可点击。<br>
      6、计算性能高效，没有明显延迟卡顿。<br><br>
    </div>
    <div class="info">
      <p>title: {{goodsInfo.title}}</p>
      <p>price: {{goodsInfo.price}}</p>
      <p>goodsNo: {{goodsInfo.goodsNo}}</p>
      <p>brand: {{goodsInfo.brand}}</p>
    </div>
    <div class="tableWrap">
      <table border="0" cellspacing="1" cellpadding="0">
        <tr>
          <td>颜色/尺寸</td>
          <td v-for="item in goodsInfo.size" :key="item">{{item}}</td>
          <td>小计</td>
        </tr>
        <tr v-for="(item, index) in inputColorStock" :key="index">
          <td>{{item.color}}</td>
          <td v-for="(stockItem, stockIndex) in item.stock" :key="stockIndex">
            <input type="text" :value="stockItem" @input="handleInput($event, index, stockIndex)" @blur="handleBlur($event, index, stockIndex)">
          </td>
          <td>{{item.totalStock}}</td>
        </tr>
        <tr>
          <td :colspan="tdNumber">
            <span>总件数：{{inputTotalStock}}，总金额：￥{{totalMoney}}元。</span>
            <input type="button" value="提交订单" class="btn active" v-if="inputTotalStock" @click="handleBtn">
            <input type="button" value="提交订单" class="btn" v-else>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Dialog } from 'vant';
import Axios from 'axios'
Vue.use(Dialog);

export default {
  name: 'app',
  data() {
    return {
      goodsInfo: {},
      inputColorStock: [],
      tdNumber: 5,
      inputTotalStock: 0,
      totalMoney: 0,
    }
  },
  mounted() {
    //获取json数据
    Axios.get('data/goodsInfo.json').then(res => {
      this.goodsInfo = res.data;
      this.inputColorStock = JSON.parse(JSON.stringify(this.goodsInfo.colorStock)).map((item) => {
        item.totalStock = item.stock.reduce((prev, curr) => {
          return prev + curr;
        });
        return item;
      });
      this.tdNumber = this.inputColorStock.length + 2;
      this.handleTotalMoney();
    }).catch(err => {
      console.log(err);
    })
  },
  methods: {
    // @input事件
    handleInput(e, index, stockIndex) {
      const inputStr = e.target.value || '0';
      const inputValue = parseInt(inputStr) || 0;
      const maxValue = this.goodsInfo.colorStock[index].stock[stockIndex];
      const value = this.inputColorStock[index].stock[stockIndex];
      if(inputValue > maxValue) {
        Dialog.alert({
          message: '输入的下单量超出库存'
        }).then(() => {
          // on confirm
          this.handleTotalMoney();
        });
        return;
      }
      if(inputStr != (value + '')) {
        this.inputColorStock[index].stock[stockIndex] = parseInt(inputStr.replace(/[^\d]/g, ''));
        this.handleTotalMoney();
      }
    },
    // @blur事件
    handleBlur(e, index, stockIndex) {
      const value = e.target.value;
      if(value == '') {
        this.inputColorStock[index].stock[stockIndex] = 0;
        this.handleTotalMoney();
      }
    },
    // 处理数据变化
    handleTotalMoney() {
      this.inputTotalStock = 0;
      this.inputColorStock = this.inputColorStock.map((item) => {
        item.totalStock = item.stock.reduce((prev, curr) => {
          return prev + curr;
        });
        this.inputTotalStock += item.totalStock;
        return item;
      });
      this.totalMoney = this.inputTotalStock * this.goodsInfo.price;
    },
    //提交订单
    handleBtn() {
      alert('提交数据！');
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  padding: 10px;
}
.tableWrap{
  margin-top: 20px;
  table{
    background: #000;
    tr:not(:last-child){
      td:nth-of-type(1){
        width: 90px;
      }
      input{
        width: 90%;
        height: 80%;
        color: #625f5f;
        text-align: center;
        border-bottom: 1px solid #000;
      }
    }
    td{
      width: 80px;
      height: 30px;
      text-align: center;
      background: #fff;
    }
    span{
      position: relative;
      bottom: 5px;
    }
    .btn{
      width: 140px;
      height: 60px;
      border: 1px solid #d8caca;
      font-size: 28px;
      color: #c3b6b6;
      background: #eee;
      transform: scale(.5, .5);
      box-sizing: border-box;
      border-radius: 6px;
      &.active{
        color: #181818;
        border-color: #181818;
      }
    }
  }
}
</style>
