import{aM as Wt,aZ as Z,k as M,aw as yt,y as _t,Y as ne,as as Ee,ay as Gt,b5 as Kt,U as vt,a9 as qt}from"./_plugin-vue_export-helper-ec969899.js";const Qt="modulepreload",Yt=function(e){return"/Music-Teacher-Website/"+e},qe={},P=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Yt(o),o in qe)return;qe[o]=!0;const a=o.endsWith(".css"),d=a?'[rel="stylesheet"]':"";if(!!r)for(let i=s.length-1;i>=0;i--){const f=s[i];if(f.href===o&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${d}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":Qt,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((i,f)=>{u.addEventListener("load",i),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const G=typeof window<"u";function Jt(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const S=Object.assign;function ye(e,t){const n={};for(const r in t){const s=t[r];n[r]=N(s)?s.map(e):e(s)}return n}const ee=()=>{},N=Array.isArray,Xt=/\/$/,Zt=e=>e.replace(Xt,"");function _e(e,t,n="/"){let r,s={},o="",a="";const d=t.indexOf("#");let c=t.indexOf("?");return d<c&&d>=0&&(c=-1),c>-1&&(r=t.slice(0,c),o=t.slice(c+1,d>-1?d:t.length),s=e(o)),d>-1&&(r=r||t.slice(0,d),a=t.slice(d,t.length)),r=rn(r??t,n),{fullPath:r+(o&&"?")+o+a,path:r,query:s,hash:a}}function en(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Qe(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function tn(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&K(t.matched[r],n.matched[s])&&wt(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function K(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function wt(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!nn(e[n],t[n]))return!1;return!0}function nn(e,t){return N(e)?Ye(e,t):N(t)?Ye(t,e):e===t}function Ye(e,t){return N(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function rn(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var re;(function(e){e.pop="pop",e.push="push"})(re||(re={}));var te;(function(e){e.back="back",e.forward="forward",e.unknown=""})(te||(te={}));function sn(e){if(!e)if(G){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Zt(e)}const on=/^[^#]+#/;function an(e,t){return e.replace(on,"#")+t}function cn(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const fe=()=>({left:window.pageXOffset,top:window.pageYOffset});function ln(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=cn(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Je(e,t){return(history.state?history.state.position-t:-1)+e}const De=new Map;function un(e,t){De.set(e,t)}function fn(e){const t=De.get(e);return De.delete(e),t}let hn=()=>location.protocol+"//"+location.host;function St(e,t){const{pathname:n,search:r,hash:s}=t,o=e.indexOf("#");if(o>-1){let d=s.includes(e.slice(o))?e.slice(o).length:1,c=s.slice(d);return c[0]!=="/"&&(c="/"+c),Qe(c,"")}return Qe(n,e)+r+s}function dn(e,t,n,r){let s=[],o=[],a=null;const d=({state:h})=>{const m=St(e,location),E=n.value,A=t.value;let C=0;if(h){if(n.value=m,t.value=h,a&&a===E){a=null;return}C=A?h.position-A.position:0}else r(m);s.forEach(_=>{_(n.value,E,{delta:C,type:re.pop,direction:C?C>0?te.forward:te.back:te.unknown})})};function c(){a=n.value}function u(h){s.push(h);const m=()=>{const E=s.indexOf(h);E>-1&&s.splice(E,1)};return o.push(m),m}function i(){const{history:h}=window;h.state&&h.replaceState(S({},h.state,{scroll:fe()}),"")}function f(){for(const h of o)h();o=[],window.removeEventListener("popstate",d),window.removeEventListener("beforeunload",i)}return window.addEventListener("popstate",d),window.addEventListener("beforeunload",i),{pauseListeners:c,listen:u,destroy:f}}function Xe(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?fe():null}}function pn(e){const{history:t,location:n}=window,r={value:St(e,n)},s={value:t.state};s.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(c,u,i){const f=e.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:hn()+e+c;try{t[i?"replaceState":"pushState"](u,"",h),s.value=u}catch(m){console.error(m),n[i?"replace":"assign"](h)}}function a(c,u){const i=S({},t.state,Xe(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});o(c,i,!0),r.value=c}function d(c,u){const i=S({},s.value,t.state,{forward:c,scroll:fe()});o(i.current,i,!0);const f=S({},Xe(r.value,c,null),{position:i.position+1},u);o(c,f,!1),r.value=c}return{location:r,state:s,push:d,replace:a}}function mn(e){e=sn(e);const t=pn(e),n=dn(e,t.state,t.location,t.replace);function r(o,a=!0){a||n.pauseListeners(),history.go(o)}const s=S({location:"",base:e,go:r,createHref:an.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function gn(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),mn(e)}function bn(e){return typeof e=="string"||e&&typeof e=="object"}function Rt(e){return typeof e=="string"||typeof e=="symbol"}const $={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},It=Symbol("");var Ze;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ze||(Ze={}));function q(e,t){return S(new Error,{type:e,[It]:!0},t)}function L(e,t){return e instanceof Error&&It in e&&(t==null||!!(e.type&t))}const et="[^/]+?",En={sensitive:!1,strict:!1,start:!0,end:!0},yn=/[.+*?^${}()[\]/\\]/g;function _n(e,t){const n=S({},En,t),r=[];let s=n.start?"^":"";const o=[];for(const u of e){const i=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const h=u[f];let m=40+(n.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(yn,"\\$&"),m+=40;else if(h.type===1){const{value:E,repeatable:A,optional:C,regexp:_}=h;o.push({name:E,repeatable:A,optional:C});const w=_||et;if(w!==et){m+=10;try{new RegExp(`(${w})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${E}" (${w}): `+k.message)}}let B=A?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;f||(B=C&&u.length<2?`(?:/${B})`:"/"+B),C&&(B+="?"),s+=B,m+=20,C&&(m+=-8),A&&(m+=-20),w===".*"&&(m+=-50)}i.push(m)}r.push(i)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function d(u){const i=u.match(a),f={};if(!i)return null;for(let h=1;h<i.length;h++){const m=i[h]||"",E=o[h-1];f[E.name]=m&&E.repeatable?m.split("/"):m}return f}function c(u){let i="",f=!1;for(const h of e){(!f||!i.endsWith("/"))&&(i+="/"),f=!1;for(const m of h)if(m.type===0)i+=m.value;else if(m.type===1){const{value:E,repeatable:A,optional:C}=m,_=E in u?u[E]:"";if(N(_)&&!A)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const w=N(_)?_.join("/"):_;if(!w)if(C)h.length<2&&(i.endsWith("/")?i=i.slice(0,-1):f=!0);else throw new Error(`Missing required param "${E}"`);i+=w}}return i||"/"}return{re:a,score:r,keys:o,parse:d,stringify:c}}function vn(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function wn(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const o=vn(r[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-r.length)===1){if(tt(r))return 1;if(tt(s))return-1}return s.length-r.length}function tt(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Sn={type:0,value:""},Rn=/[a-zA-Z0-9_]/;function In(e){if(!e)return[[]];if(e==="/")return[[Sn]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,r=n;const s=[];let o;function a(){o&&s.push(o),o=[]}let d=0,c,u="",i="";function f(){u&&(n===0?o.push({type:0,value:u}):n===1||n===2||n===3?(o.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:i,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function h(){u+=c}for(;d<e.length;){if(c=e[d++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),a()):c===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:Rn.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&d--);break;case 2:c===")"?i[i.length-1]=="\\"?i=i.slice(0,-1)+c:n=3:i+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&d--,i="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),a(),s}function Cn(e,t,n){const r=_n(In(e.path),n),s=S(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function An(e,t){const n=[],r=new Map;t=st({strict:!1,end:!0,sensitive:!1},t);function s(i){return r.get(i)}function o(i,f,h){const m=!h,E=Dn(i);E.aliasOf=h&&h.record;const A=st(t,i),C=[E];if("alias"in i){const B=typeof i.alias=="string"?[i.alias]:i.alias;for(const k of B)C.push(S({},E,{components:h?h.record.components:E.components,path:k,aliasOf:h?h.record:E}))}let _,w;for(const B of C){const{path:k}=B;if(f&&k[0]!=="/"){const U=f.record.path,x=U[U.length-1]==="/"?"":"/";B.path=f.record.path+(k&&x+k)}if(_=Cn(B,f,A),h?h.alias.push(_):(w=w||_,w!==_&&w.alias.push(_),m&&i.name&&!rt(_)&&a(i.name)),E.children){const U=E.children;for(let x=0;x<U.length;x++)o(U[x],_,h&&h.children[x])}h=h||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&c(_)}return w?()=>{a(w)}:ee}function a(i){if(Rt(i)){const f=r.get(i);f&&(r.delete(i),n.splice(n.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=n.indexOf(i);f>-1&&(n.splice(f,1),i.record.name&&r.delete(i.record.name),i.children.forEach(a),i.alias.forEach(a))}}function d(){return n}function c(i){let f=0;for(;f<n.length&&wn(i,n[f])>=0&&(i.record.path!==n[f].record.path||!Ct(i,n[f]));)f++;n.splice(f,0,i),i.record.name&&!rt(i)&&r.set(i.record.name,i)}function u(i,f){let h,m={},E,A;if("name"in i&&i.name){if(h=r.get(i.name),!h)throw q(1,{location:i});A=h.record.name,m=S(nt(f.params,h.keys.filter(w=>!w.optional).map(w=>w.name)),i.params&&nt(i.params,h.keys.map(w=>w.name))),E=h.stringify(m)}else if("path"in i)E=i.path,h=n.find(w=>w.re.test(E)),h&&(m=h.parse(E),A=h.record.name);else{if(h=f.name?r.get(f.name):n.find(w=>w.re.test(f.path)),!h)throw q(1,{location:i,currentLocation:f});A=h.record.name,m=S({},f.params,i.params),E=h.stringify(m)}const C=[];let _=h;for(;_;)C.unshift(_.record),_=_.parent;return{name:A,path:E,params:m,matched:C,meta:Pn(C)}}return e.forEach(i=>o(i)),{addRoute:o,resolve:u,removeRoute:a,getRoutes:d,getRecordMatcher:s}}function nt(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Dn(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:On(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function On(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function rt(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Pn(e){return e.reduce((t,n)=>S(t,n.meta),{})}function st(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ct(e,t){return t.children.some(n=>n===e||Ct(e,n))}const At=/#/g,Bn=/&/g,Tn=/\//g,kn=/=/g,Mn=/\?/g,Dt=/\+/g,Nn=/%5B/g,xn=/%5D/g,Ot=/%5E/g,Ln=/%60/g,Pt=/%7B/g,$n=/%7C/g,Bt=/%7D/g,Hn=/%20/g;function $e(e){return encodeURI(""+e).replace($n,"|").replace(Nn,"[").replace(xn,"]")}function Vn(e){return $e(e).replace(Pt,"{").replace(Bt,"}").replace(Ot,"^")}function Oe(e){return $e(e).replace(Dt,"%2B").replace(Hn,"+").replace(At,"%23").replace(Bn,"%26").replace(Ln,"`").replace(Pt,"{").replace(Bt,"}").replace(Ot,"^")}function jn(e){return Oe(e).replace(kn,"%3D")}function Un(e){return $e(e).replace(At,"%23").replace(Mn,"%3F")}function Fn(e){return e==null?"":Un(e).replace(Tn,"%2F")}function ae(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function zn(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const o=r[s].replace(Dt," "),a=o.indexOf("="),d=ae(a<0?o:o.slice(0,a)),c=a<0?null:ae(o.slice(a+1));if(d in t){let u=t[d];N(u)||(u=t[d]=[u]),u.push(c)}else t[d]=c}return t}function ot(e){let t="";for(let n in e){const r=e[n];if(n=jn(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(N(r)?r.map(o=>o&&Oe(o)):[r&&Oe(r)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function Wn(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=N(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Gn=Symbol(""),it=Symbol(""),He=Symbol(""),Tt=Symbol(""),Pe=Symbol("");function X(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function H(e,t,n,r,s){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,d)=>{const c=f=>{f===!1?d(q(4,{from:n,to:t})):f instanceof Error?d(f):bn(f)?d(q(2,{from:t,to:f})):(o&&r.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=e.call(r&&r.instances[s],t,n,c);let i=Promise.resolve(u);e.length<3&&(i=i.then(c)),i.catch(f=>d(f))})}function ve(e,t,n,r){const s=[];for(const o of e)for(const a in o.components){let d=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Kn(d)){const u=(d.__vccOpts||d)[t];u&&s.push(H(u,n,r,o,a))}else{let c=d();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const i=Jt(u)?u.default:u;o.components[a]=i;const h=(i.__vccOpts||i)[t];return h&&H(h,n,r,o,a)()}))}}return s}function Kn(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function at(e){const t=ne(He),n=ne(Tt),r=M(()=>t.resolve(Z(e.to))),s=M(()=>{const{matched:c}=r.value,{length:u}=c,i=c[u-1],f=n.matched;if(!i||!f.length)return-1;const h=f.findIndex(K.bind(null,i));if(h>-1)return h;const m=ct(c[u-2]);return u>1&&ct(i)===m&&f[f.length-1].path!==m?f.findIndex(K.bind(null,c[u-2])):h}),o=M(()=>s.value>-1&&Jn(n.params,r.value.params)),a=M(()=>s.value>-1&&s.value===n.matched.length-1&&wt(n.params,r.value.params));function d(c={}){return Yn(c)?t[Z(e.replace)?"replace":"push"](Z(e.to)).catch(ee):Promise.resolve()}return{route:r,href:M(()=>r.value.href),isActive:o,isExactActive:a,navigate:d}}const qn=_t({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:at,setup(e,{slots:t}){const n=yt(at(e)),{options:r}=ne(He),s=M(()=>({[lt(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[lt(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:vt("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),Qn=qn;function Yn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Jn(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!N(s)||s.length!==r.length||r.some((o,a)=>o!==s[a]))return!1}return!0}function ct(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const lt=(e,t,n)=>e??t??n,Xn=_t({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=ne(Pe),s=M(()=>e.route||r.value),o=ne(it,0),a=M(()=>{let u=Z(o);const{matched:i}=s.value;let f;for(;(f=i[u])&&!f.components;)u++;return u}),d=M(()=>s.value.matched[a.value]);Ee(it,M(()=>a.value+1)),Ee(Gn,d),Ee(Pe,s);const c=Gt();return Kt(()=>[c.value,d.value,e.name],([u,i,f],[h,m,E])=>{i&&(i.instances[f]=u,m&&m!==i&&u&&u===h&&(i.leaveGuards.size||(i.leaveGuards=m.leaveGuards),i.updateGuards.size||(i.updateGuards=m.updateGuards))),u&&i&&(!m||!K(i,m)||!h)&&(i.enterCallbacks[f]||[]).forEach(A=>A(u))},{flush:"post"}),()=>{const u=s.value,i=e.name,f=d.value,h=f&&f.components[i];if(!h)return ut(n.default,{Component:h,route:u});const m=f.props[i],E=m?m===!0?u.params:typeof m=="function"?m(u):m:null,C=vt(h,S({},E,t,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(f.instances[i]=null)},ref:c}));return ut(n.default,{Component:C,route:u})||C}}});function ut(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Zn=Xn;function er(e){const t=An(e.routes,e),n=e.parseQuery||zn,r=e.stringifyQuery||ot,s=e.history,o=X(),a=X(),d=X(),c=Wt($);let u=$;G&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const i=ye.bind(null,l=>""+l),f=ye.bind(null,Fn),h=ye.bind(null,ae);function m(l,g){let p,b;return Rt(l)?(p=t.getRecordMatcher(l),b=g):b=l,t.addRoute(b,p)}function E(l){const g=t.getRecordMatcher(l);g&&t.removeRoute(g)}function A(){return t.getRoutes().map(l=>l.record)}function C(l){return!!t.getRecordMatcher(l)}function _(l,g){if(g=S({},g||c.value),typeof l=="string"){const y=_e(n,l,g.path),O=t.resolve({path:y.path},g),J=s.createHref(y.fullPath);return S(y,O,{params:h(O.params),hash:ae(y.hash),redirectedFrom:void 0,href:J})}let p;if("path"in l)p=S({},l,{path:_e(n,l.path,g.path).path});else{const y=S({},l.params);for(const O in y)y[O]==null&&delete y[O];p=S({},l,{params:f(l.params)}),g.params=f(g.params)}const b=t.resolve(p,g),R=l.hash||"";b.params=i(h(b.params));const D=en(r,S({},l,{hash:Vn(R),path:b.path})),v=s.createHref(D);return S({fullPath:D,hash:R,query:r===ot?Wn(l.query):l.query||{}},b,{redirectedFrom:void 0,href:v})}function w(l){return typeof l=="string"?_e(n,l,c.value.path):S({},l)}function B(l,g){if(u!==l)return q(8,{from:g,to:l})}function k(l){return Q(l)}function U(l){return k(S(w(l),{replace:!0}))}function x(l){const g=l.matched[l.matched.length-1];if(g&&g.redirect){const{redirect:p}=g;let b=typeof p=="function"?p(l):p;return typeof b=="string"&&(b=b.includes("?")||b.includes("#")?b=w(b):{path:b},b.params={}),S({query:l.query,hash:l.hash,params:"path"in b?{}:l.params},b)}}function Q(l,g){const p=u=_(l),b=c.value,R=l.state,D=l.force,v=l.replace===!0,y=x(p);if(y)return Q(S(w(y),{state:typeof y=="object"?S({},R,y.state):R,force:D,replace:v}),g||p);const O=p;O.redirectedFrom=g;let J;return!D&&tn(r,b,p)&&(J=q(16,{to:O,from:b}),Ge(b,b,!0,!1)),(J?Promise.resolve(J):Ue(O,b)).catch(T=>L(T)?L(T,2)?T:pe(T):de(T,O,b)).then(T=>{if(T){if(L(T,2))return Q(S({replace:v},w(T.to),{state:typeof T.to=="object"?S({},R,T.to.state):R,force:D}),g||O)}else T=ze(O,b,!0,v,R);return Fe(O,b,T),T})}function Ut(l,g){const p=B(l,g);return p?Promise.reject(p):Promise.resolve()}function Ue(l,g){let p;const[b,R,D]=tr(l,g);p=ve(b.reverse(),"beforeRouteLeave",l,g);for(const y of b)y.leaveGuards.forEach(O=>{p.push(H(O,l,g))});const v=Ut.bind(null,l,g);return p.push(v),W(p).then(()=>{p=[];for(const y of o.list())p.push(H(y,l,g));return p.push(v),W(p)}).then(()=>{p=ve(R,"beforeRouteUpdate",l,g);for(const y of R)y.updateGuards.forEach(O=>{p.push(H(O,l,g))});return p.push(v),W(p)}).then(()=>{p=[];for(const y of l.matched)if(y.beforeEnter&&!g.matched.includes(y))if(N(y.beforeEnter))for(const O of y.beforeEnter)p.push(H(O,l,g));else p.push(H(y.beforeEnter,l,g));return p.push(v),W(p)}).then(()=>(l.matched.forEach(y=>y.enterCallbacks={}),p=ve(D,"beforeRouteEnter",l,g),p.push(v),W(p))).then(()=>{p=[];for(const y of a.list())p.push(H(y,l,g));return p.push(v),W(p)}).catch(y=>L(y,8)?y:Promise.reject(y))}function Fe(l,g,p){for(const b of d.list())b(l,g,p)}function ze(l,g,p,b,R){const D=B(l,g);if(D)return D;const v=g===$,y=G?history.state:{};p&&(b||v?s.replace(l.fullPath,S({scroll:v&&y&&y.scroll},R)):s.push(l.fullPath,R)),c.value=l,Ge(l,g,p,v),pe()}let Y;function Ft(){Y||(Y=s.listen((l,g,p)=>{if(!Ke.listening)return;const b=_(l),R=x(b);if(R){Q(S(R,{replace:!0}),b).catch(ee);return}u=b;const D=c.value;G&&un(Je(D.fullPath,p.delta),fe()),Ue(b,D).catch(v=>L(v,12)?v:L(v,2)?(Q(v.to,b).then(y=>{L(y,20)&&!p.delta&&p.type===re.pop&&s.go(-1,!1)}).catch(ee),Promise.reject()):(p.delta&&s.go(-p.delta,!1),de(v,b,D))).then(v=>{v=v||ze(b,D,!1),v&&(p.delta&&!L(v,8)?s.go(-p.delta,!1):p.type===re.pop&&L(v,20)&&s.go(-1,!1)),Fe(b,D,v)}).catch(ee)}))}let he=X(),We=X(),ie;function de(l,g,p){pe(l);const b=We.list();return b.length?b.forEach(R=>R(l,g,p)):console.error(l),Promise.reject(l)}function zt(){return ie&&c.value!==$?Promise.resolve():new Promise((l,g)=>{he.add([l,g])})}function pe(l){return ie||(ie=!l,Ft(),he.list().forEach(([g,p])=>l?p(l):g()),he.reset()),l}function Ge(l,g,p,b){const{scrollBehavior:R}=e;if(!G||!R)return Promise.resolve();const D=!p&&fn(Je(l.fullPath,0))||(b||!p)&&history.state&&history.state.scroll||null;return qt().then(()=>R(l,g,D)).then(v=>v&&ln(v)).catch(v=>de(v,l,g))}const me=l=>s.go(l);let ge;const be=new Set,Ke={currentRoute:c,listening:!0,addRoute:m,removeRoute:E,hasRoute:C,getRoutes:A,resolve:_,options:e,push:k,replace:U,go:me,back:()=>me(-1),forward:()=>me(1),beforeEach:o.add,beforeResolve:a.add,afterEach:d.add,onError:We.add,isReady:zt,install(l){const g=this;l.component("RouterLink",Qn),l.component("RouterView",Zn),l.config.globalProperties.$router=g,Object.defineProperty(l.config.globalProperties,"$route",{enumerable:!0,get:()=>Z(c)}),G&&!ge&&c.value===$&&(ge=!0,k(s.location).catch(R=>{}));const p={};for(const R in $)p[R]=M(()=>c.value[R]);l.provide(He,g),l.provide(Tt,yt(p)),l.provide(Pe,c);const b=l.unmount;be.add(l),l.unmount=function(){be.delete(l),be.size<1&&(u=$,Y&&Y(),Y=null,c.value=$,ge=!1,ie=!1),b()}}};return Ke}function W(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function tr(e,t){const n=[],r=[],s=[],o=Math.max(t.matched.length,e.matched.length);for(let a=0;a<o;a++){const d=t.matched[a];d&&(e.matched.find(u=>K(u,d))?r.push(d):n.push(d));const c=e.matched[a];c&&(t.matched.find(u=>K(u,c))||s.push(c))}return[n,r,s]}const nr=[{path:"/",component:()=>P(()=>import("./FrontLayout-1e5517f2.js"),["assets/FrontLayout-1e5517f2.js","assets/pinia-ef994b1a.js","assets/_plugin-vue_export-helper-ec969899.js","assets/cartStore-aa464e26.js","assets/index.browser.esm2017-050e3142.js","assets/userStore-98549090.js","assets/_commonjsHelpers-87174ba5.js","assets/windowStore-099a5157.js","assets/runtime-dom.esm-bundler-e62d4d3a.js","assets/FrontLayout-a037c93a.css"]),children:[{path:"",name:"home",component:()=>P(()=>import("./HomeView-b126af0b.js"),["assets/HomeView-b126af0b.js","assets/pinia-ef994b1a.js","assets/_plugin-vue_export-helper-ec969899.js","assets/cartStore-aa464e26.js","assets/index.browser.esm2017-050e3142.js","assets/userStore-98549090.js","assets/_commonjsHelpers-87174ba5.js","assets/coursesStore-2385855f.js","assets/teacherStore-5f2638e3.js","assets/filterStore-15591be1.js","assets/windowStore-099a5157.js","assets/free-mode.min-5e8e3a80.js","assets/update-swiper-3bad1b5e.js","assets/free-mode-2247a13b.css","assets/runtime-dom.esm-bundler-e62d4d3a.js","assets/HomeView-abed3c71.css"])},{path:"teacher",component:()=>P(()=>import("./TeacherView-2dd6b56a.js"),["assets/TeacherView-2dd6b56a.js","assets/pinia-ef994b1a.js","assets/_plugin-vue_export-helper-ec969899.js","assets/userStore-98549090.js","assets/index.browser.esm2017-050e3142.js","assets/_commonjsHelpers-87174ba5.js","assets/BannerArea-ca093728.js","assets/bannerStore-1b7734ea.js","assets/BannerArea-9a5efeab.css","assets/TeacherView-c646c971.css"]),children:[{path:"stepOne",component:()=>P(()=>import("./TeacherStepOne-859dbfc9.js"),["assets/TeacherStepOne-859dbfc9.js","assets/pinia-ef994b1a.js","assets/_plugin-vue_export-helper-ec969899.js","assets/teacherStore-5f2638e3.js","assets/index.browser.esm2017-050e3142.js","assets/userStore-98549090.js","assets/_commonjsHelpers-87174ba5.js","assets/bannerStore-1b7734ea.js","assets/runtime-dom.esm-bundler-e62d4d3a.js"])},{path:"stepTwo",component:()=>P(()=>import("./TeacherStepTwo-44cafaec.js"),["assets/TeacherStepTwo-44cafaec.js","assets/pinia-ef994b1a.js","assets/_plugin-vue_export-helper-ec969899.js","assets/teacherStore-5f2638e3.js","assets/index.browser.esm2017-050e3142.js","assets/bannerStore-1b7734ea.js","assets/runtime-dom.esm-bundler-e62d4d3a.js"])},{path:"stepThree",component:()=>P(()=>import("./TeacherStepThree-f79d7f05.js"),["assets/TeacherStepThree-f79d7f05.js","assets/pinia-ef994b1a.js","assets/_plugin-vue_export-helper-ec969899.js","assets/teacherStore-5f2638e3.js","assets/index.browser.esm2017-050e3142.js","assets/userStore-98549090.js","assets/_commonjsHelpers-87174ba5.js","assets/bannerStore-1b7734ea.js","assets/coursesStore-2385855f.js","assets/default-user-photo-5f1f51b0.js"])},{path:"stepFour",component:()=>P(()=>import("./TeacherStepFour-c449169f.js"),["assets/TeacherStepFour-c449169f.js","assets/pinia-ef994b1a.js","assets/_plugin-vue_export-helper-ec969899.js","assets/bannerStore-1b7734ea.js"])}]},{path:"courses",component:()=>P(()=>import("./CoursesView-25762fc3.js"),["assets/CoursesView-25762fc3.js","assets/pinia-ef994b1a.js","assets/_plugin-vue_export-helper-ec969899.js","assets/coursesStore-2385855f.js","assets/userStore-98549090.js","assets/index.browser.esm2017-050e3142.js","assets/_commonjsHelpers-87174ba5.js","assets/teacherStore-5f2638e3.js","assets/filterStore-15591be1.js","assets/bannerStore-1b7734ea.js","assets/card-placeholder-img-c3843645.js","assets/BannerArea-ca093728.js","assets/BannerArea-9a5efeab.css","assets/runtime-dom.esm-bundler-e62d4d3a.js","assets/CoursesView-6f86daf6.css"])},{path:"course/:id",component:()=>P(()=>import("./CourseView-9c600633.js"),["assets/CourseView-9c600633.js","assets/pinia-ef994b1a.js","assets/_plugin-vue_export-helper-ec969899.js","assets/userStore-98549090.js","assets/index.browser.esm2017-050e3142.js","assets/_commonjsHelpers-87174ba5.js","assets/coursesStore-2385855f.js","assets/teacherStore-5f2638e3.js","assets/cartStore-aa464e26.js","assets/free-mode.min-5e8e3a80.js","assets/update-swiper-3bad1b5e.js","assets/free-mode-2247a13b.css","assets/default-user-photo-5f1f51b0.js","assets/runtime-dom.esm-bundler-e62d4d3a.js","assets/CourseView-972e6cda.css"])},{path:"login",component:()=>P(()=>import("./LoginView-95f4de94.js"),["assets/LoginView-95f4de94.js","assets/pinia-ef994b1a.js","assets/_plugin-vue_export-helper-ec969899.js","assets/userStore-98549090.js","assets/index.browser.esm2017-050e3142.js","assets/_commonjsHelpers-87174ba5.js","assets/runtime-dom.esm-bundler-e62d4d3a.js","assets/LoginView-ff728776.css"])},{path:"personal",component:()=>P(()=>import("./PersonalView-ab46dbc9.js"),["assets/PersonalView-ab46dbc9.js","assets/pinia-ef994b1a.js","assets/_plugin-vue_export-helper-ec969899.js","assets/userStore-98549090.js","assets/index.browser.esm2017-050e3142.js","assets/_commonjsHelpers-87174ba5.js","assets/teacherStore-5f2638e3.js","assets/runtime-dom.esm-bundler-e62d4d3a.js","assets/PersonalView-6490b283.css"])},{path:"personalCourse",component:()=>P(()=>import("./PersonalCourse-35de0d6a.js"),["assets/PersonalCourse-35de0d6a.js","assets/pinia-ef994b1a.js","assets/_plugin-vue_export-helper-ec969899.js","assets/userStore-98549090.js","assets/index.browser.esm2017-050e3142.js","assets/_commonjsHelpers-87174ba5.js","assets/CardHorizontalPlaceholder-389ab299.js","assets/card-placeholder-img-c3843645.js","assets/runtime-dom.esm-bundler-e62d4d3a.js","assets/default-user-photo-5f1f51b0.js","assets/PersonalCourse-bc0fd3c8.css"])},{path:"cart",component:()=>P(()=>import("./CartView-596c62fb.js"),["assets/CartView-596c62fb.js","assets/pinia-ef994b1a.js","assets/_plugin-vue_export-helper-ec969899.js","assets/cartStore-aa464e26.js","assets/index.browser.esm2017-050e3142.js","assets/userStore-98549090.js","assets/_commonjsHelpers-87174ba5.js","assets/bannerStore-1b7734ea.js","assets/CardHorizontalPlaceholder-389ab299.js","assets/card-placeholder-img-c3843645.js","assets/BannerArea-ca093728.js","assets/BannerArea-9a5efeab.css","assets/runtime-dom.esm-bundler-e62d4d3a.js","assets/CartView-53b811ae.css"])},{path:"orderFinished",component:()=>P(()=>import("./OrderFinishedView-1f5c67d3.js"),["assets/OrderFinishedView-1f5c67d3.js","assets/_plugin-vue_export-helper-ec969899.js"])}]},{path:"/admin",component:()=>P(()=>import("./DashBoardView-06e9082e.js"),["assets/DashBoardView-06e9082e.js","assets/_plugin-vue_export-helper-ec969899.js"]),children:[{path:"courses",component:()=>P(()=>import("./AdminCourses-439ff5f4.js"),["assets/AdminCourses-439ff5f4.js","assets/_plugin-vue_export-helper-ec969899.js"])},{path:"orders",component:()=>P(()=>import("./AdminOrders-6ea39c6f.js"),["assets/AdminOrders-6ea39c6f.js","assets/_plugin-vue_export-helper-ec969899.js"])},{path:"coupons",component:()=>P(()=>import("./CouponsView-2820e994.js"),["assets/CouponsView-2820e994.js","assets/_plugin-vue_export-helper-ec969899.js"])}]},{path:"/:pathMatch(.*)*",name:"404Page",component:()=>P(()=>import("./NotFound-4cd5a840.js"),["assets/NotFound-4cd5a840.js","assets/_plugin-vue_export-helper-ec969899.js"])}],Ds=er({history:gn(),routes:nr,linkActiveClass:"active",scrollBehavior(e,t,n){return{top:0}}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},rr=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=e[n++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=e[n++],a=e[n++],d=e[n++],c=((s&7)<<18|(o&63)<<12|(a&63)<<6|d&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Mt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const o=e[s],a=s+1<e.length,d=a?e[s+1]:0,c=s+2<e.length,u=c?e[s+2]:0,i=o>>2,f=(o&3)<<4|d>>4;let h=(d&15)<<2|u>>6,m=u&63;c||(m=64,a||(h=64)),r.push(n[i],n[f],n[h],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(kt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):rr(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const o=n[e.charAt(s++)],d=s<e.length?n[e.charAt(s)]:0;++s;const u=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,o==null||d==null||u==null||f==null)throw new sr;const h=o<<2|d>>4;if(r.push(h),u!==64){const m=d<<4&240|u>>2;if(r.push(m),f!==64){const E=u<<6&192|f;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class sr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const or=function(e){const t=kt(e);return Mt.encodeByteArray(t,!0)},ce=function(e){return or(e).replace(/\./g,"")},ir=function(e){try{return Mt.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=()=>ar().__FIREBASE_DEFAULTS__,lr=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ur=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ir(e[1]);return t&&JSON.parse(t)},Ve=()=>{try{return cr()||lr()||ur()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},fr=e=>{var t,n;return(n=(t=Ve())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Os=e=>{const t=fr(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Nt=()=>{var e;return(e=Ve())===null||e===void 0?void 0:e.config},Ps=e=>{var t;return(t=Ve())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),d="";return[ce(JSON.stringify(n)),ce(JSON.stringify(a)),d].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ts(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())}function ks(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Ms(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ns(){const e=xt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function dr(){try{return typeof indexedDB=="object"}catch{return!1}}function pr(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr="FirebaseError";class oe extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=mr,Object.setPrototypeOf(this,oe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lt.prototype.create)}}class Lt{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?gr(o,r):"Error",d=`${this.serviceName}: ${a} (${s}).`;return new oe(s,d,r)}}function gr(e,t){return e.replace(br,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const br=/\{\$([^}]+)}/g;function xs(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Be(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const o=e[s],a=t[s];if(ft(o)&&ft(a)){if(!Be(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ft(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function $s(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,o]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(o)}}),t}function Hs(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Vs(e,t){const n=new Er(e,t);return n.subscribe.bind(n)}class Er{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yr(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=we),s.error===void 0&&(s.error=we),s.complete===void 0&&(s.complete=we);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yr(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function we(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(e){return e&&e._delegate?e._delegate:e}class le{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new hr;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(wr(t))try{this.getOrInitializeService({instanceIdentifier:F})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=F){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=F){return this.instances.has(t)}getOptions(t=F){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(o);r===d&&a.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vr(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=F){return this.component?this.component.multipleInstances?t:F:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vr(e){return e===F?void 0:e}function wr(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new _r(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var I;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(I||(I={}));const Rr={debug:I.DEBUG,verbose:I.VERBOSE,info:I.INFO,warn:I.WARN,error:I.ERROR,silent:I.SILENT},Ir=I.INFO,Cr={[I.DEBUG]:"log",[I.VERBOSE]:"log",[I.INFO]:"info",[I.WARN]:"warn",[I.ERROR]:"error"},Ar=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Cr[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Dr{constructor(t){this.name=t,this._logLevel=Ir,this._logHandler=Ar,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in I))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Rr[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,I.DEBUG,...t),this._logHandler(this,I.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,I.VERBOSE,...t),this._logHandler(this,I.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,I.INFO,...t),this._logHandler(this,I.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,I.WARN,...t),this._logHandler(this,I.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,I.ERROR,...t),this._logHandler(this,I.ERROR,...t)}}const Or=(e,t)=>t.some(n=>e instanceof n);let ht,dt;function Pr(){return ht||(ht=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Br(){return dt||(dt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $t=new WeakMap,Te=new WeakMap,Ht=new WeakMap,Se=new WeakMap,je=new WeakMap;function Tr(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{n(V(e.result)),s()},a=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&$t.set(n,e)}).catch(()=>{}),je.set(t,e),t}function kr(e){if(Te.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{n(),s()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});Te.set(e,t)}let ke={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Te.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ht.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return V(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Mr(e){ke=e(ke)}function Nr(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Re(this),t,...n);return Ht.set(r,t.sort?t.sort():[t]),V(r)}:Br().includes(e)?function(...t){return e.apply(Re(this),t),V($t.get(this))}:function(...t){return V(e.apply(Re(this),t))}}function xr(e){return typeof e=="function"?Nr(e):(e instanceof IDBTransaction&&kr(e),Or(e,Pr())?new Proxy(e,ke):e)}function V(e){if(e instanceof IDBRequest)return Tr(e);if(Se.has(e))return Se.get(e);const t=xr(e);return t!==e&&(Se.set(e,t),je.set(t,e)),t}const Re=e=>je.get(e);function Lr(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(e,t),d=V(a);return r&&a.addEventListener("upgradeneeded",c=>{r(V(a.result),c.oldVersion,c.newVersion,V(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),d.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),d}const $r=["get","getKey","getAll","getAllKeys","count"],Hr=["put","add","delete","clear"],Ie=new Map;function pt(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ie.get(t))return Ie.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Hr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||$r.includes(n)))return;const o=async function(a,...d){const c=this.transaction(a,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(d.shift())),(await Promise.all([u[n](...d),s&&c.done]))[0]};return Ie.set(t,o),o}Mr(e=>({...e,get:(t,n,r)=>pt(t,n)||e.get(t,n,r),has:(t,n)=>!!pt(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jr(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jr(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Me="@firebase/app",mt="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=new Dr("@firebase/app"),Ur="@firebase/app-compat",Fr="@firebase/analytics-compat",zr="@firebase/analytics",Wr="@firebase/app-check-compat",Gr="@firebase/app-check",Kr="@firebase/auth",qr="@firebase/auth-compat",Qr="@firebase/database",Yr="@firebase/database-compat",Jr="@firebase/functions",Xr="@firebase/functions-compat",Zr="@firebase/installations",es="@firebase/installations-compat",ts="@firebase/messaging",ns="@firebase/messaging-compat",rs="@firebase/performance",ss="@firebase/performance-compat",os="@firebase/remote-config",is="@firebase/remote-config-compat",as="@firebase/storage",cs="@firebase/storage-compat",ls="@firebase/firestore",us="@firebase/firestore-compat",fs="firebase",hs="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne="[DEFAULT]",ds={[Me]:"fire-core",[Ur]:"fire-core-compat",[zr]:"fire-analytics",[Fr]:"fire-analytics-compat",[Gr]:"fire-app-check",[Wr]:"fire-app-check-compat",[Kr]:"fire-auth",[qr]:"fire-auth-compat",[Qr]:"fire-rtdb",[Yr]:"fire-rtdb-compat",[Jr]:"fire-fn",[Xr]:"fire-fn-compat",[Zr]:"fire-iid",[es]:"fire-iid-compat",[ts]:"fire-fcm",[ns]:"fire-fcm-compat",[rs]:"fire-perf",[ss]:"fire-perf-compat",[os]:"fire-rc",[is]:"fire-rc-compat",[as]:"fire-gcs",[cs]:"fire-gcs-compat",[ls]:"fire-fst",[us]:"fire-fst-compat","fire-js":"fire-js",[fs]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue=new Map,xe=new Map;function ps(e,t){try{e.container.addComponent(t)}catch(n){z.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Le(e){const t=e.name;if(xe.has(t))return z.debug(`There were multiple attempts to register component ${t}.`),!1;xe.set(t,e);for(const n of ue.values())ps(n,e);return!0}function Us(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},j=new Lt("app","Firebase",ms);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new le("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw j.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=hs;function bs(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ne,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw j.create("bad-app-name",{appName:String(s)});if(n||(n=Nt()),!n)throw j.create("no-options");const o=ue.get(s);if(o){if(Be(n,o.options)&&Be(r,o.config))return o;throw j.create("duplicate-app",{appName:s})}const a=new Sr(s);for(const c of xe.values())a.addComponent(c);const d=new gs(n,r,a);return ue.set(s,d),d}function zs(e=Ne){const t=ue.get(e);if(!t&&e===Ne&&Nt())return bs();if(!t)throw j.create("no-app",{appName:e});return t}function Ce(e,t,n){var r;let s=(r=ds[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const d=[`Unable to register library "${s}" with version "${t}":`];o&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&d.push("and"),a&&d.push(`version name "${t}" contains illegal characters (whitespace or "/")`),z.warn(d.join(" "));return}Le(new le(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es="firebase-heartbeat-database",ys=1,se="firebase-heartbeat-store";let Ae=null;function Vt(){return Ae||(Ae=Lr(Es,ys,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(se)}}}).catch(e=>{throw j.create("idb-open",{originalErrorMessage:e.message})})),Ae}async function _s(e){try{return await(await Vt()).transaction(se).objectStore(se).get(jt(e))}catch(t){if(t instanceof oe)z.warn(t.message);else{const n=j.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});z.warn(n.message)}}}async function gt(e,t){try{const r=(await Vt()).transaction(se,"readwrite");await r.objectStore(se).put(t,jt(e)),await r.done}catch(n){if(n instanceof oe)z.warn(n.message);else{const r=j.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});z.warn(r.message)}}}function jt(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=1024,ws=30*24*60*60*1e3;class Ss{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Is(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=bt();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=ws}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=bt(),{heartbeatsToSend:n,unsentEntries:r}=Rs(this._heartbeatsCache.heartbeats),s=ce(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function bt(){return new Date().toISOString().substring(0,10)}function Rs(e,t=vs){const n=[];let r=e.slice();for(const s of e){const o=n.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Et(n)>t){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Et(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Is{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dr()?pr().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await _s(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return gt(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return gt(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Et(e){return ce(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(e){Le(new le("platform-logger",t=>new Vr(t),"PRIVATE")),Le(new le("heartbeat",t=>new Ss(t),"PRIVATE")),Ce(Me,mt,e),Ce(Me,mt,"esm2017"),Ce("fire-js","")}Cs("");export{le as C,Lt as E,oe as F,Dr as L,Zn as R,Fs as S,Le as _,Ds as a,Ts as b,Ms as c,js as d,Us as e,fr as f,Ps as g,zs as h,bs as i,ks as j,Vs as k,Be as l,I as m,xt as n,Ns as o,ir as p,Ls as q,Ce as r,xs as s,$s as t,Hs as u,Os as v,Bs as w};
