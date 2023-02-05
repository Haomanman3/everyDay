<template>
  <div>
    <div class="right">
      <el-date-picker v-model="value1" type="date" placeholder="选择日期">
      </el-date-picker>
    </div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="员工历史归档" name="first"
        >该年份无归档报表</el-tab-pane
      >
    </el-tabs>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {},
  data() {
    return {
      activeName: "first"
    }
  },
  created() {},
  methods: {},
  mounted() {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.right {
  text-align: right;
}
</style>
