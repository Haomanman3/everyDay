<template>
  <div>
    <div class="top">
      <p>数据统计</p>
      <div>
        <el-tag type="warning"><span>当日数据：</span></el-tag>
        <el-tag type="info"><span>6</span>新增用户</el-tag>
        <el-tag type="info"><span>3</span>新增订单</el-tag>
        <el-tag type="info"><span>17</span>新增管理员</el-tag>
      </div>
      <div>
        <el-tag><span>总数据：</span></el-tag>
        <el-tag type="info"><span>20</span>注册用户</el-tag>
        <el-tag type="info"><span>20</span>订单</el-tag>
        <el-tag type="info"><span>20</span>管理员</el-tag>
      </div>
    </div>
    <div>
      <div id="main"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";

function dateToString(date) {
  //date为日期
  var year = date.getFullYear(); //定义年
  var month = (date.getMonth() + 1).toString(); //定义月
  var day = date.getDate().toString(); //定义日
  if (month.length == 1) {
    month = "0" + month;
  }
  if (day.length == 1) {
    day = "0" + day;
  }
  var dateTime = year + "-" + month + "-" + day;
  return dateTime;
}
//获取前几天的日期
function getBeforeDate(n) {
  //n为你要传入的参数，当前为0，前一天为-1，后一天为1
  var date = new Date();
  date.setDate(date.getDate() + n);
  return date;
}

export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {
    var chartDom = document.getElementById("main");
    var myChart = echarts.init(chartDom);
    var option;
    option = {
      title: {
        text: "走势图",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["新增订单", "新注册用户", "新增管理员"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: (function () {
          var date = new Date();
          var res = [];
          var len = 6; //7天的数据
          while (len >= 1) {
            date = getBeforeDate(-len);
            res.push(dateToString(date));
            len--;
          }
          res.push(dateToString(new Date()));
          return res;
        })(),
      },

      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "新增订单",
          type: "line",
          stack: "Total",
          data: [5, 8, 6, 2, 5, 4, 0],
        },
        {
          name: "新注册用户",
          type: "line",
          stack: "Total",
          data: [13, 29, 17, 8, 11, 8, 0],
        },
        {
          name: "新增管理员",
          type: "line",
          stack: "Total",
          data: [47, 85, 68, 60, 30, 39, 4],
        },
      ],
    };

    option && myChart.setOption(option);
  },
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
#main {
  width: 1000px;
  height: 600px;
}
.top {
  text-align: center;
  div {
    margin: 20px 0;
    .el-tag {
      margin: 10px;
      span{
        font-size: 25px;
      }
    }
  }
}
</style>
