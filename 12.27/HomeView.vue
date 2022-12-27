<template>
    <div class=''>
      <p>{{point}}</p>
      <p>{{point.x}}</p>
      <p>{{point.y}}</p>
    </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
 import { useRouter, useRoute } from 'vue-router';
 import usePoint from '../hooks/UserPointer.js'
 export default {
setup(props, ctx) {
const store = useStore();
const router = useRouter();
const route = useRoute();
const point=usePoint()
console.log(point,"point");
const data = reactive({});
return { ...toRefs(data) ,point};
 },
 };
</script>

<style lang='scss' scoped>

</style>

