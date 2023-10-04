import{a as h,b as y}from"./pinia-ef994b1a.js";import{u as f}from"./userStore-7aec58b9.js";import{n as b}from"./runtime-dom.esm-bundler-e62d4d3a.js";import{bf as w,aC as m,n as c,o as e,v as a,ba as g,aq as p,aa as d,u as _,au as k,ar as V}from"./_plugin-vue_export-helper-ec969899.js";import"./index.esm2017-53588797.js";import"./sweetalert2.all-cf36bba5.js";import"./moment-15d02ca5.js";const U="/Music-Teacher-Website/login-banner.jpg";const x={data(){return{token:"",isLoading:!1,color:"#FF700C"}},methods:{...h(f,["login","loginGoogle","signUp"])},computed:{...y(f,["loginUser","isLogin","singUpData","userData"])},created(){}},l=s=>(k("data-v-0f81b64e"),s=s(),V(),s),D={class:"mt-66"},C={class:"container"},E={class:"row align-items-center justify-content-center justify-content-md-start"},L=l(()=>e("div",{class:"col-6 col-lg-4 d-none d-md-block"},[e("img",{class:"w-100 h-100",src:U,alt:"登入註冊頁側圖"})],-1)),N={class:"col-8 col-md-6 col-xl-4"},q={key:0},M=l(()=>e("h1",{class:"mx-auto border-bottom my-16 pb-16 w-75 text-center fs-1"},"會員登入",-1)),$=l(()=>e("img",{class:"h-24px w-24px me-8",src:"https://static-00.iconduck.com/assets.00/google-icon-512x512-tqc9el3r.png",alt:"google-icon"},null,-1)),S=l(()=>e("span",{class:"fs-7 fs-lg-6"},"使用 Google 登入",-1)),j=[$,S],G=l(()=>e("hr",{class:"mx-auto w-75 mt-16 text-center fs-7 login-hr"},null,-1)),I={class:"mb-16"},B=l(()=>e("label",{for:"userName",class:"form-label"},"Email：",-1)),F={class:"mb-16"},P=l(()=>e("div",{class:"d-flex justify-content-between align-items-center"},[e("label",{for:"password",class:"form-label"},"密碼："),e("a",{href:"#",class:"text-delete fs-7","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},"忘記密碼"),e("div",{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[e("div",{class:"modal-dialog modal-dialog-centered"},[e("div",{class:"modal-content"},[e("div",{class:"modal-header"},[e("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"重設密碼"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]),e("div",{class:"modal-body"},[e("div",{class:"mb-3"},[e("label",{for:"resetPasswordEmail",class:"form-label"},"請填寫註冊Email"),e("input",{type:"email",class:"form-control",id:"resetPasswordEmail",placeholder:"請填寫註冊Email"})])]),e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-primary"},"送出")])])])])],-1)),T=l(()=>e("button",{type:"submit",class:"btn btn-dark d-block mx-auto py-12 w-100 rounded-pill"},"登入",-1)),W={class:"mx-auto w-75 my-12 text-center fs-7 text-delete"},z={key:1},A=l(()=>e("h1",{class:"mx-auto border-bottom my-16 pb-16 w-75 text-center"},"會員註冊",-1)),H={class:"mb-16"},J=l(()=>e("label",{for:"displayName",class:"form-label"},"姓名：",-1)),K={class:"mb-16"},O=l(()=>e("label",{for:"email",class:"form-label"},"Email：",-1)),Q={class:"mb-16"},R=l(()=>e("label",{for:"password",class:"form-label"},"密碼：",-1)),X={class:"mb-16"},Y=l(()=>e("label",{for:"confirmation",class:"form-label"},"再次輸入密碼：",-1)),Z=l(()=>e("button",{type:"submit",class:"btn btn-dark d-block mx-auto py-12 w-100 rounded-pill"},"註冊",-1)),ee={class:"mx-auto w-75 my-12 text-center fs-7 text-delete"};function se(s,o,oe,ae,le,te){const n=m("v-field"),r=m("error-message"),u=m("v-form"),v=m("ErrorMessage");return p(),c("section",D,[e("div",C,[e("div",E,[L,e("div",N,[s.isLogin?(p(),c("div",q,[M,e("button",{onClick:o[0]||(o[0]=(...i)=>s.loginGoogle&&s.loginGoogle(...i)),type:"button",class:"btn btn-outline-dark d-block mx-auto py-16 d-flex justify-content-center w-75 rounded-pill"},j),G,a(u,{ref:"form",onSubmit:o[4]||(o[4]=i=>s.login()),class:"mx-auto w-75"},{default:g(({errors:i})=>[e("div",I,[B,a(n,{id:"userName",name:"帳號",type:"email",class:d(["form-control fs-7",{"is-invalid":i.帳號}]),placeholder:"name@example.com",rules:"required|email",modelValue:s.loginUser.email,"onUpdate:modelValue":o[1]||(o[1]=t=>s.loginUser.email=t)},null,8,["class","modelValue"]),a(r,{name:"帳號",class:"invalid-feedback"})]),e("div",F,[P,a(n,{id:"password",name:"密碼",type:"password",class:d(["form-control fs-7",{"is-invalid":i.密碼}]),placeholder:"請輸入密碼",rules:"required|min:8",modelValue:s.loginUser.password,"onUpdate:modelValue":o[2]||(o[2]=t=>s.loginUser.password=t)},null,8,["class","modelValue"]),a(r,{name:"密碼",class:"invalid-feedback"})]),T,e("p",W,[_(" 還沒有帳號嗎?"),e("a",{onClick:o[3]||(o[3]=b(t=>s.isLogin=!1,["prevent"])),href:"#",class:"d-inline-block"},"前往註冊")])]),_:1},512)])):(p(),c("div",z,[A,a(u,{ref:"form",onSubmit:o[10]||(o[10]=i=>s.signUp()),class:"mx-auto w-75"},{default:g(({errors:i})=>[e("div",H,[J,a(n,{id:"displayName",name:"姓名",type:"text",class:d(["form-control fs-7",{"is-invalid":i.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:s.userData.displayName,"onUpdate:modelValue":o[5]||(o[5]=t=>s.userData.displayName=t)},null,8,["class","modelValue"]),a(r,{name:"姓名",class:"invalid-feedback"})]),e("div",K,[O,a(n,{id:"email",name:"email",type:"email",class:d(["form-control fs-7",{"is-invalid":i.email}]),placeholder:"name@example.com",rules:"required|email",modelValue:s.singUpData.email,"onUpdate:modelValue":o[6]||(o[6]=t=>s.singUpData.email=t)},null,8,["class","modelValue"]),a(r,{name:"email",class:"invalid-feedback"})]),e("div",Q,[R,a(n,{id:"password",name:"密碼",type:"password",class:d(["form-control fs-7",{"is-invalid":i.密碼}]),placeholder:"請輸入密碼",rules:"required|min:8",modelValue:s.singUpData.password,"onUpdate:modelValue":o[7]||(o[7]=t=>s.singUpData.password=t)},null,8,["class","modelValue"]),a(r,{name:"密碼",class:"invalid-feedback"})]),e("div",X,[Y,a(n,{name:"驗證密碼",id:"confirmation",type:"password",rules:"required|confirmed:@密碼",class:d(["form-control fs-7",{"is-invalid":i.驗證密碼}]),placeholder:"請再次輸入密碼",modelValue:s.singUpData.confirmation,"onUpdate:modelValue":o[8]||(o[8]=t=>s.singUpData.confirmation=t)},null,8,["class","modelValue"]),a(v,{class:"invalid-feedback",name:"驗證密碼"})]),Z,e("p",ee,[_(" 已經有帳號? "),e("a",{href:"#",onClick:o[9]||(o[9]=b(t=>s.isLogin=!0,["prevent"])),class:"d-inline-block"},"前往登入")])]),_:1},512)]))])])])])}const ue=w(x,[["render",se],["__scopeId","data-v-0f81b64e"]]);export{ue as default};
