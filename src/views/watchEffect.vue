<template>
  <div>
    <h5>{{title}}</h5>

    <input type="text" v-model="watchVal">

  </div>
</template>
<script lang="ts">
import {ref, reactive, toRefs, watchEffect} from 'vue'
export default {
  setup(){
    const watchVal = ref(0);
    const obj = reactive({
      title: "watchEffect",
    })
    watchEffect(() => {
      console.log(`watchVal: ${watchVal.value} `);
      console.log(`obj.title: ${obj.title}`);
    })
    const data = toRefs(obj);
    
    return {...data, watchVal}
  },
  
}
</script>