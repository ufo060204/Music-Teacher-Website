<template>
  <div class="pt-66">
    <div class="container">
      <BannerArea />
      <ListPlaceholderVue v-if="isLoading" class="my-32"/>
      <div v-if="!isLoading && !isBuyHistory" class="d-flex flex-column justify-content-center align-items-center my-32">
        <p class="fs-1 my-16">您沒有購買紀錄</p>
        <router-link to="/courses" class="btn btn-primary rounded-4">瀏覽課程</router-link>
      </div>
      <div v-if="!isLoading && isBuyHistory" class="card rounded-4 shadow-sm my-32 d-none d-md-block">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover">
              <thead class="border-bottom-3 fw-bold">
                <tr class="align-middle">
                  <th class="text-nowrap">購買時間</th>
                  <th class="text-nowrap">購買品項</th>
                  <th class="text-nowrap">購買金額</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(order) in myOrders" :key="order.orderId">
                  <tr>
                    <td class="text-nowrap">{{ this.$moment(order.createdTime).format('YYYY年M月D日') }}</td>
                    <td class="text-nowrap">
                      <ul>
                        <li v-for="(course) in order.courseDetails" :key="course.courseId">
                          {{ course.name }}
                        </li>
                      </ul>
                    </td>
                    <td v-if="order.useCoupon" class="text-nowrap">NT$ {{ order.couponTotal }}</td>
                    <td v-if="!order.useCoupon" class="text-nowrap">NT$ {{ order.total }}</td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div v-if="!isLoading && isBuyHistory" class="accordion my-32 d-md-none" id="accordionOrder">
        <div v-for="(order, index) in myOrders" :key="order.orderId" class="accordion-item">
          <h2 class="accordion-header" :id="`headingOne` + index">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse` + index" aria-expanded="true" :aria-controls="`#collapse` + index">
              <div class="d-flex justify-content-between w-100">
                <p>
                  {{ this.$moment(order.createdTime).format('YYYY年M月D日') }}
                </p>
                <p class="me-32">
                  <span v-if="order.useCoupon" class="text-nowrap">NT$ {{ order.couponTotal }}</span>
                  <span v-if="!order.useCoupon" class="text-nowrap">NT$ {{ order.total }}</span>
                </p>
              </div>
            </button>
          </h2>
          <div :id="'collapse' + index" class="accordion-collapse collapse" :aria-labelledby="`headingOne` + index">
            <div class="accordion-body">
              <p class="fw-bold" v-for="(course) in order.courseDetails" :key="course.courseId">
                {{ course.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import orderStore from '@/stores/orderStore'
import bannerStore from '@/stores/bannerStore'

import ListPlaceholderVue from '@/components/ListPlaceholder.vue'
import BannerArea from '@/components/BannerArea.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    ListPlaceholderVue, BannerArea
  },
  methods: {
    ...mapActions(orderStore, ['getOrders']),
    ...mapActions(bannerStore, ['getBannerInfo'])
  },
  computed: {
    ...mapState(orderStore, ['myOrders', 'isLoading', 'isBuyHistory'])
  },
  watch: {
  },
  created () {
    this.getBannerInfo(
      new URL('../../assets/images/title-banner.jpg', import.meta.url).href,
      '購買紀錄',
      'History',
      '我的紀錄，學習的軌跡'
    )
    this.getOrders()
  }
}
</script>
<style lang="scss" scoped>
</style>
