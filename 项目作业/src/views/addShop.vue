<template>
  <div>
   <div class="con">
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
      <el-form-item label="联系电话" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="店铺简介" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="店铺标语" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="店铺分类" prop="category">
        <el-select v-model="ruleForm.category"> </el-select>
      </el-form-item>
      <el-form-item label="店铺特点">
        <span
          >品牌保证 <el-switch v-model="ruleForm.delivery"></el-switch
        ></span>
        <span
          >蜂鸟专送 <el-switch v-model="ruleForm.delivery"></el-switch
        ></span>
        <span
          >新开店铺 <el-switch v-model="ruleForm.delivery"></el-switch
        ></span>
        <span>外卖保 <el-switch v-model="ruleForm.delivery"></el-switch></span>
        <span>准时达 <el-switch v-model="ruleForm.delivery"></el-switch></span>
        <span>开发票 <el-switch v-model="ruleForm.delivery"></el-switch></span>
      </el-form-item>
      <el-form-item label="配送费" prop="num">
        <el-input-number
          v-model="ruleForm.num"
          @change="handleChange"
          label="描述文字"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="起送价" prop="num1">
        <el-input-number
          v-model="ruleForm.num1"
          @change="handleChange"
          label="描述文字"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="营业时间" prop="time">
        <el-time-select
          placeholder="起始时间"
          v-model="startTime"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30',
          }"
        >
        </el-time-select>
        <el-time-select
          placeholder="结束时间"
          v-model="endTime"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30',
            minTime: startTime,
          }"
        >
        </el-time-select>
      </el-form-item>

      <el-form-item label="上传店铺头像">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <el-form-item label="上传营业执照">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="上传餐饮许可服务证">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>

      <el-form-item label="优惠活动">
        <el-select v-model="value"> </el-select>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="活动标题"> </el-table-column>
      <el-table-column prop="name" label="活动名称"> </el-table-column>
      <el-table-column prop="address" label="活动详情"> </el-table-column>
      <el-table-column label="操作"> </el-table-column>
    </el-table>
       <el-button type="primary" >立即创建</el-button>
   </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      ruleForm: {},
      rules: {},
      num: 1,
      num1: 1,
      startTime: "",
      endTime: "",
      imageUrl: "",
      value: "",
      tableData: [],
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
      this.num = value;
    },

    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
  created() {
    axios({
      url: "",
      method: "get",
    }).then((res) => {
      console.log(res);
    });
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

</style>
