<template>
  <div>
    <h5>{{title}}</h5>

    <input type="text" v-model="watchVal">

    <input type="text" v-model="watchReactive">
  </div>
</template>
<script lang="ts">
import {ref, reactive, toRefs, watch} from 'vue'
export default {
  setup(){
    const watchVal = ref("aaa");
    const obj = reactive({
      title: "watch",
      watchReactive: "watchReactive"
    })
    // 通过函数return一个新值来监听使用reactive定义的值
    watch([watchVal, () => obj.watchReactive], ([newVal, newVal_watchReactive],[oldVal, oldVal_watchReactive]) => {
      console.log(`newVal: ${newVal}`);
      console.log(`oldVal: ${oldVal}`);
      console.log(`newVal_watchReactive: ${newVal_watchReactive}`);
      console.log(`oldVal_watchReactive: ${oldVal_watchReactive}`);
    })
    const data = toRefs(obj);
    
    return {...data, watchVal}
  },
  
}
</script>