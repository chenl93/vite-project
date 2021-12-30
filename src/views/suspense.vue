<template>
  <div>
    <h5>{{title}}</h5>

    <Suspense>
      <template #default>
        <div>
          请求成功显示
          <suspenseComponents></suspenseComponents>
        </div>
      </template>

      <template #fullback>
        <div>
          请求没有成功显示
        </div>
      </template>
    </Suspense>
  </div>
</template>
<script lang="ts">
import {ref} from 'vue'
import suspenseComponents from '../components/suspense-components.vue'
export default {
  components:{
    suspenseComponents
  },
  setup(props) {
    const title = ref("异步请求组件Suspense");
    
    
    return {title}
  }
}
</script>