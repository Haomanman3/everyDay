<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="user_name" label="姓名" > </el-table-column>
         <el-table-column prop="create_time" label="日期" > </el-table-column>
      <el-table-column prop="city" label="地址"> </el-table-column>
      <el-table-column prop="admin" label="权限"> </el-table-column>
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
      tableData:[]  ,
      list:[],
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
      url: "https://elm.cangdu.org/admin/all?offset=0&limit=20",
      method: "get",
    }).then((res) => {
      console.log(res);
      this.tableData=res.data.data
      this.list=res.data.data
      this.total = res.data.data.length
      this.pages()
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
