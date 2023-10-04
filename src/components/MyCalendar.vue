<template>
  <FullCalendar :options="calendarOptions" ref="fullCalendar"/>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import userStore from '../stores/userStore'
import windowStore from '../stores/windowStore'
// import Tooltip from 'tippy.js' // npm i tippy.js
// import 'tippy.js/dist/tippy.css'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timeGrid'
import listPlugin from '@fullcalendar/list'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data () {
    return {
      // calendarOptions: {
      //   plugins: [dayGridPlugin, interactionPlugin],
      //   initialView: 'dayGridMonth'
      // }
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
        themeSystem: 'standard',
        initialView: 'dayGridMonth',
        weekends: true,
        height: 650,
        // locale: 'zh-tw',
        dayMaxEventRows: 2.0, // 事件最大展示列數
        aspectRatio: 1.35,
        weekNumberCalculation: 'iso', // 周次的显示格式。
        handleWindowResize: true, // 響應式
        selectable: true, // 是否可以選中日曆格
        expandRows: true,
        // stickyFooterScrollbar: true, //
        windowResize: function () { // 瀏覽器窗體變化時觸發
          console.log(window.innerWidth)
        },
        titleFormat: {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        },
        headerToolbar: {
          left: 'prev next today',
          center: 'title',
          right: 'dayGridMonth timeGridWeek timeGridDay'
        }, // 日曆上方的按钮和title
        buttonText: {
          today: '今天',
          month: '月',
          week: '周',
          day: '日',
          list: '列表'
        },
        slotLabelFormat: {
          hour: '2-digit',
          minute: '2-digit',
          meridiem: false,
          hour12: false
        },
        eventTimeFormat: {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        },
        displayEventEnd: true, //
        // eventMouseEnter: this.eventMouseEnter,
        dateClick: info => {
          console.log(info)
        }, // 點擊日期info是單元格的信息
        eventClick: info => {
          console.log(info)
          // dialogVisible.value = true;
        } // 事件的點擊
        // eventDidMount: function (info) {
        //   const tooltip = new Tooltip(info.el, {
        //     content: info.event._def.title,
        //     placement: 'top'
        //   }) // 懸浮提示
        // }
        // events: [
        // start: 2023-10-31 12:00,
        // end: 2023-11-01 12:00
        //   { title: 'event 1', date: '2023-10-31' },
        //   { title: 'event 2', date: '2023-11-01' }
        // ]
      },
      // loading : function(isLoading, view){ //视图数据加载中、加载完成触发
      //                         console.log("↓↓↓loading↓↓↓");
      //                         if(isLoading == true){
      //                             console.log("view:"+view+",开始加载");
      //                         }else if(isLoading == false){
      //                             console.log("view:"+view+",加载完成");
      //                         }
      //                     },
      eventSources: [
      ],
      views: ['timeGridWeek']
    }
  },
  watch: {
    windowWidth () {
      // console.log(this.windowWidth)
      if (window.innerWidth < 992) {
        this.$refs.fullCalendar.calendar.changeView('listMonth')
        // console.log(this.$refs.fullCalendar.calendar.el)
        this.calendarOptions.headerToolbar = {
          left: 'prev next',
          center: 'title',
          right: 'today'
        }
        this.calendarOptions.titleFormat = {
          year: 'numeric',
          month: 'short'
        }
      } else {
        this.$refs.fullCalendar.calendar.changeView('dayGridMonth')
        this.calendarOptions.headerToolbar = {
          left: 'prev next today',
          center: 'title',
          right: 'dayGridMonth timeGridWeek timeGridDay'
        }
        this.calendarOptions.titleFormat = {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
      }
    }
  },
  methods: {
    ...mapActions(userStore, ['getUserAllJoinStudyTime']),
    ...mapActions(windowStore, ['getWindowWidth'])
  },
  computed: {
    ...mapState(userStore, ['buyerStudyTimeAll']),
    ...mapState(windowStore, ['windowWidth'])
  },
  created () {
    // this.getUserAllJoinStudyTime()
    this.calendarOptions.events = this.buyerStudyTimeAll
  },
  mounted () {
    this.getWindowWidth()
  }
}
</script>
