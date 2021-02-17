import taskList from "@/api/task.js"

import { computed, reactive, toRefs, watch } from 'vue'

export default function useTasksSpace() {
  const tasksData = reactive({
    tasks: taskList,
    search: '',
    filteredTasks: computed(() => {
      return tasksData.tasks.filter(task => task.title.includes(tasksData.search))
    })
  })

  function addTask(task) {
    tasksData.tasks.push({
    title: task,
    completed: false
   })
  }
  
  const { tasks, search } = toRefs(tasksData)

  watch(() => {
    console.log(tasks.value.length)
  })
  
  watch(search, (newSearch, oldSearch ) => {
    console.log(`Antes buscabas ${oldSearch} y ahora buscas ${newSearch}`)
  })

  return { ...toRefs(tasksData), addTask }

}