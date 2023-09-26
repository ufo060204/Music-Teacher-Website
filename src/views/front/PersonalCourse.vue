<template>
  <div class="mt-66">
    <div class="bg-content">
      <div class="container">
        <div class="row align-items-center py-24 py-lg-48">
          <div class="col-12 col-lg-6 mb-4 mb-lg-0">
            <div class="d-flex align-items-center mb-8 mb-lg-0">
              <div style="height: 100px; width: 100px;" class="position-relative">
                <img v-if="userData.userPhoto" class="w-100 h-100 object-fit-cover rounded-circle" :src="userData.userPhoto" alt="使用者照片">
                <img v-else class="w-100 h-100 object-fit-cover rounded-circle" src="/default-user-photo.png" alt="使用者照片">
              </div>
              <h1 class="ms-11">{{ userData.displayName }}</h1>
            </div>
          </div>
          <div class="col-12 col-lg-6 ms-auto">
            <div class="row justify-content-between align-items-center">
              <div class="col-auto text-center">
                <h3 class="fs-6 text-gray-600">參加課程</h3>
                <p class="fs-1 text-primary">{{ coursesJoined.length }}</p>
              </div>
              <div class="col-auto text-center">
                <h3 class="fs-6 text-gray-600">已開課程</h3>
                <p class="fs-1 text-primary">{{ coursesCreated.length }}</p>
              </div>
              <div class="col-auto text-center">
                <h3 class="fs-6 text-gray-600">目前收藏</h3>
                <p class="fs-1 text-primary">{{ coursesCollection.length }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="py-24">
        <div class="row g-0 nav align-items-center mb-4" role="tablist">
          <div class="col col-md-3">
            <a href="#" class="nav-link active fs-6 fs-lg-5 fw-bold border-bottom border-5 pb-8" id="student-tab" data-bs-toggle="tab" data-bs-target="#student" role="tab">
              <i class="bi bi-pen me-4 me-lg-8"></i>
              <span>我是學生</span>
            </a>
          </div>
          <div class="col col-md-3">
            <a href="#" class="nav-link fs-6 fs-lg-5 fw-bold border-bottom border-5 pb-8" id="teacher-tab" data-bs-toggle="tab" data-bs-target="#teacher" role="tab">
              <i class="bi bi-book me-4 me-lg-8"></i>
              <span>我是老師</span>
            </a>
          </div>
          <div class="col col-md-3">
            <a href="#" class="nav-link fs-6 fs-lg-5 fw-bold border-bottom border-5 pb-8" id="collection-tab" data-bs-toggle="tab" data-bs-target="#collection" role="tab">
              <i class="bi bi-bookmarks me-4 me-lg-8"></i>
              <span>我的收藏</span>
            </a>
          </div>
        </div>
        <CardHorizontalPlaceholder class="mt-16" v-if="isLoading"/>
        <div v-if="!isLoading" class="tab-content d-flex flex-column justify-content-center">
          <div v-if="coursesJoined.length === 0" class="tab-pane fade show active" id="student" role="tabpanel" aria-labelledby="student-tab">
            <div class="w-100 w-lg-70 w-xl-60">
              <div class="text-center">
                <p class="fs-1 my-16">尚未參加課程</p>
                <router-link to="/courses" class="btn btn-primary rounded-4">瀏覽課程</router-link>
              </div>
            </div>
          </div>
          <div class="tab-pane fade show active" id="student" role="tabpanel" aria-labelledby="student-tab">
            <div class="w-100 w-lg-70 w-xl-60">
              <div v-for="(course) in coursesJoined" :key="course.courseId">
                <router-link :to="`/course/${course.courseId}`" class="course-card-list">
                  <div class="meta position-relative h-170px">
                    <img class="w-100 h-100 object-fit-cover transition" :src="course.courseImg" alt="課程圖片">
                    <span @click.prevent="toggleCollection(course.courseId)" class="material-icons-outlined position-absolute bottom-0 start-10px text-primary bookmark-icon transition" :class="{ 'h-auto' : this.collectionStatus(course.courseId) === 'bookmark', 'h-0' : this.collectionStatus(course.courseId) === 'bookmark_border' }" title="加入 / 移除收藏">
                      {{ this.collectionStatus(course.courseId) }}
                    </span>
                  </div>
                  <div class="description">
                    <h2 class="text-custom-black fs-5 fw-bold d-flex mb-4">
                      {{ course.name }}
                    </h2>
                    <h3 class="text-secondary fs-6 mb-4 mb-20">by {{ course.teacherDisplayName }} 老師</h3>
                    <p class="d-flex align-items-center mb-16 text-custom-black">
                      <span class="material-symbols-outlined fs-6 me-4 position-relative course-card-title">timer</span>
                      <span class="me-8">{{ course.time }}</span>
                      <span class="material-symbols-outlined fs-6 me-4">map</span>
                      <span class="me-8">{{ course.location }}</span>
                      <span class="material-symbols-outlined fs-6 me-4">group</span>
                      <span>{{ coursesJoined.length }}</span>
                    </p>
                    <p class="d-flex justify-content-between align-items-center">
                      <span class="text-custom-black fs-5 fw-bold">NT$ {{ course.price }}</span>
                      <!-- <button type="button" class="btn btn-outline-primary border-0 fw-bold">
                        設定上課時間
                      </button> -->
                    </p>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div v-if="coursesCreated.length === 0" class="tab-pane fade" id="teacher" role="tabpanel" aria-labelledby="teacher-tab">
            <div class="w-100 w-lg-70 w-xl-60">
              <div class="text-center">
                <p class="fs-1 my-16">尚未開立課程</p>
                <router-link to="/teacher/stepOne" class="btn btn-primary rounded-4">前往開課</router-link>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="teacher" role="tabpanel" aria-labelledby="teacher-tab">
            <div class="w-100 w-lg-70 w-xl-60">
              <div v-for="(course) in coursesCreated" :key="course.courseId">
                <router-link :to="`/course/${course.courseId}`" class="course-card-list">
                  <div class="meta position-relative h-170px">
                    <img class="w-100 h-100 object-fit-cover transition" :src="course.courseImg" alt="課程圖片">
                    <span @click.prevent="toggleCollection(course.courseId)" class="material-icons-outlined position-absolute bottom-0 start-10px text-primary bookmark-icon transition" :class="{ 'h-auto' : this.collectionStatus(course.courseId) === 'bookmark', 'h-0' : this.collectionStatus(course.courseId) === 'bookmark_border' }" title="加入 / 移除收藏">
                      {{ this.collectionStatus(course.courseId) }}
                    </span>
                  </div>
                  <div class="description">
                    <h2 class="text-custom-black fs-5 fw-bold d-flex mb-4">
                      {{ course.name }}
                    </h2>
                    <h3 class="text-secondary fs-6 mb-4 mb-20">by {{ userData.displayName }} 老師</h3>
                    <p class="d-flex align-items-center mb-16 text-custom-black">
                      <span class="material-symbols-outlined fs-6 me-4 position-relative course-card-title">timer</span>
                      <span class="me-8">{{ course.time }}</span>
                      <span class="material-symbols-outlined fs-6 me-4">map</span>
                      <span class="me-8">{{ course.location }}</span>
                      <span class="material-symbols-outlined fs-6 me-4">group</span>
                      <span>{{ coursesJoined.length }}</span>
                    </p>
                    <p class="d-flex justify-content-between align-items-center">
                      <span class="text-custom-black fs-5 fw-bold">NT$ {{ course.price }}</span>
                      <!-- <button type="button" class="btn btn-outline-primary border-0 fw-bold">
                        設定上課時間
                      </button> -->
                    </p>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div v-if="coursesCollection.length === 0" class="tab-pane fade" id="collection" role="tabpanel" aria-labelledby="collection-tab">
            <div class="w-100 w-lg-70 w-xl-60">
              <div class="text-center">
                <p class="fs-1 my-16">尚未收藏課程</p>
                <router-link to="/courses" class="btn btn-primary rounded-4">添加收藏</router-link>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="collection" role="tabpanel" aria-labelledby="collection-tab">
            <div class="w-100 w-lg-70 w-xl-60">
              <div v-for="(course) in coursesCollection" :key="course.courseId">
                <router-link :to="`/course/${course.courseId}`" class="course-card-list">
                  <div class="meta position-relative h-170px">
                    <img class="w-100 h-100 object-fit-cover transition" :src="course.courseImg" alt="課程圖片">
                    <span @click.prevent="toggleCollection(course.courseId)" class="material-icons-outlined position-absolute bottom-0 start-10px text-primary bookmark-icon transition" :class="{ 'h-auto' : this.collectionStatus(course.courseId) === 'bookmark', 'h-0' : this.collectionStatus(course.courseId) === 'bookmark_border' }" title="加入 / 移除收藏">
                      {{ this.collectionStatus(course.courseId) }}
                    </span>
                  </div>
                  <div class="description">
                    <h2 class="text-custom-black fs-5 fw-bold d-flex mb-4">
                      {{ course.name }}
                    </h2>
                    <h3 class="text-secondary fs-6 mb-4 mb-20">by {{ course.teacherDisplayName }} 老師</h3>
                    <p class="d-flex align-items-center mb-16 text-custom-black">
                      <span class="material-symbols-outlined fs-6 me-4 position-relative course-card-title">timer</span>
                      <span class="me-8">{{ course.time }}</span>
                      <span class="material-symbols-outlined fs-6 me-4">map</span>
                      <span class="me-8">{{ course.location }}</span>
                      <span class="material-symbols-outlined fs-6 me-4">group</span>
                      <span>{{ coursesJoined.length }}</span>
                    </p>
                    <p class="d-flex justify-content-between align-items-center">
                      <span class="text-custom-black fs-5 fw-bold">NT$ {{ course.price }}</span>
                      <!-- <button type="button" class="btn btn-outline-primary border-0 fw-bold">
                        設定上課時間
                      </button> -->
                    </p>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- <div v-if="!isLoading" class="tab-content">
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import userStore from '../../stores/userStore'
import CardHorizontalPlaceholder from '@/components/CardHorizontalPlaceholder.vue'

export default {
  data () {
    return {
      AllCourseData: []
    }
  },
  components: {
    CardHorizontalPlaceholder
  },
  methods: {
    ...mapActions(userStore, ['checkMemberObserver', 'getUserAllCollection', 'getUserAllCreated', 'toggleCollection'])
  },
  computed: {
    ...mapState(userStore, ['uid', 'userData', 'getUserAllJoin', 'coursesCreated', 'coursesCollection', 'coursesJoined', 'isLoading', 'collectionStatus']),
    ...mapWritableState(userStore, ['singUpData'])
  },
  created () {
    this.checkMemberObserver()
    this.getUserAllCollection()
    this.getUserAllCreated()
    this.getUserAllJoin()
  }
}
</script>
<style lang="scss" scoped>
  .nav-link.active {
    border-bottom: 5px solid #fe715f !important;
  }
  .course-card-list {
    display: flex;
    flex-direction: column;
    box-shadow: 0 3px 7px -1px #0000001a;
    margin-bottom: 1.6%;
    background: #fff;
    line-height: 1.4;
    font-family: sans-serif;
    border-radius: 16px;
    overflow: hidden;
    z-index: 0;
    &:hover {
      .bookmark-icon {
        height: 24px !important;
      }
      img {
        transform: scale(1.2);
      }
    }
    @media (min-width: 576px) {
      flex-direction: row;
    }
  }
  .meta {
    position: relative;
    z-index: 0;
    overflow: hidden;
    @media (min-width: 576px) {
      flex-basis: 40%;
      height: auto;
    }
  }
  .description {
    padding: 1rem;
    background: #fff;
    position: relative;
    z-index: 1;
    &::before {
      transform: skew(-3deg);
      content: "";
      background: #fff;
      width: 30px;
      position: absolute;
      left: -10px;
      top: 0;
      bottom: 0;
      z-index: -1;
    }
    @media (min-width: 576px) {
      flex-basis: 60%;
    }
  }
  .course-card-title::before {
    content: "";
    position: absolute;
    height: 5px;
    background: #ff715f;
    width: 35px;
    top: -0.75rem;
    border-radius: 3px;
  }
  .h-custom {
    height: calc(100vh - 406px);
  }
</style>
