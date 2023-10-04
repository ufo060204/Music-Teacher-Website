<template>
  <div class="modal fade" id="SetStudyTimeModal2" aria-hidden="true" aria-labelledby="SetStudyTimeModal2" tabindex="-1" data-bs-backdrop="static">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="SetStudyTimeModal2">設定上課時間</h1>
        <button @click="closeBuyTimeModal()" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div>
          <flatpickr
              :config="config"
              class="form-control"
              placeholder="選擇日期時間"
              v-model="buyerStudyTime"
          >
          </flatpickr>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary"
                data-bs-target="#SetStudyTimeModal"
                data-bs-toggle="modal"
                >
          取消
        </button>
        <button class="btn btn-primary"
                data-bs-dismiss="modal"
                @click="updateBuyerStudyTime()">
          確定
        </button>
      </div>
    </div>
  </div>
</div>
<!-- <SetStudyTimeModal /> -->
</template>

<script>
import flatpickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import userStore from '../stores/userStore'
import { mapActions, mapWritableState } from 'pinia'
// import dataStore from '../stores/dataStore'

export default {
  data () {
    return {
      config: {
        minDate: 'today',
        maxDate: new Date().fp_incr(60), // 60天內可預約
        enableTime: true
      }
    }
  },
  components: {
    flatpickr
  },
  methods: {
    ...mapActions(userStore, ['closeBuyTimeModal', 'updateBuyerStudyTime']),
    test () {
      this.value = (time, Date) => {
        return time.getTime() > Date.now()
      }
    }
  },
  computed: {
    ...mapWritableState(userStore, ['buyerStudyTime'])
  },
  created () {

  }
}
</script>

<style lang="scss" scoped>

</style>
