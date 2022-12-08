<template>
  <div>
    <el-card class="box-card">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column type="index" label="#"> </el-table-column>
        <el-table-column prop="date" label="权限名称"> </el-table-column>
        <el-table-column prop="date" label="路径"> </el-table-column>
        <el-table-column prop="date" label="权限等级"> </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    }
  },
  methods: {},
  created() {
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
