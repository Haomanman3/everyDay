<template>
  <div class="">
    <h5>姓名：{{data.name}}</h5>
    <h5>年龄：{{data.age}}</h5>
    <h5>工作种类：{{data.job.type}}</h5>
    <h5>爱好：{{data.hobby}}</h5>
    <h5>薪资：{{data.job.salary}}</h5>
    <h5>测试c：{{data.job.a.b.c}}</h5>
    <button @click="change">点击</button>
  </div>
</template>

<script>
// import { reactive } from "vue";
// export default {
//   setup(props, ctx) {
//     const data = reactive({
//       name: "小兰",
//       age: 18,
//       job: {
//         type: "前端开发工程师",
//         salary: "30k",
//         a: {
//           b: {
//             c: 88,
//           },
//         },
//       },
//       hobby: ["唱歌", "跳舞", "蹦迪"],
//     });
//     function change(){
//       data.name="小花",
//       data.age=20,
//       data.job.type="后端工程师",
//       data.job.salary="35k",
//       data.job.a.b.c=100,
//       data.hobby[2]="睡觉"
//     }
//     return { ...toRefs(data),change };
//   },
// };
// import { reactive } from "vue";
// export default {
//   setup(props, ctx) {
//     const data = reactive({
//       name: "小兰",
//       age: 18,
//       job: {
//         type: "前端开发工程师",
//         salary: "30k",
//         a: {
//           b: {
//             c: 88,
//           },
//         },
//       },
//       hobby: ["唱歌", "跳舞", "蹦迪"],
//     });
//     function change(){
//       data.name="小花",
//       data.age=20,
//       data.job.type="后端工程师",
//       data.job.salary="35k",
//       data.job.a.b.c=100,
//       data.hobby[2]="睡觉"
//     }
//     return { ...toRefs(data),change };
//   },
// };
// import { reactive } from "vue";
// export default {
//   setup(props, ctx) {
//     const data = reactive({
//       name: "小兰",
//       age: 18,
//       job: {
//         type: "前端开发工程师",
//         salary: "30k",
//         a: {
//           b: {
//             c: 88,
//           },
//         },
//       },
//       hobby: ["唱歌", "跳舞", "蹦迪"],
//     });
//     function change(){
//       data.name="小花",
//       data.age=20,
//       data.job.type="后端工程师",
//       data.job.salary="35k",
//       data.job.a.b.c=100,
//       data.hobby[2]="睡觉"
//     }
//     return { ...toRefs(data),change };
//   },
// };
</script>

<style lang="scss" scoped></style>
