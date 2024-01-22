import{a as c,b as p,m as l}from"./pinia-ef994b1a.js";import{t as i}from"./teacherStore-cdcec2f3.js";import{u as d}from"./userStore-cbb3a7b9.js";import{b as u}from"./bannerStore-1b7734ea.js";import{c as _}from"./coursesStore-d5a7267e.js";import{_ as b}from"./default-user-photo-789721fd.js";import{bf as f,aC as g,n as o,o as s,aQ as e,m as n,v,ba as w,u as h,F as y,t as D,aq as a}from"./_plugin-vue_export-helper-ec969899.js";import"./sweetalert2.all-cb738ec0.js";import"./index.esm2017-17c8b752.js";import"./moment-87d88fe9.js";const k={data(){return{}},methods:{...c(d,["getUid","getUserData"]),...c(i,["setData","setCourseData","createCourse","createCourseConnect"]),...c(_,["getData"]),...c(u,["getBannerInfo"]),goStepTwo(){this.$router.push("/teacher/stepTwo")},goStepFour(){this.$router.push("/teacher/stepFour")},getCoursesNum(){this.getData()}},computed:{...p(i,["teacherData"]),...l(d,["userData","isMember","uid","checkMemberObserver"]),...l(i,["teacherUid"]),...l(_,["newCoursesNum","coursesNum"])},created(){this.getBannerInfo(new URL("/Music-Teacher-Website/assets/title-banner-fefbe1a0.jpg",self.location).href,"頁面預覽","PREVIEW","預覽課程頁面，確保效果完美呈現")}},C={class:"mb-32"},S={class:"container"},x={class:"row"},N={class:"col-12 col-lg-8 mb-16 mb-lg-0"},M={class:"pe-xl-48"},T=["src"],$={class:"col-12 col-lg-4 d-flex flex-column"},j={class:"fs-2 fw-bold mb-16"},I={class:"text-grey-bold"},V={class:"mb-16"},B={class:"container"},F={class:"row align-items-start"},U={class:"col-12 col-lg-8 mb-16 mb-lg-0"},E={class:"row align-items-center mb-16"},P={class:"col-auto cursor-pointer"},W=["src"],R={key:1,class:"h-80px w-80px rounded-circle object-fit-cover",src:b,alt:"老師照片"},q={class:"col-auto fs-2"},A={class:"row mb-32"},L={class:"col-12 col-lg-10"},O=s("p",{class:"fs-4 mb-16 fw-bold"},"關於課程",-1),Q={class:"row g-16"},z={class:"col-auto"},G={class:"d-flex align-items-center"},H=s("span",{class:"material-symbols-outlined fs-1 me-8"},"timer",-1),J=s("p",{class:"text-grey-bold fs-7"},"課程時長",-1),K={class:"fs-6 fw-bold"},X=D('<div class="col-auto"><div class="d-flex align-items-center"><span class="material-symbols-outlined fs-1 me-8">group</span><div><p class="text-grey-bold fs-7">被購買數</p><p class="fs-6 fw-bold"> 0 次</p></div></div></div>',1),Y={class:"col-auto"},Z={class:"d-flex align-items-center"},ss=s("span",{class:"material-symbols-outlined fs-1 me-8"},"map",-1),ts=s("p",{class:"text-grey-bold fs-7"},"上課地點",-1),es={class:"fs-6 fw-bold"},os={class:"col-12 col-xl-auto"},as={class:"d-flex align-items-center"},cs=s("span",{class:"material-symbols-outlined fs-1 me-8"},"school",-1),ls=s("p",{class:"text-grey-bold fs-7"},"上課方式",-1),is={key:0,class:"fw-bold"},ns={key:1,class:"fw-bold"},rs={key:2,class:"fw-bold"},ds={class:"col-12 col-lg-4 position-sticky top-100px"},_s={class:"p-32 border rounded-4"},hs=s("h4",{class:"border-bottom pb-24 mb-24"},"購買單堂課程",-1),ms={class:"mb-16"},ps=s("span",{class:"fs-5 me-16"},"售價",-1),us={class:"fs-1"},bs=s("div",{class:"d-flex justify-content-between"},[s("button",{type:"button",class:"btn btn-outline-primary w-75 rounded-pill"},"立即購買"),s("button",{type:"button",class:"btn btn btn-primary rounded-pill"},[s("span",{class:"material-symbols-outlined fs-3 align-middle"},"shopping_cart")])],-1),fs={class:"container mb-32"},gs={class:"row justify-content-between"},vs={class:"col-12 col-lg-8 d-flex justify-content-between w-100"},ws=s("i",{class:"bi bi-arrow-left"},null,-1),ys=s("i",{class:"bi bi-arrow-right"},null,-1);function Ds(t,r,ks,Cs,Ss,xs){const m=g("router-link");return a(),o(y,null,[s("section",C,[s("div",S,[s("div",x,[s("div",N,[s("div",M,[s("img",{class:"h-lg-500 w-100 object-fit-cover rounded-4",src:t.teacherData.courseImg,alt:"課程圖片"},null,8,T)])]),s("div",$,[s("h1",j,e(t.teacherData.name),1),s("p",I,e(t.teacherData.courseIntro),1)])])])]),s("section",V,[s("div",B,[s("div",F,[s("div",U,[s("div",E,[s("div",P,[t.userData.userPhoto?(a(),o("img",{key:0,class:"h-100px w-100px rounded-circle object-fit-cover",src:t.userData.userPhoto,alt:"老師照片"},null,8,W)):(a(),o("img",R))]),s("div",q,e(t.userData.displayName),1)]),s("div",A,[s("div",L,e(t.userData.userIntro),1)]),O,s("div",Q,[s("div",z,[s("div",G,[H,s("div",null,[J,s("p",K,e(t.teacherData.time)+"分鐘",1)])])]),X,s("div",Y,[s("div",Z,[ss,s("div",null,[ts,s("p",es,e(t.teacherData.location),1)])])]),s("div",os,[s("div",as,[cs,s("div",null,[ls,t.teacherData.classMode[0]?(a(),o("span",is,e(t.teacherData.classMode[0]),1)):n("",!0),t.teacherData.classMode[1]?(a(),o("span",ns,e(t.teacherData.classMode[1]),1)):n("",!0),t.teacherData.classMode[2]?(a(),o("span",rs,e(t.teacherData.classMode[2]),1)):n("",!0)])])])])]),s("div",ds,[s("div",_s,[hs,s("div",ms,[ps,s("span",us,"NT$ "+e(t.teacherData.price),1)]),bs])])])])]),s("div",fs,[s("div",gs,[s("div",vs,[v(m,{to:"/teacher/stepTwo",class:"btn btn-outline-primary rounded-pill px-48 lh-lg"},{default:w(()=>[ws,h("上一頁 ")]),_:1}),s("button",{type:"button",class:"btn btn-primary d-block rounded-pill px-48 lh-lg",onClick:r[0]||(r[0]=Ns=>t.createCourseConnect())},[h("下一步"),ys])])])])],64)}const Ps=f(k,[["render",Ds]]);export{Ps as default};
