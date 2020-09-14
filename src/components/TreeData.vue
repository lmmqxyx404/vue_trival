<template>
  <div id="test">
    {{data}}
    <a-tree-select
      v-model="data"
      show-search
      :tree-data="treedata"
      placeholder="Please select"
      allow-clear
      :dropdown-style="{ maxHeight: '200px', overflow: 'auto' }"
      :tree-default-expand-all="isExpanded"
      @select="isSelected"
    ></a-tree-select>
  </div>
</template>
<script>
import treedata from './treedata'
export default {
  data() {
    return {
      data: 'Hello Vue',
      treedata: treedata.treedata,
      isExpanded: false
    }
  },
  methods: {
    show() {
      console.log(this.treedata)
    },
    isSelected() {
      console.log('it is selected')
    }
  },
  mounted() {
    this.show()
  }
}
</script>

<style scoped>
</style>
