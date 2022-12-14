<template>
  <div>
    <el-dialog title="修改地址" :visible.sync="dialogFormVisible1">
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
          <el-button type="primary">确定</el-button>
          <el-button @click="dialogFormVisible1 = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { regionData } from "element-china-area-data"
export default {
  components: {},
  computed: {},
  data() {
    return {
      options: regionData,
      value: "",
      ruleForm1: {
        regionData: "",
        address: ""
      },
      dialogFormVisible1: false,
      rules: {
        region: [{ required: true, message: "请选择", trigger: "blur" }],
        address: [
          { required: true, message: "请输入详细地址", trigger: "blur" }
        ]
      }
    }
  },
  created() {},
  methods: {
    show1() {
      this.dialogFormVisible1 = true
    }
  },
  mounted() {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
