import { defineStore } from 'pinia'
import { getFirestore, doc, getDoc, getDocs, query, where, collection } from 'firebase/firestore/lite'
import userStore from './userStore'
// import Swal from 'sweetalert2'

const fs = getFirestore()
const userData = userStore()
// const Toast = Swal.mixin({
//   toast: true,
//   position: 'top-end',
//   showConfirmButton: false,
//   timer: 1500,
//   timerProgressBar: true,
//   didOpen: (toast) => {
//     toast.addEventListener('mouseenter', Swal.stopTimer)
//     toast.addEventListener('mouseleave', Swal.resumeTimer)
//   }
// })

export default defineStore('orderStore', {
  state: () => ({
    myOrders: [],
    existingOrders: [],
    isLoading: true,
    isBuyHistory: null
  }),
  actions: {
    async getOrders () {
      this.isLoading = true
      await userData.checkMemberObserver()
      // 創建對用戶文檔的引用
      const userDocRef = doc(fs, 'users', userData.uid)
      // 使用 getDoc 函數從 Firestore 中獲取用戶文檔
      const userDocSnapshot = await getDoc(userDocRef)

      // 檢查用戶文檔是否存在
      if (userDocSnapshot.exists()) {
        // 獲取用戶文檔的數據
        const userData = userDocSnapshot.data()
        // 獲取 myOrders 字段的值
        const userOrdersData = userData.myOrders

        if (userOrdersData.length === 0) {
          console.log('您沒有購買紀錄')
          this.isBuyHistory = false
          this.isLoading = false
          return
        }
        console.log('使用者的 userOrdersData 內容', userOrdersData)

        const ordersCollectionRef = collection(fs, 'orders')

        // 創建一個查詢，以檢查 orderId 是否存在於 userOrdersData 陣列中
        const querySnapshot = await getDocs(
          query(ordersCollectionRef, where('orderId', 'in', userOrdersData))
        )

        // 將查詢結果轉換為數組
        const existingOrders = []
        querySnapshot.forEach(async doc => {
          const orderData = doc.data()
          existingOrders.push(orderData)
        })

        console.log('存在於 userOrdersData 中的訂單(尚未有課程細節)', existingOrders)

        // 創建一個陣列來存儲包含課程詳細資訊的訂單
        const ordersWithCourseDetails = []

        // 使用 for...of 循環等待詳細資訊的加載
        for (const order of existingOrders) {
          const orderWithDetails = { ...order } // 創建一個包含原始訂單資料的新物件

          // 遍歷 orderDetail 陣列中的每個 reference
          const courseDetails = []

          await Promise.all(order.orderDetail.map(async (orderDetailRef) => {
            // 使用 getDoc 函數取得 reference 所對應的文檔
            const orderDetailDoc = await getDoc(orderDetailRef)

            if (orderDetailDoc.exists()) {
              // 將文檔資料添加到 courseDetails 陣列中
              courseDetails.push(orderDetailDoc.data())
            }
          }))

          // 在 orderWithDetails 中添加 courseDetails，以包含購買課程的詳細資訊
          orderWithDetails.courseDetails = courseDetails

          // 添加包含購買課程詳細資訊的訂單到新陣列中
          ordersWithCourseDetails.push(orderWithDetails)
        }

        // 更新 this.myOrders
        this.myOrders = ordersWithCourseDetails
        console.log('我的訂單結果', this.myOrders)
        this.isLoading = false
        this.isBuyHistory = true
        // Toast.fire({
        //   icon: 'success',
        //   title: '取得成功'
        // })
      } else {
        this.isLoading = false
        console.log('找不到該用戶的文檔')
      }
    }
  },
  getOrderCourseDetails () {
  },
  getters: {
  }
})
