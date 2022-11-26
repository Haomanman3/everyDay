<template>
  <div>
    <!-- 模板字符串渲染 -->
    <!-- {{ msg }} -->
    <!-- <div v-bind:title="message">鼠标悬停查看提示信息</div>
    <div :title="message">查看信息</div> -->
    <p v-if="flag">这一路上走走停停</p>
    <p v-else>顺着少年漂流的痕迹</p>
    <p v-show="flag">起风了</p> 
    <span v-show="!flag">哈哈</span>
    <!-- 点击事件 -->
    <button @click="feng">点我</button>
    <button v-on:click="feng">点我</button>

<!-- 循环 -->
   <ul>
    <li v-for="item in list" :key="item.id">{{item.name}}</li>
   </ul>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      // msg: "哈哈哈",
      message: "页面加载于" + new Date().toLocaleString(),
      flag: true,
      list:[
        {
          id:1,
          name:'张三'
        },
        {
          id:2,
          name:'李四'
        },
        {
          id:3,
          name:'王五'
        },
        {
          id:4,
          name:'赵六'
        },
      ]
    };
  },
  methods: {
    feng() {
      // 点击切换状态
      this.flag=!this.flag
      // this.list[0].age=18
    },
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
