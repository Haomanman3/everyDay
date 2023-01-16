<template>
  <div>
    <!-- 设置 -->
    <el-card class="box-card">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="角色管理" name="first">
          <div class="top">
            <el-button type="primary" @click="dialogVisible = true"
              >新增角色</el-button
            >
          </div>
          <el-table :data="tableData" style="width: 100%" border>
            <el-table-column type="index" label="序号" width="80">
            </el-table-column>
            <el-table-column prop="name" label="名称"> </el-table-column>
            <el-table-column prop="description" label="描述"> </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="success" @click="dialogVisible2 = true"
                  >分配权限</el-button
                >
                <el-button type="primary" @click="edit(scope.row)"
                  >编辑</el-button
                >
                <el-button type="danger" @click="del">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination layout="prev, pager, next" :total="100">
          </el-pagination>
        </el-tab-pane>
        <el-tab-pane label="公司信息" name="second">
          <el-alert
            title="对公司名称、公司地址、营业执照、公司地区的更新，将使得公司资料被重新审核，请谨慎修改"
            type="info"
            show-icon
            :closable="false"
          >
          </el-alert>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="公司名称">
              <el-input v-model="form.name" disabled></el-input>
            </el-form-item>
            <el-form-item label="公司地址">
              <el-input v-model="form.companyAddress" disabled></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="form.mailbox" disabled></el-input>
            </el-form-item>
            <el-form-item label="备注">
              <el-input
                type="textarea"
                v-model="form.remarks"
                disabled
              ></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <el-dialog title="添加弹层" :visible.sync="dialogVisible" width="50%">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="角色名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="desc">
          <el-input v-model="ruleForm.desc"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog title="编辑弹层" :visible.sync="dialogVisible1" width="50%">
      <el-form
        :model="ruleForm1"
        :rules="rules"
        ref="ruleForm1"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="角色名称" prop="name">
          <el-input v-model="ruleForm1.name"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="desc">
          <el-input v-model="ruleForm1.description"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible1 = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog title="分配权限" :visible.sync="dialogVisible2" width="50%">
      <el-tree
        :props="props"
        lazy
        show-checkbox
        @check-change="handleCheckChange"
      >
      </el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibl2 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible2 = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { SetData, delData, alloData } from "@/api/set.js"
export default {
  components: {},
  computed: {},
  data() {
    return {
      activeName: "first",
      form: {
        id: "1",
        name: "江苏传智播客教育科技股份有限公司",
        managerId: "abc",
        version: "12",
        renewalDate: null,
        expirationDate: null,
        companyArea: null,
        companyAddress: "北京市昌平区建材城西路金燕龙办公楼一层",
        businessLicenseId: null,
        legalRepresentative: "",
        companyPhone: "400-618-9090",
        mailbox: "bd@itcastcn",
        companySize: null,
        industry: null,
        remarks: "传智播客官网-好口碑IT培训机构,一样的教育,不一样的品质",
        auditState: "0",
        state: 1,
        balance: 0,
        createTime: "2018-11-07T13:30:05.000+0000"
      },
      tableData: [],
      dialogVisible: false,
      dialogVisible1: false,
      dialogVisible2: false,
      ruleForm: {
        name: "",
        description: ""
      },
      ruleForm1: {
        name: "",
        description: ""
      },
      rules: {
        name: [{ required: true, message: "请输入角色名称", trigger: "blur" }]
      },
      i: "",
      props: {
        label: "name",
        children: "zones"
      },
      count: 1
    }
  },
  created() {
    this.sets()
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleNodeClick(data) {
      console.log(data)
    },
    //删除
    del() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          delData(this.id).then((res) => {
            console.log(res)
            this.sets()
          })
          this.$message({
            type: "success",
            message: "删除成功!"
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
    },
    //列表数据
    sets() {
      SetData(this.params).then((res) => {
        console.log(res)
        this.tableData = res.data.data.rows
      })
    },
    //回填
    edit(row) {
      this.dialogVisible1 = true
      this.i = row.id
      this.ruleForm1.name = row.name
      this.ruleForm1.description = row.description
    },
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate)
      alloData(this.id).then((res) => {
        console.log(res)
      })
    }
  },
  mounted() {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.el-form {
  margin: 30px 0;
  width: 500px;
}
.top {
  margin: 10px 0;
}
</style>
