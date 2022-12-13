<template>
  <div>
    <el-card class="box-card">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column type="index" label="#"> </el-table-column>
        <el-table-column prop="authName" label="权限名称"> </el-table-column>
        <el-table-column prop="path" label="路径"> </el-table-column>
        <el-table-column prop="level" label="权限等级">
          <template slot-scope="scope">
            <el-tag v-show="scope.row.level == 0"> 一级 </el-tag>
            <el-tag v-show="scope.row.level == 1" type="success"> 二级 </el-tag>
            <el-tag v-show="scope.row.level == 2" type="warning"> 三级 </el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { rightAllo } from "@/api/user.js"
export default {
  data() {
    return {
      tableData: []
    }
  },
  methods: {},
  created() {
    rightAllo().then((res) => {
      console.log(res)
      this.tableData = res.data.data
    })
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
