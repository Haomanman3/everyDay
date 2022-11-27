<template>
  <div class="home">
    <div class="content">
      <!-- 头部 -->
      <header>
        <span><img src="../assets/1.png" alt="" class="img" /></span>
        <div class="todo">To-DoList</div>
      </header>
      <div class="text">~Today I need to ~</div>
      <!-- 输入框 -->
      <div class="sub">
        <input
          type="text"
          class="txt"
          placeholder="Add new todo..."
          v-model="value"
          @keyup.enter="addlist"
        />
        <!-- 添加按钮 -->
        <div class="zhe">
          <button class="btn" @click="add">Submit</button>
        </div>
      </div>
      <!-- 未选中列表 -->
      <ul v-show="flag == 1 || flag == 2">
        <li class="top1" v-for="(item, i) in list" :key="item.id">
          <div class="top">
            <input
              type="checkbox"
              class="ch"
              @change="checks(i)"
              v-model="item.check"
            />
            <p>{{ item.value }}</p>
          </div>
          <p @click="del(i)">x</p>
        </li>
      </ul>
      <!--已选中列表 -->
      <ol v-show="flag == 1 || flag == 3">
        <li class="bottom" v-for="(item, i) in list1" :key="item.id">
          <div class="top">
            <p>
              <img
                src="../assets/duigou.png"
                alt=""
                class="dui"
                @click="aaa(i)"
              />
            </p>
            <p class="font">{{ item.value }}</p>
          </div>
          <p @click="del1(i)">x</p>
        </li>
      </ol>
      <!-- 底部切换栏 -->
      <div class="footer" v-if="list.length == '' && list1.length == ''">
        <img src="../assets/2.png" alt="" />
       <span :style="{color:'#b7b8b8'}"> Congrat,you have no more tasks to do</span>
      </div>
      <footer v-else>
        <div><span>{{list.length}}</span> item left</div>
        <!-- 判断状态是否为1,是就有选中样式,否则为空 -->
        <div @click="flag = 1" :class="flag == 1 ? 'active' : ''">All</div>
        <!-- 判断状态是否为2,是就有选中样式,否则为空 -->
        <div @click="flag = 2" :class="flag == 2 ? 'active' : ''">Active</div>
        <!-- 判断状态是否为3,是就有选中样式,否则为空 -->
        <div @click="flag = 3" :class="flag == 3 ? 'active' : ''">
          Completed
        </div>
        <!-- 判断状态是否为4,是就有选中样式,否则为空 -->
        <div @click="clear" :class="flag == 4 ? 'active' : ''">
          Clear completed
        </div>
      </footer>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: 1,
      value: "",
      list: [],
      list1: [],
    };
  },
  methods: {
    // 添加
    add() {
      let obj = {
        id: new Date().getTime(),
        value: this.value,
        check: false,
      };
      if(this.value==''){
        return false
      }else {
         this.list.push(obj);
      }
     
      // input框清空
      this.value = "";
      console.log(this.list);
    },
    // 点击将未选中的状态转为已选中的状态，再将点击的未选中的从未选中列表中删除
    checks(i) {
      this.list1.push(this.list[i]);
      this.list.splice(i, 1);
    },
    // 点击将已选中的状态转为未选中的状态，再将点击的已选中的从已选中列表中删除
    aaa(i) {
      this.list1[i].check = false;
      this.list.push(this.list1[i]);
      this.list1.splice(i, 1);
    },
     // 点击删除,从未选列表里面删除点击的那个
    del(i){
      this.list.splice(i, 1);
    },
    // 点击删除,从已选列表里面删除点击的那个
    del1(i){
      this.list1.splice(i, 1);
    },
    // 点击清空已选按钮,将已选的数组变为空
    clear(){
      this.flag = 4
      this.list1.length=[]
    },
    addlist(){
        let obj = {
        id: new Date().getTime(),
        value: this.value,
        check: false,
      };
      if(this.value==''){
        return false
      }else {
         this.list.push(obj);
      }
     
      // input框清空
      this.value = "";
    }
   
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
@import url(https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,700,300);
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 20px;
  width: 360px;
}
footer div:nth-child(2):hover {
  background-color: #fe7345;
  color: #fff;
  border-radius: 3px;
  padding: 3px;
  box-sizing: border-box;
}
footer div:nth-child(3):hover {
  background-color: #fe7345;
  color: #fff;
  border-radius: 3px;
  padding: 3px;
  box-sizing: border-box;
}
footer div:nth-child(4):hover {
  background-color: #fe7345;
  color: #fff;
  border-radius: 3px;
  padding: 3px;
  box-sizing: border-box;
}
footer div:nth-child(5):hover {
  background-color: #fe7345;
  color: #fff;
  border-radius: 3px;
  padding: 3px;
  box-sizing: border-box;
}
.img {
  width: 80px;
  height: 60px;
}
.todo {
  transform: rotate(3deg);
  font-size: 16px;
  padding: 0.25em 0.8em 0.15em;
  border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;
  color: #fff;
  background: #fe7345;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-left: 10px;
}
footer {
  display: flex;
  height: 18px;
  justify-content: space-between;
  position: absolute;
  bottom: 20px;
  width: 360px;
  font-size: 12px;
}
.active {
  background-color: #fe7345;
  color: #fff;
  border-radius: 3px;
  padding:3px;
  box-sizing: border-box;
}
.ch {
  margin-right: 10px;
}
.top1,
.bottom {
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 10px;
  font-size: 12px;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dui {
  width: 18px;
  height: 18px;
  margin-right: 8px;
}
.bottom {
  background-color: #fe7345;
  color: #fff;
  border-radius: 3px;
}
.font {
  color: #fff;
  text-decoration: line-through #fff;
}
.home {
  height: 100%;
  background-image: linear-gradient(90deg, #ffafbd, #ffc3a0);
  z-index: 1;
  display: flex;
  align-items: center;
  font-family: "Yanone Kaffeesatz", sans-serif !important; 
  justify-content: center;
}
.content {
  width: 440px;
  background-color: #f2f2f2;
  height: 500px;
  border-radius: 15px;
  padding: 30px 40px 20px;
  position: relative;
}
header {
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text {
  text-align: center;
  height: 33px;
  margin: 0 0 18px;
  font-size: 22px;
}
.txt {
  width: 245px;
  height: 30px;
  border: 0;
  border-bottom: 3px dashed #fe7345;
  background-color: #f2f2f2;
  outline: 0;
  font-size: 12px;
}
.sub {
  height: 32px;
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
}
.btn {
  width: 70px;
  border-radius: 3px;
  transform-origin: top;
  background-color: #fff;
  border-radius: 3px;
  padding: 5px 10px;
  position: absolute;
  left: 0;
  top: -3px;
}
.zhe {
  width: 71px;
  height: 100%;
  transform: rotate(3deg);
  background-image: url(data:image/png;base64,R0lGODlhBAAEAIABAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjEgNjQuMTQwOTQ5LCAyMDEwLzEyLzA3LTEwOjU3OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NUY1OENCRDdDMDYxMUUyOTEzMEE1MEM5QzM0NDVBMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NUY1OENCRTdDMDYxMUUyOTEzMEE1MEM5QzM0NDVBMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk1RjU4Q0JCN0MwNjExRTI5MTMwQTUwQzlDMzQ0NUEzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk1RjU4Q0JDN0MwNjExRTI5MTMwQTUwQzlDMzQ0NUEzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAAQAsAAAAAAQABAAAAgYEEpdoeQUAOw==);
  background-color: #fe7345;
  border: 1px solid #494a4b;
  border-radius: 3px;
  position: relative;
}
</style>
