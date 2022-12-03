<template>
  <div class="home">
    <div class="con">
      <el-button type="primary" @click="dialogFormVisible = true"
        >新增todolist</el-button
      >
      <el-calendar>
        <template slot="dateCell" slot-scope="{ date, data }">
          <div>
            <p :class="data.isSelected ? 'is-selected' : ''">
              {{ data.day.split("-").slice(2).join("-") }}
            </p>
            <div>
              <div v-for="item in $store.state.list" :key="item.id" v-show="data.day==item.time">
                  <div class="green">{{item.name}}</div>
                  <div class="red">{{item.name}}</div>
              </div>
            </div>
          </div>
        </template>
      </el-calendar>
    </div>

    <el-dialog title="添加事件" :visible.sync="dialogFormVisible">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="事情名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="待办时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker
              placeholder="选择时间"
              v-model="form.date2"
              style="width: 100%"
            ></el-time-picker>
          </el-col>
        </el-form-item>

        <el-form-item label="事项进度">
          <el-radio-group v-model="form.resource">
            <el-radio label="待办"></el-radio>
            <el-radio label="已办"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="add">立即创建</el-button>
          <el-button>取消</el-button>
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
      form: {
        name: "",
        date1: "",
        date2: "",
        resource: "",
      },
    };
  },
  methods: {
    add() {
      let obj = {
        id: new Date().getTime(),
        name: this.form.name,
        date1: this.form.date1,
        date2: this.form.date2,
        resource: this.form.resource,
        time: new Date().getTime()
      };
      this.$store.commit("add", obj);
      this.dialogFormVisible = false;
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
