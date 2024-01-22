<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-3">
        <div class="border p-32 mb-32 rounded-4">
          <div class="text-center">
            <h1 class="fs-2 mb-16 fw-bold">恭喜完成開課</h1>
            <span class="material-symbols-outlined d-block fs-120 mb-16 text-success">
              check_circle
            </span>
          </div>
          <div class="d-flex justify-content-between">
            <router-link class="btn btn-outline-primary rounded-pill" to="/teacher/stepOne">繼續開課</router-link>
            <router-link class="btn btn-primary rounded-pill" to="/courses">前往課程</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'pinia'
import bannerStore from '@/stores/bannerStore'
export default {
  data () {
    return {}
  },
  methods: {
    ...mapActions(bannerStore, ['getBannerInfo'])
  },
  computed: {},
  created () {
    this.getBannerInfo(
      new URL('../../assets/images/title-banner.jpg', import.meta.url).href,
      '完成',
      'COMPLETE',
      '準備好了!您的課程將準備好在平台上展示。'
    )
  }
}
</script>
