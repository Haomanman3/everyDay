<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="食品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="餐馆名称">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="餐馆ID">
              <span>{{ props.row.restaurant_id }}</span>
            </el-form-item>
            <el-form-item label="食品 ID">
              <span>{{ props.row.item_id }}</span>
            </el-form-item>
            <el-form-item label="食品介绍">
              <span>{{ props.row.description }}</span>
            </el-form-item>
            <el-form-item label="餐馆地址">
              <span>{{ props.row.recent_order_num }}</span>
            </el-form-item>
            <el-form-item label="食品评分">
              <span>{{ props.row.rating }}</span>
            </el-form-item>

            <el-form-item label="食品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="月销量">
              <span>{{ props.row.month_sales }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="食品名称" prop="name"> </el-table-column>
      <el-table-column label="食品介绍" prop="description"> </el-table-column>
      <el-table-column label="评分" prop="rating"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >

          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="修改食品信息" :visible.sync="dialogFormVisible">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="食品名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="食品介绍">
          <el-input v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item label="食品分类">
          <el-select v-model="form.category"> </el-select>
        </el-form-item>
        <el-form-item label="食品图片">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
      </el-form>

      <el-table :data="tableData1" border style="width: 100%">
        <el-table-column prop="specs_name" label="规格"> </el-table-column>
        <el-table-column prop="packing_fee" label="包装费"> </el-table-column>
        <el-table-column prop="price" label="价格"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="del(scope.$index, scope.row)"
              >删除</el-button
            ></template
          >
        </el-table-column>
      </el-table>
      <el-button type="primary" @click="addgg">添加规格</el-button>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="addshop">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="添加规格" :visible.sync="dialogFormVisible1">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="规格" prop="specs_name">
          <el-input v-model="ruleForm.specs_name"></el-input>
        </el-form-item>
        <el-form-item label="包装费" prop="packing_fee">
          <input
            type="text"
            class="input"
            v-model="ruleForm.packing_fee"
          /><el-button>-</el-button><el-button>+</el-button>
        </el-form-item>
        <el-form-item label="价格" prop="price">
          <input type="text" class="input" v-model="ruleForm.price" /><el-button
            >-</el-button
          ><el-button>+</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="add">立即创建</el-button>
          <el-button>重置</el-button>
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
      tableData1: [],
      list: [],
      total: 0,
      pagesize: 10,
      pagenum: 1,
      i: -1,
      dialogFormVisible: false,
      dialogFormVisible1: false,
      form: {
        name: "",
        description: "",
        category: "",
      },
      ruleForm: {
        specs_name: "",
        price: "",
        packing_fee: "",
      },
      rules: {
        specs_name: [
          { required: true, message: "请输入规格", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    addgg() {
      this.dialogFormVisible1 = true;
    },
    del(index, row) {
      this.tableData1.splice(index, 1);
    },

    addshop() {
      this.tableData[this.i].name = this.form.name;
      this.tableData[this.i].description = this.form.description;
      this.tableData[this.i].category = this.form.category;
      this.dialogFormVisible = false;
    },

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
      this.i = index;
      this.dialogFormVisible = true;
      this.form.name = row.name;
      this.form.description = row.description;
      this.form.category = row.category;
      this.tableData1 = row.specfoods;
    },
    update() {
      this.dialogFormVisible = false;
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.tableData.splice(index, 1);
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    add() {
      this.tableData1.push(this.ruleForm);
      this.ruleForm={}
    },
  },
  created() {
    axios({
      url: "https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=undefined",
      method: "get",
    }).then((res) => {
      console.log(res);
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
.input {
  height: 40px;
  border-radius: 4px;
  border: 1px solid #eee;
}
.el-button {
  margin-left: 0;
}
</style>
