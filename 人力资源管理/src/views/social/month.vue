<template>
  <div>
    <!-- 月份 -->
    <el-card class="box-card">
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="社保报表" name="first"></el-tab-pane>
      </el-tabs>
			 <div class="flex1">
				 <div class="flex">
          <div class="flex">
            <div class="one"></div>
            <span>已离职</span>
          </div>
          <div class="flex">
            <div class="two"></div>
            <span>再入职</span>
          </div>
          <div class="flex">
            <div class="three"></div>
            <span>公司合计</span>
          </div>
          <div class="flex">
            <div class="four"></div>
            <span>一级部门</span>
          </div>
          <div class="flex">
            <div class="five"></div>
            <span>二级部门</span>
          </div>
        </div>
				<div>
					<el-button type="primary">导出</el-button>
				</div>
			 </div>
      <el-table :data="$store.state.social.monLists" style="width: 100%" border>
        <el-table-column type="index" label="序号" width="180px" />
        <el-table-column prop="username" label="姓名" width="180px" />
        <el-table-column prop="timeOfEntry" label="入职时间" width="180px" />
        <el-table-column prop="mobile" label="手机号" width="180px" />
        <el-table-column prop="idNumber" label="身份证号码" width="180px" />
        <el-table-column
          prop="theHighestDegreeOfEducation"
          label="学历"
          width="180px"
        />
        <el-table-column prop="address" label="开户行" width="180px" />
        <el-table-column
          prop="firstLevelDepartment"
          label="一级部门"
          width="180px"
        />
        <el-table-column prop="address" label="二级部门" width="180px" />
        <el-table-column prop="address" label="工作城市" width="180px" />
        <el-table-column
          prop="socialSecurityComputerNumber"
          label="社保电脑号"
          width="180px"
        />
        <el-table-column prop="address" label="公积金账号" width="180px" />
        <el-table-column prop="address" label="离职时间" width="180px" />
        <el-table-column prop="address" label="户籍类型" width="180px" />
        <el-table-column
          prop="participatingInTheCity"
          label="参保城市"
          width="180px"
        />
        <el-table-column
          prop="socialSecurityMonth"
          label="社保月份"
          width="180px"
        />
        <el-table-column
          prop="socialSecurityBase"
          label="社保基数"
          width="180px"
        />
        <el-table-column prop="socialSecurity" label="社保合计" width="180px" />
        <el-table-column
          prop="socialSecurityEnterprise"
          label="社保企业"
          width="180px"
        />
        <el-table-column
          prop="socialSecurityIndividual"
          label="社保个人"
          width="180px"
        />
        <el-table-column
          prop="providentFundCity"
          label="公积金城市"
          width="180px"
        />
        <el-table-column
          prop="providentFundMonth"
          label="公积金月份"
          width="180px"
        />
        <el-table-column
          prop="providentFundBase"
          label="公积金基数"
          width="180px"
        />
        <el-table-column
          prop="accumulationFundEnterpriseBase"
          label="公积金企业基数"
          width="180px"
        />
        <el-table-column
          prop="personalRatioOfProvidentFund"
          label="公积金企业比例"
          width="180px"
        />
        <el-table-column
          prop="individualBaseOfProvidentFund"
          label="公积金个人基数"
          width="180px"
        />
        <el-table-column
          prop="individualBaseOfProvidentFund"
          label="公积金个人比例"
          width="180px"
        />
        <el-table-column
          prop="totalProvidentFund"
          label="公积金合计"
          width="180px"
        />
        <el-table-column
          prop="providentFundEnterprises"
          label="公积金企业"
          width="180px"
        />
        <el-table-column
          prop="providentFundIndividual"
          label="公积金个人"
          width="180px"
        />
        <el-table-column prop="address" label="养老企业基数" width="180px" />
        <el-table-column prop="address" label="养老企业比例" width="180px" />
        <el-table-column prop="address" label="养老企业" width="180px" />
        <el-table-column prop="address" label="养老个人基数" width="180px" />
        <el-table-column prop="address" label="养老个人比例" width="180px" />
        <el-table-column prop="address" label="养老个人" width="180px" />
        <el-table-column prop="address" label="失业企业基数" width="180px" />
        <el-table-column prop="address" label="失业企业比例" width="180px" />
        <el-table-column prop="address" label="失业企业" width="180px" />
        <el-table-column prop="address" label="失业个人基数" width="180px" />
        <el-table-column prop="address" label="失业企业比例" width="180px" />
        <el-table-column prop="address" label="失业个人" width="180px" />
        <el-table-column prop="address" label="医疗企业基数" width="180px" />
        <el-table-column prop="address" label="医疗企业比例" width="180px" />
        <el-table-column prop="address" label="医疗企业" width="180px" />
        <el-table-column prop="address" label="医疗个人基数" width="180px" />
        <el-table-column prop="address" label="医疗个人比例" width="180px" />
        <el-table-column prop="address" label="医疗个人" width="180px" />
        <el-table-column prop="address" label="工伤个人基数" width="180px" />
        <el-table-column prop="address" label="工伤企业比例" width="180px" />
        <el-table-column prop="address" label="工伤企业" width="180px" />
        <el-table-column prop="address" label="生育企业基数" width="180px" />
        <el-table-column prop="address" label="生育企业比例" width="180px" />
        <el-table-column prop="address" label="生育企业" width="180px" />
        <el-table-column prop="address" label="大病企业基数" width="180px" />
        <el-table-column prop="address" label="大病企业比例" width="180px" />
        <el-table-column prop="address" label="大病企业" width="180px" />
        <el-table-column prop="address" label="大病个人基数" width="180px" />
        <el-table-column prop="address" label="大病个人比例" width="180px" />
        <el-table-column prop="address" label="大病个人" width="180px" />
        <el-table-column
          prop="providentFundNotes"
          label="公积金备注"
          width="180px"
        />
        <el-table-column
          prop="socialSecurityNotes"
          label="社保备注"
          width="180px"
        />
      </el-table>

      <div class="footer">
        <el-button type="primary">归档01报表</el-button>
        <el-button type="primary">新建报表</el-button>
        <el-button>取消</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
// import { MonthList } from "@/api/social.js"
export default {
  components: {},
  computed: {},
  data() {
    return {
      activeName: 'first',
      tableData: [],
      params: {
        month: 202004,
        opType: 1
      }
    }
  },
  created() {
    this.months()
  },
  methods: {
    months() {
      this.$store.dispatch('social/monList', this.params)
    }
  },
  mounted() {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.footer {
  margin: 50px;
  text-align: center;
}
.one {
  width: 16px;
  height: 16px;
  background-color: #cfeffe;
  margin-right: 5px;
}
.two {
  width: 16px;
  height: 16px;
  background-color: #a8f8bb;
  margin-right: 5px;
}
.three {
  width: 16px;
  height: 16px;
  background-color: #fedbd7;
  margin-right: 5px;
}
.four {
  width: 16px;
  height: 16px;
  background-color: #ffe8c9;
  margin-right: 5px;
}
.five {
  width: 16px;
  height: 16px;
  background-color: #fdfcd5;
  margin-right: 5px;
}
.flex {
  display: flex;
  align-items: center;
  margin: 5px 10px;
}
.flex1 {
  display: flex;
  align-items: center;
  margin: 5px 10px;
	justify-content: space-between;
}
</style>
