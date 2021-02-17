<template>
  <input
    type="search"
    @input="sendSearched"
    placeholder="Start searching..."/>
</template>

<script>
export default {
  name: 'TaskSearcher',
  setup(props, context) {
    function sendSearched(event) {
      context.emit('update:search', event.target.value)
    }
    return { sendSearched }      
  }

  // Vue 2
  // methods: {
  //   sendSearched(event) {
  //     this.$emit('update:search', event.target.value)
  //   }
  // }
}
</script>