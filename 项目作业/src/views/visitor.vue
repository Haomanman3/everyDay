<template>
  <div>
    <div>
      <div id="main"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
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
        text: "用户分布",
        subtext: "Fake Data",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "50%",
          data: [
            { value: 3048, name: "其他" },
            { value: 735, name: "北京" },
            { value: 520, name: "深圳" },
            { value: 484, name: "上海" },
            { value: 300, name: "杭州" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
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
#main{
  width: 1000px;
  height: 600px;
  
}
</style>
