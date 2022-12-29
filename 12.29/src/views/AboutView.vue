<template>
  <div class="about">
    <h2>H2201B点名表</h2>
    <p>
      <span>时间：</span><span>{{ time }}</span>
    </p>
    <div class="con">
      <div class="left">
        <div v-for="item in list" :key="item" class="item">{{ item.name }}</div>
      </div>
      <div class="center">
        <span>天选之人：</span> <span>{{ name }} {{names}}</span>
      </div>
      <div class="footer">
        <div @click="boy">男生点名</div>
        <div @click="girl">女生点名</div>
        <div @click="double">双人点名</div>
        <div @click="solo">单人点名</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs,onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
export default {
  setup(props, ctx) {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const data = reactive({
      list: [
        {
          name: "李妍",
          sex: 0,
        },
        {
          name: "张世权",
          sex: 1,
        },
        {
          name: "王龙翔",
          sex: 1,
        },
        {
          name: "徐婉颖",
          sex: 0,
        },
        {
          name: "付高聪",
          sex: 1,
        },
        {
          name: "吴倩",
          sex: 0,
        },
        {
          name: "张立",
          sex: 1,
        },
        {
          name: "巴钦",
          sex: 1,
        },
        {
          name: "章奥博",
          sex: 1,
        },
        {
          name: "孙铭",
          sex: 1,
        },
        {
          name: "程怀博",
          sex: 1,
        },
        {
          name: "张建雨",
          sex: 1,
        },
        {
          name: "王伟宸",
          sex: 1,
        },
        {
          name: "李宏恩",
          sex: 1,
        },
        {
          name: "孙旭瑶",
          sex: 0,
        },
        {
          name: "杨志豪",
          sex: 1,
        },
        {
          name: "高鹏亚",
          sex: 1,
        },
        {
          name: "宋海宇",
          sex: 1,
        },
        {
          name: "宋增杰",
          sex: 1,
        },
        {
          name: "侯建荞",
          sex: 0,
        },
        {
          name: "薛翔元",
          sex: 1,
        },
        {
          name: "郝嫚嫚",
          sex: 0,
        },
        {
          name: "代伊涵",
          sex: 1,
        },
        {
          name: "邓林柯",
          sex: 1,
        },
        {
          name: "章涵语",
          sex: 1,
        },
        {
          name: "郑锋",
          sex: 1,
        },
        {
          name: "江萌洋",
          sex: 0,
        },
        {
          name: "张宗耀",
          sex: 1,
        },
        {
          name: "周璇",
          sex: 0,
        },
        {
          name: "刘艺",
          sex: 0,
        },
        {
          name: "韩雨泽",
          sex: 1,
        },
      ],
      flag: 0,
      timer: null,
      name: "",
      time: "",
      times: null,
      names: "",
    });
    onMounted(() => {
      NowTime();
      data.timer = setInterval(() => {
        NowTime();
      }, 1000);
    });

    const NowTime = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month =
        now.getMonth() >= 9 ? now.getMonth() + 1 : `0${now.getMonth() + 1}`;
      const date = now.getDate() >= 10 ? now.getDate() : `0${now.getDate()}`;
      const hour = now.getHours() >= 10 ? now.getHours() : `0${now.getHours()}`;
      const minutes =
        now.getMinutes() >= 10 ? now.getMinutes() : `0${now.getMinutes()}`;
      const seconds =
        now.getSeconds() >= 10 ? now.getSeconds() : `0${now.getSeconds()}`;
      data.timer = `${year}年${month}月${date}日 ${hour}:${minutes}:${seconds}`;
    };

    const boy = () => {
      var boys =data.list.filter((item)=>item.sex==1)
      if (data.flag == 0) {
					clearInterval(data.times);
					data.times = setInterval(() => {
						var times = Math.round(Math.random() * boys.length);
						if (boys[times]) {
							data.name = boys[times].name;
						}
					}, 50);
					data.flag = 1;
				} else {
					clearInterval(data.times);
					data.flag = 0;
				}
    };
    const girl = () => {
      var girls =data.list.filter((item)=>item.sex==0)
      if (data.flag == 0) {
					clearInterval(data.times);
					data.times = setInterval(() => {
						var times = Math.round(Math.random() * girls.length);
						if (girls[times]) {
							data.name = girls[times].name;
						}
					}, 50);
					data.flag = 1;
				} else {
					clearInterval(data.times);
					data.flag = 0;
				}
       
    };

const double=()=>{
  if(data.flag==0){
        clearInterval(data.times)
        data.times=setInterval(()=>{
          var times=Math.round(Math.random()*data.list.length)
          var times1=Math.round(Math.random()*data.list.length)
         if(data.list[times]){
           data.name=data.list[times].name
           data.names=data.list[times1].name
         }
        },30)
        data.flag=1
      }else {
        clearInterval(data.times)
        data.flag = 0
      }
}

    const solo=()=>{
      if(data.flag==0){
        clearInterval(data.times)
        data.times=setInterval(()=>{
          var times=Math.round(Math.random()*data.list.length)
          data.name=data.list[times].name
        },30)
        data.flag=1
      }else {
        clearInterval(data.times)
        data.flag = 0
      }
    }
    return { ...toRefs(data), NowTime, boy, girl, double ,solo };
  },
};
</script>

<style lang="scss" scoped>
.con {
  margin: 100px 0;
}
.center {
  width: 100%;
  height: 30px;
  text-align: center;
  position: fixed;
  bottom: 350px;
  display: flex;
  justify-content: center;
  span {
    font-size: 20px;
  }
}
.about {
  width: 100%;
  height: 100%;
  position: fixed;
  color: #fff;
  background-image: url(../assets/1.gif);
  img {
    width: 100%;
    height: 100%;
  }
}
p {
  text-align: right;
}
h2 {
  text-align: center;
  margin-top: 10px;
}
.item {
  width: 50px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  flex: 20%;
}
.left {
  display: flex;
  flex-wrap: wrap;
}
.footer {
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 50px;
  div {
    width: 150px;
    height: 40px;
    margin: 50px;
    background-color: dodgerblue;
    color: #fff;
    text-align: center;
    line-height: 40px;
    border-radius: 25px;
  }
}
</style>
