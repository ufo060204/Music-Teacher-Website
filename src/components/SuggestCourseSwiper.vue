<template>
  <div class="row mb-32" >
    <div class="col-12 col-lg-8">
      <p class="fs-4 mb-16 fw-bold">猜你喜歡</p>
      <div class="row row-cols-1 row-cols-lg-3 overflow-auto">
        <div v-for="course in this.suggestCourses" :key="course.data.courseId" class="col">
          <router-link :to="`/course/${course.data.courseId}`">
            <div class="card course-card rounded-4 shadow h-100">
              <div class="position-relative overflow-hidden rounded-top-4">
                <img v-if="course.data.courseImg" class="h-180px w-100 transition" :src="course.data.courseImg" alt="課程圖片">
                <img v-else class="h-180px w-100 transition" src="https://www.ils.com.tw/zh/Up_files/webskin/RWD/include/images/type3album_blank.png" alt="課程預設圖片">
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { mapState, mapActions } from 'pinia'
import coursesStore from '../stores/coursesStore'
import userStore from '../stores/userStore'

export default {
  data () {
    return {
    }
  },
  components: {
  },
  computed: {
    ...mapState(coursesStore, ['suggestCourses']),
    ...mapState(userStore, ['collectionStatus'])
  },
  methods: {
    ...mapActions(coursesStore, ['getSuggestCourses']),
    ...mapActions(userStore, ['toggleCollection'])
  },
  created () {
    // this.getSuggestCourses()
  }
}
</script>

<style lang="scss" scoped>
.bookmark-icon {
      height: 0;
      transition: height 0.5s !important;
    }
  .course-card-title {
    &::before {
      content: "";
      position: absolute;
      height: 5px;
      background: #ff715f;
      width: 35px;
      top: -0.75rem;
      border-radius: 3px;
    }
  }
  .course-card {
    &:hover {
      img {
        transform: scale(1.2);
      }
      .bookmark-icon {
        height: 24px !important;
        transition: height 0.5s !important;
      }
    }
  }
</style>
