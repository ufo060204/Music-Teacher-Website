<template>
  <div
    id="EditUserModal"
    ref="EditUserModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="EditUserModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <form @submit.prevent="updateUserData()" class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h4>編輯個人檔案</h4>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="name" class="form-label">名稱</label>
            <input
              id="name"
              type="text"
              class="form-control"
              placeholder="請輸入顯示名稱"
              v-model="userData.displayName"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">電子郵件</label>
            <input
              id="email"
              type="text"
              class="form-control"
              placeholder="請輸入電子郵件"
              v-model="userData.email"
              Readonly
            />
          </div>
          <div class="mb-3">
            <label for="tel" class="form-label">電話</label>
            <input
              id="tel"
              type="tel"
              class="form-control"
              placeholder="請輸入電話"
              v-model="userData.tel"
            />
          </div>
          <div class="mb-3">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="gender" value="男性" id="male" v-model="userData.gender">
              <label class="form-check-label" for="male">
                男
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="gender" value="女性" id="female" v-model="userData.gender">
              <label class="form-check-label" for="female">
                女
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="gender" value="其他" id="other" v-model="userData.gender">
              <label class="form-check-label" for="other">
                其他
              </label>
            </div>
          </div>
          <div class="mb-3">
            <label for="facebook" class="form-label">Facebook</label>
            <input
              id="facebook"
              type="text"
              class="form-control"
              placeholder="請輸入網址"
              v-model="userData.facebook"
            />
          </div>
          <div class="mb-3">
            <label for="instagrm" class="form-label">Instagrm</label>
            <input
              id="instagrm"
              type="text"
              class="form-control"
              placeholder="請輸入網址"
              v-model="userData.instagrm"
            />
          </div>
          <div class="mb-3">
            <label for="discord" class="form-label">Discord</label>
            <input
              id="discord"
              type="text"
              class="form-control"
              placeholder="請輸入網址"
              v-model="userData.discord"
            />
          </div>
          <hr/>
          <div class="mb-3">
            <label for="content" class="form-label">關於我</label>
            <textarea
              id="description"
              type="text"
              class="form-control"
              placeholder="請輸入自我介紹"
              v-model="userData.userIntro"
            >
            </textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary rounded-4"
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
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import userStore from '../stores/userStore'
import teacherStore from '../stores/teacherStore'

export default {
  data () {
    return {
      // isEditMode: false
    }
  },
  methods: {
    ...mapActions(userStore, ['checkMemberObserver', 'updateUserData']),
    ...mapActions(teacherStore, ['updateTeacherData', 'updateImg']),
    editUserDataChange () {
      // this.editUserData = {...this.userDataAll}
      console.log(this.editUserData)
    }
  },
  computed: {
    ...mapState(userStore, ['uid', 'isEditMode']),
    ...mapWritableState(userStore, ['userData']),
    ...mapWritableState(teacherStore, ['teacherData'])
  },
  created () {
    this.checkMemberObserver()
  }
}
</script>

<style lang="scss" scoped>
</style>
