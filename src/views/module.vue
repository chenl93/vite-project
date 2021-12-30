<template>
  <div>
    <button @click="getNowTime">时间</button>
    <p>{{nowTime}}</p>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import date from '../utils/date'
export default {
  setup(){
    return {...date}
  }
}
</script>