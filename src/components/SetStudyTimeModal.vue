<template>
  <!-- <button @click="showModal()" class="btn btn-outline-primary border-0 fw-bold">設定上課時間</button> -->
  <div ref="SetStudyTimeModal" class="modal fade" id="SetStudyTimeModal" tabindex="-1" aria-labelledby="SetStudyTimeModal" aria-hidden="true" data-bs-backdrop="static">
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="SetStudyTimeModal">設定學生上課時間</h1>
          <button @click="closeBuyTimeModal()" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="table-responsive">
            <table class="table table-hover align-middle">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">學生</th>
                  <th scope="col" colspan="2">購買時間 / 上課時間</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in buyerStudyTimeData" :key="item.uid">
                  <th scope="row">{{ index }}</th>
                  <td v-if="item.displayName" class="fs-7 fs-md-6">{{ item.displayName }}</td>
                  <td>
                    <span class="text-delete fs-7">{{ this.$moment(item.createdTime).format('YYYY-MM-DD') }}</span>
                    /
                    <span class="fs-7">{{ item.studyTime || '尚未設定' }}</span>
                  </td>
                  <td width="80" class="text-end">
                    <button @click="beforeUpdateBuyerStudyTime(item.courseId, item.uid)" class="btn btn-outline-primary fs-7 fs-md-6" data-bs-target="#SetStudyTimeModal2" data-bs-toggle="modal"
                    >
                      設定
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <SetStudyTimeModal2 />
  </template>

<script>
import SetStudyTimeModal2 from './SetStudyTimeModal2.vue'
// import Modal from 'bootstrap/js/dist/modal'
// import { mapState, mapActions, mapWritableState } from 'pinia'
import { mapState, mapActions } from 'pinia'
import userStore from '@/stores/userStore'

export default {
  data () {
    return {
      // buyerStudyTimeData: {
      //   index: '',
      //   displayName: '',
      //   createdTime: ''
      // }
    }
  },
  components: {
    SetStudyTimeModal2
  },
  methods: {
    ...mapActions(userStore, ['editStudyTime', 'closeBuyTimeModal', 'beforeUpdateBuyerStudyTime'])
    // async showModal () {
    //   await this.editStudyTime(this.receivedCourseId)
    //   if (this.buyerStudyTimeData) {
    //     this.SetStudyTimeModal.show()
    //   }
    // }
  },
  // props: {
  //   courseId: String
  // },
  computed: {
    ...mapState(userStore, ['buyerStudyTimeData'])
    // ...mapWritableState(dataStore, ['classScheduleIndex'])
    // receivedCourseId () {
    //   return this.courseId
    // }
  },
  created () {
    // this.editStudyTime(this.receivedCourseId)
  },
  mounted () {
    // this.SetStudyTimeModal = new Modal(this.$refs.SetStudyTimeModal)
  }
}
</script>

  <style lang="scss" scoped>

  </style>
