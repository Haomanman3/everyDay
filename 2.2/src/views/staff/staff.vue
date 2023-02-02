<template>
  <div>
    <!-- 员工 -->
    <el-card class="box-card">
      <div class="top">
        <div>
          <el-alert
            title="当前共有152条记录"
            type="info"
            show-icon
            :closable="false"
          ></el-alert>
        </div>
        <div>
          <el-button type="danger">简单表头导出</el-button>
          <el-button type="warning">复杂表头导出</el-button>
          <el-button type="success" @click="skip">excel导入</el-button>
          <el-button type="primary" disabled>新增员工</el-button>
        </div>
      </div>
    </el-card>
    <el-card class="box-card">
      <el-table :data="$store.state.staff.list" style="width: 100%" border>
        <el-table-column type="index" label="序号" width="80">
        </el-table-column>
        <el-table-column prop="username" label="姓名" sortable>
        </el-table-column>
        <el-table-column prop="address" label="头像">
          <template slot-scope="scope">
            <img :src="scope.row.staffPhoto" alt="" class="imgs" />
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="手机号" sortable width="100px">
        </el-table-column>
        <el-table-column prop="workNumber" label="工号" sortable width="80px">
        </el-table-column>
        <el-table-column prop="address" label="聘用形式" sortable width="120px"
          >正式
        </el-table-column>
        <el-table-column
          prop="departmentName"
          label="部门"
          sortable
          width="80px"
        >
        </el-table-column>
        <el-table-column
          prop="timeOfEntry"
          label="入职时间"
          sortable
          width="120px"
        >
        </el-table-column>
        <el-table-column
          prop="formOfEmployment"
          label="账户状态"
          sortable
          width="120px"
        >
				<template slot-scope="scope">
          <el-switch v-model="scope.row.value" disabled></el-switch>
				</template>
        </el-table-column>
        <el-table-column label="操作" sortable width="250">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="examine"
              >查看</el-button
            >
            <el-button type="text" size="small">转正</el-button>
            <el-button type="text" size="small">调岗</el-button>
            <el-button type="text" size="small">离职</el-button>
            <el-button type="text" size="small">角色</el-button>
            <el-button type="text" size="small" disabled>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
			   <el-pagination layout="prev, pager, next" :total="$store.state.staff.total"   @current-change="handleCurrentChange">
          </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {},
  data() {
    return {
      obj: {
        page: 1,
        size: 5,
        total: 0
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    skip() {
      this.$router.push('/about/image')
    },
    examine() {
      this.$router.push('/about/person')
    },
    getList() {
      console.log(1)
      this.$store.dispatch('staff/staList', 1)
    },
		handleCurrentChange(val){
			console.log(val);
			  this.$store.dispatch('staff/staList', val)

		}
  },
  mounted() {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.imgs {
  width: 50px;
  height: 50px;
  border-radius: 50px;
}
.top {
  display: flex;
  justify-content: space-between;
}
.box-card {
  margin: 10px;
}

.el-alert {
  background-color: #e6f7ff;
  border: #91d5ff;
}
</style>
