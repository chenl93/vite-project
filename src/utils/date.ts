import {reactive, toRefs} from 'vue'
const data = reactive({
  nowTime: "00:00:00",
  getNowTime: () => {
    const now = new Date();
    const hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours()
    const minu = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()
    const sec = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds()
    data.nowTime = `${hour}:${minu}:${sec}`
    setTimeout(() => {
      data.getNowTime()
    }, 1000);
  }
})
const resData = toRefs(data)
export default resData
