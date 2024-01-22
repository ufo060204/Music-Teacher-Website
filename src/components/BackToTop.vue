<template>
  <div :class="{'d-none' : !goTopIcon }">
    <a href="#" @click.prevent="goTop">
      <span class="material-symbols-outlined position-fixed fs-40 bg-white border border-primary rounded-circle end-20px bottom-10px z-index-3">
        expand_less
      </span>
    </a>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import windowStore from '../stores/windowStore'
export default {
  computed: {
    ...mapState(windowStore, ['goTopIcon'])
  },
  methods: {
    ...mapActions(windowStore, ['scroll', 'goTop'])
  },
  mounted () {
    this.scroll()
  }
}
</script>

<style lang="scss" scoped>
</style>
