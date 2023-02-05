<template>
  <div>
    <!-- 社保 -->
    <el-card class="box-card">
      <div class="top">
        <div>
          <el-alert
            title="本月： 社保在缴 公积金在缴 增员 减员 入职 离职"
            type="info"
            show-icon
            :closable="false"
          >
          </el-alert>
        </div>
        <div>
          <el-button type="danger" @click="history">历史归档</el-button>
          <el-button type="primary" @click="month">报表</el-button>
        </div>
      </div>
    </el-card>
    <el-card class="box-card">
      <div class="department">
        <div class="dep">部门：</div>
        <div>
          <el-checkbox-group v-model="checkList">
            <el-checkbox
              :label="item.name"
              v-for="item in $store.state.social.comData"
              :key="item.id"
            ></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="department">
        <div>社保城市</div>
        <div>
          <el-checkbox-group v-model="checkList">
            <el-checkbox v-for="item in $store.state.social.citys" :key="item.id" :label="item.name"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="department">
        <div>公积金城市</div>
        <div>
          <el-checkbox-group v-model="checkList1">
            <el-checkbox  v-for="item in $store.state.social.citys" :key="item.id" :label="item.name"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
    </el-card>
    <el-card class="box-card">
      <el-table :data="$store.state.social.soData" style="width: 100%" border>
        <el-table-column type="index" label="序号" width="80">
        </el-table-column>
        <el-table-column prop="username" label="姓名"> </el-table-column>
        <el-table-column prop="mobile" label="手机"> </el-table-column>
        <el-table-column prop="workNumber" label="工号"> </el-table-column>
        <el-table-column prop="departmentName" label="部门"> </el-table-column>
        <el-table-column prop="timeOfEntry" label="入职时间"> </el-table-column>
        <el-table-column prop="leaveTime" label="离职时间"> </el-table-column>
        <el-table-column prop="providentFundCity" label="社保城市">
        </el-table-column>
        <el-table-column prop="participatingInTheCity" label="公积金城市">
        </el-table-column>
        <el-table-column prop="socialSecurityBase" label="社保基数">
        </el-table-column>
        <el-table-column prop="providentFundBase" label="公积金基数">
        </el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="look(scope.$index)"
              >查看详情</el-button
            >
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
      checkList: [],
      checkList1: [],
      total: 0
    }
  },
  created() {
		this.socials()
		this.coms()
		this.citys()
  },
  methods: {
			socials(){
				this.$store.dispatch("social/soList")
			},
			coms() {
				this.$store.dispatch("social/comList")
			},
			citys() {
				this.$store.dispatch("social/cityList")
			},

    look() {
      this.$router.push("/about/detail")
    },
    history() {
      this.$router.push("/about/history")
    },
    month() {
      this.$router.push("/about/month")
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
}
.el-checkbox {
  margin: 10px;
}
.dep {
  width: 100px;
}
</style>
