<template>
  <div class="about">
<p>考勤导入</p>
<el-alert title="如果某员工已有打卡记录，最新上传的不覆盖原有数据。可上传多名员工的打卡记录。每名员工可上传多条记录，同考勤日内取员工第一次和最后一次打卡时间。" type="warning" show-icon />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
const store = useStore();
const router = useRouter();
const route = useRoute();
</script>
<style lang="scss" scoped>

</style>
