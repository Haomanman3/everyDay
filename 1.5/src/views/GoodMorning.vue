<template>
  <div class="good">

    <!-- <div class="con">
		<div class="flex">
			<div class="imgs">123</div>
			<div class="font">
				<p>早安，星爷,祝你开心每一天!</p>
				<p>星爷|传智播客-总裁办啊啊</p>
			</div>
		</div>

	</div> -->
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs } from "vue"
import { useStore } from "vuex"
import { ArrowDown } from '@element-plus/icons-vue'
import { useRouter, useRoute } from "vue-router"
const store = useStore()
const router = useRouter()
const route = useRoute()
</script>
<style lang="scss" scoped>
// .good{
// 	height: 50px;
// 	line-height: 50px;
// 	background-color: #4777fa;
// }
// .example-showcase .el-dropdown-link {
//   cursor: pointer;
//   display: flex;
//   align-items: center;
// }
// .top{
// 	display: flex;
// 	justify-content: space-between;
// 	color: #fff;
// }
// .left,.right{
// 	display: flex;
// 	align-items: center;


// }
// .el-dropdown-link{
// 	color: #fff;
// 	margin-top: 15px;
// }
// .name{
// 	margin: 0 10px;
// }
// .exper{
// 	width: 80px;
// 	height: 30px;
// 	text-align: center;
// 	line-height: 30px;
// 	border-radius: 15px;
// 	background-color: rgba(255, 255, 255, 0.579);
// 	margin-left: 10px;
// }
// .flex{
// 	display: flex;
// .imgs{
// 	flex: 1;
// }
// .con{
// 	padding: 10px;
// 	margin: 10px;
// 	background-color: #fff;
// 	height: 100px;
// 	width: 100%;
// }
// .font{
// 	flex: 9;
// }
// }
</style>
