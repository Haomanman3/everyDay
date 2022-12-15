<template>
  <div>
    <el-dialog title="分配角色" :visible.sync="dialogFormVisible">
      <el-form ref="form" :model="form">
        <el-form-item label="当前的用户">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="当前的角色">
          <el-input v-model="form.role_name"></el-input>
        </el-form-item>
        <el-form-item label="分配新角色">
          <el-select v-model="form.rid" placeholder="请选择">
            <el-option
              :label="item.roleName"
              :value="item.id"
              v-for="item in roleList"
              :key="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="update">修改</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { getRole } from "@/api/user.js"
export default {
  components: {},
  computed: {},
  data() {
    return {
      dialogFormVisible: false,
      form: {
        username: "",
        role_name: "",
        rid: ""
      },
      roleList: []
    }
  },
  created() {},
  methods: {
    allo(row) {
      this.dialogFormVisible = true
      getRole().then((res) => {
        this.roleList = res.data.data
      })
      this.form.rid = row.rid
      this.form.username = row.username
      this.form.role_name = row.role_name
    },
    update() {
      this.$emit("update", this.form)
      this.dialogFormVisible = false
    }
  },
  mounted() {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.el-form-item {
  width: 100%;
  display: flex;
}
</style>
