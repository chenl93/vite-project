<template>
    <div>
      {{double}}
        <h5>count:{{count}}</h5>
        <div @click="addNum">点击num+1</div>
        <div @click="reduceNum">点击num-1</div>
    </div>
</template>
<script setup>
import { ref,computed } from '@vue/reactivity'
import { useStore } from 'vuex'
const store =  useStore ()

const count = computed (()=>{
  return store.state.count
})
const addNum = () => {
  store.dispatch('increment')
}
const double = computed (()=>{
  return store.getters.double;
})
</script>
<style lang="scss">
  h5{
    color: #ff0000;
  }
</style>