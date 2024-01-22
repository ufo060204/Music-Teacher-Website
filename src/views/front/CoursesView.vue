<template>
  <section class="mt-66">
    <BannerArea />
    <div class="container">
      <div class="mb-16">
        <CardPlaceholder v-if="isLoading"/>
        <div v-if="!isLoading">
          <div class="row align-items-center g-8 py-6">
            <div class="col-12 col-lg-auto">
              <div class="row g-4">
                <div class="col-auto">
                  <label class="col-form-label" for="courseType">音樂技能：</label>
                </div>
                <div class="col-auto">
                  <select class="form-select" id="courseType" v-model="selectCourseType">
                    <option value="">請選擇</option>
                    <!-- <option value="電吉他">電吉他</option>
                    <option value="電貝斯">電貝斯</option>
                    <option value="爵士鼓">爵士鼓</option> -->
                    <option value="短笛">短笛</option>
                    <option value="長笛">長笛</option>
                    <option value="單簧管">單簧管</option>
                    <option value="雙簧管">雙簧管</option>
                    <option value="英國管">英國管</option>
                    <option value="巴松管">巴松管</option>
                    <option value="薩克斯風">薩克斯風</option>
                    <option value="管風琴">管風琴</option>
                    <option value="小號">小號</option>
                    <option value="短號">短號</option>
                    <option value="長號">長號</option>
                    <option value="法國號">法國號</option>
                    <option value="低音號">低音號</option>
                    <option value="巴里東">巴里東</option>
                    <option value="上低音號">上低音號</option>
                    <option value="小提琴">小提琴</option>
                    <option value="中提琴">中提琴</option>
                    <option value="大提琴">大提琴</option>
                    <option value="低音提琴">低音提琴</option>
                    <option value="豎琴">豎琴</option>
                    <option value="斑鳩琴">斑鳩琴</option>
                    <option value="曼陀林">曼陀林</option>
                    <option value="大鍵琴">大鍵琴</option>
                    <option value="魯特琴">魯特琴</option>
                    <option value="爵士鼓">爵士鼓</option>
                    <option value="木箱鼓">木箱鼓</option>
                    <option value="木琴">木琴</option>
                    <option value="馬林巴琴">馬林巴琴</option>
                    <option value="鋼琴">鋼琴</option>
                    <option value="數位鋼琴">數位鋼琴</option>
                    <option value="傳統電子琴">傳統電子琴</option>
                    <option value="電子琴">電子琴</option>
                    <option value="電子合成器">電子合成器</option>
                    <option value="揚琴">揚琴</option>
                    <option value="中國笛">中國笛</option>
                    <option value="笙">笙</option>
                    <option value="嗩吶">嗩吶</option>
                    <option value="蕭">蕭</option>
                    <option value="胡琴">胡琴</option>
                    <option value="古箏">古箏</option>
                    <option value="柳琴">柳琴</option>
                    <option value="琵琶">琵琶</option>
                    <option value="阮">阮</option>
                    <option value="其他中國樂器">其他中國樂器</option>
                    <option value="木吉他">木吉他</option>
                    <option value="古典吉他">古典吉他</option>
                    <option value="電吉他">電吉他</option>
                    <option value="烏克麗麗">烏克麗麗</option>
                    <option value="電貝斯">電貝斯</option>
                    <option value="口琴">口琴</option>
                    <option value="手風琴">手風琴</option>
                    <option value="手碟鼓">手碟鼓</option>
                    <option value="其它樂器">其它樂器</option>
                    <option value="編曲">編曲</option>
                    <option value="作曲">作曲</option>
                    <option value="詞曲創作">詞曲創作</option>
                    <option value="配樂">配樂</option>
                    <option value="錄音">錄音</option>
                    <option value="音效">音效</option>
                    <option value="成音工程">成音工程</option>
                    <option value="混音">混音</option>
                    <option value="樂理">樂理</option>
                    <option value="聽寫">聽寫</option>
                    <option value="音樂理論">音樂理論</option>
                    <option value="流行歌唱">流行歌唱</option>
                    <option value="聲樂">聲樂</option>
                    <option value="音樂劇">音樂劇</option>
                    <option value="和聲">和聲</option>
                    <option value="視唱">視唱</option>
                    <option value="B-BOX">B-BOX</option>
                    <option value="Acappella">Acappella</option>
                    <option value="指揮">指揮</option>
                    <option value="音樂治療">音樂治療</option>
                    <option value="DJ">DJ</option>
                    <option value="合奏指導">合奏指導</option>
                    <option value="音樂軟體">音樂軟體</option>
                    <option value="樂器製作">樂器製作</option>
                    <option value="其它非樂器類">其它非樂器類</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-auto">
              <div class="row g-4">
                <div class="col-auto">
                  <label class="col-form-label" for="classMode">上課方式：</label>
                </div>
                <div class="col-auto">
                  <select class="form-select" id="classMode" v-model="selectClassMode">
                    <option value="">請選擇</option>
                    <option value="老師家">老師家</option>
                    <option value="學生家">學生家</option>
                    <option value="線上">線上</option>
                  </select>
                </div>
                <div v-if="selectClassMode === '老師家' || selectClassMode === '學生家'" class="col-auto">
                  <select class="form-select" id="location" v-model="selectLocation">
                    <option value="">請選擇</option>
                    <!-- <option value="台北">台北</option>
                    <option value="台中">台中</option>
                    <option value="高雄">高雄</option> -->
                    <option value="台北市">台北市</option>
                    <option value="基隆市">基隆市</option>
                    <option value="新北市">新北市</option>
                    <option value="宜蘭縣">宜蘭縣</option>
                    <option value="桃園市">桃園市</option>
                    <option value="新竹市">新竹市</option>
                    <option value="新竹縣">新竹縣</option>
                    <option value="苗栗縣">苗栗縣</option>
                    <option value="台中市">台中市</option>
                    <option value="彰化縣">彰化縣</option>
                    <option value="南投縣">南投縣</option>
                    <option value="嘉義市">嘉義市</option>
                    <option value="嘉義縣">嘉義縣</option>
                    <option value="雲林縣">雲林縣</option>
                    <option value="台南市">台南市</option>
                    <option value="高雄市">高雄市</option>
                    <option value="澎湖縣">澎湖縣</option>
                    <option value="金門縣">金門縣</option>
                    <option value="屏東縣">屏東縣</option>
                    <option value="台東縣">台東縣</option>
                    <option value="花蓮縣">花蓮縣</option>
                    <option value="連江縣">連江縣</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-auto me-auto">
              <div class="row g-4">
                <div class="col-auto">
                  <label class="col-form-label" for="searchCourse">課程名稱：</label>
                </div>
                <div class="col-auto">
                  <input class="form-control" type="search" id="searchCourse" placeholder="請輸入課程名稱" v-model="searchCourse">
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-auto">
              <div class="row g-4">
                <div class="col-auto">
                  <label class="col-form-label" for="musicType">排序：</label>
                </div>
                <div class="col-auto">
                  <select class="form-select" v-model="selectSort" @change="courseSort()">
                    <option value="">請選擇</option>
                    <option value="新舊">新舊</option>
                    <option value="金額">金額</option>
                    <option value="人氣">人氣</option>
                  </select>
                </div>
                <div class="col-auto d-flex align-items-center d-lg-none">
                  <span @click="searchClear()" class="material-icons-outlined" role="button">
                    search_off
                  </span>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-auto d-none d-lg-block">
              <div class="row g-4">
                <div class="col-auto">
                  <span @click="searchClear()" class="material-icons-outlined" role="button">
                    search_off
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-24">
            <div v-if="filterCourseData.length === 0">
              <p>沒有符合的課程</p>
            </div>
            <div v-for="course in this.pageCourseData" :key="course.data.courseId" class="col">
              <router-link :to="`/course/${course.data.courseId}`">
                <div class="card course-card rounded-4 shadow h-100">
                  <div class="position-relative overflow-hidden rounded-top-4">
                    <img v-if="course.data.courseImg" class="w-100 h-200px transition object-fit-cover" :src="course.data.courseImg" alt="課程圖片">
                    <img v-else class="w-100 h-200px transition object-fit-cover" src="https://www.ils.com.tw/zh/Up_files/webskin/RWD/include/images/type3album_blank.png" alt="課程預設圖片">
                    <span @click.prevent="toggleCollection(course.data.courseId)" class="material-icons-outlined position-absolute bottom-0 end-0 text-primary bookmark-icon" :class="{ 'h-auto' : this.collectionStatus(course.data.courseId) === 'bookmark', 'h-0' : this.collectionStatus(course.data.courseId) === 'bookmark_border' }" title="加入 / 移除收藏">
                      {{ this.collectionStatus(course.data.courseId) }}
                    </span>
                  </div>
                  <div class="card-body d-flex flex-column">
                    <h2 class="fs-5 fw-bold d-flex mb-4">{{ course.data.name }}</h2>
                    <h3 class="fs-6 text-secondary mb-20">by {{ course.data.teacherName }}</h3>
                    <ul class="d-flex text-secondary mb-auto">
                      <li class="d-flex align-items-center me-8 position-relative course-card-title">
                        <span class="material-symbols-outlined fs-6 me-4 lh-24">
                          timer
                        </span>
                        <p>{{ course.data.time }} 分鐘</p>
                      </li>
                      <li class="d-flex align-items-center me-8">
                        <span class="material-symbols-outlined fs-6 me-4 lh-24">
                          map
                        </span>
                        <p>{{ course.data.location }}</p>
                      </li>
                      <li class="d-flex align-items-center me-8">
                        <span class="material-symbols-outlined fs-6 me-4 lh-24">
                          group
                        </span>
                        <span v-if="course.data.buyer.length === 0">0</span>
                        <span v-else>{{ course.data.buyer.length }}</span>
                      </li>
                    </ul>
                    <span class="fs-5 fw-bold">NT$ {{ course.data.price }}</span>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="mb-16">
    <PaginationArea />
  </div>
