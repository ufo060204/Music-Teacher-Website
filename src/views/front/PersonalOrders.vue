<template>
  <div class="pt-66">
    <div class="container">
      <BannerArea />
      <ListPlaceholderVue v-if="isLoading" class="my-32"/>
      <div v-if="!isLoading && !isBuyHistory" class="d-flex h-custom flex-column justify-content-center align-items-center">
        <p class="fs-1 my-16">您沒有購買紀錄</p>
        <router-link to="/courses" class="btn btn-primary rounded-4">瀏覽課程</router-link>
      </div>
      <div v-if="!isLoading && isBuyHistory" class="card rounded-4 shadow-sm my-32">
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
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import orderStore from '../../stores/orderStore'
import bannerStore from '../../stores/bannerStore'

import ListPlaceholderVue from '../../components/ListPlaceholder.vue'
import BannerArea from '../../components/BannerArea.vue'
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
      new URL('/title-banner.jpg', import.meta.url).href,
      '購買紀錄',
      'History',
      '我的紀錄，學習的軌跡'
    )
    this.getOrders()
  }
}
</script>
<style lang="scss" scoped>
.h-custom {
  height: calc(100vh - 410px);
}
</style>
