import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // 前台
  {
    path: '/',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/front/HomeView.vue')
      },
      {
        path: 'teacher',
        component: () => import('../views/front/TeacherView.vue'),
        children: [
          {
            path: 'stepOne',
            component: () => import('../views/front/TeacherStepOne.vue')
          },
          {
            path: 'stepTwo',
            component: () => import('../views/front/TeacherStepTwo.vue')
          },
          {
            path: 'stepThree',
            component: () => import('../views/front/TeacherStepThree.vue')
          },
          {
            path: 'stepFour',
            component: () => import('../views/front/TeacherStepFour.vue')
          }
        ]
      },
      {
        path: 'courses',
        component: () => import('../views/front/CoursesView.vue')
      },
      {
        path: 'course/:id',
        component: () => import('../views/front/CourseView.vue')
      },
      {
        path: 'login',
        component: () => import('../views/front/LoginView.vue')
      },
      {
        path: 'personal',
        component: () => import('../views/front/PersonalView.vue')
      },
      {
        path: 'personalCourse',
        component: () => import('../views/front/PersonalCourse.vue')
      },
      {
        path: 'personalOrders',
        component: () => import('../views/front/PersonalOrders.vue')
      },
      {
        path: 'personalCalendar',
        component: () => import('../views/front/PersonalCalendar.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/front/CartView.vue')
      },
      {
        path: 'orderFinished',
        component: () => import('../views/front/OrderFinishedView.vue')
      }
    ]
  },
  // 後台
  {
    path: '/admin',
    component: () => import('../views/DashBoardView.vue'),
    children: [
      {
        path: 'courses',
        component: () => import('../views/admin/AdminCourses.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/admin/AdminOrders.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/admin/CouponsView.vue')
      }
    ]
  },
  // 404 頁面
  {
    path: '/:pathMatch(.*)*',
    name: '404Page',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    // console.log(to, from, savedPosition)
    return {
      top: 0
    }
  }

})

export default router
