<template>
  <div>
    <!-- 首页 -->
    <el-card class="box-card">
      <div class="top">
        <div>
          <img src="../../assets/logo.png" alt="" class="img" />
        </div>
        <div>
          <p>早安,1,祝你开心每一天!</p>
          <p>1 | 传智播客 - 总裁办</p>
        </div>
      </div></el-card
    >
    <div class="content">
      <div class="left">
        <el-card class="box-card1">
          <el-calendar v-model="value"></el-calendar>
        </el-card>
        <el-card class="box-card3">
          <h3>公告</h3>
          <el-divider></el-divider>
          <div class="font">
            <img src="../../assets/4.png" alt="" />
            <div>
              <p>
                <span>朱继柳 </span>发布了第1期"传智大讲堂”互动讨论获奖名单公布
              </p>
              <p>2018-07-21 15:21:38</p>
            </div>
          </div>
          <el-divider></el-divider>
          <div class="font">
            <img src="../../assets/4.png" alt="" />
            <div>
              <p>
                <span>朱继柳 </span>发布了第1期"传智大讲堂”互动讨论获奖名单公布
              </p>
              <p>2018-07-21 15:21:38</p>
            </div>
          </div>
          <el-divider></el-divider>
          <div class="font">
            <img src="../../assets/4.png" alt="" />
            <div>
              <p>
                <span>朱继柳 </span>发布了第1期"传智大讲堂”互动讨论获奖名单公布
              </p>
              <p>2018-07-21 15:21:38</p>
            </div>
          </div>
          <el-divider></el-divider>
        </el-card>
      </div>
      <div class="right">
        <el-card>
          <div class="title">
            <h3>流程申请</h3>
          </div>
          <el-button>加班离职</el-button>
          <el-button>请假调休</el-button>
          <el-button>审批按钮</el-button>
          <el-button>我的信息</el-button>
        </el-card>
        <el-card class="card">
          <div>
            <div id="main"></div>
          </div>
        </el-card>
        <el-card>
          <div class="title">
            <h3>帮助链接</h3>
          </div>
          <div class="footer">
            <div>
              <div>
                <img src="../../assets/1.png" alt="" />
              </div>
              <span>入门指南</span>
            </div>
            <div>
              <div>
                <img src="../../assets/2.png" alt="" />
              </div>
              <span>在线帮助手册</span>
            </div>
            <div>
              <div>
                <img src="../../assets/3.png" alt="" />
              </div>
              <span>联系技术支持</span>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts"
export default {
  components: {},
  computed: {},
  data() {
    return {
      value: new Date()
    }
  },
  created() {},
  methods: {},
  mounted() {
    var chartDom = document.getElementById("main")
    var myChart = echarts.init(chartDom)
    var option

    option = {
      title: {
        text: "个人工作绩效表"
      },
      radar: {
        indicator: [
          { name: "考勤", max: 6500 },
          { name: "工资", max: 16000 },
          { name: "代码质量", max: 30000 },
          { name: "工作积极性", max: 38000 },
          { name: "加班时长", max: 52000 },
          { name: "bug数量", max: 25000 }
        ]
      },
      series: [
        {
          name: "Budget vs spending",
          type: "radar",
          data: [
            {
              value: [4200, 3000, 20000, 14000, 28000, 26000],
              name: "Allocated Budget"
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: "Actual Spending"
            }
          ]
        }
      ]
    }

    option && myChart.setOption(option)
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.font {
  display: flex;
  span {
    color: #8a97f8;
  }
  img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }
  p {
    margin-bottom: 15px;
  }
}
.card {
  margin: 10px 0;
}
#main {
  width: 100%;
  height: 500px;
}
.top {
  display: flex;
  height: 80px;
  align-items: center;
}
.img {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin: 20px;
}
.box-card {
  margin: 10px;
}
.box-card1 {
  width: 100%;
  height: 550px;
}
.box-card3 {
  margin: 10px 0;
}
.el-calendar {
  height: 30px;
}
.content {
  display: flex;
  .left {
    width: 49%;
    margin: 10px;
  }
  .right {
    width: 49%;
    margin: 10px;
  }
}
.title {
  width: 80px;
  height: 40px;
  border-bottom: 3px solid #8a97f8;
  margin: 20px 0;
}
.footer {
  display: flex;
  justify-content: space-around;
  text-align: center;
  img {
    width: 80px;
    height: 80px;
    margin: 10px 0;
  }
}
</style>
