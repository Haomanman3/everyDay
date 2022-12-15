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
      <el-button type="primary" @click="$router.push('/home/add')"
        >添加商品</el-button
      >

      <el-table :data="tableData" stripe style="width: 100%" border>
        <el-table-column type="index" label="#"> </el-table-column>
        <el-table-column prop="goods_name" label="商品名称" width="740px">
        </el-table-column>
        <el-table-column prop="goods_price" label="商品价格（元）">
        </el-table-column>
        <el-table-column prop="goods_weight" label="商品重量">
        </el-table-column>
        <el-table-column prop="add_time" label="创建时间">
          <template slot-scope="scope">
            {{ scope.row.add_time | time }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
            ></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="handleDelete(scope.row)"
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
  </div>
</template>

<script>
import { delAllo } from "@/api/user.js"
export default {
  data() {
    return {
      // input: "",
      tableData: [],
      table: [],
      params: {
        query: "",
        pagenum: 1,
        pagesize: 5
      },
      total: 0,
      dialogFormVisible: false,
      dialogFormVisible1: false,
      i: -1,
      ruleForm: {
        goods_name: "",
        goods_price: "",
        goods_weight: "",
        add_time: ""
      },
      ruleForm1: {
        goods_name: "",
        goods_price: "",
        goods_weight: "",
        add_time: ""
      }
    }
  },
  filters: {
    time(val) {
      console.log(val)
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
        return item.goods_name.includes(this.params.query)
      })
    },
    handleDelete(row) {
      delAllo({ id: this.id }).then((res) => {
        this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.tableData.filter((item) => {
              return !item.id
            })
            this.$message({
              type: "success",
              message: "删除成功!"
            })
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            })
          })
      })
    }
  },
  created() {
    this.$http({
      url: "/api/goods",
      method: "get",
      params: this.params
    }).then((res) => {
      console.log(res)
      this.tableData = res.data.data.goods
      this.table = this.tableData
      this.total = res.data.data.total
      this.pages()
    })
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
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
