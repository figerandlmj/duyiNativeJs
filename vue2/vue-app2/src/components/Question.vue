<template>
    <div class="question">
        {{question}}
    </div>
</template>

<script>
  export default {
    name: 'question',
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
        ],
        question: ''
      }
    },
    created() {
      const id = this.$route.params.id;
      const index = this.questionList.findIndex(item => item.id == id);
      if(index == -1) {
        // this.$router.go(-1);

        // this.$router.replace('/error.html');
        this.$router.replace({name: 'error'});

        // this.$router.push({name: 'error'});

      }else{
        this.question = this.questionList[index].title;
      }
    }
  }
</script>
