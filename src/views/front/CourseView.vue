<template>
    <!-- <section class="landing-img landing-header" /> -->
    <ListPlaceholder v-if="isLoading" class="mt-66" />
    <div v-if="!isLoading" class="mt-66">
      <section>
        <div class="container py-32">
          <!-- Breadcrumb -->
          <div class="d-flex align-items-end">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
                <li class="breadcrumb-item"><router-link to="/courses">所有課程</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">單一課程</li>
              </ol>
            </nav>
          </div>
          <div class="row mb-16 mb-lg-32">
            <div class="col-12 col-lg-8 mb-32 mb-lg-0">
              <div class="pe-xl-48">
                <img class="h-lg-500 w-100 rounded-4" :src="courseViewDetails.data?.courseImg" alt="課程圖片">
              </div>
            </div>
            <div class="col-12 col-lg-4 d-flex flex-column">
              <h1 class="fs-2 fw-bold">{{ courseViewDetails.data.name }}</h1>
              <p class="mt-16 text-grey-bold">{{ courseViewDetails.data.courseIntro }}</p>
              <button type="button" @click.prevent="toggleCollection(courseViewDetails.data.courseId)" class="btn btn-outline-primary px-16 py-8 mt-auto ms-auto rounded-pill d-flex align-items-center" title="加入 / 移除收藏">
                <span class="material-icons-outlined">
                  {{ this.collectionStatus(courseViewDetails.data.courseId) }}
                </span>
                <span>收藏</span>
              </button>
            </div>
          </div>
          <div class="row align-items-start">
            <div class="col-12 col-lg-8">
              <div class="row align-items-center mb-16">
                <div class="col-auto cursor-pointer">
                  <img v-if="courseViewDetails.teacherImg" class="h-100px w-100px rounded-circle object-fit-cover" :src="courseViewDetails.teacherImg" alt="老師照片">
                  <img v-else class="h-100px w-100px rounded-circle object-fit-cover" src="/default-user-photo.png" alt="老師照片">
                </div>
                <div class="col-auto fs-2">{{ courseViewDetails.teacherName }}</div>
              </div>
              <div class="row mb-32">
                <div class="col-12 col-lg-10">{{ courseViewDetails.teacherIntro }}</div>
              </div>
              <p class="fs-4 mb-16 fw-bold">關於課程</p>
              <div class="row mb-16 g-16">
                <div class="col-auto">
                  <div class="d-flex align-items-center">
                    <span class="material-symbols-outlined fs-1 me-8">timer</span>
                    <div>
                      <p class="text-grey-bold fs-7">課程時長</p>
                      <p class="fs-6 fw-bold">{{ courseViewDetails.data.time }}分鐘</p>
                    </div>
                  </div>
                </div>
                <div class="col-auto">
                  <div class="d-flex align-items-center">
                    <span class="material-symbols-outlined fs-1 me-8">group</span>
                    <div>
                      <p class="text-grey-bold fs-7">被購買數</p>
                      <p class="fs-6 fw-bold">{{ courseViewDetails.data.buyer?.length }}次</p>
                    </div>
                  </div>
                </div>
                <div class="col-auto">
                  <div class="d-flex align-items-center">
                    <span class="material-symbols-outlined fs-1 me-8">map</span>
                    <div>
                      <p class="text-grey-bold fs-7">上課地點</p>
                      <p class="fs-6 fw-bold">{{ courseViewDetails.data.location }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-xl-auto">
                  <div class="d-flex align-items-center">
                    <span class="material-symbols-outlined fs-1 me-8">school</span>
                    <div>
                      <p class="text-grey-bold fs-7">上課方式</p>
                      <p class="fs-6 bg-primary rounded px-2 fw-bold me-8">{{ courseViewDetails.data.classMode?.[0] }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="courseViewDetails.teacherUid !== uid" class="col-12 col-lg-4 position-sticky top-100px">
              <div class="p-32 border rounded-4">
                <h4 class="border-bottom pb-24 mb-24">購買單堂課程</h4>
                <div class="mb-16">
                  <span class="fs-5 me-16">售價</span>
                  <span class="fs-1">NT$ {{ courseViewDetails.data.price }}</span>
                </div>
                <div class="d-flex justify-content-between">
                  <router-link v-if="isMember" to="/cart" @click="addToCart(courseViewDetails.data.courseId)" type="button" class="btn btn-outline-primary w-75 rounded-pill">立即購買</router-link>
                  <button v-if="!isMember" @click="addToCart(courseViewDetails.data.courseId)" type="button" class="btn btn-outline-primary w-75 rounded-pill">立即購買</button>
                  <button @click="addToCart(courseViewDetails.data.courseId)" type="button" class="btn btn btn-primary rounded-pill">
                    <span class="material-symbols-outlined fs-3 align-middle">shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
            <div v-if="courseViewDetails.teacherUid === uid" class="col-12 col-lg-4 p-32 position-sticky top-100px border rounded-4">
              <h4 class="border-bottom pb-24 mb-24">購買人數</h4>
              <div class="mb-16">
                <span class="fs-5 me-4">共 </span>
                <span class="fs-1">{{ courseViewDetails.data.buyer?.length }} 人</span>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <button type="button" class="btn btn-outline-primary w-25 rounded-pill" data-bs-toggle="modal" data-bs-target="#EditCourseModal">
                  編輯
                </button>
                <span class="text-primary fs-8">(課程審核通過後將無法再編輯)</span>
              </div>
            </div>
          </div>
          <!-- 課程評價 -->
          <div class="row mb-32 mt-32 mt-lg-0">
            <div class="col-12 col-lg-8">
              <p class="fs-4 mb-16 fw-bold">課程評價</p>
              <CommentSwiper />
            </div>
          </div>
          <!-- 猜你喜歡 -->
          <!-- <div class="row mb-32" >
            <div class="col-12 col-lg-8">
              <p class="fs-4 mb-16 fw-bold">猜你喜歡</p>
              <SuggestCourseSwiper />
            </div>
          </div> -->
          <!-- <div class="row">
            <div class="col-12 col-lg-8">
              <router-link class="btn border py-12 fs-5 w-100 rounded-4 fw-bold" to="/courses" title="返回課程">
                返回課程
              </router-link>
            </div>
          </div> -->
        </div>
      </section>
    </div>
    <EditCourseModal />
</template>

<script>
import { mapActions, mapState } from 'pinia'
import userStore from '../../stores/userStore'
import coursesStore from '../../stores/coursesStore'
import cartStore from '../../stores/cartStore'

import ListPlaceholder from '@/components/ListPlaceholder.vue'
import CommentSwiper from '@/components/CommentSwiper.vue'
// import SuggestCourseSwiper from '../../components/SuggestCourseSwiper.vue'
import EditCourseModal from '../../components/EditCourseModal.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    EditCourseModal, ListPlaceholder, CommentSwiper
  },
  methods: {
    ...mapActions(cartStore, ['addToCart', 'getUid']),
    ...mapActions(coursesStore, ['getCourseDetails']),
    ...mapActions(userStore, ['checkMemberObserver', 'addToCollection', 'toggleCollection', 'checkMemberObserver'])
  },
  computed: {
    ...mapState(coursesStore, ['courseDetails', 'courseViewDetails', 'AllCourseData', 'isLoading']),
    ...mapState(cartStore, ['uid', 'cart']),
    ...mapState(userStore, ['uid', 'collectionStatus', 'isMember'])
  },
  watch: {
    // qty () {
    //   if (this.qty < 1) {
    //     this.checkBuyNum.boolean = true
    //     this.checkBuyNum.message = '數量不能小於0'
    //     this.qty = 1
    //   } else if (this.qty > 1) {
    //     this.checkBuyNum.boolean = false
    //   }
    // },
    // 產品 id 改變後重新渲染畫面
    // '$route.params.id': {
    //   handler (changedId) {
    //     this.id = changedId
    //     if (this.id) {
    //       this.getProduct()
    //     }
    //   }
    // }
  },
  created () {
    this.checkMemberObserver()
    this.courseId = this.$route.params.id
    console.log('這是 courseId', this.courseId)
    this.getCourseDetails(this.courseId)
  }
}
</script>

<style lang="scss" scoped>
.btn-outline-primary:hover {
  color: #fff;
}
</style>
