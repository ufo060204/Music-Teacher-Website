<template>
  <div class="mt-66">
    <div class="container py-16">
      <div class="row">
        <div class="col-12 col-lg-3 d-flex flex-column align-items-center mb-32 py-8 shadow h-100 rounded-4">
          <div class="position-relative h-100px w-100px mb-16">
            <img v-if="userData.userPhoto" class="h-100 w-100 object-fit-cover rounded-circle" :src="userData.userPhoto" alt="使用者照片">
            <img v-else class="img-fluid rounded-circle" src="https://filestore.community.support.microsoft.com/api/profileimages/54381735-f5ec-4389-b332-e5d119079e89" alt="預設使用者照片">
            <label for="photo-upload" accept="image/png ,image/jpg">
              <span class="material-symbols-outlined upload-icon">
                cloud_upload
              </span>
            </label>
            <input @change="updateUserPhoto('teacher', $event)" type="file" id="photo-upload" class="d-none" >
          </div>
          <div class="mb-2 fs-3 fw-bold position-relative">
            {{ personalViewData.displayName }}
            <span v-if="personalViewData.gender === '男性'" class="material-icons-outlined fs-3 lh-base">male</span>
            <span v-if="personalViewData.gender === '女性'" class="material-icons-outlined fs-3 lh-base">female</span>
            <span v-if="personalViewData.gender === '其他'" class="material-icons-outlined fs-3 lh-base">transgender</span>
            <button type="button" class="btn p-0">
              <span style="right: -30px;" @click="updateNameStatus = true" class="material-symbols-outlined fs-3 text-grey-bold ms-4 position-absolute bottom-0">Edit_Note</span>
            </button>
          </div>
          <div v-if="updateNameStatus" class="mb-4">
            <label class="form-label fs-8" for="updateName">變更姓名：</label>
            <input v-model="userData.displayName" type="text" class="form-control mb-2" id="updateName" placeholder="請填寫顯示名稱">
            <div class="text-center">
              <button @click="updateNameStatus = false" type="button" class="btn btn-secondary me-2 rounded-4">取消</button>
              <button @click="updateUserData(), updateNameStatus = false" type="button" class="btn btn-primary rounded-4">確定</button>
            </div>
          </div>
          <div class="my-2 w-100">
            <p class="ps-2 fw-bold">關於我</p>
            <p class="fs-7 p-2">{{ personalViewData.userIntro }}</p>
          </div>
          <div class="d-flex justify-content-around w-50 ms-auto mb-8">
            <a :href="personalViewData.facebook" target="_blank">
              <i class="bi bi-facebook fs-3 text-secondary" :class="{ 'text-blue' : personalViewData.facebook !== '' }"></i>
            </a>
            <a :href="personalViewData.instagrm" target="_blank">
              <i class="bi bi-instagram fs-3 text-secondary" :class="{ 'text-danger' : personalViewData.instagrm !== '' }"></i>
            </a>
            <a :href="personalViewData.discord" target="_blank">
              <i class="bi bi-discord fs-3 text-secondary" :class="{ 'text-sky' : personalViewData.discord !== '' }"></i>
            </a>
          </div>
          <button type="button" class="btn btn-outline-primary rounded-4" data-bs-toggle="modal" data-bs-target="#EditUserModal">編輯個人檔案</button>
        </div>
        <div class="col-12 col-lg-9">
          <div class="shadow rounded-4">
            <div style="background-image: url('https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'); height: 400px; background-size: cover; background-position: center;" class="position-relative shadow shadow rounded-top-4">
              <!-- <label for="bg-upload">
                <span class="material-symbols-outlined fs-3 text-grey-bold ms-16 edit-pen">Edit_Note</span>
              </label>
              <input type="file" id="bg-upload" class="d-none"> -->
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <span v-if="personalViewData.story === ''" class="text-grey-bold ms-8">編輯個人頁面，<br class="d-lg-none">和大家分享更多精彩故事</span>
              <div v-html="personalViewData.story" class="p-8"></div>
              <button type="button" @click="updateStoryStatus = true" class="btn text-grey-bold fw-bold ms-auto">
                <span class="material-symbols-outlined fs-1">Edit_Note</span>
              </button>
            </div>
            <div v-if="updateStoryStatus" class="mb-8">
              <ckeditor :editor="editor" v-model="userData.story" :config="editorConfig"></ckeditor>
            </div>
            <div v-if="updateStoryStatus" class="text-end p-8">
              <button @click="updateStoryStatus = false" type="button" class="btn btn-secondary me-2 rounded-4">取消</button>
              <button @click="updateUserData(), updateStoryStatus = false" type="button" class="btn btn-primary rounded-4">確定</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <EditUserModal />
</template>

<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import userStore from '../../stores/userStore'
import teacherStore from '../../stores/teacherStore'

import EditUserModal from '@/components/EditUserModal.vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
  data () {
    return {
      editor: ClassicEditor,
      // editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        // The configuration of the editor.
      }
    }
  },
  components: {
    EditUserModal
  },
  methods: {
    ...mapActions(userStore, ['checkMemberObserver', 'updateUserData', 'updateUserPhoto']),
    ...mapActions(teacherStore, ['updateTeacherData']),
    editUserDataChange () {
      console.log(this.editUserData)
    }
  },
  computed: {
    ...mapState(userStore, ['uid', 'isEditMode', 'personalViewData']),
    ...mapWritableState(userStore, ['userData', 'updateNameStatus', 'updateStoryStatus']),
    ...mapWritableState(teacherStore, ['teacherData'])
  },
  created () {
    this.checkMemberObserver()
  }
}
</script>

<style lang="scss" scoped>
.upload-icon {
  position: absolute;
  right: -3px;
  bottom: 0;
  z-index: 10;
  font-size: 20px;
  background: white;
  color: #6c757d;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: 2px solid;
  cursor: pointer;
}
</style>
