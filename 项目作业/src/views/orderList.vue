<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="用户名">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
            <el-form-item label="店铺名称">
              <span>{{ props.row.restaurant_name }}</span>
            </el-form-item>
            <el-form-item label="收货地址">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.restaurant_id }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="订单 ID" prop="id"> </el-table-column>
      <el-table-column label="总价格" prop="total_amount"> </el-table-column>
      <el-table-column label="订单状态" prop="status_bar.title">
      </el-table-column>
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
      url: "https://elm.cangdu.org/bos/orders?offset=0&limit=20&restaurant_id=undefined",
      method: "get",
    }).then((res) => {
      console.log(res);
      this.tableData = res.data;
      this.list=res.data
      this.total=res.data.length
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
