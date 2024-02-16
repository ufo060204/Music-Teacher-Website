import { defineStore } from 'pinia'
import router from '../router'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { getFirestore, query, doc, setDoc, getDoc, getDocs, updateDoc, collection, arrayUnion, arrayRemove } from 'firebase/firestore/lite'
import Swal from 'sweetalert2'
import moment from 'moment/moment'

const fs = getFirestore()
const provider = new GoogleAuthProvider()
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export default defineStore('usersStore', {
  state: () => ({
    singUpData: {
      email: '',
      password: ''
    },
    loginUser: {
      email: '',
      password: ''
    },
    userData: {
      uid: '',
      userPhoto: '',
      userBackgroundPhoto: '',
      displayName: '',
      email: '',
      tel: '',
      gender: '',
      facebook: '',
      instagrm: '',
      discord: '',
      birthday: '',
      address: '',
      story: '',
      userIntro: '',
      creationTime: '',
      lastSignInTime: '',
      myOrders: [],
      courses_created: [],
      courses_joined: [],
      coursesCollection: [],
      cart: []
    },
    userDataAll: {},
    personalViewData: {},
    coursesJoined: [],
    coursesCreated: [],
    coursesCollection: [],
    coursesCollectionId: [],
    isLoading: true,
    isLogin: true,
    isMember: false,
    uid: '',
    isEditMode: false,
    updateNameStatus: false,
    updateStoryStatus: false,
    buyerStudyTimeData: [],
    myStudyTimeData: [],
    updateBuyerStudyTimeUid: '',
    updateBuyerStudyTimeCourseId: '',
    buyerStudyTime: '',
    buyerStudyTimeAll: []
  }),
  actions: {
    // 註冊，首次登入建立會員資料
    signUp () {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, this.singUpData.email, this.singUpData.password)
        .then((userCredential) => {
          // const user = userCredential.user
          // console.log('userCredential.user', userCredential.user)
          this.userData.uid = userCredential.user.uid
          this.userData.email = userCredential.user.email
          // console.log('這是準備傳送的 userData', this.userData)
          this.setUserData()
          this.checkMemberObserver()
          this.singUpData.email = ''
          this.singUpData.password = ''
          // alert('你已成功註冊')
          Swal.fire({
            icon: 'success',
            title: '恭喜註冊成功',
            showConfirmButton: false,
            timer: 1500
          })
          router.push('/')
        })
        .catch((err) => {
          // const errorCode = error.code
          // const errorMessage = error.message
          // console.log('你註冊失敗了', error.code)
          // console.log('你註冊失敗了', error.message)
          // alert('你註冊失敗了', error.message)
          if (err.code === 'auth/email-already-in-use') {
            Swal.fire({
              icon: 'error',
              title: '你註冊失敗了',
              text: '此 email 已被使用過',
              confirmButtonColor: '#FE715F'
            })
          } else {
            Swal.fire({
              icon: 'error',
              title: '你註冊失敗了',
              confirmButtonColor: '#FE715F'
            })
          }
        })
    },
    // 使用 email 登入
    login () {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.loginUser.email, this.loginUser.password)
        .then((userCredential) => {
          // Signed in
          // console.log(userCredential.user)
          const userDocRef = doc(fs, 'users', userCredential.user.uid)
          setDoc(userDocRef, { lastSignInTime: userCredential.user.metadata.lastSignInTime }, { merge: true })
          // console.log('更新最後登入時間')
          this.isMember = true
          this.loginUser.email = ''
          this.loginUser.password = ''
          // console.log('登入成功')
          // alert('登入成功')
          Swal.fire({
            icon: 'success',
            title: '登入成功',
            showConfirmButton: false,
            timer: 1500
          })
          router.push('/')
        })
        .catch((err) => {
          // console.log(err)
          // console.log(err.code)
          // console.log(err.message)
          // console.log('登入失敗')
          // alert('登入失敗')
          if (err.code === 'auth/user-not-found') {
            Swal.fire({
              icon: 'error',
              title: '登入失敗，使用者不存在',
              showConfirmButton: false,
              timer: 1500
            })
          } else if (err.code === 'auth/wrong-password') {
            Swal.fire({
              icon: 'error',
              title: '登入失敗，密碼錯誤',
              showConfirmButton: false,
              timer: 1500
            })
          } else if (err.code === 'auth/too-many-requests') {
            Swal.fire({
              icon: 'error',
              title: '嘗試次數過多，請稍後在試',
              showConfirmButton: false,
              timer: 1500
            })
          } else {
            Swal.fire({
              icon: 'error',
              // title: `登入失敗 ${err.message}`,
              title: '登入失敗',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
    },
    // 使用 google 登入，首次登入建立會員資料
    loginGoogle () {
      const auth = getAuth()
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // const credential = GoogleAuthProvider.credentialFromResult(result)
          // const token = credential.accessToken
          // console.log('token', token)
          // 登入使用者資訊
          // console.log(result.user)
          // console.log(result.user.metadata)
          // console.log('創建時間', result.user.metadata.creationTime)
          // console.log('登入時間', result.user.metadata.lastSignInTime)
          // IdP data available using getAdditionalUserInfo(result)
          this.isMember = true
          // 檢查是否是首次登入
          if (result.user.metadata.creationTime === result.user.metadata.lastSignInTime) {
            this.userData.uid = result.user.uid
            this.userData.email = result.user.email
            this.userData.creationTime = result.user.metadata.creationTime
            this.userData.lastSignInTime = result.user.metadata.lastSignInTime
            // this.userData = userCredential.user
            // console.log('這是第一次登入')
            // console.log('這是準備傳送的 userData', this.userData)
            this.setUserData()
          } else {
            const userDocRef = doc(fs, 'users', result.user.uid)
            setDoc(userDocRef, { lastSignInTime: result.user.metadata.lastSignInTime }, { merge: true })
            // console.log('更新最後登入時間')
          }
          router.push('/')
          // alert('使用google登入成功')
          this.getUserDataAll()
          Toast.fire({
            icon: 'success',
            title: '使用google登入成功'
          })
        }).catch((err) => {
          // 錯誤訊息
          // console.log(err.code)
          // console.log(err.message)
          // The email of the user's account used.
          // console.log(error.customData.email)
          // The AuthCredential type that was used.
          // console.log(GoogleAuthProvider.credentialFromError(err))
          // alert('使用google登入失敗')
          Toast.fire({
            icon: 'error',
            title: `使用 google 登入失敗 ${err.message}`
          })
        })
    },
    // 登出
    signOut () {
      const auth = getAuth()
      signOut(auth)
        .then((res) => {
          // console.log('登出成功', res)
          this.isMember = false
          // alert('登出成功', res)
          Toast.fire({
            icon: 'success',
            title: '登出成功'
          })
        // Sign-out successful.
        }).catch((err) => {
        // An error happened.
          // console.log('登出錯誤', error)
          // alert('登出錯誤', error)
          Toast.fire({
            icon: 'warning',
            title: `登出錯誤 ${err}`
          })
        })
    },
    // 註冊新增會員資料
    async setUserData () {
      try {
        // await addDoc(fs, 'users', `${this.userData.uid}`, this.userData)
        await setDoc(doc(fs, 'users', this.userData.uid), this.userData)
        // console.log('課程會員新增資料成功')
        // alert('課程會員新增資料成功')
        Toast.fire({
          icon: 'success',
          title: '課程會員新增資料成功'
        })
      } catch (err) {
        // console.log('課程會員資料新增失敗', err)
        // alert('課程會員資料新增失敗', err)
        Toast.fire({
          icon: 'error',
          title: `課程會員資料新增失敗 ${err}`
        })
      }
    },
    // 確認是否為登入狀態
    async checkMemberObserver () {
      return new Promise((resolve, reject) => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
          if (user) {
            this.isMember = true
            // console.log('你是登入狀態')
            // console.log('這是 uid', user.uid)
            this.uid = user.uid
            resolve(this.uid)
            this.getUserDataAll()
            // Toast.fire({
            //   icon: 'success',
            //   title: '你是登入狀態'
            // })
          } else if (!user) {
            this.isMember = false
            // console.log('你是登出狀態')
          } else {
            reject(new Error('你是登出狀態'))
            this.isMember = false
            // alert('你是登出狀態')
            // Toast.fire({
            //   icon: 'info',
            //   title: '你是登出狀態'
            // })
          }
        })
      })
    },
    checkMemberTeacherStep () {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.push('/login')
          Swal.fire({
            icon: 'info',
            title: '請先登入',
            confirmButtonColor: '#FE715F'
          })
        }
      })
    },
    // 取得單一會員資料
    async getUserDataAll () {
      try {
        const docRef = doc(fs, 'users', this.uid)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          // console.log('會員資料 Document data:', docSnap.data())
          this.userData = docSnap.data()
          this.personalViewData = { ...this.userData }
        } else {
          console.log('No such document!')
        }
      } catch (err) {
        console.log(err)
      }
    },
    // 更新會員資料 PersonalView 頁面使用
    async updateUserData () {
      await updateDoc(doc(fs, 'users', this.userData.uid), this.userData)
      try {
        this.isEditMode = false
        // console.log('資料更新成功')
        // alert('資料更新成功')
        this.getUserDataAll()
        Toast.fire({
          icon: 'success',
          title: '會員資料更新成功'
        })
      } catch (err) {
        // console.log('資料更新失敗', err)
        // alert('資料更新失敗', err)
        Toast.fire({
          icon: `error ${err}`,
          title: '會員資料更新失敗'
        })
      }
    },
    // 上傳圖片
    async updateUserPhoto (item, e) {
      try {
        const file = e.target.files[0]
        if (!file) {
          return
        }
        const beforeCheck = await this.beforeUpdate(file)
        if (!beforeCheck.isValid) {
          return
        }
        this.imgHandle(item, file)
      } catch (err) {
        console.log(err)
      } finally {
        e.target.value = null
      }
    },
    beforeUpdate (file) {
      return new Promise((resolve) => {
        const validType = ['image/jpeg', 'image/png']
        // console.log('圖片格式', file.type)
        const isValidType = validType.includes(file.type)
        const isValidSize = file.size / 1024 / 1024 < 0.15
        if (!isValidType) {
          Swal.fire({
            icon: 'error',
            title: '格式錯誤',
            text: '請上傳 JPG 或 PNG 檔'
          })
        } else if (!isValidSize) {
          Swal.fire({
            icon: 'error',
            title: '尺寸錯誤',
            text: '圖片大小需小於 0.15 MB'
          })
        }
        resolve({
          isValid: isValidType && isValidSize
        })
      })
    },
    imgHandle (item, File) {
      const formData = new FormData()
      formData.append('photoFile', File)
      // 之後再檢查
      const file = formData.get('photoFile')
      const reader = new FileReader()
      // 確認是否為 jpg png
      // const fileType = file.type
      reader.readAsDataURL(file)
      // 等待讀取完成
      reader.onload = (event) => {
        if (item === 'course') {
          this.teacherData.courseImg = event.target.result
          // console.log('課程圖片連結', this.teacherData.courseImg)
          // alert('使用者圖片更新成功')
          Toast.fire({
            icon: 'success',
            title: '課程圖片更新成功'
          })
        } else if (item === 'teacher') {
          this.userData.userPhoto = event.target.result
          // console.log('老師圖片連結', this.userData.userPhoto)
          updateDoc(doc(fs, 'users', this.userData.uid), this.userData)
          // alert('使用者圖片更新成功')
          Toast.fire({
            icon: 'success',
            title: '使用者圖片更新成功'
          })
        } else if (item === 'background') {
          this.userData.userBackgroundPhoto = event.target.result
          // console.log('老師圖片連結', this.userData.userPhoto)
          updateDoc(doc(fs, 'users', this.userData.uid), this.userData)
          // alert('使用者圖片更新成功')
          Toast.fire({
            icon: 'success',
            title: '背景圖片更新成功'
          })
        }
      }
    },
    // 取得 user 所有開設課程
    async getUserAllCreated () {
      await this.checkMemberObserver()
      // 獲取用戶文檔
      const userRef = doc(fs, 'users', this.uid)
      getDoc(userRef) // 使用 getDoc 來獲取 document 數據
        .then(userDoc => {
          if (userDoc.exists()) {
            const coursesCreatedRefs = userDoc.get('courses_created')
            const coursePromises = []

            // 解析引用，檢索每個課程 document
            coursesCreatedRefs.forEach(courseRef => {
              coursePromises.push(getDoc(courseRef)) // 使用 getDoc 來獲取課程 document 數據
            })

            return Promise.all(coursePromises)
          } else {
            console.log('使用者 document 不存在(老師)')
            return []
          }
        })
        .then(courseDocs => {
          this.coursesCreated = courseDocs.map(doc => doc.data())
          // console.log('使用者開立的課程:', this.coursesCreated)
        })
        .catch(err => {
          console.err('沒有符合的開課:', err)
        })
    },
    // 加入到收藏
    async addToCollection (courseId) {
      if (!this.isMember) {
        Swal.fire({
          icon: 'info',
          title: '請先登入',
          confirmButtonColor: '#FE715F'
        })
        return
      }
      // 創建課程檔案
      const courseDocRef = doc(fs, 'AllCourses', courseId)
      // 創建使用者檔案
      const userDocRef = doc(fs, 'users', this.userData.uid)
      // 加入課程 id 加入到使用者的收藏 coursesCollection
      await updateDoc(userDocRef, { coursesCollection: arrayUnion(courseDocRef) }, { merge: true })
      try {
        this.getUserAllCollection()
        // console.log('加入收藏成功')
        Toast.fire({
          icon: 'success',
          title: '加入收藏成功'
        })
      } catch (err) {
        // console.log('加入收藏失敗', err)
        Toast.fire({
          icon: 'error',
          title: `加入收藏失敗 ${err}`
        })
      }
    },
    // 從收藏移除
    async removeFromCollection (courseId) {
    // 獲取課程文檔引用
      const courseDocRef = doc(fs, 'AllCourses', courseId)

      // 獲取用戶文檔引用
      const userDocRef = doc(fs, 'users', this.userData.uid)

      // 從使用者的收藏 coursesCollection 中移除課程 id
      await updateDoc(userDocRef, { coursesCollection: arrayRemove(courseDocRef) }, { merge: true })

      try {
        this.getUserAllCollection()
        // console.log('移除收藏成功')
        Toast.fire({
          icon: 'success',
          title: '移除收藏成功'
        })
      } catch (err) {
        // console.log('移除收藏失敗', err)
        Toast.fire({
          icon: `error ${err}`,
          title: '移除收藏失敗'
        })
      }
    },
    // 取得 user 所有收藏課程
    async getUserAllCollection () {
      await this.checkMemberObserver()
      const userRef = doc(fs, 'users', this.uid)
      getDoc(userRef) // 使用 getDoc 來獲取 document 數據
        .then(userDoc => {
          if (userDoc.exists()) {
            const coursesCreatedRefs = userDoc.get('coursesCollection')
            const coursePromises = []

            // 解析引用，检索每个课程文档
            coursesCreatedRefs.forEach(courseRef => {
              coursePromises.push(getDoc(courseRef)) // 使用 getDoc 來獲取 document 數據
            })

            return Promise.all(coursePromises)
          } else {
            console.log('使用者 document 不存在(收藏)')
            // return [] // 返回空陣列確保後面 .then能接收繼續執行
          }
        })
        .then(async courseDocs => {
          // 取得 使用者收藏的課程
          this.coursesCollection = await Promise.all(courseDocs.map(async Doc => {
            const courseData = Doc.data()
            const teacherRef = Doc.data().teacherId
            const teacherDisplayName = await this.getTeacherDisplayName(teacherRef)

            return {
              ...courseData,
              teacherDisplayName
            }
          }))
          // 取得使用者收藏的課程 id
          this.coursesCollectionId = courseDocs.map(doc => doc.data().courseId)
          // console.log('使用者收藏的課程', this.coursesCollection)
          // console.log('使用者收藏的課程 id', this.coursesCollectionId)
        })
        .catch(err => {
          console.err('沒有符合的收藏:', err)
        })
    },
    // 取得 user 所有參加課程
    async getUserAllJoin () {
      this.isLoading = true
      await this.checkMemberObserver()
      const userRef = doc(fs, 'users', this.uid)
      getDoc(userRef)
        .then(userDoc => {
          if (userDoc.exists()) {
            const coursesJoinedRefs = userDoc.get('courses_joined')
            const coursePromises = []

            coursesJoinedRefs.forEach(courseRef => {
              coursePromises.push(getDoc(courseRef))
            })
            return Promise.all(coursePromises)
          } else {
            console.log('使用者 document 不存在(收藏)')
            // return []
          }
        })
        .then(async courseDocs => {
          this.coursesJoined = await Promise.all(courseDocs.map(async doc => {
            const courseData = doc.data()
            const teacherRef = doc.data().teacherId
            const teacherDisplayName = await this.getTeacherDisplayName(teacherRef)

            return {
              ...courseData,
              teacherDisplayName
            }
          }))
          // console.log('使用者參加的課程', this.coursesJoined)
          this.isLoading = false
        })
        .catch(err => {
          console.err('沒有符合的課程:', err)
        })
    },
    // 取得課程老師名稱 (參加、收藏)
    async getTeacherDisplayName (teacherRef) {
      try {
        const teacherDoc = await getDoc(teacherRef) // Reference引用要用 get 取得
        if (teacherDoc.exists()) {
          const teacherData = teacherDoc.data()
          return teacherData.displayName || 'Unknown Teacher'
        } else {
          return 'Unknown Teacher'
        }
      } catch (err) {
        console.err('獲取老師資料失敗', err)
        return 'Unknown Teacher'
      }
    },
    toggleCollection (courseId) {
      // console.log('有點到')
      if (this.coursesCollectionId.indexOf(courseId) > -1) {
        this.removeFromCollection(courseId)
        // console.log('courseId 存在')
      } else {
        this.addToCollection(courseId)
        // console.log(' courseId 不存在')
      }
    },
    // 取得購買者上課時間(老師)
    async getBuyer (courseId) {
      const buyerStudyTimeCollection = collection(fs, 'AllCourses', courseId, 'buyerStudyTime')

      const q = query(buyerStudyTimeCollection)
      const querySnapshot = await getDocs(q)
      // const buyerStudyTimeData = []
      querySnapshot.forEach(async (item) => {
        const data = {}
        const userRef = doc(fs, 'users', item.id)
        const userDataSnapshot = await getDoc(userRef)
        const userData = userDataSnapshot.data()
        data.uid = item.id
        data.courseId = courseId
        data.studyTime = item.data().studyTime
        // data.month = item.data().month
        // data.date = item.data().date
        data.createdTime = item.data().createdTime
        data.displayName = userData.displayName
        this.buyerStudyTimeData.push(data)
      })
      // console.log('buyerStudyTimeData 數據', this.buyerStudyTimeData)
    },
    // 取得我的上課時間(學生)
    async getMyStudyTime (courseId) {
      await this.checkMemberObserver()
      // await this.getBuyer(courseId)
      const buyerStudyTimeCollection = collection(fs, 'AllCourses', courseId, 'buyerStudyTime')

      const q = query(buyerStudyTimeCollection)
      const querySnapshot = await getDocs(q)
      // const buyerStudyTimeData = []
      querySnapshot.forEach(async (item) => {
        if (item.id === this.uid) {
          this.myStudyTimeData.push(item.data())
        }
        // console.log('我的上課時間', this.myStudyTimeData)
      })
    },
    closeBuyTimeModal () {
      this.buyerStudyTimeData = []
      this.myStudyTimeData = []
    },
    beforeUpdateBuyerStudyTime (courseId, userId) {
      this.updateBuyerStudyTimeCourseId = courseId
      this.updateBuyerStudyTimeUid = userId
      // console.log('準備更新的上課時間對象', this.updateBuyerStudyTimeCourseId, this.updateBuyerStudyTimeUid)
    },
    // 更新學生上課時間
    async updateBuyerStudyTime () {
      console.log(this.buyerStudyTimeData)
      const buyerStudyTimeRef = doc(fs, 'AllCourses', this.updateBuyerStudyTimeCourseId, 'buyerStudyTime', this.updateBuyerStudyTimeUid)
      try {
        await updateDoc(buyerStudyTimeRef, {
          studyTime: this.buyerStudyTime
        })
        this.buyerStudyTimeData = []
        // console.log('上課時間更新成功')
        Toast.fire({
          icon: 'success',
          title: '上課時間更新成功'
        })
      } catch (err) {
        // console.error('上課時間更新失敗：', error)
        Toast.fire({
          icon: 'error',
          title: `上課時間更新失敗 ${err}`
        })
      }
    },
    async getUserAllJoinStudyTime () {
      this.buyerStudyTimeAll = []
      await this.checkMemberObserver()
      const userRef = doc(fs, 'users', this.uid)
      getDoc(userRef)
        .then(async userDoc => {
          if (userDoc.exists()) {
            const coursesJoinedRefs = await userDoc.get('courses_joined')
            coursesJoinedRefs.map(async courseRef => {
              const data = {}
              const courseDoc = await getDoc(courseRef)
              data.title = courseDoc.data().name
              const courseId = courseRef.id
              data.courseId = courseId
              const buyerStudyTimeCollection = collection(fs, 'AllCourses', courseId, 'buyerStudyTime')
              const studyTimeSnapshot = await getDocs(buyerStudyTimeCollection)
              studyTimeSnapshot.forEach(async item => {
                // console.log('item.data', item.id, item.data())
                if (item.id === this.uid) {
                  if (item.data().studyTime) {
                    data.start = moment(item.data().studyTime).format('YYYY-MM-DD HH:mm')
                    data.end = moment(item.data().studyTime).add(courseDoc.data().time, 'minute').format('YYYY-MM-DD HH:mm')
                  }
                }
              })
              this.buyerStudyTimeAll.push(data)
            })
            // console.log('使用者上課時間', this.buyerStudyTimeAll)
          } else {
            console.log('使用者 document 不存在(收藏)')
            // return []
          }
        })
        .catch(err => {
          console.err('取得使用者文檔出錯:', err)
        })
    }
  },
  getters: {
    collectionStatus () {
      this.getUserAllCollection()
      return (courseId) => {
        return this.coursesCollectionId.indexOf(courseId) > -1 ? 'bookmark' : 'bookmark_border'
      }
    }
  }
})
