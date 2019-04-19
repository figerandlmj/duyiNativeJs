<template>
    <div class="academic">
        <ul v-for="(item, index) in questionList" :key="index" class="questionList">
            <router-link tag="li" :to="{name: 'question', params: {id: item.id}}">{{item.title}}</router-link>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'academic',
    data() {
      return {
        questionList: [
          {
            id: 201901,
            title: 'es6中箭头函数和普通函数的区别？'
          },
          {
            id: 201902,
            title: 'es6中箭头函数和普通函数xxxxxx的区别2？'
          },
          {
            id: 201903,
            title: 'es6中箭头函数和普xxxxxxxxxxxxxxx通函数的区别3？'
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
    .academic{
        .questionList{
            li{
                font-size: 16px;
                color: #000;
                line-height: 30px;
            }
        }
    }
</style>