</template>

<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import coursesStore from '@/stores/coursesStore'
import filterStore from '@/stores/filterStore'
import userStore from '@/stores/userStore'
import bannerStore from '@/stores/bannerStore'

import CardPlaceholder from '@/components/CardPlaceholder.vue'
import BannerArea from '@/components/BannerArea.vue'
import PaginationArea from '@/components/PaginationArea.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    CardPlaceholder, BannerArea, PaginationArea
  },
  watch: {
  },
  methods: {
    ...mapActions(coursesStore, ['getAllCourses', 'getAllCoursesAndTeacher', 'getCourseDetails']),
    ...mapActions(userStore, ['addToCollection', 'removeFromCollection', 'toggleCollection', 'checkMemberObserver']),
    ...mapActions(filterStore, ['courseSort', 'searchClear']),
    ...mapActions(bannerStore, ['getBannerInfo'])
  },
  computed: {
    ...mapState(coursesStore, ['sortCourses', 'AllCourseData', 'isLoading']),
    ...mapState(userStore, ['collectionStatus']),
    ...mapState(filterStore, ['filterCourseData', 'pageCourseData']),
    ...mapWritableState(filterStore, ['selectCourseType', 'selectClassMode', 'selectLocation', 'searchCourse', 'selectSort'])
  },
  created () {
    this.checkMemberObserver()
    this.getBannerInfo(
      new URL('../../assets/images/title-banner.jpg', import.meta.url).href,
      '全部課程',
      'ALL COURSES',
      '專業培訓，探索多元音樂風格'
    )
    this.getAllCoursesAndTeacher()
  }
}
</script>

<style lang="scss" scoped>
  .bookmark-icon {
      height: 0;
      transition: height 0.5s !important;
    }
  .course-card-title {
    &::before {
      content: "";
      position: absolute;
      height: 5px;
      background: #ff715f;
      width: 35px;
      top: -0.75rem;
      border-radius: 3px;
    }
  }
  .course-card {
    &:hover {
      img {
        transform: scale(1.2);
      }
      .bookmark-icon {
        height: 24px !important;
        transition: height 0.5s !important;
      }
    }
  }
</style>
