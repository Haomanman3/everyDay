<template>
  <div class="">
    <h3>信息</h3>
    <h3>姓名：{{ name }}</h3>
    <h3>年龄：{{ age }}</h3>
    <h3>工作种类：{{ job.type }}</h3>
    <h3>薪资：{{ job.salary }}</h3>
    <button @click="click">修改</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
//   setup(props, ctx) {
//     let name = ref("张三");
//     let age = ref(18);
//     let job = ref({
//       type: "前端开发工程师",
//       salary: "30k",
//     });
//     function click() {
//       name.value = "李四";
//       age.value = 20;
//       job.value.type = "后端";
//       job.value.salary = "60k";
//     }
//     return { name, age, job, click };
//   },
//   setup(props, ctx) {
//     let name = ref("张三");
//     let age = ref(18);
//     let job = ref({
//       type: "前端开发工程师",
//       salary: "30k",
//     });
//     function click() {
//       name.value = "李四";
//       age.value = 20;
//       job.value.type = "后端";
//       job.value.salary = "60k";
//     }
//     return { name, age, job, click };
//   },
//   setup(props, ctx) {
//     let name = ref("张三");
//     let age = ref(18);
//     let job = ref({
//       type: "前端开发工程师",
//       salary: "30k",
//     });
//     function click() {
//       name.value = "李四";
//       age.value = 20;
//       job.value.type = "后端";
//       job.value.salary = "60k";
//     }
//     return { name, age, job, click };
//   },
};
</script>

<style lang="scss" scoped></style>
