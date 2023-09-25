<template>
  <div class="pt-66">
    <div class="container">
      <ListPlaceholderVue v-if="isLoading" />
      <div v-if="!isLoading" class="card rounded-4 shadow-sm my-32">
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
import ListPlaceholderVue from '../../components/ListPlaceholder.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    ListPlaceholderVue
  },
  methods: {
    ...mapActions(orderStore, ['getOrders'])
  },
  computed: {
    ...mapState(orderStore, ['myOrders', 'isLoading'])
  },
  watch: {
  },
  created () {
    this.getOrders()
  }
}
</script>
