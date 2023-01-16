<template>
  <div>
    <div class="com">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="计薪设置" name="first">
          <el-form ref="form" :model="form" label-width="180px">
            <el-form-item label="对应社保自然月">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="本月" value="shanghai"></el-option>
                <el-option label="次月" value="beijing"></el-option>
              </el-select>
              <i class="el-icon-bell"></i>
            </el-form-item>
            <el-form-item label="社保数据来源">
              <el-input
                v-model="form.name"
                disabled
                placeholder="社保模块"
              ></el-input>
              <!-- <i class="el-icon-bell"></i> -->
            </el-form-item>

            <el-form-item label="考勤数据来源">
              <el-input
                v-model="form.name"
                disabled
                placeholder="考勤模块"
              ></el-input>
              <!-- <i class="el-icon-bell"></i> -->
            </el-form-item>
            <el-form-item>
              <el-button type="primary">提交</el-button>
              <el-button>重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="津贴设置" name="second">
          <el-form ref="form1" :model="form1" label-width="180px">
            <el-form-item label="通用方案">
              <el-input v-model="form1.name" value="通用方案"></el-input>
            </el-form-item>

            <el-form-item label="备注">
              <el-input v-model="form1.name1"></el-input>
            </el-form-item>
            <el-form-item label="审批人">
              <el-input v-model="form1.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="form1.region" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-col>
              <el-form-item label="">
                <el-input v-model="form1.user" placeholder="审批人"></el-input>
              </el-form-item>
            </el-col>

            <el-form-item label="适用计税方式">
              <el-radio-group v-model="form1.resource">
                <el-radio label="税前"></el-radio>
                <el-radio label="税后"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">提交</el-button>
              <el-button>重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {},
  data() {
    return {
      activeName: "first",
      form: {
        region: "",
        name: ""
      },
      form1: {
        name: "通用方案",
        name1: "福利薪资发放规则",
        resource: "",
        user: ""
      }
    }
  },
  created() {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  },
  mounted() {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.com {
  width: 450px;
}
.el-form1 {
  display: flex;
  width: 500px;
  .el-input {
    width: 200px;
  }
}
</style>
