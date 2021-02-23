<template>
  <div>
    <h1> Tasks </h1>
    <hr />
    <h6> Todas las tareas </h6>
    <ul>
      <li
        v-for="(task, $index) in tasks"
        :key="$index">
        {{ task.title }}
      </li>
    </ul>
    <h6> Tareas completadas </h6>
    <li
        v-for="(task, $index) in completedTasks"
        :key="$index">
        {{ task.title }}
      </li>
  </div>
</template>

<script>
import store from '@/store.js'

export default {
  name: 'TaskList',
  props: {
    tasks: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    completedTasks() {
      return store.getters.completedTasks
    }
  }
}
</script>