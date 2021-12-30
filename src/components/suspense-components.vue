<template>
  <div>
    <pre v-html="result.content"></pre>
  </div>
</template>
<script lang="ts">
import {ref} from 'vue'
import axios from 'axios'
export default {
  setup(props) {
    let result = ref([]);
    axios.get(" https://cnodejs.org/api/v1/topics").then((res)=>{
      result.value = res.data.data[0]
    });
    
    return {result}
  }
}
</script>