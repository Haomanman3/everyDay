<template>
  <div class="home">
    <div class="con">
      <el-button type="primary" @click="dialogFormVisible = true"
        >新增todolist</el-button
      >
      <el-calendar>
        <template slot="dateCell" slot-scope="{ data }">
          <div>
            <p :class="data.isSelected ? 'is-selected' : ''">
              {{ data.day.split("-").slice(2).join("-") }}
            </p>
            <div>
              <div v-for="item in $store.state.list" :key="item.id">
                <div
                  class="green"
                  v-if="item.time == data.day && item.resource == '已办'"
                >
                  {{ item.name }}
                </div>
                <div
                  class="red"
                  v-if="item.time == data.day && item.resource == '待办'"
                >
                  {{ item.name }}
                </div>
              </div>
            </div>
          </div>
        </template>
      </el-calendar>
    </div>

    <el-dialog title="添加事件" :visible.sync="dialogFormVisible">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="时间名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="活动时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width: 100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="事项进度" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="待办"></el-radio>
            <el-radio label="已办"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即创建</el-button
          >
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      ruleForm: {
        name: "",

        resource: "",
        date1: "",
      },
      rules: {
        name: [{ required: true, message: "请输入事项名称", trigger: "blur" }],
        resource: [{ required: true, message: "请选择", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit!");
          let date = new Date(this.ruleForm.date1);
          let year = date.getFullYear();
          let month = date.getMonth() + 1;
          month = month < 10 ? "0" + month : month;
          let day = date.getDate();
          day = day < 10 ? "0" + day : day;
          let time = year + "-" + month + "-" + day;
          let obj = {
            id: new Date().getTime(),
            name: this.ruleForm.name,
            resource: this.ruleForm.resource,
            time: time,
          };
          this.$store.commit("submitForm", obj);
          this.dialogFormVisible = false;
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
    },
  },

  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.home {
  height: 100%;
}

.con {
  width: 800px;
  height: 800px;
  margin: 0 auto;
}
.is-selected {
  color: #1989fa;
}
.el-button {
  margin-top: 5px;
}
.green {
  width: 80px;
  height: 25px;
  background-color: aquamarine;
  margin: 0 10px 5px 10px;
}
.red {
  width: 80px;
  height: 25px;
  background-color: red;
  margin: 0 10px;
}
</style>
