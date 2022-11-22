<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" label="#"> </el-table-column>
      <el-table-column prop="registe_time" label="注册日期"> </el-table-column>
      <el-table-column prop="username" label="用户姓名"> </el-table-column>
      <el-table-column prop="city" label="注册地址"> </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :pagenum="pagenum"
      :page-sizes="[10, 20, 30, 100]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: [],
      list: [],
      total: 0,
      pagesize: 10,
      pagenum: 1,
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pagesize = val;
      this.pages();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pagenum = val;
      this.pages();
    },
    pages() {
      this.tableData = this.list.slice(
        (this.pagenum - 1) * this.pagesize,
        this.pagenum * this.pagesize
      );
    },
  },
  created() {
    axios({
      url: "https://elm.cangdu.org/v1/users/list?offset=0&limit=20",
      mothod: "get",
    }).then((res) => {
      // console.log(res);
      this.tableData = res.data;
      this.list = res.data;
      this.total = res.data.length;
       this.pages();
    });
   
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
