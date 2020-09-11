<template>
  <div id="test">
    {{data}}
    <a-tree-select
      v-model="data"
      show-search
      :tree-data="treedata"
      :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
      placeholder="Please select"
      allow-clear
      tree-default-expand-all
    ></a-tree-select>
  </div>
</template>
<script>
import treedata from './treedata'
export default {
  data() {
    return {
      data: 'Hello Vue',
      treedata: treedata.treedata
    }
  },
  methods: {
    show() {
      console.log(this.treedata)
    }
  },
  mounted() {
    this.show()
  }
}
</script>

<style scoped>
</style>
