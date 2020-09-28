<template>
  <div>
    <a-button @click="showConfirm"> Confirm </a-button>
    <a-button type="dashed" @click="showDeleteConfirm"> Delete </a-button>
    <a-button type="dashed" @click="showPropsConfirm">
      With extra props
    </a-button>
    <a-button type="dashed" @click="buildModal"> build a modal </a-button>
    <a-button type="dashed" @click="buildConfirmModal">
      build a confirm modal
    </a-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false
    }
  },
  methods: {
    showConfirm() {
      this.$confirm({
        title: 'Do you Want to delete these items?',
        content: (h) => <div style="color:red;">Some descriptions</div>,
        onOk() {
          console.log('OK')
        },
        onCancel() {
          console.log('Cancel')
        },
        class: 'test'
      })
    },

    showDeleteConfirm() {
      this.$confirm({
        title: 'Are you sure delete this task?',
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          console.log('OK')
        },
        onCancel() {
          console.log('Cancel')
        }
      })
    },
    showPropsConfirm() {
      // const that = this
      this.$confirm({
        title: 'Are you sure delete this task?',
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        okButtonProps: {
          props: { loading: true }
        },
        cancelText: 'No',
        onOk() {
          console.log('OK')
        },
        onCancel() {
          console.log(this.$confirm)
          console.log('Cancel')
        }
      })
    },
    destroyModal(modal) {
      modal.destroy()
    },
    buildModal() {
      let secondsToGo = 5
      console.log(secondsToGo)
      const modal = this.$success({
        okButtonProps: {
          props: { loading: false }
        },
        title: 'This is a notification message',
        content: `This modal will be destroyed after ${secondsToGo} second.`,
        onOk() {
          modal.update({
            okButtonProps: {
              props: { loading: true, disabled: true }
            }
          })
        },
        onCancel() {
          console.log('hello')
        }
      })
      const interval = setInterval(() => {
        secondsToGo -= 1
        this.flag = !this.flag
        modal.update({
          content: `This modal will be destroyed after ${secondsToGo} second.`,
          okButtonProps: {
            props: { loading: this.flag }
          }
        })
      }, 1000)
      setTimeout(() => {
        clearInterval(interval)
        modal.destroy()
      }, secondsToGo * 1000)
    },
    async buildConfirmModal() {
      const that = this
      console.log('asdf')
      const modal = this.$confirm({
        okButtonProps: {
          props: { loading: this.flag }
        },
        cancelText: 'qwer',
        onOk() {
          that.flag = !that.flag
          modal.update({
            okButtonProps: {
              props: { loading: { delay: 3 } }
            }
          })
        },
        onCancel() {
          that.flag = !that.flag
          modal.update({
            okButtonProps: {
              props: { loading: false }
            }
          })
        },
        update() {

        }
      })
    }
  }
}
</script>
