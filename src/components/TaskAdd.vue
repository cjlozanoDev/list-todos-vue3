<template>
  <form @submit.prevent="addTask">
    <input
      type="text"
      v-model="task"/>
    <input type="submit" value="Add task" />
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'TaskAdd',
  setup(props, { emit }) {
    const task = ref('')
    
    function addTask() {
      emit('add-task', task.value)
      task.value = ''
    }

    return { task, addTask }
  }

  // Vue

  // data() {
  //   return {
  //     task: '' 
  //   }
  // },
  // methods: {
  //   addTask() {
  //     this.$emit('add-task', this.task)
  //     this.task = ''
  //   }
  // }
}
</script>