<template>
  <div>
    <!-- 审批 -->
    <el-card class="box-card">
      <div class="top">
        <div>
          <el-alert
            title="当前审批中 0 本月审批通过 1 本月审批驳回 0"
            type="info"
            show-icon
            :closable="false"
          >
          </el-alert>
        </div>
        <div>
          <el-button type="primary" @click="set">流程设置</el-button>
        </div>
      </div></el-card
    >
    <el-card class="box-card">
      <el-table
        ref="multipleTable"
        :data="$store.state.rove.roveList"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column type="index" label="序号"> </el-table-column>
        <el-table-column prop="processName" label="审批类型" sortable>
        </el-table-column>
        <el-table-column prop="username" label="申请人" sortable>
        </el-table-column>
        <el-table-column
          prop="procCurrNodeUserName"
          label="当前申批人"
          sortable
        >
        </el-table-column>
        <el-table-column prop="timeOfEntry" label="审批发起时间" sortable>
          <template slot-scope="scope">
            {{ scope.row.timeOfEntry | times }}
          </template>
        </el-table-column>
        <el-table-column prop="processState" label="审批状态" sortable>
          <template slot-scope="scope">
            {{
              scope.row.processState == 2
                ? "审批通过"
                : scope.row.processState == 4
                ? "撤销"
                : "审批中"
            }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="examine">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination layout="prev, pager, next" :total="total"> </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {},
  data() {
    return {
      total: 0,
      processState: 0
    }
  },
  created() {
    this.lists()
  },
  filters: {
    times(val) {
      var now = new Date(val)
      var y = now.getFullYear()
      var m = (now.getMonth() + 1).toString().padStart(2, "0")
      var d = now.getDate().toString().padStart(2, "0")
      // 过滤器中要有返回值
      return `${y}-${m}-${d}`
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    lists() {
     this.$store.dispatch("rove/roves")
    },
    examine() {
      this.$router.push("/about/leave")
    },
    set() {
      this.$router.push("/about/appSet")
    }
  },
  mounted() {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.el-alert {
  background-color: #e6f7ff;
  border: 1px solid #a3dcff;
}
.box-card {
  margin: 10px;
}
.top {
  display: flex;
  justify-content: space-between;
}
</style>
