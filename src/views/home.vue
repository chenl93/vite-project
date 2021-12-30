<template>
  <div>
    <h5>ref</h5>
    <button v-for="(item, index) in studentArr" :key="index" @click ="selectStuFun(index)">{{index}}:{{item}}</button>
    <hr>
    <span>{{selectPeople}}</span>

    <br>
    <h5>reactive</h5>
    <button v-for="(item, index) in data.studentArr2" :key="index" @click ="data.selectStuFun2(index)">{{index}}:{{item}}</button>
    <hr>
    <span>{{data.selectPeople2}}</span>

    <br>
    <h5>toRefs</h5>
    <button v-for="(item, index) in studentArr2" :key="index" @click ="selectStuFun2(index)">{{index}}:{{item}}</button>
    <hr>
    <span>{{selectPeople2}}</span>

  </div>
</template>
<script lang="ts">
  import { defineComponent,ref, reactive, toRefs } from 'vue'
  import axios from '../utils/axios'

  export default defineComponent({
    setup() {
      const studentArr = ref(["张三", "李四" , "王五"]);
      const selectPeople = ref("");
      const selectStuFun = (index: number) => {
        selectPeople.value = studentArr.value[index]
      }

      const data = reactive({
        studentArr2: ["张三", "李四" , "王五"],
        selectPeople2: "",
        selectStuFun2: (index: number) => {
          data.selectPeople2 = data.studentArr2[index]
        }
      })

      const resData = toRefs(data)

      axios
        .get('/users/XPoet')
        .then((res) => {
          console.log('res: ', res)
        })
        .catch((err) => {
          console.log('err: ', err)
        })
      
      return {studentArr, selectPeople, selectStuFun, data, ...resData}
    }
  })
</script>
