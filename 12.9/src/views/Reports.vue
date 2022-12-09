<template>
  <div>
    <el-card class="box-card">
      <div>
        <div id="main"></div>
      </div>
    </el-card>
  </div>
</template>

<script>
import * as echarts from "echarts"
export default {
  data() {
    return {}
  },
  methods: {
    //获取日期的字符串格式
    //  dateToString(date){//date为日期
    //     var year = date.getFullYear(); //定义年
    //     var month =(date.getMonth() + 1).toString(); //定义月
    //     var day = (date.getDate()).toString(); //定义日
    //     if (month.length == 1) {
    //         month = "0" + month;
    //     }
    //     if (day.length == 1) {
    //         day = "0" + day;
    //     }
    //     var dateTime = year + "-" + month + "-" + day;
    //     return dateTime;
    // },
    // //获取前几天的日期
    // getBeforeDate(n){//n为你要传入的参数，当前为0，前一天为-1，后一天为1
    //     var date = new Date() ;
    //     date.setDate(date.getDate()+n);
    //     return date ;
    // }
  },
  created() {},
  mounted() {
    var chartDom = document.getElementById("main")
    var myChart = echarts.init(chartDom)
    var option

    option = {
      title: {
        text: "用户来源"
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985"
          }
        }
      },
      legend: {
        data: ["华东", "华南", "华北", "西部", "其他"]
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          //设置坐标轴字体颜色和宽度
          axisLine: {
            lineStyle: {
              color: "#18FBFF",
              width: 3
            }
          },
          boundaryGap: true,
          // data: (function () {
          //   var date = new Date()
          //   var res = []
          //   var len = 6 //7天的数据
          //   while (len >= 1) {
          //     date = getBeforeDate(-len)
          //     res.push(dateToString(date))
          //     len--
          //   }
          //   res.push(dateToString(new Date()))
          //   return res
          // })()
        }
      ],
      yAxis: [
        {
          type: "value"
        }
      ],
      series: [
        {
          name: "华东",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series"
          },
          data: [2999, 3111, 4100, 3565, 3528, 6000]
        },
        {
          name: "华南",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series"
          },
          data: [5090, 2500, 3400, 6000, 6400, 7800]
        },
        {
          name: "华北",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series"
          },
          data: [6888, 4000, 8010, 12321, 13928, 12984]
        },
        {
          name: "西部",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series"
          },
          data: [9991, 4130, 7777, 12903, 13098, 14028]
        },
        {
          name: "其他",
          type: "line",
          stack: "Total",
          label: {
            show: true,
            position: "top"
          },
          areaStyle: {},
          emphasis: {
            focus: "series"
          },
          data: [15212, 5800, 10241, 14821, 15982, 14091]
        }
      ]
    }

    option && myChart.setOption(option)
  },
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
#main {
  width: 1000px;
  height: 500px;
}
</style>
