<template>
  <div>
    <ul>
      <li
        v-for="(task, $index) in tasks"
        :key="$index">
        {{ task.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TaskList',
  props: {
    tasks: {
      type: Array,
      default: () => []
    }
  }
}
</script>