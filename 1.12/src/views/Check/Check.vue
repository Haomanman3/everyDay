<template>
  <div>
    <!-- 考勤 -->
    <el-card class="box-card">
      <div class="top">
        <div>
          <el-alert
            title="有0条考勤审批尚未处理"
            type="info"
            show-icon
            :closable="false"
          >
          </el-alert>
        </div>
        <div>
          <el-button type="danger" @click="lead">导入</el-button>
          <el-button type="warning">提醒</el-button>
          <el-button type="primary">设置</el-button>
          <el-button @click="pigeonhole">历史归档</el-button>
          <el-button type="primary" @click="statement">202303报表</el-button>
        </div>
      </div></el-card
    >
    <el-card class="box-card">
      <div class="department">
        <div class="dep">部门：</div>
        <div>
          <el-checkbox-group v-model="checkList">
            <el-checkbox
              :label="item.name"
              v-for="item in list"
              :key="item.id"
            ></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="department">
        <div class="dep">考勤状态：</div>
        <div>
          <el-radio-group v-model="radio">
            <el-radio :label="1">正常</el-radio>
            <el-radio :label="2">旷工</el-radio>
            <el-radio :label="3">事假</el-radio>
            <el-radio :label="3">调休</el-radio>
            <el-radio :label="5">迟到</el-radio>
            <el-radio :label="6">早退</el-radio>
          </el-radio-group>
        </div>
      </div>
    </el-card>
    <el-card class="box-card">
      <el-table :data="tableData" style="width: 100%" height="350">
        <el-table-column type="index" label="序号" width="80" />
        <el-table-column prop="username" label="姓名" />
        <el-table-column prop="workNumber" label="工号" />
        <el-table-column prop="departmentName" label="部门" />
        <el-table-column prop="mobile" label="手机" />
        <el-table-column prop="adtStatu" label="3/1">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/2">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/3">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/4">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/5">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/6">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/7">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/8">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/9">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/10">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/11">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/12">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/13">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/14">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/15">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/16">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/17">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/18">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/19">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/20">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/21">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/22">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/23">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/24">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/25">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/26">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/27">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/28">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/29">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/30">旷工</el-table-column>
        <el-table-column prop="adtStatu" label="3/31">旷工</el-table-column>
      </el-table>
      <el-pagination layout="prev, pager, next" :total="total"> </el-pagination>
    </el-card>
  </div>
</template>

<script>
import { checkData, checkList } from "@/api/check.js"
export default {
  components: {},
  computed: {},
  data() {
    return {
      checkList: [],
      list: [],
      radio: [],
      tableData: [],
      total: 0
    }
  },
  created() {
    checkData().then((res) => {
      console.log(res)
      this.list = res.data.data.depts
    }),
      this.tableList()
  },
  methods: {
    tableList() {
      checkList().then((res) => {
        console.log(res)
        this.tableData = res.data.data.data.rows
        this.total = res.data.data.data.total
      })
    },
    pigeonhole() {
      this.$router.push("/checkHistory")
    },
    statement() {
      this.$router.push("/menstruation")
    },
    lead() {
      this.$router.push("/checkimg")
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
.department {
  display: flex;
  margin: 20px 0;
}
.el-alert {
  background-color: #e6f7ff;
  border: 1px solid #a3dcff;
}
.el-checkbox {
  margin: 10px;
}
.dep {
  width: 100px;
}
</style>
