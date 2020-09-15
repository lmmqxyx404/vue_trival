<template>
  <div id="app">
    <a-input placeholder="请输入任务" class="my_ipt" :value="inputValue" @change="handleInputChanged" />
    <a-button type="primary" @click="addItemToList">添加事项</a-button>

    <a-list bordered :dataSource="infoList" class="dt_list">
      <a-list-item slot="renderItem" slot-scope="item">
        <!-- 复选框 -->
        <a-checkbox :checked="item.done" @change="(e)=>{statusChanged(e,item.id)}">{{item.info}}</a-checkbox>
        <!-- 删除链接 -->
        <a slot="actions" @click="removeItem(item.id)">删除</a>
      </a-list-item>

      <!-- footer区域 -->
      <div slot="footer" class="footer">
        <!-- 未完成的任务个数 -->
        <span>{{unDoneLength}}条剩余</span>
        <!-- 操作按钮 -->
        <a-button-group>
          <a-button :type="viewKey==='all'?'primary':'default'" @click="changeList('all')">全部</a-button>
          <a-button :type="viewKey==='undone'?'primary':'default'" @click="changeList('undone')">未完成</a-button>
          <a-button :type="viewKey==='done'?'primary':'default'" @click="changeList('done')">已完成</a-button>
        </a-button-group>
        <!-- 把已经完成的任务清空 -->
        <a @click="clean">清除已完成</a>
      </div>
    </a-list>
    <hr>
    <router-link to="/welcome">goto</router-link>
    <router-link to="/">return</router-link>
    <h1><router-link to="/table">table</router-link></h1>
    <h2><router-link to="/treedata">treedata</router-link></h2>
    <h2><router-link to="/select">select</router-link></h2>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'app',
  data() {
    return {
      msg: 'testword'
    }
  },
  created() {
    this.$store.dispatch('getList')
  },
  computed: {
    ...mapState(['list', 'inputValue', 'viewKey']),
    ...mapGetters(['unDoneLength', 'infoList'])
  },
  methods: {
    handleInputChanged(arg) {
      console.log(arg.target.value)
      this.$store.commit('setInputValue', arg.target.value)
    },
    addItemToList() {
      if (this.inputValue.trim().length <= 0) {
        return this.$message.warning('the content is empty')
      }
      this.$store.commit('addItem')
    },
    removeItem(id) {
      this.$store.commit('removeItemById', id)
    },
    statusChanged(e, id) {
      console.log(e.target.checked)
      const parameter = {
        id: id,
        status: e.target.checked
      }
      this.$store.commit('changeStatus', parameter)
    },
    clean() {
      this.$store.commit('cleanDone')
    },
    changeList(key) {
      console.log(key)
      this.$store.commit('changeViewKey', key)
    }
  }
}
</script>

<style scoped>
#app {
  padding: 10px;
}

.my_ipt {
  width: 500px;
  margin-right: 10px;
}

.dt_list {
  width: 500px;
  margin-top: 10px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
