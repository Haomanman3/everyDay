<template>
  <div class="about">
    <el-card class="box-card">
      <div class="top">
        <div class="left">
          <el-alert
            title="本月：入职  离职  调薪  未定薪"
            type="info"
            show-icon
            :closable="false"
          />
        </div>
        <div class="right">
          <div @click="$router.push('/home')">设置</div>
          <div @click="$router.push('/home')">202003月报表</div>
        </div>
      </div>
    </el-card>

    <el-card class="box-card">
      <div class="cen">
        <div class="flex">
          <span>聘用形式：</span>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="正式" />
            <el-checkbox label="非正式" />
          </el-checkbox-group>
        </div>
        <div class="flex">
          <span>员工状态：</span>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="在职" />
            <el-checkbox label="离职" />
          </el-checkbox-group>
        </div>
      </div>
      <div class="flex">
        <div class="dep">部门：</div>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="总裁办" />
          <el-checkbox label="行政部" />
          <el-checkbox label="人事部" />
          <el-checkbox label="财务部" />
          <el-checkbox label="技术部" />
          <el-checkbox label="运营部" />
          <el-checkbox label="市场部" />
          <el-checkbox label="财务核算部" />
          <el-checkbox label="税务管理部" />
          <el-checkbox label="薪资管理部" />
          <el-checkbox label="Java研发部" />
          <el-checkbox label="Python研发部" />
          <el-checkbox label="Php研发部" />
          <el-checkbox label="北京事业部" />
          <el-checkbox label="上海事业部" />
          <el-checkbox label="测试部" />
        </el-checkbox-group>
      </div>
    </el-card>
    <el-card class="box-card">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="序号" width="80" />
        <el-table-column prop="username" label="姓名" />
        <el-table-column prop="mobile" label="手机" />
        <el-table-column prop="workNumber" label="工号" />
        <el-table-column prop="inServiceStatus" label="聘用形式" >{{inServiceStatus==1?"非正式":"正式"}}</el-table-column>
        <el-table-column prop="departmentName" label="部门" />
        <el-table-column prop="timeOfEntry" label="入职时间" />
        <el-table-column prop="currentPostWage" label="工资基数" />
        <el-table-column prop="address" label="津贴方案" >通用方案</el-table-column>
        <el-table-column label="操作" width="180">
          <template #default="scope">
            <!-- <el-button size="small" type="danger" >定薪</el-button> -->
            <el-button size="small" type="primary">调薪</el-button>
            <el-button size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        v-model:current-page="currentPage4"
        v-model:page-size="pageSize"
        :page-sizes="[5, 10, 15, 20]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs } from "vue"
import { useStore } from "vuex"
import { useRouter, useRoute } from "vue-router"
const store = useStore()
const router = useRouter()
const route = useRoute()
const checkList = ref()
const currentPage4 = ref(1)
const pageSize = ref(5)
const total = ref(0)
const tableData = [
        {
          currentPostWage: null,
          username: "管理员",
          departmentName: "总裁办",
          timeOfEntry: "2018-11-02",
          id: "1063705989926227968",
          currentBasicSalary: null,
          mobile: "13800000002",
          workNumber: "9002",
          departmentId: "1175310929766055936",
          inServiceStatus: 1,
          formOfEmployment: 1
        },
        {
          currentPostWage: null,
          timeOfEntry: "2018-11-04",
          workNumber: "111",
          mobile: "13800000003",
          currentBasicSalary: 0.0,
          id: "1066370498633486336",
          departmentId: "1175311466846683136",
          departmentName: "市场部",
          username: "孙财",
          inServiceStatus: 1,
          formOfEmployment: 1
        },
        {
          username: "罗晓晓",
          timeOfEntry: "2018-12-02",
          currentBasicSalary: 3.0,
          workNumber: "1111",
          id: "1071632760222810112",
          mobile: "13800000004",
          departmentName: "人事部",
          currentPostWage: 3.0,
          departmentId: "1175311267684352000",
          inServiceStatus: 1,
          formOfEmployment: 1
        },
        {
          workNumber: "1001",
          username: "文吉星",
          departmentName: "人事部",
          id: "1074238801330704384",
          currentBasicSalary: 5000.0,
          departmentId: "1175311267684352000",
          mobile: "13400000001",
          currentPostWage: 5000.0,
          inServiceStatus: 1,
          timeOfEntry: "2018-01-01",
          formOfEmployment: 1
        },
        {
          workNumber: "1002",
          currentBasicSalary: 100.0,
          departmentName: "人事部",
          currentPostWage: 100.0,
          mobile: "13400000002",
          id: "1074238801402007552",
          username: "巴思慧",
          departmentId: "1175311267684352000",
          inServiceStatus: 1,
          timeOfEntry: "2018-01-01",
          formOfEmployment: 1
        },
        {
          departmentName: "总裁办",
          currentBasicSalary: 7.0,
          id: "1075383133106425856",
          username: "乔海",
          mobile: "13500000001",
          currentPostWage: 7.0,
          departmentId: "1175310929766055936",
          workNumber: "2001",
          inServiceStatus: 1,
          timeOfEntry: "2018-01-01",
          formOfEmployment: 1
        },
        {
          username: "董昊空",
          departmentName: "总裁办",
          workNumber: "2002",
          currentPostWage: 123.0,
          mobile: "13500000002",
          id: "1075383135371350016",
          currentBasicSalary: 123.0,
          departmentId: "1175310929766055936",
          inServiceStatus: 1,
          timeOfEntry: "2018-01-01",
          formOfEmployment: 1
        },
        {
          workNumber: "2003",
          departmentName: "财务部",
          departmentId: "1175311325720936448",
          mobile: "13500000003",
          username: "周乐天",
          id: "1075383135459430400",
          currentPostWage: 10.0,
          currentBasicSalary: 10.0,
          inServiceStatus: 1,
          timeOfEntry: "2018-01-01",
          formOfEmployment: 1
        },
        {
          timeOfEntry: "1992-08-04",
          id: "1235396724497268736",
          departmentName: "总裁办",
          currentBasicSalary: 8888.0,
          mobile: "13600000001",
          workNumber: "0001",
          currentPostWage: 8888.0,
          username: "吕勇锐",
          departmentId: "1175310929766055936",
          inServiceStatus: 1,
          formOfEmployment: 1
        },
        {
          username: "袁永安",
          mobile: "13600000002",
          workNumber: "0002",
          currentPostWage: null,
          departmentName: "总裁办",
          currentBasicSalary: null,
          id: "1235396819959627776",
          departmentId: "1175310929766055936",
          timeOfEntry: "1993-08-04",
          inServiceStatus: 1,
          formOfEmployment: 1
        }
]
</script>
<style lang="scss" scoped>
.flex {
  display: flex;
  margin-right: 10px;
}
.box-card {
  margin: 10px;
}
.el-alert {
  background-color: #e6f7ff;
  border: 1px solid #a3dcff;
}
.dep {
  width: 80px;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .right {
    display: flex;
    div {
      margin-left: 20px;
    }
  }
}
.cen {
  display: flex;
  align-items: center;
}
</style>

