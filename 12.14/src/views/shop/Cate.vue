<template>
  <div>
    <el-dialog
      :title="this.id == -1 ? '添加商品分类' : '编辑商品分类'"
      :visible.sync="dialogFormVisible"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="分类名称" prop="cat_name">
          <el-input v-model="ruleForm.cat_name"></el-input>
        </el-form-item>
        <el-form-item label="父级分类" prop="name" v-show="this.id == -1">
          <el-cascader v-model="ruleForm.cat_level"></el-cascader>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm(ruleForm)"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {},
  data() {
    return {
      id: -1,
      dialogFormVisible: false,
      ruleForm: {
        cat_name: "",
        cat_level: ""
      },
      rules: {
        cat_name: [
          { required: true, message: "请输入角色名称", trigger: "blur" }
        ],
        cat_level: [{ required: true, message: "请描述角色", trigger: "blur" }]
      }
    }
  },
  created() {},
  methods: {
    showCategory() {
      this.dialogFormVisible = true
    },
    edit(row) {
      this.id = row.id
      this.dialogFormVisible = true
      this.ruleForm.cat_name = row.cat_name
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          /**判断是添加还是修改 */
          if (this.id == -1) {
            this.$emit("submitForm", {
              ...this.ruleForm,
              id: new Date().getTime()
            })
          } else {
            this.$emit("edit", this.ruleForm)
          }
        } else {
          return false
        }
      })
    }
  },
  mounted() {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
