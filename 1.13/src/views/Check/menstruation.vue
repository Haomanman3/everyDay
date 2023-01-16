<template>
  <div>
    <el-card class="box-card">
      <h4>202303月人事报表</h4>
      <el-tabs v-model="activeName">
        <el-tab-pane label="考勤统计" name="first">
          <div class="btn">
            <el-button type="primary">导出</el-button>
          </div>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="name" label="姓名" width="150">
            </el-table-column>
            <el-table-column prop="workNumber" label="工号" width="120">
            </el-table-column>
            <el-table-column prop="mobile" label="手机号" width="120">
            </el-table-column>
            <el-table-column prop="department" label="部门" width="120">
            </el-table-column>
            <el-table-column prop="dayOffLeaveDays" label="事假" width="120">
            </el-table-column>
            <el-table-column
              prop="actualAtteOfficialDays"
              label="调休"
              width="120"
            >
            </el-table-column>
            <el-table-column prop="normalDays" label="正常" width="120">
            </el-table-column>
            <el-table-column prop="absenceDays" label="迟到次数" width="120">
            </el-table-column>
            <el-table-column prop="earlyTimes" label="早退次数" width="120">
            </el-table-column>
            <el-table-column prop="address" label="日均时长" width="120">
            </el-table-column>
            <el-table-column prop="leaveDays" label="旷工天数" width="120">
            </el-table-column>
            <el-table-column prop="address" label="是否全勤" width="120">
            </el-table-column>
            <el-table-column prop="address" label="实际出勤天数" width="120">
            </el-table-column>
            <el-table-column prop="address" label="应出勤工作日" width="120">
            </el-table-column>
            <el-table-column prop="address" label="计薪标准" width="120">
            </el-table-column>
            <el-table-column prop="address" label="计薪天数" width="120">
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="pagesize"
        layout="total, prev, pager, next"
        :total="total"
      >
      </el-pagination>
      <div class="footer">
        <el-button type="primary">归档202303月份报表</el-button>
        <el-button type="primary">新建报表</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import { checkMenus } from "@/api/check.js"
export default {
  components: {},
  computed: {},
  data() {
    return {
      activeName: "first",
      tableData: [],
      currentPage: "",
      total: 0,
      pagesize: 1
    }
  },
  created() {
    checkMenus().then((res) => {
      console.log(res)
      this.tableData = res.data.data
      this.total = res.data.total
    })
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  },
  mounted() {},
  watch: {}
}
</script>

<style lang="scss" scoped>
h4 {
  text-align: center;
  margin-top: 10px;
}
.btn {
  text-align: right;
  margin-right: 10px;
}
.box-card {
  margin: 10px;
}
.footer {
  text-align: center;
}
</style>
