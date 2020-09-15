<template>
  <div id="test">
    {{data}}
    <a-select
      default-value
      style="width: 120px"
      @change="handleChange"
      allowclear
      placeholder="please select"
    >
      <a-select-option v-for="(value,key) in options" :key="key" :value=value.value>{{value.value}}</a-select-option>
    </a-select>
    <a-select default-value="lucy" style="width: 120px" disabled>
      <a-select-option value="lucy">Lucy</a-select-option>
    </a-select>
    <a-select default-value="lucy" style="width: 120px" loading>
      <a-select-option value="lucy">Lucy</a-select-option>
    </a-select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: 'This is a select component',
      options: [{ value: 'asd' }, { value: 'qwe' }, { value: 'zxc' }]
    }
  },
  created() {
    console.log('created')
  },
  methods: {
    handleChange(val) {
      this.data = val
    }
  }
}
</script>
<style scoped>
</style>
