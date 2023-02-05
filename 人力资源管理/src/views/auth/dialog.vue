<template>
  <div>
    <el-dialog title="新增权限点" :visible.sync="dialogVisible" width="40%">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="权限名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="权限标识" prop="code">
          <el-input v-model="ruleForm.code"></el-input>
        </el-form-item>
        <el-form-item label="权限描述" prop="description">
          <el-input v-model="ruleForm.description"></el-input>
        </el-form-item>
        <el-form-item label="开启" prop="delivery">
          <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="events">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="新增权限点" :visible.sync="dialogVisible1" width="40%">
      <el-form
        :model="ruleForm1"
        :rules="rules"
        ref="ruleForm1"
        label-width="100px"
        class="demo-ruleForm1"
      >
        <el-form-item label="权限名称" prop="name">
          <el-input v-model="ruleForm1.name"></el-input>
        </el-form-item>
        <el-form-item label="权限标识" prop="code">
          <el-input v-model="ruleForm1.code"></el-input>
        </el-form-item>
        <el-form-item label="权限描述" prop="description">
          <el-input v-model="ruleForm1.description"></el-input>
        </el-form-item>
        <el-form-item label="开启" prop="delivery">
          <el-switch v-model="ruleForm1.delivery"></el-switch>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="edits">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {},
  data() {
    return {
      dialogVisible: false,
      dialogVisible1: false,
      ruleForm: {
        name: '',
        code: '',
        description: '',
        delivery: ''
      },
      ruleForm1: {
        name: '',
        code: '',
        description: '',
        delivery: ''
      },
      rules: {
        name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
        code: [{ required: true, message: '请输入活动名称', trigger: 'blur' }]
      }
    }
  },
  created() {},
  methods: {
    events() {
      this.$store.dispatch('auth/pushData', this.ruleForm)
    },
		ht(row){
			this.dialogVisible1 =true
			this.ruleForm1 = row

		},
		edits(){
			// console.log(data);
			this.$store.dispatch('auth/updateData',this.ruleForm1)
			this.dialogVisible1 =false
		}
  },
  mounted() {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
