<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="店铺名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="店铺介绍">
              <span>{{ props.row.description }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="联系电话">
              <span>{{ props.row.phone }}</span>
            </el-form-item>
            <el-form-item label="评分">
              <span>{{ props.row.rating }}</span>
            </el-form-item>
            <el-form-item label="销售量">
              <span>{{ props.row.recent_order_num }}</span>
            </el-form-item>
            <el-form-item label="分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="店铺名称" prop="name"> </el-table-column>
      <el-table-column label="店铺地址" prop="address"> </el-table-column>
      <el-table-column label="店铺介绍" prop="description"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button size="mini" @click="$router.push('/addGoods')">添加食品</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="修改店铺信息" :visible.sync="dialogFormVisible">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="店铺名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="详细地址" prop="address">
          <el-input v-model="ruleForm.address"></el-input>
        </el-form-item>
        <el-form-item label="店铺介绍" prop="description">
          <el-input v-model="ruleForm.description"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="店铺分类" prop="category">
          <el-select v-model="ruleForm.category" placeholder="请选择">
          </el-select>
        </el-form-item>
        <el-form-item label="商铺图片" prop="name">
          <img :src="ruleForm.image_path" alt="" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="update"
            >修改</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>


<el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :pagenum="pagenum"
      :page-sizes="[10, 20, 30, 100]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length"
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
      value: "",
      i:0,
      dialogFormVisible: false,
      ruleForm: {
        name: "",
        address: "",
        description: "",
        phone: "",
        category: "",
      },
      rules: {},
         list:[],
      pagesize: 20,
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

    handleEdit(index, row) {
      console.log(index, row);
       this.i=index
      this.dialogFormVisible = true;
      this.ruleForm.name = row.name;
      this.ruleForm.address = row.address;
      this.ruleForm.description = row.description;
      this.ruleForm.category = row.category;
      this.ruleForm.phone = row.phone;
     
      // console.log(i,index);
    },
    update(){
        this.tableData[this.i].name=this.ruleForm.name;
        this.tableData[this.i].address=this.ruleForm.address;
        this.tableData[this.i].description=this.ruleForm.description;
        this.tableData[this.i].category=this.ruleForm.category;
        this.tableData[this.i].phone=this.ruleForm.phone;
         this.dialogFormVisible = false;
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.tableData.splice(index, 1);
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  created() {
    axios({
      url: "https://elm.cangdu.org/shopping/restaurants?latitude=34.74725&longitude=113.624931&offset=0&limit=20",
      method: "get",
    }).then((res) => {
      console.log(res);
      this.tableData = res.data;
      this.list=res.data
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
