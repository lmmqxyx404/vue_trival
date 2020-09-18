<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
    }
  },
  created() {
    console.log('root component has created')
  }
}
</script>

<style scoped>

</style>
