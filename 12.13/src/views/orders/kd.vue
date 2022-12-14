<template>
  <div>
    <el-dialog title="物流进度" :visible.sync="progressVisible" width="50%">
      <el-timeline :reverse="reverse">
        <el-timeline-item
          v-for="(activity, index) in progressInfo"
          :key="index"
          :timestamp="activity.time"
        >
          {{ activity.context }}
        </el-timeline-item>
      </el-timeline>
      <span slot="footer" class="dialog-footer">
        <el-button @click="progressVisible = false">取 消</el-button>
        <el-button type="primary" @click="progressVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { kdData } from "@/api/user.js"
export default {
  components: {},
  computed: {},
  data() {
    return {
      progressVisible: false,
      progressInfo: "",
      reverse: true
    }
  },
  created() {
    this.kd()
  },
  methods: {
    kd() {
      kdData().then((res) => {
        console.log(res)
        this.progressInfo = res.data.data
      })
    },
    show() {
      console.log(1)
      this.progressVisible = true
    }
  },
  mounted() {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
