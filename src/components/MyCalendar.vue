<template>
  <FullCalendar :options="calendarOptions" ref="fullCalendar"/>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import userStore from '../stores/userStore'
import windowStore from '../stores/windowStore'
import Tooltip from 'tippy.js' // npm i tippy.js
import 'tippy.js/dist/tippy.css'
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
        weekNumberCalculation: 'iso', // 週次的顯示格式
        handleWindowResize: true, // RWD
        selectable: true, // 是否可以選中日曆格
        expandRows: true,
        // stickyFooterScrollbar: true,
        // 瀏覽器窗體變化時觸發
        windowResize: function () {
          // console.log(window.innerWidth)
        },
        titleFormat: {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        },
        // 日曆上方的按钮和 title
        headerToolbar: {
          left: 'prev next today',
          center: 'title',
          right: 'dayGridMonth timeGridWeek timeGridDay'
        },
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
        // 點擊日期info是單元格的信息
        // dateClick: info => {
        //   console.log(info)
        // },
        // 事件的點擊
        // eventClick: info => {
        //   console.log(info)
        //   // dialogVisible.value = true;
        // },
        // events: [
        // // start: 2023-10-31 12:00,
        // // end: 2023-11-01 12:00
        // //   { title: 'event 1', date: '2023-10-31' },
        // //   { title: 'event 2', date: '2023-11-01' }
        // ],
        // 懸浮提示
        eventDidMount: function (info) {
          Tooltip(info.el, {
            content: info.event._def.title,
            placement: 'top'
          })
        }
      },
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
    this.calendarOptions.events = this.buyerStudyTimeAll
  },
  mounted () {
    this.getWindowWidth()
  }
}
</script>
