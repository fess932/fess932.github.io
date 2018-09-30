<template>
  <div class="about">
   <sweet-modal icon="success" ref="modal" title="New Modal">
      Success!
      <sweet-button slot="button">That's fine!</sweet-button>
    </sweet-modal>
    <button class="btn btn-primary" @click="open">Open sesame!</button>
  </div>
</template>

<script>
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
export default {
  components: {
    SweetModal,
    SweetModalTab
  },
  name: 'About',
  methods: {
    open: function () {
      this.$refs.modal.open()
    }
  }
}
</script>

