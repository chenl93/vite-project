<template>
  <div>
    <h5>{{title}}</h5>
  </div>
</template>
<script lang="ts">
import {defineComponent, reactive, toRefs, onBeforeMount, onMounted} from 'vue'
export default defineComponent({
  setup() {
    console.log(`setup--`);
    const data = reactive({
      title: "Lifecycle Hooks"
    });
    const resData = toRefs(data)

    onBeforeMount(() => {
      console.log(`onBeforeMount--`);
    }),

    onMounted(() => {
      console.log(`onMounted--`);
    })
    return {...resData}
  },
  
})
</script>