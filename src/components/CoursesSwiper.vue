<template>
  <div>
    <swiper
      :loop="true"
      :slidesPerView="1"
      :spaceBetween="20"
      :freeMode="true"
      :pagination="{clickable: true}"
      navigation
      :breakpoints="{
      '768': {
        slidesPerView: 2,
        spaceBetween: 24,
        },
      '992': {
        slidesPerView: 3,
        spaceBetween: 24,
        },
      '1200': {
        slidesPerView: 4,
        spaceBetween: 24,
        },
      }"
      class="mySwiper"
    >
      <swiper-slide v-for="(course) in popularCourses" :key="course.data.courseId" class="mb-32">
        <router-link :to="`/course/${course.data.courseId}`">
          <div class="card course-card rounded-4 shadow h-100">
            <div class="position-relative overflow-hidden rounded-top-4">
              <img v-if="course.data.courseImg" class="w-100 h-200px transition" :src="course.data.courseImg" alt="課程圖片">
              <img v-else class="w-100 h-200px transition" src="https://www.ils.com.tw/zh/Up_files/webskin/RWD/include/images/type3album_blank.png" alt="課程預設圖片">
              <span @click.prevent="toggleCollection(course.data.courseId)" class="material-icons-outlined position-absolute bottom-0 end-0 text-primary bookmark-icon" :class="{ 'h-auto' : this.collectionStatus(course.data.courseId) === 'bookmark', 'h-0' : this.collectionStatus(course.data.courseId) === 'bookmark_border' }" title="加入 / 移除收藏">
                {{ this.collectionStatus(course.data.courseId) }}
              </span>
            </div>
            <div class="card-body d-flex flex-column">
              <h2 class="fs-5 fw-bold d-flex mb-4">{{ course.data.name }}</h2>
              <h3 class="fs-6 text-secondary mb-20">by {{ course.data.teacherName }}</h3>
              <ul class="d-flex text-secondary mb-auto">
                <li class="d-flex align-items-center me-8 position-relative course-card-title">
                  <span class="material-symbols-outlined fs-6 me-4 lh-24">
                    timer
                  </span>
                  <p>{{ course.data.time }} 分鐘</p>
                </li>
                <li class="d-flex align-items-center me-8">
                  <span class="material-symbols-outlined fs-6 me-4 lh-24">
                    map
                  </span>
                  <p>{{ course.data.location }}</p>
                </li>
                <li class="d-flex align-items-center me-8">
                  <span class="material-symbols-outlined fs-6 me-4 lh-24">
                    group
                  </span>
                  <span v-if="course.data.buyer.length === 0">0</span>
                  <span v-else>{{ course.data.buyer.length }}</span>
                </li>
              </ul>
              <span class="fs-5 fw-bold">NT {{ course.data.price }}</span>
            </div>
          </div>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import { Navigation, FreeMode, Pagination, Scrollbar } from 'swiper'
import { mapState, mapActions } from 'pinia'
import coursesStore from '../stores/coursesStore'
import userStore from '../stores/userStore'

export default {
  components: {
    Swiper, SwiperSlide
  },
  computed: {
    ...mapState(coursesStore, ['popularCourses']),
    ...mapState(userStore, ['collectionStatus'])
  },
  methods: {
    ...mapActions(coursesStore, ['getAllCoursesAndTeacher', 'getPopularCourses', 'getTopTenCourses'])
  },
  created () {
    this.getPopularCourses()
  }
}
</script>

<style lang="scss" scoped>

</style>
