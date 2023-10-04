<template>
  <div ref="MyStudyTimeModal" class="modal fade" id="MyStudyTimeModal" tabindex="-1" aria-labelledby="MyStudyTimeModal" aria-hidden="true" data-bs-backdrop="static">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="MyStudyTimeModal">上課時間</h1>
          <button @click="closeBuyTimeModal()" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="table-responsive">
            <table class="table table-hover align-middle">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">購買時間</th>
                  <th scope="col">上課時間</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in myStudyTimeData" :key="index">
                  <th scope="row">{{ index }}</th>
                  <td><span class="text-delete fs-7">{{ this.$moment(item.createdTime).format('YYYY-MM-DD') }}</span></td>
                  <td><span class="fs-7">{{ item.studyTime || '尚未設定' }}</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>

<script>
import { mapState, mapActions } from 'pinia'
import userStore from '@/stores/userStore'

export default {
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    ...mapActions(userStore, ['closeBuyTimeModal'])
  },
  computed: {
    ...mapState(userStore, ['myStudyTimeData'])
    // ...mapWritableState(dataStore, ['classScheduleIndex'])
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
