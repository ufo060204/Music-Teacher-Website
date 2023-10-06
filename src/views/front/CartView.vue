<template>
  <section class="mt-66">
    <BannerArea />
    <div class="container">
      <div class="py-32">
        <div v-if="this.cartStatus === 'cart'" class="row">
          <div v-if="isLoading" class="col-12 col-lg-8">
            <CardHorizontalPlaceholder />
          </div>
          <div v-if="!isLoading && cart.length === 0" class="row d-flex align-items-center justify-content-center">
            <div class="col-md-4 col-10 d-flex align-items-center justify-content-center flex-column py-80 border rounded-4">
              <h1 class="fs-2 fw-bold mb-16">購物車</h1>
              <h2 class="fs-4 mb-16">購物車是空的，來去逛逛吧！</h2>
              <router-link to="/courses" class="btn btn-primary rounded-pill text-white py-3 px-7 fs-5">前往課程</router-link>
            </div>
          </div>
          <div v-if="!isLoading && cart.length !== 0" class="col-12 col-lg-8 mx-auto mb-3 border rounded-4 h-100">
            <table class="table table-hover align-middle">
              <thead>
                <tr>
                  <th class="text-center">
                    <input @click="checkAllCourses()" v-model="isSelectedCoursesAll" class="form-check-input" type="checkbox" id="checkAll" name="checkAll">
                  </th>
                  <th colspan="3">
                    <label for="checkAll" class="text-primary fs-5">全選</label>
                  </th>
                </tr>
              </thead>
              <tbody v-for="course in this.cart" :key="course.courseId">
                <tr>
                  <td class="text-center" width="4%">
                    <input v-model="selectedCourseIds" class="form-check-input" type="checkbox" id="course" name="courses" :value="course.courseId">
                  </td>
                  <td width="12%">
                    <img class="img-fluid rounded-2" :src="course.courseImg" alt="課程圖片">
                  </td>
                  <td width="60%">
                    <div class="container">
                      <div class="row align-items-center">
                        <div class="col-12 mb-8">
                          <p class="fs-6 fw-bold lh-1">{{ course.name }}</p>
                        </div>
                        <div v-if="isCouponCode" class="col-12">
                          <p>NT$ {{ course.price * 0.8 }}</p>
                        </div>
                        <div class="col-12" :class="{ 'text-decoration-line-through fs-8 text-grey-bold' : isCouponCode}">
                          <p>NT$ {{ course.price }}</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td width="7%">
                    <button @click="removeFromCollection(course.courseId)" type="button" class="btn d-flex align-items-center">
                      <span class="material-symbols-outlined">
                        close
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-if="!isLoading && cart.length !== 0" class="col-12 col-lg-4 mb-3 px-0 px-lg-3">
            <div class="card rounded-4">
              <div class="card-header">
                <p>訂單明細</p>
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <p>{{ selectedCourses.length }} 件小計</p>
                  <p>NT$ {{ selectedCoursesTotal }}</p>
                </div>
                <div v-if="!isCouponCode" class="text-end fs-2">
                  <p>NT$ {{ selectedCoursesTotal }}</p>
                </div>
                <div v-if="isCouponCode" class="text-end text-primary">
                  <p>折扣 - {{ selectedCoursesTotal - couponTotal }}</p>
                </div>
                <div v-if="isCouponCode" class="text-end fs-2">
                  <p>NT$ {{ couponTotal }}</p>
                </div>
              </div>
              <div class="card-footer">
                <div class="row mb-2 align-items-center">
                  <div class="col-8">
                    <input v-model="couponCode" class="col-form-label w-100 py-1 fs-7 rounded-2 border" type="text" id="coupon" name="coupon" placeholder="請輸入折扣碼">
                  </div>
                  <div class="col-4 text-end">
                    <button @click="addCouponCode(couponCode)" class="btn btn-sm btn-secondary w-100 rounded-4" type="button">確認</button>
                  </div>
                </div>
                <button @click="goCheckout()" class="btn btn-primary w-100 rounded-4" type="button">前往結帳</button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="this.cartStatus === 'checkout'" class="row">
          <div class="col-12 col-lg-8 mx-auto mb-3 border rounded-4">
            <div class="my-3 pb-2 ps-3 ms-1 border-bottom fs-3 fw-bold text-secondary">
              總共 {{ selectedCourses.length }} 件
            </div>
            <table class="table table-hover align-middle">
              <tbody v-for="course in this.selectedCourses" :key="course.courseId">
                <tr>
                  <td>
                    <div class="container">
                      <div class="row">
                        <div class="col-12 col-lg-8">{{ course.name }}</div>
                        <div class="col-12 col-lg-4 text-lg-end">
                          <p v-if="isCouponCode">NT$ {{ course.price * 0.8 }}</p>
                          <p v-if="isCouponCode" class="fs-8 text-decoration-line-through text-grey-bold">NT$ {{ course.price }}</p>
                          <p v-if="!isCouponCode">NT$ {{ course.price }}</p>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-12 col-lg-4 mb-3 px-0 px-lg-3">
            <div class="card rounded-4">
              <div class="card-header">
                <p>訂單明細</p>
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <p>{{ selectedCourses.length }} 件小計</p>
                  <p>NT$ {{ selectedCoursesTotal }}</p>
                </div>
                <div v-if="!isCouponCode" class="text-end fs-2">
                  <p>NT$ {{ selectedCoursesTotal }}</p>
                </div>
                <div v-if="isCouponCode" class="text-end text-primary">
                  <p>折扣 - {{ selectedCoursesTotal - couponTotal }}</p>
                </div>
                <div v-if="isCouponCode" class="text-end fs-2">
                  <p>NT$ {{ couponTotal }}</p>
                </div>
              </div>
              <div class="card-footer">
                <p class="text-primary fs-8 mb-2 fw-bold">
                  我已詳閱並同意〈服務契約〉及服務內容
                </p>
                <div class="row g-0 justify-content-between">
                  <div class="col-5">
                    <button @click="goBackCart()" type="button" class="btn btn-secondary w-100 rounded-4">重新選擇</button>
                  </div>
                  <div class="col-5">
                    <button @click="checkout()" type="button" class="btn btn-primary w-100 rounded-4">確認送出</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import cartStore from '@/stores/cartStore'
