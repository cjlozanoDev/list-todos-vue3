// import taskList from "@/api/task.js"
import store from '@/store.js'
import { computed, reactive, toRefs, watch } from 'vue'

export default function useTasksSpace() {
  const tasksData = reactive({
    tasks: store.state.tasks,
    search: '',
    filteredTasks: computed(() => {
      return tasksData.tasks.filter(task => task.title.includes(tasksData.search))
    })
  })

  function addTask(task) {
    // tasksData.tasks.push({
    //   title: task,
    //   completed: false
    // })
   console.log(task)
    store.dispatch('checkTaskProfanity', {
      title: task,
      completed: false
    }).catch(err => alert(err) )
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