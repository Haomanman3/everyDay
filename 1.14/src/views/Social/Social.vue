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
              v-for="item in chList"
              :key="item.id"
            ></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="department">
        <div>社保城市</div>
        <div>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="北京"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="department">
        <div>公积金城市</div>
        <div>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="北京"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
    </el-card>
    <el-card class="box-card">
      <el-table :data="tableData" style="width: 100%" border>
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
import { SocialData, SocialList } from "@/api/social.js"
export default {
  components: {},
  computed: {},
  data() {
    return {
      checkList: [],
      chList: [],
      tableData: [],
      total: 0
    }
  },
  created() {
    this.socials()
    this.socialsList()
  },
  methods: {
    socials() {
      SocialData().then((res) => {
        // console.log(res)
        this.chList = res.data.data.depts
      })
    },
    socialsList() {
      SocialList().then((res) => {
        // console.log(res)
        this.tableData = res.data.data.rows
        this.total = res.data.data.total
      })
    },
    look() {
      this.$router.push("/detail")
    },
    history() {
      this.$router.push("/history")
    },
    month() {
      this.$router.push("/month")
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
