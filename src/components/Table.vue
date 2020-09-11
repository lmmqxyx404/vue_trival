<template>
<!-- slot标签一般是在组件定义时使用。
    在调用的时候，默认放在template中。
    slot标签的中的文本就是default text.
    如果有了name属性，那么在调用时，需要使用v-slot:name正确的将父组件中的内容嵌套到原始组件上。注意作用域的影响
    在原始组件中使用v-bind绑定一个属性user，相当于暴露一个属性给父组件。父组件定义一个对象，father,那么father.user.fatherProp传值，子组件就可以，user.fatherProp调用
    在旧版用法中2.6以前，slot-coped可以在子组件中接收父组件作用域的对象，
 -->
  <a-table :columns="columns" :data-source="data">
    <!-- 此时的name来源于columns的第一项之中的scopedSlots之中的属性对应的值 -->
    <a slot="name" slot-scope="text">{{ text }}</a>
    <span slot="uiop">
      <a-icon type="smile-o" />Name
    </span>
    <span slot="tags" slot-scope="tags">
      <a-tag
        v-for="tag in tags"
        :key="tag"
        :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
      >{{ tag.toUpperCase()+' test' }}</a-tag>
    </span>
    <span slot="action" slot-scope="text, record">
      <a>Invite 一 {{ record.name }}</a>
      <a-divider type="vertical" />
      <a>Delete</a>
      <a-divider type="vertical" />
      <a class="ant-dropdown-link">
        More actions
        <a-icon type="down" />
      </a>
    </span>
  </a-table>
</template>
<script>
/* antd table组件中columes数组描述每一列的数据特性
title指的是标题
必须得明白Columns中的各个对象的属性名与值
scopedSlots指定该列可以传递的slot对象
*/
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'uiop', test: 'qwer' },
    scopedSlots: { customRender: 'name' },
    ellipsis: true,
    width: 80
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' }
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' }
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]

export default {
  data() {
    return {
      data,
      columns
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
