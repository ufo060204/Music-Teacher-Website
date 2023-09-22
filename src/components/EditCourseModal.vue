<template>
  <div
    id="EditCourseModal"
    ref="EditCourseModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="EditCourseModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h4>編輯課程資料</h4>
        </div>
        <div class="modal-body">
          <v-form
            ref="form"
            class="border border-text-dark p-6 fw-bold"
            v-slot="{ errors }"
            @submit="updateCourseData(courseDetails.data.courseId)"
          >
            <div class="row mb-4">
              <div class="col-auto">
                <label for="name" class="col-form-label px-4"><span class="text-danger">*</span>課程名稱</label>
              </div>
              <div class="col-8 col-lg-6">
                <v-field
                  id="name"
                  name="課程名稱"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['課程名稱'] }"
                  placeholder="請輸入課程名稱"
                  rules="required|min:3|max:20"
                  v-model="courseDetails.data.name"
                ></v-field>
                <error-message
                  name="課程名稱"
                  class="invalid-feedback"
                ></error-message>
              </div>
            </div>

            <div class="row mb-4">
              <div class="col-auto">
                <label for="price" class="col-form-label px-4"><span class="text-danger">*</span>課程費用</label>
              </div>
              <div class="col-8 col-lg-6">
                <v-field
                id="price"
                name="課程費用"
                  type="number"
                  class="form-control"
                  :class="{ 'is-invalid': errors['課程費用'] }"
                  placeholder="請輸入課程費用"
                  rules="required|min_value:100|max_value:100000"
                  v-model="courseDetails.data.price"
                ></v-field>
                <error-message
                  name="課程費用"
                  class="invalid-feedback"
                ></error-message>
              </div>
            </div>

            <div class="row mb-4">
              <div class="col-auto">
                <label for="type" class="col-form-label px-4"><span class="text-danger">*</span>教學項目</label>
              </div>
              <div class="col-8 col-lg-6">
                <v-field
                  id="type"
                  name="教學項目"
                  as="select"
                  class="form-select"
                  :class="{ 'is-invalid': errors['教學項目'] }"
                  rules="required"
                  v-model="courseDetails.data.type"
                >
                <option value="" selected disabled>請選擇教學項目</option>
                <option value="電吉他">電吉他</option>
                <option value="電貝斯">電貝斯</option>
                <option value="爵士鼓">爵士鼓</option>
              </v-field>
                <error-message
                  name="教學項目"
                  class="invalid-feedback"
                ></error-message>
              </div>
            </div>

            <div class="row mb-4">
              <div class="col-auto">
                <label for="time" class="col-form-label px-4"><span class="text-danger">*</span>授課時間</label>
              </div>
              <div class="col-8 col-lg-6">
                <v-field
                  id="time"
                  name="授課時間"
                  type="number"
                  class="form-control"
                  :class="{ 'is-invalid': errors['授課時間'] }"
                  placeholder="請輸入授課時間(分)"
                  rules="required|min_value:30|max_value:600"
                  v-model="courseDetails.data.time"
                ></v-field>
                <error-message
                  name="授課時間"
                  class="invalid-feedback"
                ></error-message>
              </div>
            </div>

            <!-- <div class="row align-items-center mb-4">
              <div class="col-auto">
                <label for="classMode" class="col-form-label px-4"><span class="text-danger">*</span>上課方式</label>
              </div>
              <div class="col-8 col-lg-6">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" name="studentHouse" type="checkbox" id="studentHouse" value="學生家" v-model="teacherData.classMode">
                  <label for="studentHouse">學生家</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" name="teacherHouse" type="checkbox" id="teacherHouse" value="老師家" v-model="teacherData.classMode">
                  <label for="teacherHouse">老師家</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" name="online" type="checkbox" id="online" value="線上" v-model="teacherData.classMode">
                  <label for="online">線上</label>
                </div>
              </div>
            </div> -->

            <!-- <div class="row mb-4" :class="{'d-none' : teacherData.classMode[0] === '線上' && teacherData.classMode.length === 1}">
              <div class="col-auto">
                <label for="location" class="col-form-label px-4"><span class="text-danger">*</span>上課地點</label>
              </div>
              <div class="col-8 col-lg-6">
                <v-field
                  id="type"
                  name="上課地點"
                  as="select"
                  class="form-select"
                  :class="{ 'is-invalid': errors['上課地點'] }"
                  v-model="teacherData.location"
                >
                <option value="" selected disabled>請選擇上課地點</option>
                <option value="台北">台北</option>
                <option value="台中">台中</option>
                <option value="高雄">高雄</option>
              </v-field>
                <error-message
                  name="上課地點"
                  class="invalid-feedback"
                ></error-message>
              </div>
            </div> -->
            <div class="mb-3">
            <label for="intro" class="form-label">課程介紹</label>
            <textarea
              id="intro"
              class="form-control"
              :class="{ 'is-invalid': errors['課程介紹'] }"
              placeholder="請輸入課程介紹，限定300字"
              rules="required|max:300"
              cols="30"
              rows="10"
              v-model="courseDetails.data.courseIntro"
            ><error-message
              name="課程介紹"
              class="invalid-feedback"
            ></error-message>
            </textarea>
          </div>
          <div class="row">
            <div class="col-6">
              <label for="courseImg" class="form-label" accept="image/png ,image/jpg">上傳一張課程封面照</label>
            </div>
            <div class="col-6">
              <input class="form-control" type="file" id="courseImg" @change="updateImg('course', $event)">
            </div>
          </div>
          <div class="text-center mb-16">
            <img v-if="teacherData.courseImg !== ''" class="img-fluid"  :src="teacherData.courseImg" alt="課程照片">
            <img v-else class="img-fluid" :src="courseDetails.data.courseImg" alt="課程照片">
          </div>
          <div class="text-end">
            <button
            type="button"
            class="btn btn-outline-secondary rounded-4 me-4"
            data-bs-dismiss="modal"
            >
              取消
            </button>
            <button
              type="submit"
              class="btn btn-primary rounded-4"
              data-bs-dismiss="modal"
            >
              確認
            </button>
          </div>
          </v-form>
        </div>
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import teacherStore from '../stores/teacherStore'
import coursesStore from '../stores/coursesStore'
export default {
  methods: {
    ...mapActions(teacherStore, ['updateImg', 'beforeUpdate', 'imgHandle']),
    ...mapActions(coursesStore, ['updateCourseData'])
  },
  computed: {
    ...mapState(teacherStore, ['teacherData.courseImg']),
    ...mapWritableState(teacherStore, ['teacherData']),
    ...mapWritableState(coursesStore, ['courseDetails'])
  }
}
</script>