import bannerStore from '../../stores/bannerStore'
import CardHorizontalPlaceholder from '@/components/CardHorizontalPlaceholder.vue'
import BannerArea from '../../components/BannerArea.vue'
export default {
  data () {
    return {
      products: [],
      productId: '',
      loadingItem: '',
      color: '#FF700C',
      form: {
        user: {
          name: '',
          mail: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  components: {
    CardHorizontalPlaceholder, BannerArea
  },
  watch: {
    selectedCourseIds: function (newSelect) {
      this.selectedCourses = this.cart.filter((course) => newSelect.includes(course.courseId))
      // console.log('選擇的課程', this.selectedCourses)
    },
    cartStatus () {
      if (this.cartStatus === 'cart') {
        this.getBannerInfo(
          new URL('/title-banner.jpg', import.meta.url).href,
          '購物車',
          'CART',
          '年底前輸入『 888 』享八折優惠'
        )
      } else {
        this.getBannerInfo(
          new URL('/title-banner.jpg', import.meta.url).href,
          '結帳',
          'CHECKOUT',
          '購物的終點，滿足的起點'
        )
      }
    }
  },
  computed: {
    ...mapState(cartStore, ['uid', 'cart', 'cartTotal', 'couponTotal', 'cartStatus', 'selectedCoursesTotal', 'isCouponCode', 'isLoading']),
    ...mapWritableState(cartStore, ['couponCode', 'selectedCourses', 'selectedCourseIds', 'isSelectedCoursesAll'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart', 'removeFromCollection', 'getUid', 'addCouponCode', 'goCheckout', 'goBackCart', 'checkout', 'filterSelect', 'checkAllCourses', 'refTest']),
    ...mapActions(bannerStore, ['getBannerInfo'])
  },
  created () {
    this.getBannerInfo(
      new URL('/title-banner.jpg', import.meta.url).href,
      '購物車',
      'CART',
      '年底前輸入『 888 』享八折優惠'
    )
    this.getUid()
    this.getCart()
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
</style>
