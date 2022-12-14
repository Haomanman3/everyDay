<template>
  <div>
    <el-card class="box-card">
      <el-input
        placeholder="请输入内容"
        v-model="params.query"
        class="input-with-select"
      >
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="search"
        ></el-button>
      </el-input>

      <el-table :data="tableData" stripe style="width: 100%" border>
        <el-table-column type="index" label="#"> </el-table-column>
        <el-table-column prop="order_number" label="订单编号">
        </el-table-column>
        <el-table-column prop="order_price" label="订单价格"> </el-table-column>
        <el-table-column prop="order_pay" label="是否付款">
          <template slot-scope="scope">
            <div>
              {{ scope.row.order_pay == 1 ? "已付款" : "未付款" }}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="is_send" label="是否发货"> </el-table-column>
        <el-table-column prop="create_time" label="下单时间">
          <template slot-scope="scope"
            >{{ scope.row.create_time | time }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click="edit(scope.row, scope.$index)"
            ></el-button>
            <el-button
              size="mini"
              type="success"
              icon="el-icon-location"
              @click="showgress"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[1, 5, 7, 10]"
        :page-size="this.params.pagesize"
        :pagenum="this.params.pagenum"
        layout="total, sizes, prev, pager, next, jumper"
        :total="this.total"
      >
      </el-pagination>
    </el-card>

    <!-- <el-dialog title="修改地址" :visible.sync="dialogFormVisible1">
      <el-form
        :model="ruleForm1"
        :rules="rules"
        ref="ruleForm1"
        label-width="100px"
      >
        <el-form-item label="省市区/县" prop="region">
          <el-cascader v-model="value" :options="options"></el-cascader>
        </el-form-item>
        <el-form-item label="详细地址" prop="address">
          <el-input v-model="ruleForm1.address"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="update">确定</el-button>
          <el-button @click="dialogFormVisible1 = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog> -->
    <el-timeline :reverse="reverse">
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :timestamp="activity.timestamp"
      >
        {{ activity.content }}
      </el-timeline-item>
    </el-timeline>
    <kd ref="kuaidi" />
    <edits ref="editShow" />
  </div>
</template>

<script>
import { orderAllo } from "@/api/user.js"

import kd from "./kd.vue"
import edits from "./Edit1.vue"
export default {
  data() {
    return {
      tableData: [],
      table: [],
      activities: [],
      reverse: true,
      progressVisible: false,
      // progressInfo: "",
      // options: regionData,
      params: {
        query: "",
        pagenum: 1,
        pagesize: 1
      },
      total: 0,
      dialogFormVisible1: false,
      i: -1,
      ruleForm1: {
        regionData: "",
        address: ""
      },
      rules: {
        region: [{ required: true, message: "请选择", trigger: "blur" }],
        address: [
          { required: true, message: "请输入详细地址", trigger: "blur" }
        ]
      }
    }
  },
  filters: {
    time(val) {
      let time = new Date(val)
      let year = time.getFullYear()
      let month = time.getMonth() + 1
      let day = time.getDate()
      day = day < 10 ? "0" + day : day
      let hour = time.getHours()
      hour = hour < 10 ? "0" + hour : hour
      let minute = time.getMinutes()
      minute = minute < 10 ? "0" + minute : minute
      let second = time.getSeconds()

      return (
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hour +
        ":" +
        minute +
        ":" +
        second
      )
    }
  },
  methods: {
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`)
      this.params.pagesize = val
      this.pages()
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
      this.params.pagenum = val
      this.pages()
    },
    pages() {
      this.tableData = this.table.slice(
        (this.params.pagenum - 1) * this.params.pagesize,
        this.params.pagenum * this.params.pagesize
      )
    },
    search() {
      this.tableData = this.table.filter((item) => {
        return item.username.includes(this.params.query)
      })
    },
    edit(row, index) {
      // this.dialogFormVisible1 = true
      // this.ruleForm1.username = row.username
      // this.ruleForm1.email = row.email
      // this.ruleForm1.mobile = row.mobile
      // this.i = index
      this.$refs.editShow.show1()
    },

    update() {
      this.tableData[this.i].email = this.ruleForm1.email
      this.tableData[this.i].mobile = this.ruleForm1.mobile
      this.dialogFormVisible1 = false
    },
    ordLists(params) {
      orderAllo(params).then((res) => {
        // console.log(res)
        this.tableData = res.data.data.goods
        this.total = res.data.data.total
      })
    },
    // kd() {
    //   kdData().then((res) => {
    //     console.log(res)
    //     this.progressInfo = res.data.data
    //   })
    // }
    showgress() {
      this.$refs.kuaidi.show()
    }
  },
  created() {
    this.ordLists()
    // this.kd()
  },
  mounted() {},
  components: {
    kd,
    edits
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.el-select,
.el-input__inner {
  width: 100%;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}
.el-input {
  width: 450px;
  margin-right: 10px;
}
.el-table {
  margin-top: 10px;
}
</style>
