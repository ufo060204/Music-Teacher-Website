<template>
  <div class="mt-66 my-32">
    <div class="container">
      <BannerArea class="mb-24"/>
      <MyCalendar />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import bannerStore from '@/stores/bannerStore'

import BannerArea from '@/components/BannerArea.vue'
import MyCalendar from '@/components/MyCalendar.vue'
import userStore from '@/stores/userStore'

export default {
  components: {
    BannerArea, MyCalendar
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(userStore, ['getUserAllJoinStudyTime']),
    ...mapActions(bannerStore, ['getBannerInfo'])
  },
  computed: {
  },
  created () {
    this.getUserAllJoinStudyTime()
    this.getBannerInfo(
      new URL('../../assets/images/title-banner.jpg', import.meta.url).href,
      '行事曆',
      'Calendar',
      '掌握課程時間，效率學習'
    )
  }
}
</script>
<style lang="scss" scoped>
</style>
