<template>
  <div>
    <h5>{{title}}</h5> 
    <button @click="showToast" >toast</button>
    <button @click="showModal" >modal</button>

    <teleport to='#teleport-target' >
      <div v-if="visible" class="toast-wrap">
        <div class="toast-msg">我是一个toast</div>
      </div>
    </teleport>

    <teleport to='#modal-container'>
      <div class="modal-wrap" v-if="modalVisible" >
        <div class="modal-content">
          <h3>custom header</h3>
          <button @click="closeModal" >close</button>
        </div>
      </div>
    </teleport>
  </div>
</template>
<script lang="ts">
import {ref} from 'vue'
export default {
  setup(props) {
    const title = ref("Teleport")
    const visible = ref(false)
    const modalVisible = ref(false)
    let timer;
    const showToast = () => {
      visible.value = true;
      clearTimeout(timer)
      timer = setTimeout(() => {
        visible.value = false
      }, 2000);
    }

    const showModal = () => {
      modalVisible.value = true
    }
    const closeModal = () => {
      modalVisible.value = false
    }
    return {title, visible, showToast, modalVisible, showModal, closeModal}
  }
  
}
</script>
<style lang="scss">
  .toast-wrap{
    display: inline-block;
    background: rgba(0, 0, 0, 0.75);
    padding: 10px;
    color: #fff;
    border-radius: 10px;
  }
  .modal-wrap{
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    width: 100vw;
    height: 100vh;
    .modal-content{
      z-index: 1;
      width: 300px;
      background: #fff;
      color: #000;
      margin: 20% auto;
    }
  }
</style>