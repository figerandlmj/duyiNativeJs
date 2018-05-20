<template>
  <div id="app">
    <myInp :text="text" @get-val="getVal"/>
    <span>{{msg}}</span>
  </div>
</template>

<script>
import myInp from './components/myInp'

export default {
  name: 'App',
  components: {
    myInp
  },
  data(){
    return {
      text: 'hello',
      msg:''
    }
  },
  methods:{
    getVal(val){
      this.msg = val;
    }
  }
}
</script>
  
<style>
  span{
    color: green;
  }
</style>
