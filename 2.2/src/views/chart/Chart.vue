<template>
  <div>
    <el-card class="box-card">
      <div class="StrucTure">
        <div class="box">
          <div class="list">
            <div class="list-top">
              <div>
                <el-icon>
                  <Histogram />
                </el-icon>
                <span>传智教育</span>
              </div>
              <div class="div">
                <span>负责人</span>
                <el-dropdown>
                  <span>
                    操作
                    <el-icon>
                      <arrow-down />
                    </el-icon>
                  </span>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item>添加子部门</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </div>
            </div>
            <ul v-for="item in StrucTure" :key="item.id">
              <li class="list-bottom" v-if="item.pid == ''">
                <div>
                  <span class="span1">{{ item.name }}</span>
                </div>
                <div class="div">
                  <span class="span">{{ item.manager }}</span>
                  <el-dropdown @command="handleCommand">
                    <span>
                      操作
                      <el-icon>
                        <arrow-down />
                      </el-icon>
                    </span>
                    <template #dropdown>
                      <el-dropdown-menu>
                        <el-dropdown-item
                          command="a"
                          @click="dialogVisible = true"
                          >添加子部门</el-dropdown-item
                        >
                        <el-dropdown-item
                          command="b"
                          @click="dialogVisible1 = true"
                          >查看部门</el-dropdown-item
                        >
                        <el-dropdown-item>删除部门</el-dropdown-item>
                      </el-dropdown-menu>
                    </template>
                  </el-dropdown>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </el-card>

    <el-dialog title="添加部门" :visible.sync="dialogVisible" width="30%">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="部门名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="部门编码" prop="code">
          <el-input v-model="ruleForm.code" />
        </el-form-item>
        <el-form-item label="部门负责人" prop="manager">
          <el-select
            v-model="value"
            class="m-2"
            placeholder="Select"
            size="large"
          >
            <el-option
              v-for="item in StrucTure"
              :key="item.id"
              :label="item.manager"
              :value="item.manager"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="部门介绍" prop="introduce">
          <el-input type="textarea" v-model="ruleForm.introduce" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
    <!-- <el-dialog :visible.sync="dialogVisible1" title="编辑部门" width="35%">
      <el-form
        :model="ruleForm1"
        :rules="rules"
        ref="ruleForm1"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="部门名称">
          <el-input v-model="ruleForm1.name" />
        </el-form-item>
        <el-form-item label="部门编码">
          <el-input v-model="ruleForm1.code" />
        </el-form-item>
        <el-form-item label="部门负责人">
          <el-select
            v-model="value1"
            class="m-2"
            placeholder="Select"
            size="large"
          >
            <el-option
              v-for="item in StrucTure"
              :key="item.id"
              :label="item.manager"
              :value="item.manager"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="部门介绍">
          <el-input v-model="ruleForm1.introduce" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible1 = false">取消</el-button>
          <el-button type="primary"> 确定 </el-button>
        </span>
      </template>
    </el-dialog> -->
  </div>
</template>

<script>
import { ChartData } from "../api/chart"
export default {
  components: {},
  computed: {},
  data() {
    return {
      dialogVisible: false,
      dialogVisible1: false,
      data: [],
      value: "",
      value1: "",
      ruleForm: {
        name: "",
        code: "",
        manager: "",
        introduce: ""
      },
      ruleForm1: {
        name: "",
        code: "",
        manager: "",
        introduce: ""
      },
      StrucTure: [],
      rules: {
        name: [{ required: true, message: "请输入部门名称", trigger: "blur" }],
        code: [{ required: true, message: "请输入部门编码", trigger: "blur" }],
        manager: [
          { required: true, message: "请输入部门负责人", trigger: "blur" }
        ],
        introduce: [
          { required: true, message: "请输入部门介绍", trigger: "blur" }
        ]
      }
    }
  },
  created() {
    ChartData().then((res) => {
      console.log(res)
      this.StrucTure = res.data.data.depts
    })
  },
  methods: {
    handleCommand(command) {
      console.log(command)
      this.dialogVisible = true
      this.dialogVisible1 = true
    },
    handleNodeClick(data) {
      console.log(data)
    }
  },
  mounted() {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.box-card {
  margin: 10px;
}
.StrucTure {
  margin: 15px;
  height: 100%;
  background-color: #fff;
  padding: 20px;

  .box {
    margin: 30px 0 0 50px;

    .top {
      .text {
        color: #4a7afb;
        border-bottom: 3px solid #4a7afb;
        padding-bottom: 10px;
      }

      .br {
        width: 100%;
        height: 3px;
        background-color: #eee;
        margin-top: 10px;
      }
    }

    .list {
      margin: 50px 120px;

      .div {
        width: 160px;
        display: flex;
        justify-content: space-between;
      }

      .list-top {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 6px;
        // border-bottom: 1px solid #ccc;
      }

      ul {
        margin-top: 15px;

        .list-bottom {
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;

          .span1 {
            margin-left: 6px;
          }
        }
      }
    }
  }
}
</style>
