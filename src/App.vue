<template>
  <h1> Hola desde vue 3 </h1>
  <TaskSearcher
    v-model:search="search"/>
  <hr>
  
  <TaskList :tasks="filteredTasks"/>
  <hr>

  <TaskAdd @add-task="addTask"/>
</template>

<script>
import useTasksSpace from './use/tasksSpace.js'
import TaskSearcher from './components/TaskSearcher'
import TaskList from './components/TaskList'
import TaskAdd from './components/TaskAdd'


export default {
  name: 'App',
  components: {
    TaskSearcher,
    TaskAdd,
    TaskList
  },
  setup() {
    return { ...useTasksSpace() }
  }
  // Vue 2
  // created() {
  //   this.tasks = tasks
  // },
  // data() {
  //   return {
  //     search: '',
  //     tasks: []
  //   }
  // },
  // computed: {
  //   filteredTasks() {
  //     return this.tasks.filter(task => task.title.includes(this.search))
  //   }
  // },
  // methods: {
  //   addTask(task) {
  //     this.tasks.push({
  //       title: task,
  //       completed: false
  //     })
  //   }
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
