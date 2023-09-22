<template>
  <section>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8 mb-32">
          <v-form
            ref="form"
            class="fw-bold"
            v-slot="{ errors }"
            @submit="goStepThree"
          >
            <div class="mb-12">
              <label for="intro" class="form-label">課程介紹</label>
              <textarea
                id="intro"
                name="課程介紹"
                class="form-control"
                :class="{ 'is-invalid': errors['課程介紹'] }"
                placeholder="請輸入課程介紹"
                rules="required|max:300"
                cols="30"
                rows="10"
                v-model="teacherData.courseIntro"
              ></textarea>
              <error-message
                name="課程介紹"
                class="invalid-feedback"
              ></error-message>
            </div>
            <div class="row align-items-center mb-12">
              <div class="col-lg-6 mb-4 mb-lg-0">
                <label for="courseImg" class="form-label mb-0" accept="image/png ,image/jpg">上傳一張課程封面照</label>
              </div>
              <div class="col-lg-6">
                <input
                  id="courseImg"
                  name="課程封面照"
                  class="form-control"
                  :class="{ 'is-invalid': errors['課程封面照'] }"
                  rules="required"
                  type="file"
                  @change="updateImg('course', $event)">
                  <error-message
                    name="課程封面照"
                    class="invalid-feedback"
                  ></error-message>
              </div>
            </div>
            <div class="text-center mb-16">
              <img class="img-fluid" v-if="this.teacherData.courseImg" :src="this.teacherData.courseImg" alt="課程照片">
            </div>
            <div class="row justify-content-between">
              <div class="col-12 col-lg-8 d-flex justify-content-between w-100">
                <router-link to="/teacher/stepOne" class="btn btn-outline-primary rounded-pill px-48 lh-lg">
                  <i class="bi bi-arrow-left"></i>上一頁
                </router-link>
                <button type="submit" class="btn btn-primary d-block rounded-pill px-48 lh-lg">下一步<i class="bi bi-arrow-right"></i></button>
              </div>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapWritableState } from 'pinia'
import teacherStore from '@/stores/teacherStore'
import bannerStore from '../../stores/bannerStore'
export default {
  data () {
    return {
    }
  },
  methods: {
    goStepOne () {
      this.$router.push('/teacher/stepOne')
    },
    goStepThree () {
      this.$router.push('/teacher/stepThree')
    },
    ...mapActions(teacherStore, ['updateImg', 'beforeUpdate', 'imgHandle']),
    ...mapActions(bannerStore, ['getBannerInfo'])
  },
  computed: {
    ...mapWritableState(teacherStore, ['teacherData'])
  },
  created () {
    this.getBannerInfo(
      new URL('/title-banner.jpg', import.meta.url).href,
      '課程介紹',
      'INTRODUCE',
      '介紹課程內容，為學生營造期待感'
    )
  }
}
</script>
