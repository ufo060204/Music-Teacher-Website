<template>
  <section class="mb-32">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-8 mb-16 mb-lg-0">
          <div class="pe-xl-48">
            <img class="h-lg-500 w-100 object-fit-cover rounded-4" :src="teacherData.courseImg" alt="課程圖片">
          </div>
        </div>
        <div class="col-12 col-lg-4 d-flex flex-column">
          <h1 class="fs-2 fw-bold mb-16">{{ teacherData.name }}</h1>
          <p class="text-grey-bold">{{ teacherData.courseIntro }}</p>
        </div>
      </div>
    </div>
  </section>
  <section class="mb-16">
    <div class="container">
      <div class="row align-items-start">
        <div class="col-12 col-lg-8 mb-16 mb-lg-0">
          <div class="row align-items-center mb-16">
            <div class="col-auto cursor-pointer">
              <img v-if="userData.userPhoto" class="h-100px w-100px rounded-circle object-fit-cover" :src="userData.userPhoto" alt="老師照片">
              <img v-else class="h-80px w-80px rounded-circle object-fit-cover" src="../../assets/images/default-user-photo.png" alt="老師照片">
            </div>
            <div class="col-auto fs-2">{{ userData.displayName }}</div>
          </div>
          <div class="row mb-32">
            <div class="col-12 col-lg-10">{{ userData.userIntro }}</div>
          </div>
          <p class="fs-4 mb-16 fw-bold">關於課程</p>
          <div class="row g-16">
            <div class="col-auto">
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-1 me-8">timer</span>
                <div>
                  <p class="text-grey-bold fs-7">課程時長</p>
                  <p class="fs-6 fw-bold">{{ teacherData.time }}分鐘</p>
                </div>
              </div>
            </div>
            <div class="col-auto">
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-1 me-8">group</span>
                <div>
                  <p class="text-grey-bold fs-7">被購買數</p>
                  <p class="fs-6 fw-bold"> 0 次</p>
                </div>
              </div>
            </div>
            <div class="col-auto">
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-1 me-8">map</span>
                <div>
                  <p class="text-grey-bold fs-7">上課地點</p>
                  <p class="fs-6 fw-bold">{{ teacherData.location }}</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-xl-auto">
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-1 me-8">school</span>
                <div>
                  <p class="text-grey-bold fs-7">上課方式</p>
                  <span class="fw-bold" v-if="teacherData.classMode[0]">{{ teacherData.classMode[0] }}</span>
                  <span class="fw-bold" v-if="teacherData.classMode[1]">{{ teacherData.classMode[1] }}</span>
                  <span class="fw-bold" v-if="teacherData.classMode[2]">{{ teacherData.classMode[2] }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4 position-sticky top-100px">
          <div class="p-32 border rounded-4">
            <h4 class="border-bottom pb-24 mb-24">購買單堂課程</h4>
            <div class="mb-16">
              <span class="fs-5 me-16">售價</span>
              <span class="fs-1">NT$ {{ teacherData.price }}</span>
            </div>
            <div class="d-flex justify-content-between">
              <button type="button" class="btn btn-outline-primary w-75 rounded-pill">立即購買</button>
              <button type="button" class="btn btn btn-primary rounded-pill">
                <span class="material-symbols-outlined fs-3 align-middle">shopping_cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="container mb-32">
    <div class="row justify-content-between">
      <div class="col-12 col-lg-8 d-flex justify-content-between w-100">
        <router-link to="/teacher/stepTwo" class="btn btn-outline-primary rounded-pill px-48 lh-lg">
          <i class="bi bi-arrow-left"></i>上一頁
        </router-link>
        <button type="button" class="btn btn-primary d-block rounded-pill px-48 lh-lg" @click="createCourseConnect()">下一步<i class="bi bi-arrow-right"></i></button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import teacherStore from '@/stores/teacherStore'
import userStore from '@/stores/userStore'
import bannerStore from '@/stores/bannerStore'
import coursesStore from '@/stores/coursesStore'

export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(userStore, ['getUid', 'getUserData']),
    ...mapActions(teacherStore, ['setData', 'setCourseData', 'createCourse', 'createCourseConnect']),
    ...mapActions(coursesStore, ['getData']),
    ...mapActions(bannerStore, ['getBannerInfo']),
    goStepTwo () {
      this.$router.push('/teacher/stepTwo')
    },
    goStepFour () {
      this.$router.push('/teacher/stepFour')
    },
    getCoursesNum () {
      this.getData()
    }
  },
  computed: {
    ...mapWritableState(teacherStore, ['teacherData']),
    ...mapState(userStore, ['userData', 'isMember', 'uid', 'checkMemberObserver']),
    ...mapState(teacherStore, ['teacherUid']),
    ...mapState(coursesStore, ['newCoursesNum', 'coursesNum'])
  },
  created () {
    this.getBannerInfo(
      new URL('../../assets/images/title-banner.jpg', import.meta.url).href,
      '頁面預覽',
      'PREVIEW',
      '預覽課程頁面，確保效果完美呈現'
    )
  }
}
</script>
