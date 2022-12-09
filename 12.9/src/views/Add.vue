<template>
  <div>
    <el-card class="box-card">
      <el-alert title="添加商品提示" type="info" show-icon> </el-alert>
      <el-steps :space="200" :active="1" finish-status="success">
        <el-step title="j基本信息"></el-step>
        <el-step title="进行中"></el-step>
        <el-step title="步骤 3"></el-step>
        <el-step title="步骤 3"></el-step>
        <el-step title="步骤 3"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.el-alert {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
}
</style>
