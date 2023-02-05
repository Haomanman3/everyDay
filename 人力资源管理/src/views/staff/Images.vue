<template>
  <div>
    <div class="imgs">
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <div class="el-upload__text">
          <el-button type="primary">点击上传</el-button>
        </div>
      </el-upload>
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处</div>
      </el-upload>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {},
  data() {
    return {}
  },
  created() {},
  methods: {},
  mounted() {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.imgs {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.el-button {
  margin-top: 60px;
}
</style>
