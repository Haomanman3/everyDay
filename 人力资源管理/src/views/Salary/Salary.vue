<template>
  <div>
    <el-card class="box-card">
      <div class="top">
        <div>
          <el-alert
            title="本月0：入职0 离职0 调薪0 未定薪0"
            type="info"
            show-icon
            :closable="false"
          >
          </el-alert>
        </div>
        <div>
          <el-button type="danger" @click="set">设置</el-button>
          <el-button type="primary" @click="month">报表</el-button>
        </div>
      </div></el-card
    >
    <el-card class="box-card">
      <div class="department">
        <div>聘用形式:</div>
        <div>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="正式"></el-checkbox>
            <el-checkbox label="非正式"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="department">
        <div>员工状态:</div>
        <div>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="在职"></el-checkbox>
            <el-checkbox label="离职"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="department">
        <div class="dep">部门：</div>
        <div>
          <el-checkbox-group v-model="checkList">
            <el-checkbox
              v-for="item in $store.state.salary.comData"
              :key="item.id"
              :label="item.name"
            ></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
    </el-card>
    <el-card class="box-card">
      <el-table :data="$store.state.salary.salsList" style="width: 100%">
        <el-table-column type="index" label="序号"> </el-table-column>
        <el-table-column prop="username" label="姓名"> </el-table-column>
        <el-table-column prop="mobile" label="手机"> </el-table-column>
        <el-table-column prop="workNumber" label="工号"> </el-table-column>
        <el-table-column label="聘用形式"> 未知</el-table-column>
        <el-table-column prop="departmentName" label="部门"> </el-table-column>
        <el-table-column prop="timeOfEntry" label="入职时间">
          <template slot-scope="scope">{{
            scope.row.timeOfEntry | time
          }}</template>
        </el-table-column>
        <el-table-column prop="currentPostWage" label="工资基数">
        </el-table-column>
        <el-table-column label="通用方案">通用方案 </el-table-column>
        <el-table-column prop="inServiceStatus" label="操作">
          <template slot-scope="scope">
            {{ scope.row.inServiceStatus == 1 ? '调薪' : '定薪' }}
            <el-button type="text" @click="look"> 查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination layout="prev, pager, next" :total="params.total">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {},
  data() {
    return {
      checkList: [],
      chList: [],
      params: {
        approvalsStateChecks: [],
        approvalsTypeChecks: [],
        departmentChecks: [],
        page: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  filters: {
    time(val) {
      var now = new Date(val)
      var y = now.getFullYear()
      var m = (now.getMonth() + 1).toString().padStart(2, '0')
      var d = now.getDate().toString().padStart(2, '0')
      return `${y}-${m}-${d}`
    }
  },
  created() {
    this.lists()
    this.coms()
  },
  methods: {
    lists() {
      this.$store.dispatch('salary/salarys', this.params)
    },
    coms() {
      this.$store.dispatch('salary/comList')
    },
    set() {
      this.$router.push('/about/priceset')
    },
    month() {
      this.$router.push("/about/monthstate")
    },
    look() {
      this.$router.push('/about/details')
    }
  },
  mounted() {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.box-card {
  margin: 10px;
}
.top {
  display: flex;
  justify-content: space-between;
}
.el-alert {
  background-color: #e6f7ff;
  border: 1px solid #a3dcff;
}
.department {
  display: flex;
  margin: 20px 0;
}
.dep {
  width: 200px;
}
</style>
