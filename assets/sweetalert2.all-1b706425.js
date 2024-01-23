import{d as ni,e as sc,f as ic,h as V,_ as nr,C as rr,r as on,j as hr,k as oc,l as ri,E as fr,L as si,m as ac,S as rt,n as lc,o as cc,q as Ct,p as Ot,s as z,F as vn,t as uc,u as dc,v as hc,w as mt,x as gt,y as fc,z as pc,c as ve}from"./index.esm2017-a113378d.js";function pr(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]]);return t}function ii(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mc=ii,oi=new fr("auth","Firebase",ii());/**
 * @license
 * Copyright 2020 Google LLC
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
 */const an=new si("@firebase/auth");function gc(n,...e){an.logLevel<=Ot.WARN&&an.warn(`Auth (${rt}): ${n}`,...e)}function en(n,...e){an.logLevel<=Ot.ERROR&&an.error(`Auth (${rt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function ee(n,...e){throw mr(n,...e)}function ae(n,...e){return mr(n,...e)}function ai(n,e,t){const r=Object.assign(Object.assign({},mc()),{[e]:t});return new fr("auth","Firebase",r).create(e,{appName:n.name})}function wc(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ee(n,"argument-error"),ai(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mr(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return oi.create(n,...e)}function _(n,e,...t){if(!n)throw mr(e,...t)}function de(n){const e="INTERNAL ASSERTION FAILED: "+n;throw en(e),new Error(e)}function pe(n,e){n||de(e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function sr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function yc(){return bs()==="http:"||bs()==="https:"}function bs(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function _c(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yc()||ac()||"connection"in navigator)?navigator.onLine:!0}function bc(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class xt{constructor(e,t){this.shortDelay=e,this.longDelay=t,pe(t>e,"Short delay should be less than long delay!"),this.isMobile=sc()||ic()}get(){return _c()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function gr(n,e){pe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class li{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;de("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;de("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;de("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const vc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Ic=new xt(3e4,6e4);function st(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function it(n,e,t,r,o={}){return ci(n,o,async()=>{let a={},c={};r&&(e==="GET"?c=r:a={body:JSON.stringify(r)});const d=Ct(Object.assign({key:n.config.apiKey},c)).slice(1),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode),li.fetch()(ui(n,n.config.apiHost,t,d),Object.assign({method:e,headers:h,referrerPolicy:"no-referrer"},a))})}async function ci(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},vc),e);try{const o=new Tc(n),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw Jt(n,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const d=a.ok?c.errorMessage:c.error.message,[h,p]=d.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jt(n,"credential-already-in-use",c);if(h==="EMAIL_EXISTS")throw Jt(n,"email-already-in-use",c);if(h==="USER_DISABLED")throw Jt(n,"user-disabled",c);const m=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw ai(n,m,p);ee(n,m)}}catch(o){if(o instanceof vn)throw o;ee(n,"network-request-failed",{message:String(o)})}}async function Vt(n,e,t,r,o={}){const a=await it(n,e,t,r,o);return"mfaPendingCredential"in a&&ee(n,"multi-factor-auth-required",{_serverResponse:a}),a}function ui(n,e,t,r){const o=`${e}${t}?${r}`;return n.config.emulator?gr(n.config,o):`${n.config.apiScheme}://${o}`}class Tc{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ae(this.auth,"network-request-failed")),Ic.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jt(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const o=ae(n,e,r);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Ec(n,e){return it(n,"POST","/v1/accounts:delete",e)}async function Ac(n,e){return it(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function wt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Pc(n,e=!1){const t=V(n),r=await t.getIdToken(e),o=wr(r);_(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:o,token:r,authTime:wt(Qn(o.auth_time)),issuedAtTime:wt(Qn(o.iat)),expirationTime:wt(Qn(o.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Qn(n){return Number(n)*1e3}function wr(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return en("JWT malformed, contained fewer than 3 sections"),null;try{const o=dc(t);return o?JSON.parse(o):(en("Failed to decode base64 JWT payload"),null)}catch(o){return en("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function kc(n){const e=wr(n);return _(e,"internal-error"),_(typeof e.exp<"u","internal-error"),_(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function It(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof vn&&Rc(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Rc({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Sc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class di{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=wt(this.lastLoginAt),this.creationTime=wt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ln(n){var e;const t=n.auth,r=await n.getIdToken(),o=await It(n,Ac(t,{idToken:r}));_(o==null?void 0:o.users.length,t,"internal-error");const a=o.users[0];n._notifyReloadListener(a);const c=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?xc(a.providerUserInfo):[],d=Oc(n.providerData,c),h=n.isAnonymous,p=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),m=h?p:!1,g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new di(a.createdAt,a.lastLoginAt),isAnonymous:m};Object.assign(n,g)}async function Cc(n){const e=V(n);await ln(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Oc(n,e){return[...n.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function xc(n){return n.map(e=>{var{providerId:t}=e,r=pr(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Vc(n,e){const t=await ci(n,{},async()=>{const r=Ct({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=n.config,c=ui(n,o,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",li.fetch()(c,{method:"POST",headers:d,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Tt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_(typeof e.idToken<"u","internal-error"),_(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return _(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:o,expiresIn:a}=await Vc(e,t);this.updateTokensAndExpiration(r,o,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:o,expirationTime:a}=t,c=new Tt;return r&&(_(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),o&&(_(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),a&&(_(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Tt,this.toJSON())}_performRefresh(){return de("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Ie(n,e){_(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Oe{constructor(e){var{uid:t,auth:r,stsTokenManager:o}=e,a=pr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new di(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await It(this,this.stsTokenManager.getToken(this.auth,e));return _(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Pc(this,e)}reload(){return Cc(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ln(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await It(this,Ec(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,o,a,c,d,h,p,m;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,v=(o=t.email)!==null&&o!==void 0?o:void 0,R=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,H=(c=t.photoURL)!==null&&c!==void 0?c:void 0,ce=(d=t.tenantId)!==null&&d!==void 0?d:void 0,re=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,ge=(p=t.createdAt)!==null&&p!==void 0?p:void 0,Be=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:S,emailVerified:we,isAnonymous:F,providerData:T,stsTokenManager:ye}=t;_(S&&ye,e,"internal-error");const Vn=Tt.fromJSON(this.name,ye);_(typeof S=="string",e,"internal-error"),Ie(g,e.name),Ie(v,e.name),_(typeof we=="boolean",e,"internal-error"),_(typeof F=="boolean",e,"internal-error"),Ie(R,e.name),Ie(H,e.name),Ie(ce,e.name),Ie(re,e.name),Ie(ge,e.name),Ie(Be,e.name);const $e=new Oe({uid:S,auth:e,email:v,emailVerified:we,displayName:g,isAnonymous:F,photoURL:H,phoneNumber:R,tenantId:ce,stsTokenManager:Vn,createdAt:ge,lastLoginAt:Be});return T&&Array.isArray(T)&&($e.providerData=T.map(qe=>Object.assign({},qe))),re&&($e._redirectEventId=re),$e}static async _fromIdTokenResponse(e,t,r=!1){const o=new Tt;o.updateFromServerResponse(t);const a=new Oe({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await ln(a),a}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const vs=new Map;function he(n){pe(n instanceof Function,"Expected a class definition");let e=vs.get(n);return e?(pe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,vs.set(n,e),e)}/**
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
 */class hi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}hi.type="NONE";const Is=hi;/**
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
 */function tn(n,e,t){return`firebase:${n}:${e}:${t}`}class Xe{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:o,name:a}=this.auth;this.fullUserKey=tn(this.userKey,o.apiKey,a),this.fullPersistenceKey=tn("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Xe(he(Is),e,r);const o=(await Promise.all(t.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let a=o[0]||he(Is);const c=tn(r,e.config.apiKey,e.name);let d=null;for(const p of t)try{const m=await p._get(c);if(m){const g=Oe._fromJSON(e,m);p!==a&&(d=g),a=p;break}}catch{}const h=o.filter(p=>p._shouldAllowMigration);return!a._shouldAllowMigration||!h.length?new Xe(a,e,r):(a=h[0],d&&await a._set(c,d.toJSON()),await Promise.all(t.map(async p=>{if(p!==a)try{await p._remove(c)}catch{}})),new Xe(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Ts(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mi(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fi(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wi(e))return"Blackberry";if(yi(e))return"Webos";if(yr(e))return"Safari";if((e.includes("chrome/")||pi(e))&&!e.includes("edge/"))return"Chrome";if(gi(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function fi(n=z()){return/firefox\//i.test(n)}function yr(n=z()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pi(n=z()){return/crios\//i.test(n)}function mi(n=z()){return/iemobile/i.test(n)}function gi(n=z()){return/android/i.test(n)}function wi(n=z()){return/blackberry/i.test(n)}function yi(n=z()){return/webos/i.test(n)}function In(n=z()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Nc(n=z()){var e;return In(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Dc(){return uc()&&document.documentMode===10}function _i(n=z()){return In(n)||gi(n)||yi(n)||wi(n)||/windows phone/i.test(n)||mi(n)}function Lc(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function bi(n,e=[]){let t;switch(n){case"Browser":t=Ts(z());break;case"Worker":t=`${Ts(z())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${rt}/${r}`}async function vi(n,e){return it(n,"GET","/v2/recaptchaConfig",st(n,e))}function Es(n){return n!==void 0&&n.enterprise!==void 0}class Ii{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Mc(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Ti(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=o=>{const a=ae("internal-error");a.customData=o,t(a)},r.type="text/javascript",r.charset="UTF-8",Mc().appendChild(r)})}function Fc(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Uc="https://www.google.com/recaptcha/enterprise.js?render=",Bc="recaptcha-enterprise",$c="NO_RECAPTCHA";class Ei{constructor(e){this.type=Bc,this.auth=Fe(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(c,d)=>{vi(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const p=new Ii(h);return a.tenantId==null?a._agentRecaptchaConfig=p:a._tenantRecaptchaConfigs[a.tenantId]=p,c(p.siteKey)}}).catch(h=>{d(h)})})}function o(a,c,d){const h=window.grecaptcha;Es(h)?h.enterprise.ready(()=>{h.enterprise.execute(a,{action:e}).then(p=>{c(p)}).catch(()=>{c($c)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,c)=>{r(this.auth).then(d=>{if(!t&&Es(window.grecaptcha))o(d,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}Ti(Uc+d).then(()=>{o(d,a,c)}).catch(h=>{c(h)})}}).catch(d=>{c(d)})})}}async function cn(n,e,t,r=!1){const o=new Ei(n);let a;try{a=await o.verify(t)}catch{a=await o.verify(t,!0)}const c=Object.assign({},e);return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}/**
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
 */class qc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((c,d)=>{try{const h=e(a);c(h)}catch(h){d(h)}});r.onAbort=t,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class jc{constructor(e,t,r,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new As(this),this.idTokenSubscription=new As(this),this.beforeStateQueue=new qc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=oi,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=he(t)),this._initializationPromise=this.queue(async()=>{var r,o;if(!this._deleted&&(this.persistenceManager=await Xe.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let o=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,h=await this.tryRedirectSignIn(e);(!c||c===d)&&(h!=null&&h.user)&&(o=h.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ln(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?V(e):null;return t&&_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(he(e))})}async initializeRecaptchaConfig(){const e=await vi(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Ii(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Ei(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&he(e)||this._popupRedirectResolver;_(t,this,"argument-error"),this.redirectPersistenceManager=await Xe.create(this,[he(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t),c=this._isInitialized?Promise.resolve():this._initializationPromise;return _(c,this,"internal-error"),c.then(()=>a(this.currentUser)),typeof t=="function"?e.addObserver(t,r,o):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&gc(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Fe(n){return V(n)}class As{constructor(e){this.auth=e,this.observer=null,this.addObserver=lc(t=>this.observer=t)}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function zc(n,e){const t=hr(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(cc(a,e??{}))return o;ee(o,"already-initialized")}return t.initialize({options:e})}function Hc(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(he);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Wc(n,e,t){const r=Fe(n);_(r._canInitEmulator,r,"emulator-config-failed"),_(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!!(t!=null&&t.disableWarnings),a=Ai(e),{host:c,port:d}=Kc(e),h=d===null?"":`:${d}`;r.config.emulator={url:`${a}//${c}${h}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:c,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||Gc()}function Ai(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Kc(n){const e=Ai(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const a=o[1];return{host:a,port:Ps(r.substr(a.length+1))}}else{const[a,c]=r.split(":");return{host:a,port:Ps(c)}}}function Ps(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Gc(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class _r{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return de("not implemented")}_getIdTokenResponse(e){return de("not implemented")}_linkToIdToken(e,t){return de("not implemented")}_getReauthenticationResolver(e){return de("not implemented")}}async function Yc(n,e){return it(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Xn(n,e){return Vt(n,"POST","/v1/accounts:signInWithPassword",st(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Jc(n,e){return Vt(n,"POST","/v1/accounts:signInWithEmailLink",st(n,e))}async function Qc(n,e){return Vt(n,"POST","/v1/accounts:signInWithEmailLink",st(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Et extends _r{constructor(e,t,r,o=null){super("password",r),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Et(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Et(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const o=await cn(e,r,"signInWithPassword");return Xn(e,o)}else return Xn(e,r).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const a=await cn(e,r,"signInWithPassword");return Xn(e,a)}else return Promise.reject(o)});case"emailLink":return Jc(e,{email:this._email,oobCode:this._password});default:ee(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Yc(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Qc(e,{idToken:t,email:this._email,oobCode:this._password});default:ee(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Ze(n,e){return Vt(n,"POST","/v1/accounts:signInWithIdp",st(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Xc="http://localhost";class Ve extends _r{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ve(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ee("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=t,a=pr(t,["providerId","signInMethod"]);if(!r||!o)return null;const c=new Ve(r,o);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Ze(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ze(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ze(e,t)}buildRequest(){const e={requestUri:Xc,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ct(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Zc(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function eu(n){const e=mt(gt(n)).link,t=e?mt(gt(e)).deep_link_id:null,r=mt(gt(n)).deep_link_id;return(r?mt(gt(r)).link:null)||r||t||e||n}class br{constructor(e){var t,r,o,a,c,d;const h=mt(gt(e)),p=(t=h.apiKey)!==null&&t!==void 0?t:null,m=(r=h.oobCode)!==null&&r!==void 0?r:null,g=Zc((o=h.mode)!==null&&o!==void 0?o:null);_(p&&m&&g,"argument-error"),this.apiKey=p,this.operation=g,this.code=m,this.continueUrl=(a=h.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(c=h.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(d=h.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=eu(e);try{return new br(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ot{constructor(){this.providerId=ot.PROVIDER_ID}static credential(e,t){return Et._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=br.parseLink(t);return _(r,"argument-error"),Et._fromEmailAndCode(e,r.code,r.tenantId)}}ot.PROVIDER_ID="password";ot.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ot.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class vr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Nt extends vr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Te extends Nt{constructor(){super("facebook.com")}static credential(e){return Ve._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Te.credentialFromTaggedObject(e)}static credentialFromError(e){return Te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Te.credential(e.oauthAccessToken)}catch{return null}}}Te.FACEBOOK_SIGN_IN_METHOD="facebook.com";Te.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ee extends Nt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ve._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ee.credentialFromTaggedObject(e)}static credentialFromError(e){return Ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ee.credential(t,r)}catch{return null}}}Ee.GOOGLE_SIGN_IN_METHOD="google.com";Ee.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ae extends Nt{constructor(){super("github.com")}static credential(e){return Ve._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ae.credential(e.oauthAccessToken)}catch{return null}}}Ae.GITHUB_SIGN_IN_METHOD="github.com";Ae.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Pe extends Nt{constructor(){super("twitter.com")}static credential(e,t){return Ve._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Pe.credential(t,r)}catch{return null}}}Pe.TWITTER_SIGN_IN_METHOD="twitter.com";Pe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Zn(n,e){return Vt(n,"POST","/v1/accounts:signUp",st(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ne{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,o=!1){const a=await Oe._fromIdTokenResponse(e,r,o),c=ks(r);return new Ne({user:a,providerId:c,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const o=ks(r);return new Ne({user:e,providerId:o,_tokenResponse:r,operationType:t})}}function ks(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class un extends vn{constructor(e,t,r,o){var a;super(t.code,t.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,un.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,o){return new un(e,t,r,o)}}function Pi(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?un._fromErrorAndOperation(n,a,e,r):a})}async function tu(n,e,t=!1){const r=await It(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ne._forOperation(n,"link",r)}/**
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
 */async function nu(n,e,t=!1){const{auth:r}=n,o="reauthenticate";try{const a=await It(n,Pi(r,o,e,n),t);_(a.idToken,r,"internal-error");const c=wr(a.idToken);_(c,r,"internal-error");const{sub:d}=c;return _(n.uid===d,r,"user-mismatch"),Ne._forOperation(n,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&ee(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function ki(n,e,t=!1){const r="signIn",o=await Pi(n,r,e),a=await Ne._fromIdTokenResponse(n,r,o);return t||await n._updateCurrentUser(a.user),a}async function ru(n,e){return ki(Fe(n),e)}async function Dh(n,e,t){var r;const o=Fe(n),a={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let c;if(!((r=o._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const p=await cn(o,a,"signUpPassword");c=Zn(o,p)}else c=Zn(o,a).catch(async p=>{if(p.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const m=await cn(o,a,"signUpPassword");return Zn(o,m)}else return Promise.reject(p)});const d=await c.catch(p=>Promise.reject(p)),h=await Ne._fromIdTokenResponse(o,"signIn",d);return await o._updateCurrentUser(h.user),h}function Lh(n,e,t){return ru(V(n),ot.credential(e,t))}function su(n,e,t,r){return V(n).onIdTokenChanged(e,t,r)}function iu(n,e,t){return V(n).beforeAuthStateChanged(e,t)}function Mh(n,e,t,r){return V(n).onAuthStateChanged(e,t,r)}function Fh(n){return V(n).signOut()}const dn="__sak";/**
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
 */class Ri{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(dn,"1"),this.storage.removeItem(dn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function ou(){const n=z();return yr(n)||In(n)}const au=1e3,lu=10;class Si extends Ri{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ou()&&Lc(),this.fallbackToPolling=_i(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),o=this.localCache[t];r!==o&&e(t,o,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,h)=>{this.notifyListeners(c,h)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const c=this.storage.getItem(r);if(e.newValue!==c)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const o=()=>{const c=this.storage.getItem(r);!t&&this.localCache[r]===c||this.notifyListeners(r,c)},a=this.storage.getItem(r);Dc()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,lu):o()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},au)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Si.type="LOCAL";const cu=Si;/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ci extends Ri{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ci.type="SESSION";const Oi=Ci;/**
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
 */function uu(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Tn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const r=new Tn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:o,data:a}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const d=Array.from(c).map(async p=>p(t.origin,a)),h=await uu(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Ir(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class du{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,c;return new Promise((d,h)=>{const p=Ir("",20);o.port1.start();const m=setTimeout(()=>{h(new Error("unsupported_event"))},r);c={messageChannel:o,onMessage(g){const v=g;if(v.data.eventId===p)switch(v.data.status){case"ack":clearTimeout(m),a=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(v.data.response);break;default:clearTimeout(m),clearTimeout(a),h(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:p,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function le(){return window}function hu(n){le().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function xi(){return typeof le().WorkerGlobalScope<"u"&&typeof le().importScripts=="function"}async function fu(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pu(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function mu(){return xi()?self:null}/**
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
 */const Vi="firebaseLocalStorageDb",gu=1,hn="firebaseLocalStorage",Ni="fbase_key";class Dt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function En(n,e){return n.transaction([hn],e?"readwrite":"readonly").objectStore(hn)}function wu(){const n=indexedDB.deleteDatabase(Vi);return new Dt(n).toPromise()}function ir(){const n=indexedDB.open(Vi,gu);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(hn,{keyPath:Ni})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(hn)?e(r):(r.close(),await wu(),e(await ir()))})})}async function Rs(n,e,t){const r=En(n,!0).put({[Ni]:e,value:t});return new Dt(r).toPromise()}async function yu(n,e){const t=En(n,!1).get(e),r=await new Dt(t).toPromise();return r===void 0?null:r.value}function Ss(n,e){const t=En(n,!0).delete(e);return new Dt(t).toPromise()}const _u=800,bu=3;class Di{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ir(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>bu)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tn._getInstance(mu()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await fu(),!this.activeServiceWorker)return;this.sender=new du(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pu()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ir();return await Rs(e,dn,"1"),await Ss(e,dn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rs(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>yu(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ss(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=En(o,!1).getAll();return new Dt(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:o,value:a}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_u)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Di.type="LOCAL";const vu=Di;new xt(3e4,6e4);/**
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
 */function Li(n,e){return e?he(e):(_(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Tr extends _r{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ze(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ze(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ze(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Iu(n){return ki(n.auth,new Tr(n),n.bypassAuthState)}function Tu(n){const{auth:e,user:t}=n;return _(t,e,"internal-error"),nu(t,new Tr(n),n.bypassAuthState)}async function Eu(n){const{auth:e,user:t}=n;return _(t,e,"internal-error"),tu(t,new Tr(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Mi{constructor(e,t,r,o,a=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:o,tenantId:a,error:c,type:d}=e;if(c){this.reject(c);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(h))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Iu;case"linkViaPopup":case"linkViaRedirect":return Eu;case"reauthViaPopup":case"reauthViaRedirect":return Tu;default:ee(this.auth,"internal-error")}}resolve(e){pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Au=new xt(2e3,1e4);async function Uh(n,e,t){const r=Fe(n);wc(n,e,vr);const o=Li(r,t);return new Ce(r,"signInViaPopup",e,o).executeNotNull()}class Ce extends Mi{constructor(e,t,r,o,a){super(e,t,o,a),this.provider=r,this.authWindow=null,this.pollId=null,Ce.currentPopupAction&&Ce.currentPopupAction.cancel(),Ce.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){pe(this.filter.length===1,"Popup operations only handle one event");const e=Ir();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ae(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ae(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ce.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ae(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Au.get())};e()}}Ce.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Pu="pendingRedirect",nn=new Map;class ku extends Mi{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=nn.get(this.auth._key());if(!e){try{const r=await Ru(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}nn.set(this.auth._key(),e)}return this.bypassAuthState||nn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ru(n,e){const t=Ou(e),r=Cu(n);if(!await r._isAvailable())return!1;const o=await r._get(t)==="true";return await r._remove(t),o}function Su(n,e){nn.set(n._key(),e)}function Cu(n){return he(n._redirectPersistence)}function Ou(n){return tn(Pu,n.config.apiKey,n.name)}async function xu(n,e,t=!1){const r=Fe(n),o=Li(r,e),c=await new ku(r,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Vu=10*60*1e3;class Nu{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Du(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Fi(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ae(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Vu&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cs(e))}saveEventToCache(e){this.cachedEventUids.add(Cs(e)),this.lastProcessedEventTime=Date.now()}}function Cs(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Fi({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Du(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fi(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Lu(n,e={}){return it(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Mu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fu=/^https?/;async function Uu(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Lu(n);for(const t of e)try{if(Bu(t))return}catch{}ee(n,"unauthorized-domain")}function Bu(n){const e=sr(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===r}if(!Fu.test(t))return!1;if(Mu.test(n))return r===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const $u=new xt(3e4,6e4);function Os(){const n=le().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function qu(n){return new Promise((e,t)=>{var r,o,a;function c(){Os(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Os(),t(ae(n,"network-request-failed"))},timeout:$u.get()})}if(!((o=(r=le().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((a=le().gapi)===null||a===void 0)&&a.load)c();else{const d=Fc("iframefcb");return le()[d]=()=>{gapi.load?c():t(ae(n,"network-request-failed"))},Ti(`https://apis.google.com/js/api.js?onload=${d}`).catch(h=>t(h))}}).catch(e=>{throw rn=null,e})}let rn=null;function ju(n){return rn=rn||qu(n),rn}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const zu=new xt(5e3,15e3),Hu="__/auth/iframe",Wu="emulator/auth/iframe",Ku={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gu=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yu(n){const e=n.config;_(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?gr(e,Wu):`https://${n.config.authDomain}/${Hu}`,r={apiKey:e.apiKey,appName:n.name,v:rt},o=Gu.get(n.config.apiHost);o&&(r.eid=o);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${Ct(r).slice(1)}`}async function Ju(n){const e=await ju(n),t=le().gapi;return _(t,n,"internal-error"),e.open({where:document.body,url:Yu(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ku,dontclear:!0},r=>new Promise(async(o,a)=>{await r.restyle({setHideOnLeave:!1});const c=ae(n,"network-request-failed"),d=le().setTimeout(()=>{a(c)},zu.get());function h(){le().clearTimeout(d),o(r)}r.ping(h).then(h,()=>{a(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Qu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Xu=500,Zu=600,ed="_blank",td="http://localhost";class xs{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nd(n,e,t,r=Xu,o=Zu){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const h=Object.assign(Object.assign({},Qu),{width:r.toString(),height:o.toString(),top:a,left:c}),p=z().toLowerCase();t&&(d=pi(p)?ed:t),fi(p)&&(e=e||td,h.scrollbars="yes");const m=Object.entries(h).reduce((v,[R,H])=>`${v}${R}=${H},`,"");if(Nc(p)&&d!=="_self")return rd(e||"",d),new xs(null);const g=window.open(e||"",d,m);_(g,n,"popup-blocked");try{g.focus()}catch{}return new xs(g)}function rd(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const sd="__/auth/handler",id="emulator/auth/handler",od=encodeURIComponent("fac");async function Vs(n,e,t,r,o,a){_(n.config.authDomain,n,"auth-domain-config-required"),_(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:rt,eventId:o};if(e instanceof vr){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",hc(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,g]of Object.entries(a||{}))c[m]=g}if(e instanceof Nt){const m=e.getScopes().filter(g=>g!=="");m.length>0&&(c.scopes=m.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const m of Object.keys(d))d[m]===void 0&&delete d[m];const h=await n._getAppCheckToken(),p=h?`#${od}=${encodeURIComponent(h)}`:"";return`${ad(n)}?${Ct(d).slice(1)}${p}`}function ad({config:n}){return n.emulator?gr(n,id):`https://${n.authDomain}/${sd}`}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const er="webStorageSupport";class ld{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Oi,this._completeRedirectFn=xu,this._overrideRedirectResult=Su}async _openPopup(e,t,r,o){var a;pe((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=await Vs(e,t,r,sr(),o);return nd(e,c,Ir())}async _openRedirect(e,t,r,o){await this._originValidation(e);const a=await Vs(e,t,r,sr(),o);return hu(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(pe(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Ju(e),r=new Nu(e);return t.register("authEvent",o=>(_(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(er,{type:er},o=>{var a;const c=(a=o==null?void 0:o[0])===null||a===void 0?void 0:a[er];c!==void 0&&t(!!c),ee(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Uu(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _i()||yr()||In()}}const cd=ld;var Ns="@firebase/auth",Ds="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ud{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function dd(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hd(n){nr(new rr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=r.options;_(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bi(n)},p=new jc(r,o,a,h);return Hc(p,t),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),nr(new rr("auth-internal",e=>{const t=Fe(e.getProvider("auth").getImmediate());return(r=>new ud(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(Ns,Ds,dd(n)),on(Ns,Ds,"esm2017")}/**
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
 */const fd=5*60,pd=ni("authIdTokenMaxAge")||fd;let Ls=null;const md=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>pd)return;const o=t==null?void 0:t.token;Ls!==o&&(Ls=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Bh(n=ri()){const e=hr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=zc(n,{popupRedirectResolver:cd,persistence:[vu,cu,Oi]}),r=ni("authTokenSyncURL");if(r){const a=md(r);iu(t,a,()=>a(t.currentUser)),su(t,c=>a(c))}const o=oc("auth");return o&&Wc(t,`http://${o}`),t}hd("Browser");/**
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
 */class j{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}j.UNAUTHENTICATED=new j(null),j.GOOGLE_CREDENTIALS=new j("google-credentials-uid"),j.FIRST_PARTY=new j("first-party-uid"),j.MOCK_USER=new j("mock-user");/**
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
 */let at="10.1.0";/**
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
 */const et=new si("@firebase/firestore");function fn(n,...e){if(et.logLevel<=Ot.DEBUG){const t=e.map(Ar);et.debug(`Firestore (${at}): ${n}`,...t)}}function Er(n,...e){if(et.logLevel<=Ot.ERROR){const t=e.map(Ar);et.error(`Firestore (${at}): ${n}`,...t)}}function Ui(n,...e){if(et.logLevel<=Ot.WARN){const t=e.map(Ar);et.warn(`Firestore (${at}): ${n}`,...t)}}function Ar(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function k(n="Unexpected state"){const e=`FIRESTORE (${at}) INTERNAL ASSERTION FAILED: `+n;throw Er(e),new Error(e)}function Q(n,e){n||k()}function Lt(n,e){return n}/**
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
 */const Ms="ok",gd="cancelled",yt="unknown",b="invalid-argument",wd="deadline-exceeded",yd="not-found",_d="permission-denied",or="unauthenticated",bd="resource-exhausted",tt="failed-precondition",vd="aborted",Id="out-of-range",Bi="unimplemented",Td="internal",Ed="unavailable";class y extends vn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $i{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ad{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(j.UNAUTHENTICATED))}shutdown(){}}class Pd{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class kd{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(Q(typeof e.accessToken=="string"),new $i(e.accessToken,new j(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class Rd{constructor(e,t,r){this.t=e,this.i=t,this.o=r,this.type="FirstParty",this.user=j.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class Sd{constructor(e,t,r){this.t=e,this.i=t,this.o=r}getToken(){return Promise.resolve(new Rd(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(j.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Cd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Od{constructor(e){this.h=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(Q(typeof e.token=="string"),new Cd(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */class xd{constructor(e,t,r,o,a,c,d,h,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=o,this.ssl=a,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=h,this.useFetchStreams=p}}class At{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new At("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof At&&e.projectId===this.projectId&&e.database===this.database}}class Pt{constructor(e,t,r){t===void 0?t=0:t>e.length&&k(),r===void 0?r=e.length-t:r>e.length-t&&k(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Pt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Pt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let o=0;o<r;o++){const a=e.get(o),c=t.get(o);if(a<c)return-1;if(a>c)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class O extends Pt{construct(e,t,r){return new O(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new y(b,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(o=>o.length>0))}return new O(t)}static emptyPath(){return new O([])}}const Vd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Y extends Pt{construct(e,t,r){return new Y(e,t,r)}static isValidIdentifier(e){return Vd.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Y.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Y(["__name__"])}static fromServerFormat(e){const t=[];let r="",o=0;const a=()=>{if(r.length===0)throw new y(b,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let c=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new y(b,"Path has trailing escape character: "+e);const h=e[o+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new y(b,"Path has invalid escape sequence: "+e);r+=h,o+=2}else d==="`"?(c=!c,o++):d!=="."||c?(r+=d,o++):(a(),o++)}if(a(),c)throw new y(b,"Unterminated ` in path: "+e);return new Y(t)}static emptyPath(){return new Y([])}}/**
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
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(O.fromString(e))}static fromName(e){return new M(O.fromString(e).popFirst(5))}static empty(){return new M(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&O.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return O.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new O(e.slice()))}}/**
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
 */function qi(n,e,t){if(!t)throw new y(b,`Function ${n}() cannot be called with an empty ${e}.`)}function Fs(n){if(!M.isDocumentKey(n))throw new y(b,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Us(n){if(M.isDocumentKey(n))throw new y(b,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function An(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":k()}function lt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new y(b,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=An(n);throw new y(b,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function ji(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Qt=null;function Nd(){return Qt===null?Qt=function(){return 268435456+Math.round(2147483648*Math.random())}():Qt++,"0x"+Qt.toString(16)}/**
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
 */function Dd(n){return n==null}function pn(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Ld={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var Bs,A;function $s(n){if(n===void 0)return Er("RPC_ERROR","HTTP error has no status"),yt;switch(n){case 200:return Ms;case 400:return tt;case 401:return or;case 403:return _d;case 404:return yd;case 409:return vd;case 416:return Id;case 429:return bd;case 499:return gd;case 500:return yt;case 501:return Bi;case 503:return Ed;case 504:return wd;default:return n>=200&&n<300?Ms:n>=400&&n<500?tt:n>=500&&n<600?Td:yt}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */(A=Bs||(Bs={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";class Md extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.m=r+"://"+t.host,this.A=`projects/${o}/databases/${a}`,this.T=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${a}`}get P(){return!1}R(t,r,o,a,c){const d=Nd(),h=this.I(t,r);fn("RestConnection",`Sending RPC '${t}' ${d}:`,h,o);const p={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(p,a,c),this.p(t,h,p,o).then(m=>(fn("RestConnection",`Received RPC '${t}' ${d}: `,m),m),m=>{throw Ui("RestConnection",`RPC '${t}' ${d} failed with error: `,m,"url: ",h,"request:",o),m})}g(t,r,o,a,c,d){return this.R(t,r,o,a,c)}V(t,r,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+at}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((a,c)=>t[c]=a),o&&o.headers.forEach((a,c)=>t[c]=a)}I(t,r){const o=Ld[t];return`${this.m}/v1/${r}:${o}`}}{constructor(e,t){super(e),this.F=t}v(e,t){throw new Error("Not supported by FetchConnection")}async p(e,t,r,o){var a;const c=JSON.stringify(o);let d;try{d=await this.F(t,{method:"POST",headers:r,body:c})}catch(h){const p=h;throw new y($s(p.status),"Request failed with error: "+p.statusText)}if(!d.ok){let h=await d.json();Array.isArray(h)&&(h=h[0]);const p=(a=h==null?void 0:h.error)===null||a===void 0?void 0:a.message;throw new y($s(d.status),`Request failed with error: ${p??d.statusText}`)}return d.json()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Fd(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Ud{static C(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const o=Fd(40);for(let a=0;a<o.length;++a)r.length<20&&o[a]<t&&(r+=e.charAt(o[a]%e.length))}return r}}function x(n,e){return n<e?-1:n>e?1:0}function zi(n,e,t){return n.length===e.length&&n.every((r,o)=>t(r,e[o]))}/**
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
 */function qs(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Mt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Bd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
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
 * Copyright 2020 Google LLC
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
 */class me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new Bd("Invalid base64 string: "+a):a}}(e);return new me(t)}static fromUint8Array(e){const t=function(o){let a="";for(let c=0;c<o.length;++c)a+=String.fromCharCode(o[c]);return a}(e);return new me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return x(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}me.EMPTY_BYTE_STRING=new me("");const $d=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function De(n){if(Q(!!n),typeof n=="string"){let e=0;const t=$d.exec(n);if(Q(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:C(n.seconds),nanos:C(n.nanos)}}function C(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function kt(n){return typeof n=="string"?me.fromBase64String(n):me.fromUint8Array(n)}/**
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
 */class X{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new y(b,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new y(b,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new y(b,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new y(b,"Timestamp seconds out of range: "+e)}static now(){return X.fromMillis(Date.now())}static fromDate(e){return X.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new X(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?x(this.nanoseconds,e.nanoseconds):x(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Hi(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Wi(n){const e=n.mapValue.fields.__previous_value__;return Hi(e)?Wi(e):e}function Rt(n){const e=De(n.mapValue.fields.__local_write_time__.timestampValue);return new X(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Xt={fields:{__type__:{stringValue:"__max__"}}};function Le(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Hi(n)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:10:k()}function mn(n,e){if(n===e)return!0;const t=Le(n);if(t!==Le(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Rt(n).isEqual(Rt(e));case 3:return function(o,a){if(typeof o.timestampValue=="string"&&typeof a.timestampValue=="string"&&o.timestampValue.length===a.timestampValue.length)return o.timestampValue===a.timestampValue;const c=De(o.timestampValue),d=De(a.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,a){return kt(o.bytesValue).isEqual(kt(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,a){return C(o.geoPointValue.latitude)===C(a.geoPointValue.latitude)&&C(o.geoPointValue.longitude)===C(a.geoPointValue.longitude)}(n,e);case 2:return function(o,a){if("integerValue"in o&&"integerValue"in a)return C(o.integerValue)===C(a.integerValue);if("doubleValue"in o&&"doubleValue"in a){const c=C(o.doubleValue),d=C(a.doubleValue);return c===d?pn(c)===pn(d):isNaN(c)&&isNaN(d)}return!1}(n,e);case 9:return zi(n.arrayValue.values||[],e.arrayValue.values||[],mn);case 10:return function(o,a){const c=o.mapValue.fields||{},d=a.mapValue.fields||{};if(qs(c)!==qs(d))return!1;for(const h in c)if(c.hasOwnProperty(h)&&(d[h]===void 0||!mn(c[h],d[h])))return!1;return!0}(n,e);default:return k()}}function St(n,e){return(n.values||[]).find(t=>mn(t,e))!==void 0}function gn(n,e){if(n===e)return 0;const t=Le(n),r=Le(e);if(t!==r)return x(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return x(n.booleanValue,e.booleanValue);case 2:return function(a,c){const d=C(a.integerValue||a.doubleValue),h=C(c.integerValue||c.doubleValue);return d<h?-1:d>h?1:d===h?0:isNaN(d)?isNaN(h)?0:-1:1}(n,e);case 3:return js(n.timestampValue,e.timestampValue);case 4:return js(Rt(n),Rt(e));case 5:return x(n.stringValue,e.stringValue);case 6:return function(a,c){const d=kt(a),h=kt(c);return d.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(a,c){const d=a.split("/"),h=c.split("/");for(let p=0;p<d.length&&p<h.length;p++){const m=x(d[p],h[p]);if(m!==0)return m}return x(d.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(a,c){const d=x(C(a.latitude),C(c.latitude));return d!==0?d:x(C(a.longitude),C(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(a,c){const d=a.values||[],h=c.values||[];for(let p=0;p<d.length&&p<h.length;++p){const m=gn(d[p],h[p]);if(m)return m}return x(d.length,h.length)}(n.arrayValue,e.arrayValue);case 10:return function(a,c){if(a===Xt&&c===Xt)return 0;if(a===Xt)return 1;if(c===Xt)return-1;const d=a.fields||{},h=Object.keys(d),p=c.fields||{},m=Object.keys(p);h.sort(),m.sort();for(let g=0;g<h.length&&g<m.length;++g){const v=x(h[g],m[g]);if(v!==0)return v;const R=gn(d[h[g]],p[m[g]]);if(R!==0)return R}return x(h.length,m.length)}(n.mapValue,e.mapValue);default:throw k()}}function js(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return x(n,e);const t=De(n),r=De(e),o=x(t.seconds,r.seconds);return o!==0?o:x(t.nanos,r.nanos)}function zs(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ki(n){return!!n&&"arrayValue"in n}function Hs(n){return!!n&&"nullValue"in n}function Ws(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function tr(n){return!!n&&"mapValue"in n}function _t(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Mt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=_t(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=_t(n.arrayValue.values[t]);return e}return Object.assign({},n)}class Ks{constructor(e,t){this.position=e,this.inclusive=t}}/**
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
 */class Gi{}class ne extends Gi{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new qd(e,t,r):t==="array-contains"?new Hd(e,r):t==="in"?new Wd(e,r):t==="not-in"?new Kd(e,r):t==="array-contains-any"?new Gd(e,r):new ne(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new jd(e,r):new zd(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(gn(t,this.value)):t!==null&&Le(this.value)===Le(t)&&this.matchesComparison(gn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return k()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ft extends Gi{constructor(e,t){super(),this.filters=e,this.op=t,this.S=null}static create(e,t){return new Ft(e,t)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.S!==null||(this.S=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.S}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.N(t=>t.isInequality());return e!==null?e.field:null}N(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}class qd extends ne{constructor(e,t,r){super(e,t,r),this.key=M.fromName(r.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class jd extends ne{constructor(e,t){super(e,"in",t),this.keys=Yi("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class zd extends ne{constructor(e,t){super(e,"not-in",t),this.keys=Yi("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Yi(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>M.fromName(r.referenceValue))}class Hd extends ne{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ki(t)&&St(t.arrayValue,this.value)}}class Wd extends ne{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&St(this.value.arrayValue,t)}}class Kd extends ne{constructor(e,t){super(e,"not-in",t)}matches(e){if(St(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!St(this.value.arrayValue,t)}}class Gd extends ne{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ki(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>St(this.value.arrayValue,r))}}/**
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
 */class sn{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class D{constructor(e){this.timestamp=e}static fromTimestamp(e){return new D(e)}static min(){return new D(new X(0,0))}static max(){return new D(new X(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class wn{constructor(e,t){this.comparator=e,this.root=t||L.EMPTY}insert(e,t){return new wn(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,L.BLACK,null,null))}remove(e){return new wn(this.comparator,this.root.remove(e,this.comparator).copy(null,null,L.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(e,r.key);if(o===0)return t+r.left.size;o<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zt(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zt(this.root,e,this.comparator,!0)}}class Zt{constructor(e,t,r,o){this.isReverse=o,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&o&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class L{constructor(e,t,r,o,a){this.key=e,this.value=t,this.color=r??L.RED,this.left=o??L.EMPTY,this.right=a??L.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,o,a){return new L(e??this.key,t??this.value,r??this.color,o??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let o=this;const a=r(e,o.key);return o=a<0?o.copy(null,null,null,o.left.insert(e,t,r),null):a===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return L.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return L.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,L.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,L.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw k();const e=this.left.check();if(e!==this.right.check())throw k();return e+(this.isRed()?0:1)}}L.EMPTY=null,L.RED=!0,L.BLACK=!1;L.EMPTY=new class{constructor(){this.size=0}get key(){throw k()}get value(){throw k()}get color(){throw k()}get left(){throw k()}get right(){throw k()}copy(e,t,r,o,a){return this}insert(e,t,r){return new L(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class yn{constructor(e){this.comparator=e,this.data=new wn(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Gs(this.data.getIterator())}getIteratorFrom(e){return new Gs(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof yn)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=r.getNext().key;if(this.comparator(o,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new yn(this.comparator);return t.data=e,t}}class Gs{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Me{constructor(e){this.fields=e,e.sort(Y.comparator)}static empty(){return new Me([])}unionWith(e){let t=new yn(Y.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Me(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return zi(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class J{constructor(e){this.value=e}static empty(){return new J({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!tr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_t(t)}setAll(e){let t=Y.emptyPath(),r={},o=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const h=this.getFieldsMap(t);this.applyChanges(h,r,o),r={},o=[],t=d.popLast()}c?r[d.lastSegment()]=_t(c):o.push(d.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,r,o)}delete(e){const t=this.field(e.popLast());tr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return mn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let o=t.mapValue.fields[e.get(r)];tr(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,r){Mt(t,(o,a)=>e[o]=a);for(const o of r)delete e[o]}clone(){return new J(_t(this.value))}}/**
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
 */class oe{constructor(e,t,r,o,a,c,d){this.key=e,this.documentType=t,this.version=r,this.readTime=o,this.createTime=a,this.data=c,this.documentState=d}static newInvalidDocument(e){return new oe(e,0,D.min(),D.min(),D.min(),J.empty(),0)}static newFoundDocument(e,t,r,o){return new oe(e,1,t,D.min(),r,o,0)}static newNoDocument(e,t){return new oe(e,2,t,D.min(),D.min(),J.empty(),0)}static newUnknownDocument(e,t){return new oe(e,3,t,D.min(),D.min(),J.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(D.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=J.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=J.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=D.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof oe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new oe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yd{constructor(e,t=null,r=[],o=[],a=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=o,this.limit=a,this.startAt=c,this.endAt=d,this.O=null}}function Ys(n,e=null,t=[],r=[],o=null,a=null,c=null){return new Yd(n,e,t,r,o,a,c)}/**
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
 */class Ji{constructor(e,t=null,r=[],o=[],a=null,c="F",d=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=o,this.limit=a,this.limitType=c,this.startAt=d,this.endAt=h,this.q=null,this.B=null,this.startAt,this.endAt}}function Qi(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Pr(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Jd(n){return n.collectionGroup!==null}function Js(n){const e=Lt(n);if(e.q===null){e.q=[];const t=Pr(e),r=Qi(e);if(t!==null&&r===null)t.isKeyField()||e.q.push(new sn(t)),e.q.push(new sn(Y.keyField(),"asc"));else{let o=!1;for(const a of e.explicitOrderBy)e.q.push(a),a.field.isKeyField()&&(o=!0);if(!o){const a=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new sn(Y.keyField(),a))}}}return e.q}function Qd(n){const e=Lt(n);if(!e.B)if(e.limitType==="F")e.B=Ys(e.path,e.collectionGroup,Js(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const a of Js(e)){const c=a.dir==="desc"?"asc":"desc";t.push(new sn(a.field,c))}const r=e.endAt?new Ks(e.endAt.position,e.endAt.inclusive):null,o=e.startAt?new Ks(e.startAt.position,e.startAt.inclusive):null;e.B=Ys(e.path,e.collectionGroup,t,e.filters,e.limit,r,o)}return e.B}function ar(n,e){e.getFirstInequalityField(),Pr(n);const t=n.filters.concat([e]);return new Ji(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Xd(n,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!pn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):function(r,o){if(r.useProto3Json){if(isNaN(o))return{doubleValue:"NaN"};if(o===1/0)return{doubleValue:"Infinity"};if(o===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pn(o)?"-0":o}}(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Pn{constructor(){this._=void 0}}class Zd extends Pn{}class Xi extends Pn{constructor(e){super(),this.elements=e}}class Zi extends Pn{constructor(e){super(),this.elements=e}}class eh extends Pn{constructor(e,t){super(),this.serializer=e,this.$=t}}/**
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
 */class eo{constructor(e,t){this.field=e,this.transform=t}}class xe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new xe}static exists(e){return new xe(void 0,e)}static updateTime(e){return new xe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class kn{}class to extends kn{constructor(e,t,r,o=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class kr extends kn{constructor(e,t,r,o,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=o,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}class th extends kn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nh extends kn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const rh=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),sh=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ih=(()=>({and:"AND",or:"OR"}))();class oh{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function lr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ah(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function lh(n,e){return lr(n,e.toTimestamp())}function bt(n){return Q(!!n),D.fromTimestamp(function(t){const r=De(t);return new X(r.seconds,r.nanos)}(n))}function Rr(n,e){return function(r){return new O(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function _n(n,e){return Rr(n.databaseId,e.path)}function cr(n,e){const t=function(o){const a=O.fromString(o);return Q(so(a)),a}(e);if(t.get(1)!==n.databaseId.projectId)throw new y(b,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new y(b,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(function(o){return Q(o.length>4&&o.get(4)==="documents"),o.popFirst(5)}(t))}function Qs(n,e){return Rr(n.databaseId,e)}function no(n){return new O(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Xs(n,e,t){return{name:_n(n,e),fields:t.value.mapValue.fields}}function ch(n,e){return"found"in e?function(r,o){Q(!!o.found),o.found.name,o.found.updateTime;const a=cr(r,o.found.name),c=bt(o.found.updateTime),d=o.found.createTime?bt(o.found.createTime):D.min(),h=new J({mapValue:{fields:o.found.fields}});return oe.newFoundDocument(a,c,d,h)}(n,e):"missing"in e?function(r,o){Q(!!o.missing),Q(!!o.readTime);const a=cr(r,o.missing),c=bt(o.readTime);return oe.newNoDocument(a,c)}(n,e):k()}function uh(n,e){let t;if(e instanceof to)t={update:Xs(n,e.key,e.value)};else if(e instanceof th)t={delete:_n(n,e.key)};else if(e instanceof kr)t={update:Xs(n,e.key,e.data),updateMask:mh(e.fieldMask)};else{if(!(e instanceof nh))return k();t={verify:_n(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(a,c){const d=c.transform;if(d instanceof Zd)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Xi)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Zi)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof eh)return{fieldPath:c.field.canonicalString(),increment:d.$};throw k()}(0,r))),e.precondition.isNone||(t.currentDocument=function(o,a){return a.updateTime!==void 0?{updateTime:lh(o,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:k()}(n,e.precondition)),t}function dh(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=Qs(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Qs(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const o=function(h){if(h.length!==0)return ro(Ft.create(h,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(h){if(h.length!==0)return h.map(p=>function(g){return{field:Qe(g.field),direction:hh(g.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=function(h,p){return h.useProto3Json||Dd(p)?p:{value:p}}(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),t}function hh(n){return rh[n]}function fh(n){return sh[n]}function ph(n){return ih[n]}function Qe(n){return{fieldPath:n.canonicalString()}}function ro(n){return n instanceof ne?function(t){if(t.op==="=="){if(Ws(t.value))return{unaryFilter:{field:Qe(t.field),op:"IS_NAN"}};if(Hs(t.value))return{unaryFilter:{field:Qe(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ws(t.value))return{unaryFilter:{field:Qe(t.field),op:"IS_NOT_NAN"}};if(Hs(t.value))return{unaryFilter:{field:Qe(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qe(t.field),op:fh(t.op),value:t.value}}}(n):n instanceof Ft?function(t){const r=t.getFilters().map(o=>ro(o));return r.length===1?r[0]:{compositeFilter:{op:ph(t.op),filters:r}}}(n):k()}function mh(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function so(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Sr(n){return new oh(n,!0)}/**
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
 */class gh extends class{}{constructor(e,t,r,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=o,this.Z=!1}X(){if(this.Z)throw new y(tt,"The client has already been terminated.")}R(e,t,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.R(e,t,r,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===or&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new y(yt,o.toString())})}g(e,t,r,o){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.g(e,t,r,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===or&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new y(yt,a.toString())})}terminate(){this.Z=!0}}async function Cr(n,e){const t=Lt(n),r=no(t.serializer)+"/documents",o={writes:e.map(a=>uh(t.serializer,a))};await t.R("Commit",r,o)}async function wh(n,e){const t=Lt(n),r=no(t.serializer)+"/documents",o={documents:e.map(h=>_n(t.serializer,h))},a=await t.g("BatchGetDocuments",r,o,e.length),c=new Map;a.forEach(h=>{const p=ch(t.serializer,h);c.set(p.key.toString(),p)});const d=[];return e.forEach(h=>{const p=c.get(h.toString());Q(!!p),d.push(p)}),d}async function yh(n,e){const t=Lt(n),r=dh(t.serializer,Qd(e));return(await t.g("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(o=>!!o.document).map(o=>function(c,d,h){const p=cr(c,d.name),m=bt(d.updateTime),g=d.createTime?bt(d.createTime):D.min(),v=new J({mapValue:{fields:d.fields}}),R=oe.newFoundDocument(p,m,g,v);return h&&R.setHasCommittedMutations(),h?R.setHasCommittedMutations():R}(t.serializer,o.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const vt=new Map;function Ut(n){if(n._terminated)throw new y(tt,"The client has already been terminated.");if(!vt.has(n)){fn("ComponentProvider","Initializing Datastore");const e=function(a){return new Md(a,fetch.bind(null))}(function(a,c,d,h){return new xd(a,c,d,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,ji(h.experimentalLongPollingOptions),h.useFetchStreams)}(n._databaseId,n.app.options.appId||"",n._persistenceKey,n._freezeSettings())),t=Sr(n._databaseId),r=function(a,c,d,h){return new gh(a,c,d,h)}(n._authCredentials,n._appCheckCredentials,e,t);vt.set(n,r)}return vt.get(n)}class Zs{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new y(b,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new y(b,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(a,c,d,h){if(c===!0&&h===!0)throw new y(b,`${a} and ${d} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ji((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new y(b,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new y(b,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new y(b,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rn{constructor(e,t,r,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zs({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(tt,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new y(tt,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zs(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ad;switch(r.type){case"firstParty":return new Sd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new y(b,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=vt.get(t);r&&(fn("ComponentProvider","Removing Datastore"),vt.delete(t),r.terminate())}(this),Promise.resolve()}}function zh(n,e){const t=typeof n=="object"?n:ri(),r=typeof n=="string"?n:e||"(default)",o=hr(t,"firestore/lite").getImmediate({identifier:r});if(!o._initialized){const a=fc("firestore");a&&_h(o,...a)}return o}function _h(n,e,t,r={}){var o;const a=(n=lt(n,Rn))._getSettings(),c=`${e}:${t}`;if(a.host!=="firestore.googleapis.com"&&a.host!==c&&Ui("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},a),{host:c,ssl:!1})),r.mockUserToken){let d,h;if(typeof r.mockUserToken=="string")d=r.mockUserToken,h=j.MOCK_USER;else{d=pc(r.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new y(b,"mockUserToken must contain 'sub' or 'user_id' field!");h=new j(p)}n._authCredentials=new Pd(new $i(d,h))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ct{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ct(this.firestore,e,this._query)}}class ${constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fe(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $(this.firestore,e,this._key)}}class fe extends ct{constructor(e,t,r){super(e,t,function(a){return new Ji(a)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $(this.firestore,null,new M(e))}withConverter(e){return new fe(this.firestore,e,this._path)}}function Hh(n,e,...t){if(n=V(n),qi("collection","path",e),n instanceof Rn){const r=O.fromString(e,...t);return Us(r),new fe(n,null,r)}{if(!(n instanceof $||n instanceof fe))throw new y(b,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(O.fromString(e,...t));return Us(r),new fe(n.firestore,null,r)}}function bh(n,e,...t){if(n=V(n),arguments.length===1&&(e=Ud.C()),qi("doc","path",e),n instanceof Rn){const r=O.fromString(e,...t);return Fs(r),new $(n,null,new M(r))}{if(!(n instanceof $||n instanceof fe))throw new y(b,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(O.fromString(e,...t));return Fs(r),new $(n.firestore,n instanceof fe?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class nt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new nt(me.fromBase64String(e))}catch(t){throw new y(b,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new nt(me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Sn{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new y(b,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Y(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Bt{constructor(e){this._methodName=e}}/**
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
 */class Or{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new y(b,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new y(b,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return x(this._lat,e._lat)||x(this._long,e._long)}}/**
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
 */const vh=/^__.*__$/;class Ih{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new kr(e,this.data,this.fieldMask,t,this.fieldTransforms):new to(e,this.data,t,this.fieldTransforms)}}class io{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new kr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function oo(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw k()}}class Cn{constructor(e,t,r,o,a,c){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=o,a===void 0&&this.et(),this.fieldTransforms=a||[],this.fieldMask=c||[]}get path(){return this.settings.path}get rt(){return this.settings.rt}nt(e){return new Cn(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}it(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.nt({path:r,st:!1});return o.ot(e),o}ut(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.nt({path:r,st:!1});return o.et(),o}_t(e){return this.nt({path:void 0,st:!0})}lt(e){return bn(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.ht)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}et(){if(this.path)for(let e=0;e<this.path.length;e++)this.ot(this.path.get(e))}ot(e){if(e.length===0)throw this.lt("Document fields must not be empty");if(oo(this.rt)&&vh.test(e))throw this.lt('Document fields cannot begin and end with "__"')}}class Th{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Sr(e)}dt(e,t,r,o=!1){return new Cn({rt:e,methodName:t,ht:r,path:Y.emptyPath(),st:!1,ct:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function On(n){const e=n._freezeSettings(),t=Sr(n._databaseId);return new Th(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ao(n,e,t,r,o,a={}){const c=n.dt(a.merge||a.mergeFields?2:0,e,t,o);xr("Data must be an object, but it was:",c,r);const d=co(r,c);let h,p;if(a.merge)h=new Me(c.fieldMask),p=c.fieldTransforms;else if(a.mergeFields){const m=[];for(const g of a.mergeFields){const v=ur(e,g,t);if(!c.contains(v))throw new y(b,`Field '${v}' is specified in your field mask but missing from your input data.`);ho(m,v)||m.push(v)}h=new Me(m),p=c.fieldTransforms.filter(g=>h.covers(g.field))}else h=null,p=c.fieldTransforms;return new Ih(new J(d),h,p)}class $t extends Bt{_toFieldTransform(e){if(e.rt!==2)throw e.rt===1?e.lt(`${this._methodName}() can only appear at the top level of your update data`):e.lt(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $t}}function lo(n,e,t){return new Cn({rt:3,ht:e.settings.ht,methodName:n._methodName,st:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Eh extends Bt{constructor(e,t){super(e),this.ft=t}_toFieldTransform(e){const t=lo(this,e,!0),r=this.ft.map(a=>Ue(a,t)),o=new Xi(r);return new eo(e.path,o)}isEqual(e){return this===e}}class Ah extends Bt{constructor(e,t){super(e),this.ft=t}_toFieldTransform(e){const t=lo(this,e,!0),r=this.ft.map(a=>Ue(a,t)),o=new Zi(r);return new eo(e.path,o)}isEqual(e){return this===e}}function Ph(n,e,t,r){const o=n.dt(1,e,t);xr("Data must be an object, but it was:",o,r);const a=[],c=J.empty();Mt(r,(h,p)=>{const m=Vr(e,h,t);p=V(p);const g=o.ut(m);if(p instanceof $t)a.push(m);else{const v=Ue(p,g);v!=null&&(a.push(m),c.set(m,v))}});const d=new Me(a);return new io(c,d,o.fieldTransforms)}function kh(n,e,t,r,o,a){const c=n.dt(1,e,t),d=[ur(e,r,t)],h=[o];if(a.length%2!=0)throw new y(b,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<a.length;v+=2)d.push(ur(e,a[v])),h.push(a[v+1]);const p=[],m=J.empty();for(let v=d.length-1;v>=0;--v)if(!ho(p,d[v])){const R=d[v];let H=h[v];H=V(H);const ce=c.ut(R);if(H instanceof $t)p.push(R);else{const re=Ue(H,ce);re!=null&&(p.push(R),m.set(R,re))}}const g=new Me(p);return new io(m,g,c.fieldTransforms)}function Rh(n,e,t,r=!1){return Ue(t,n.dt(r?4:3,e))}function Ue(n,e){if(uo(n=V(n)))return xr("Unsupported field value:",e,n),co(n,e);if(n instanceof Bt)return function(r,o){if(!oo(o.rt))throw o.lt(`${r._methodName}() can only be used with update() and set()`);if(!o.path)throw o.lt(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(o);a&&o.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.st&&e.rt!==4)throw e.lt("Nested arrays are not supported");return function(r,o){const a=[];let c=0;for(const d of r){let h=Ue(d,o._t(c));h==null&&(h={nullValue:"NULL_VALUE"}),a.push(h),c++}return{arrayValue:{values:a}}}(n,e)}return function(r,o){if((r=V(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Xd(o.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=X.fromDate(r);return{timestampValue:lr(o.serializer,a)}}if(r instanceof X){const a=new X(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:lr(o.serializer,a)}}if(r instanceof Or)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof nt)return{bytesValue:ah(o.serializer,r._byteString)};if(r instanceof $){const a=o.databaseId,c=r.firestore._databaseId;if(!c.isEqual(a))throw o.lt(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Rr(r.firestore._databaseId||o.databaseId,r._key.path)}}throw o.lt(`Unsupported field value: ${An(r)}`)}(n,e)}function co(n,e){const t={};return function(o){for(const a in o)if(Object.prototype.hasOwnProperty.call(o,a))return!1;return!0}(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mt(n,(r,o)=>{const a=Ue(o,e.it(r));a!=null&&(t[r]=a)}),{mapValue:{fields:t}}}function uo(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof X||n instanceof Or||n instanceof nt||n instanceof $||n instanceof Bt)}function xr(n,e,t){if(!uo(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const r=An(t);throw r==="an object"?e.lt(n+" a custom object"):e.lt(n+" "+r)}}function ur(n,e,t){if((e=V(e))instanceof Sn)return e._internalPath;if(typeof e=="string")return Vr(n,e);throw bn("Field path arguments must be of type string or ",n,!1,void 0,t)}const Sh=new RegExp("[~\\*/\\[\\]]");function Vr(n,e,t){if(e.search(Sh)>=0)throw bn(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Sn(...e.split("."))._internalPath}catch{throw bn(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function bn(n,e,t,r,o){const a=r&&!r.isEmpty(),c=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let h="";return(a||c)&&(h+=" (found",a&&(h+=` in field ${r}`),c&&(h+=` in document ${o}`),h+=")"),new y(b,d+n+h)}function ho(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class fo{constructor(e,t,r,o,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new $(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new po(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(mo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class po extends fo{data(){return super.data()}}class Ch{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,t){this._docs.forEach(e,t)}}function mo(n,e){return typeof e=="string"?Vr(n,e):e instanceof Sn?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Nr{}class Oh extends Nr{}function Wh(n,e,...t){let r=[];e instanceof Nr&&r.push(e),r=r.concat(t),function(a){const c=a.filter(h=>h instanceof Dr).length,d=a.filter(h=>h instanceof xn).length;if(c>1||c>0&&d>0)throw new y(b,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const o of r)n=o._apply(n);return n}class xn extends Oh{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new xn(e,t,r)}_apply(e){const t=this._parse(e);return go(e._query,t),new ct(e.firestore,e.converter,ar(e._query,t))}_parse(e){const t=On(e.firestore);return function(a,c,d,h,p,m,g){let v;if(p.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new y(b,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){ti(g,m);const R=[];for(const H of g)R.push(ei(h,a,H));v={arrayValue:{values:R}}}else v=ei(h,a,g)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||ti(g,m),v=Rh(d,c,g,m==="in"||m==="not-in");return ne.create(p,m,v)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Kh(n,e,t){const r=e,o=mo("where",n);return xn._create(o,r,t)}class Dr extends Nr{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Dr(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ft.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,a){let c=o;const d=a.getFlattenedFilters();for(const h of d)go(c,h),c=ar(c,h)}(e._query,t),new ct(e.firestore,e.converter,ar(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ei(n,e,t){if(typeof(t=V(t))=="string"){if(t==="")throw new y(b,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Jd(e)&&t.indexOf("/")!==-1)throw new y(b,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(O.fromString(t));if(!M.isDocumentKey(r))throw new y(b,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zs(n,new M(r))}if(t instanceof $)return zs(n,t._key);throw new y(b,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${An(t)}.`)}function ti(n,e){if(!Array.isArray(n)||n.length===0)throw new y(b,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function go(n,e){if(e.isInequality()){const r=Pr(n),o=e.field;if(r!==null&&!r.isEqual(o))throw new y(b,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${o.toString()}'`);const a=Qi(n);a!==null&&xh(n,o,a)}const t=function(o,a){for(const c of o)for(const d of c.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new y(b,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new y(b,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function xh(n,e,t){if(!t.isEqual(e))throw new y(b,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function wo(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class yo extends class{convertValue(t,r="none"){switch(Le(t)){case 0:return null;case 1:return t.booleanValue;case 2:return C(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,r);case 5:return t.stringValue;case 6:return this.convertBytes(kt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,r);case 10:return this.convertObject(t.mapValue,r);default:throw k()}}convertObject(t,r){return this.convertObjectMap(t.fields,r)}convertObjectMap(t,r="none"){const o={};return Mt(t,(a,c)=>{o[a]=this.convertValue(c,r)}),o}convertGeoPoint(t){return new Or(C(t.latitude),C(t.longitude))}convertArray(t,r){return(t.values||[]).map(o=>this.convertValue(o,r))}convertServerTimestamp(t,r){switch(r){case"previous":const o=Wi(t);return o==null?null:this.convertValue(o,r);case"estimate":return this.convertTimestamp(Rt(t));default:return null}}convertTimestamp(t){const r=De(t);return new X(r.seconds,r.nanos)}convertDocumentKey(t,r){const o=O.fromString(t);Q(so(o));const a=new At(o.get(1),o.get(3)),c=new M(o.popFirst(5));return a.isEqual(r)||Er(`Document ${c} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),c}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new nt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $(this.firestore,null,t)}}function Yh(n){const e=Ut((n=lt(n,$)).firestore),t=new yo(n.firestore);return wh(e,[n._key]).then(r=>{Q(r.length===1);const o=r[0];return new fo(n.firestore,t,n._key,o.isFoundDocument()?o:null,n.converter)})}function Jh(n){(function(o){if(o.limitType==="L"&&o.explicitOrderBy.length===0)throw new y(Bi,"limitToLast() queries require specifying at least one orderBy() clause")})((n=lt(n,ct))._query);const e=Ut(n.firestore),t=new yo(n.firestore);return yh(e,n._query).then(r=>{const o=r.map(a=>new po(n.firestore,t,a.key,a,n.converter));return n._query.limitType==="L"&&o.reverse(),new Ch(n,o)})}function Qh(n,e,t){const r=wo((n=lt(n,$)).converter,e,t),o=ao(On(n.firestore),"setDoc",n._key,r,n.converter!==null,t);return Cr(Ut(n.firestore),[o.toMutation(n._key,xe.none())])}function Xh(n,e,t,...r){const o=On((n=lt(n,$)).firestore);let a;return a=typeof(e=V(e))=="string"||e instanceof Sn?kh(o,"updateDoc",n._key,e,t,r):Ph(o,"updateDoc",n._key,e),Cr(Ut(n.firestore),[a.toMutation(n._key,xe.exists(!0))])}function Zh(n,e){const t=bh(n=lt(n,fe)),r=wo(n.converter,e),o=ao(On(n.firestore),"addDoc",t._key,r,t.converter!==null,{});return Cr(Ut(n.firestore),[o.toMutation(t._key,xe.exists(!1))]).then(()=>t)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function ef(){return new $t("deleteField")}function tf(...n){return new Eh("arrayUnion",n)}function nf(...n){return new Ah("arrayRemove",n)}(function(){(function(t){at=t})(`${rt}_lite`),nr(new rr("firestore/lite",(e,{instanceIdentifier:t,options:r})=>{const o=e.getProvider("app").getImmediate(),a=new Rn(new kd(e.getProvider("auth-internal")),new Od(e.getProvider("app-check-internal")),function(d,h){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new y(b,'"projectId" not provided in firebase.initializeApp.');return new At(d.options.projectId,h)}(o,t),o);return r&&a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),on("firestore-lite","4.1.0",""),on("firestore-lite","4.1.0","esm2017")})();var dr={},Vh={get exports(){return dr},set exports(n){dr=n}};/*!
* sweetalert2 v11.7.3
* Released under the MIT License.
*/(function(n,e){(function(t,r){n.exports=r()})(ve,function(){var t={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const r="swal2-",o=s=>{const i={};for(const l in s)i[s[l]]=r+s[l];return i},a=o(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),c=o(["success","warning","info","question","error"]),d="SweetAlert2:",h=s=>{const i=[];for(let l=0;l<s.length;l++)i.indexOf(s[l])===-1&&i.push(s[l]);return i},p=s=>s.charAt(0).toUpperCase()+s.slice(1),m=s=>{console.warn(`${d} ${typeof s=="object"?s.join(" "):s}`)},g=s=>{console.error(`${d} ${s}`)},v=[],R=s=>{v.includes(s)||(v.push(s),m(s))},H=(s,i)=>{R(`"${s}" is deprecated and will be removed in the next major release. Please use "${i}" instead.`)},ce=s=>typeof s=="function"?s():s,re=s=>s&&typeof s.toPromise=="function",ge=s=>re(s)?s.toPromise():Promise.resolve(s),Be=s=>s&&Promise.resolve(s)===s,S=()=>document.body.querySelector(`.${a.container}`),we=s=>{const i=S();return i?i.querySelector(s):null},F=s=>we(`.${s}`),T=()=>F(a.popup),ye=()=>F(a.icon),Vn=()=>F(a["icon-content"]),$e=()=>F(a.title),qe=()=>F(a["html-container"]),Lr=()=>F(a.image),Nn=()=>F(a["progress-steps"]),qt=()=>F(a["validation-message"]),te=()=>we(`.${a.actions} .${a.confirm}`),ke=()=>we(`.${a.actions} .${a.cancel}`),_e=()=>we(`.${a.actions} .${a.deny}`),_o=()=>F(a["input-label"]),je=()=>we(`.${a.loader}`),ut=()=>F(a.actions),Mr=()=>F(a.footer),jt=()=>F(a["timer-progress-bar"]),Dn=()=>F(a.close),bo=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Ln=()=>{const s=Array.from(T().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((l,u)=>{const f=parseInt(l.getAttribute("tabindex")),w=parseInt(u.getAttribute("tabindex"));return f>w?1:f<w?-1:0}),i=Array.from(T().querySelectorAll(bo)).filter(l=>l.getAttribute("tabindex")!=="-1");return h(s.concat(i)).filter(l=>K(l))},Mn=()=>ue(document.body,a.shown)&&!ue(document.body,a["toast-shown"])&&!ue(document.body,a["no-backdrop"]),zt=()=>T()&&ue(T(),a.toast),vo=()=>T().hasAttribute("data-loading"),ze={previousBodyPadding:null},W=(s,i)=>{if(s.textContent="",i){const u=new DOMParser().parseFromString(i,"text/html");Array.from(u.querySelector("head").childNodes).forEach(f=>{s.appendChild(f)}),Array.from(u.querySelector("body").childNodes).forEach(f=>{f instanceof HTMLVideoElement||f instanceof HTMLAudioElement?s.appendChild(f.cloneNode(!0)):s.appendChild(f)})}},ue=(s,i)=>{if(!i)return!1;const l=i.split(/\s+/);for(let u=0;u<l.length;u++)if(!s.classList.contains(l[u]))return!1;return!0},Io=(s,i)=>{Array.from(s.classList).forEach(l=>{!Object.values(a).includes(l)&&!Object.values(c).includes(l)&&!Object.values(i.showClass).includes(l)&&s.classList.remove(l)})},Z=(s,i,l)=>{if(Io(s,i),i.customClass&&i.customClass[l]){if(typeof i.customClass[l]!="string"&&!i.customClass[l].forEach){m(`Invalid type of customClass.${l}! Expected string or iterable object, got "${typeof i.customClass[l]}"`);return}E(s,i.customClass[l])}},Fn=(s,i)=>{if(!i)return null;switch(i){case"select":case"textarea":case"file":return s.querySelector(`.${a.popup} > .${a[i]}`);case"checkbox":return s.querySelector(`.${a.popup} > .${a.checkbox} input`);case"radio":return s.querySelector(`.${a.popup} > .${a.radio} input:checked`)||s.querySelector(`.${a.popup} > .${a.radio} input:first-child`);case"range":return s.querySelector(`.${a.popup} > .${a.range} input`);default:return s.querySelector(`.${a.popup} > .${a.input}`)}},Fr=s=>{if(s.focus(),s.type!=="file"){const i=s.value;s.value="",s.value=i}},Ur=(s,i,l)=>{!s||!i||(typeof i=="string"&&(i=i.split(/\s+/).filter(Boolean)),i.forEach(u=>{Array.isArray(s)?s.forEach(f=>{l?f.classList.add(u):f.classList.remove(u)}):l?s.classList.add(u):s.classList.remove(u)}))},E=(s,i)=>{Ur(s,i,!0)},se=(s,i)=>{Ur(s,i,!1)},be=(s,i)=>{const l=Array.from(s.children);for(let u=0;u<l.length;u++){const f=l[u];if(f instanceof HTMLElement&&ue(f,i))return f}},He=(s,i,l)=>{l===`${parseInt(l)}`&&(l=parseInt(l)),l||parseInt(l)===0?s.style[i]=typeof l=="number"?`${l}px`:l:s.style.removeProperty(i)},N=function(s){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";s.style.display=i},U=s=>{s.style.display="none"},Br=(s,i,l,u)=>{const f=s.querySelector(i);f&&(f.style[l]=u)},Ht=function(s,i){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";i?N(s,l):U(s)},K=s=>!!(s&&(s.offsetWidth||s.offsetHeight||s.getClientRects().length)),To=()=>!K(te())&&!K(_e())&&!K(ke()),$r=s=>s.scrollHeight>s.clientHeight,qr=s=>{const i=window.getComputedStyle(s),l=parseFloat(i.getPropertyValue("animation-duration")||"0"),u=parseFloat(i.getPropertyValue("transition-duration")||"0");return l>0||u>0},Un=function(s){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const l=jt();K(l)&&(i&&(l.style.transition="none",l.style.width="100%"),setTimeout(()=>{l.style.transition=`width ${s/1e3}s linear`,l.style.width="0%"},10))},Eo=()=>{const s=jt(),i=parseInt(window.getComputedStyle(s).width);s.style.removeProperty("transition"),s.style.width="100%";const l=parseInt(window.getComputedStyle(s).width),u=i/l*100;s.style.width=`${u}%`},Ao=100,I={},Po=()=>{I.previousActiveElement instanceof HTMLElement?(I.previousActiveElement.focus(),I.previousActiveElement=null):document.body&&document.body.focus()},ko=s=>new Promise(i=>{if(!s)return i();const l=window.scrollX,u=window.scrollY;I.restoreFocusTimeout=setTimeout(()=>{Po(),i()},Ao),window.scrollTo(l,u)}),jr=()=>typeof window>"u"||typeof document>"u",Ro=`
 <div aria-labelledby="${a.title}" aria-describedby="${a["html-container"]}" class="${a.popup}" tabindex="-1">
   <button type="button" class="${a.close}"></button>
   <ul class="${a["progress-steps"]}"></ul>
   <div class="${a.icon}"></div>
   <img class="${a.image}" />
   <h2 class="${a.title}" id="${a.title}"></h2>
   <div class="${a["html-container"]}" id="${a["html-container"]}"></div>
   <input class="${a.input}" />
   <input type="file" class="${a.file}" />
   <div class="${a.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${a.select}"></select>
   <div class="${a.radio}"></div>
   <label for="${a.checkbox}" class="${a.checkbox}">
     <input type="checkbox" />
     <span class="${a.label}"></span>
   </label>
   <textarea class="${a.textarea}"></textarea>
   <div class="${a["validation-message"]}" id="${a["validation-message"]}"></div>
   <div class="${a.actions}">
     <div class="${a.loader}"></div>
     <button type="button" class="${a.confirm}"></button>
     <button type="button" class="${a.deny}"></button>
     <button type="button" class="${a.cancel}"></button>
   </div>
   <div class="${a.footer}"></div>
   <div class="${a["timer-progress-bar-container"]}">
     <div class="${a["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),So=()=>{const s=S();return s?(s.remove(),se([document.documentElement,document.body],[a["no-backdrop"],a["toast-shown"],a["has-column"]]),!0):!1},Re=()=>{I.currentInstance.resetValidationMessage()},Co=()=>{const s=T(),i=be(s,a.input),l=be(s,a.file),u=s.querySelector(`.${a.range} input`),f=s.querySelector(`.${a.range} output`),w=be(s,a.select),P=s.querySelector(`.${a.checkbox} input`),G=be(s,a.textarea);i.oninput=Re,l.onchange=Re,w.onchange=Re,P.onchange=Re,G.oninput=Re,u.oninput=()=>{Re(),f.value=u.value},u.onchange=()=>{Re(),f.value=u.value}},Oo=s=>typeof s=="string"?document.querySelector(s):s,xo=s=>{const i=T();i.setAttribute("role",s.toast?"alert":"dialog"),i.setAttribute("aria-live",s.toast?"polite":"assertive"),s.toast||i.setAttribute("aria-modal","true")},Vo=s=>{window.getComputedStyle(s).direction==="rtl"&&E(S(),a.rtl)},No=s=>{const i=So();if(jr()){g("SweetAlert2 requires document to initialize");return}const l=document.createElement("div");l.className=a.container,i&&E(l,a["no-transition"]),W(l,Ro);const u=Oo(s.target);u.appendChild(l),xo(s),Vo(u),Co()},Bn=(s,i)=>{s instanceof HTMLElement?i.appendChild(s):typeof s=="object"?Do(s,i):s&&W(i,s)},Do=(s,i)=>{s.jquery?Lo(i,s):W(i,s.toString())},Lo=(s,i)=>{if(s.textContent="",0 in i)for(let l=0;l in i;l++)s.appendChild(i[l].cloneNode(!0));else s.appendChild(i.cloneNode(!0))},dt=(()=>{if(jr())return!1;const s=document.createElement("div"),i={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const l in i)if(Object.prototype.hasOwnProperty.call(i,l)&&typeof s.style[l]<"u")return i[l];return!1})(),Mo=()=>{const s=document.createElement("div");s.className=a["scrollbar-measure"],document.body.appendChild(s);const i=s.getBoundingClientRect().width-s.clientWidth;return document.body.removeChild(s),i},Fo=(s,i)=>{const l=ut(),u=je();!i.showConfirmButton&&!i.showDenyButton&&!i.showCancelButton?U(l):N(l),Z(l,i,"actions"),Uo(l,u,i),W(u,i.loaderHtml),Z(u,i,"loader")};function Uo(s,i,l){const u=te(),f=_e(),w=ke();$n(u,"confirm",l),$n(f,"deny",l),$n(w,"cancel",l),Bo(u,f,w,l),l.reverseButtons&&(l.toast?(s.insertBefore(w,u),s.insertBefore(f,u)):(s.insertBefore(w,i),s.insertBefore(f,i),s.insertBefore(u,i)))}function Bo(s,i,l,u){if(!u.buttonsStyling){se([s,i,l],a.styled);return}E([s,i,l],a.styled),u.confirmButtonColor&&(s.style.backgroundColor=u.confirmButtonColor,E(s,a["default-outline"])),u.denyButtonColor&&(i.style.backgroundColor=u.denyButtonColor,E(i,a["default-outline"])),u.cancelButtonColor&&(l.style.backgroundColor=u.cancelButtonColor,E(l,a["default-outline"]))}function $n(s,i,l){Ht(s,l[`show${p(i)}Button`],"inline-block"),W(s,l[`${i}ButtonText`]),s.setAttribute("aria-label",l[`${i}ButtonAriaLabel`]),s.className=a[i],Z(s,l,`${i}Button`),E(s,l[`${i}ButtonClass`])}const $o=(s,i)=>{const l=Dn();W(l,i.closeButtonHtml),Z(l,i,"closeButton"),Ht(l,i.showCloseButton),l.setAttribute("aria-label",i.closeButtonAriaLabel)},qo=(s,i)=>{const l=S();l&&(jo(l,i.backdrop),zo(l,i.position),Ho(l,i.grow),Z(l,i,"container"))};function jo(s,i){typeof i=="string"?s.style.background=i:i||E([document.documentElement,document.body],a["no-backdrop"])}function zo(s,i){i in a?E(s,a[i]):(m('The "position" parameter is not valid, defaulting to "center"'),E(s,a.center))}function Ho(s,i){if(i&&typeof i=="string"){const l=`grow-${i}`;l in a&&E(s,a[l])}}const Wo=["input","file","range","select","radio","checkbox","textarea"],Ko=(s,i)=>{const l=T(),u=t.innerParams.get(s),f=!u||i.input!==u.input;Wo.forEach(w=>{const P=be(l,a[w]);Jo(w,i.inputAttributes),P.className=a[w],f&&U(P)}),i.input&&(f&&Go(i),Qo(i))},Go=s=>{if(!q[s.input]){g(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${s.input}"`);return}const i=zr(s.input),l=q[s.input](i,s);N(i),s.inputAutoFocus&&setTimeout(()=>{Fr(l)})},Yo=s=>{for(let i=0;i<s.attributes.length;i++){const l=s.attributes[i].name;["type","value","style"].includes(l)||s.removeAttribute(l)}},Jo=(s,i)=>{const l=Fn(T(),s);if(l){Yo(l);for(const u in i)l.setAttribute(u,i[u])}},Qo=s=>{const i=zr(s.input);typeof s.customClass=="object"&&E(i,s.customClass.input)},qn=(s,i)=>{(!s.placeholder||i.inputPlaceholder)&&(s.placeholder=i.inputPlaceholder)},ht=(s,i,l)=>{if(l.inputLabel){s.id=a.input;const u=document.createElement("label"),f=a["input-label"];u.setAttribute("for",s.id),u.className=f,typeof l.customClass=="object"&&E(u,l.customClass.inputLabel),u.innerText=l.inputLabel,i.insertAdjacentElement("beforebegin",u)}},zr=s=>be(T(),a[s]||a.input),Wt=(s,i)=>{["string","number"].includes(typeof i)?s.value=`${i}`:Be(i)||m(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof i}"`)},q={};q.text=q.email=q.password=q.number=q.tel=q.url=(s,i)=>(Wt(s,i.inputValue),ht(s,s,i),qn(s,i),s.type=i.input,s),q.file=(s,i)=>(ht(s,s,i),qn(s,i),s),q.range=(s,i)=>{const l=s.querySelector("input"),u=s.querySelector("output");return Wt(l,i.inputValue),l.type=i.input,Wt(u,i.inputValue),ht(l,s,i),s},q.select=(s,i)=>{if(s.textContent="",i.inputPlaceholder){const l=document.createElement("option");W(l,i.inputPlaceholder),l.value="",l.disabled=!0,l.selected=!0,s.appendChild(l)}return ht(s,s,i),s},q.radio=s=>(s.textContent="",s),q.checkbox=(s,i)=>{const l=Fn(T(),"checkbox");l.value="1",l.id=a.checkbox,l.checked=Boolean(i.inputValue);const u=s.querySelector("span");return W(u,i.inputPlaceholder),l},q.textarea=(s,i)=>{Wt(s,i.inputValue),qn(s,i),ht(s,s,i);const l=u=>parseInt(window.getComputedStyle(u).marginLeft)+parseInt(window.getComputedStyle(u).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const u=parseInt(window.getComputedStyle(T()).width),f=()=>{const w=s.offsetWidth+l(s);w>u?T().style.width=`${w}px`:T().style.width=null};new MutationObserver(f).observe(s,{attributes:!0,attributeFilter:["style"]})}}),s};const Xo=(s,i)=>{const l=qe();Z(l,i,"htmlContainer"),i.html?(Bn(i.html,l),N(l,"block")):i.text?(l.textContent=i.text,N(l,"block")):U(l),Ko(s,i)},Zo=(s,i)=>{const l=Mr();Ht(l,i.footer),i.footer&&Bn(i.footer,l),Z(l,i,"footer")},ea=(s,i)=>{const l=t.innerParams.get(s),u=ye();if(l&&i.icon===l.icon){Wr(u,i),Hr(u,i);return}if(!i.icon&&!i.iconHtml){U(u);return}if(i.icon&&Object.keys(c).indexOf(i.icon)===-1){g(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${i.icon}"`),U(u);return}N(u),Wr(u,i),Hr(u,i),E(u,i.showClass.icon)},Hr=(s,i)=>{for(const l in c)i.icon!==l&&se(s,c[l]);E(s,c[i.icon]),sa(s,i),ta(),Z(s,i,"icon")},ta=()=>{const s=T(),i=window.getComputedStyle(s).getPropertyValue("background-color"),l=s.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let u=0;u<l.length;u++)l[u].style.backgroundColor=i},na=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,ra=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Wr=(s,i)=>{let l=s.innerHTML,u;i.iconHtml?u=Kr(i.iconHtml):i.icon==="success"?(u=na,l=l.replace(/ style=".*?"/g,"")):i.icon==="error"?u=ra:u=Kr({question:"?",warning:"!",info:"i"}[i.icon]),l.trim()!==u.trim()&&W(s,u)},sa=(s,i)=>{if(i.iconColor){s.style.color=i.iconColor,s.style.borderColor=i.iconColor;for(const l of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Br(s,l,"backgroundColor",i.iconColor);Br(s,".swal2-success-ring","borderColor",i.iconColor)}},Kr=s=>`<div class="${a["icon-content"]}">${s}</div>`,ia=(s,i)=>{const l=Lr();if(!i.imageUrl){U(l);return}N(l,""),l.setAttribute("src",i.imageUrl),l.setAttribute("alt",i.imageAlt),He(l,"width",i.imageWidth),He(l,"height",i.imageHeight),l.className=a.image,Z(l,i,"image")},oa=(s,i)=>{const l=S(),u=T();i.toast?(He(l,"width",i.width),u.style.width="100%",u.insertBefore(je(),ye())):He(u,"width",i.width),He(u,"padding",i.padding),i.color&&(u.style.color=i.color),i.background&&(u.style.background=i.background),U(qt()),aa(u,i)},aa=(s,i)=>{s.className=`${a.popup} ${K(s)?i.showClass.popup:""}`,i.toast?(E([document.documentElement,document.body],a["toast-shown"]),E(s,a.toast)):E(s,a.modal),Z(s,i,"popup"),typeof i.customClass=="string"&&E(s,i.customClass),i.icon&&E(s,a[`icon-${i.icon}`])},la=(s,i)=>{const l=Nn();if(!i.progressSteps||i.progressSteps.length===0){U(l);return}N(l),l.textContent="",i.currentProgressStep>=i.progressSteps.length&&m("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),i.progressSteps.forEach((u,f)=>{const w=ca(u);if(l.appendChild(w),f===i.currentProgressStep&&E(w,a["active-progress-step"]),f!==i.progressSteps.length-1){const P=ua(i);l.appendChild(P)}})},ca=s=>{const i=document.createElement("li");return E(i,a["progress-step"]),W(i,s),i},ua=s=>{const i=document.createElement("li");return E(i,a["progress-step-line"]),s.progressStepsDistance&&He(i,"width",s.progressStepsDistance),i},da=(s,i)=>{const l=$e();Ht(l,i.title||i.titleText,"block"),i.title&&Bn(i.title,l),i.titleText&&(l.innerText=i.titleText),Z(l,i,"title")},Gr=(s,i)=>{oa(s,i),qo(s,i),la(s,i),ea(s,i),ia(s,i),da(s,i),$o(s,i),Xo(s,i),Fo(s,i),Zo(s,i),typeof i.didRender=="function"&&i.didRender(T())};function Yr(){const s=t.innerParams.get(this);if(!s)return;const i=t.domCache.get(this);U(i.loader),zt()?s.icon&&N(ye()):ha(i),se([i.popup,i.actions],a.loading),i.popup.removeAttribute("aria-busy"),i.popup.removeAttribute("data-loading"),i.confirmButton.disabled=!1,i.denyButton.disabled=!1,i.cancelButton.disabled=!1}const ha=s=>{const i=s.popup.getElementsByClassName(s.loader.getAttribute("data-button-to-replace"));i.length?N(i[0],"inline-block"):To()&&U(s.actions)};function fa(s){const i=t.innerParams.get(s||this),l=t.domCache.get(s||this);return l?Fn(l.popup,i.input):null}const pa=()=>K(T()),Jr=()=>te()&&te().click(),ma=()=>_e()&&_e().click(),ga=()=>ke()&&ke().click(),We=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Qr=s=>{s.keydownTarget&&s.keydownHandlerAdded&&(s.keydownTarget.removeEventListener("keydown",s.keydownHandler,{capture:s.keydownListenerCapture}),s.keydownHandlerAdded=!1)},wa=(s,i,l,u)=>{Qr(i),l.toast||(i.keydownHandler=f=>_a(s,f,u),i.keydownTarget=l.keydownListenerCapture?window:T(),i.keydownListenerCapture=l.keydownListenerCapture,i.keydownTarget.addEventListener("keydown",i.keydownHandler,{capture:i.keydownListenerCapture}),i.keydownHandlerAdded=!0)},jn=(s,i)=>{const l=Ln();if(l.length){s=s+i,s===l.length?s=0:s===-1&&(s=l.length-1),l[s].focus();return}T().focus()},Xr=["ArrowRight","ArrowDown"],ya=["ArrowLeft","ArrowUp"],_a=(s,i,l)=>{const u=t.innerParams.get(s);u&&(i.isComposing||i.keyCode===229||(u.stopKeydownPropagation&&i.stopPropagation(),i.key==="Enter"?ba(s,i,u):i.key==="Tab"?va(i):[...Xr,...ya].includes(i.key)?Ia(i.key):i.key==="Escape"&&Ta(i,u,l)))},ba=(s,i,l)=>{if(ce(l.allowEnterKey)&&i.target&&s.getInput()&&i.target instanceof HTMLElement&&i.target.outerHTML===s.getInput().outerHTML){if(["textarea","file"].includes(l.input))return;Jr(),i.preventDefault()}},va=s=>{const i=s.target,l=Ln();let u=-1;for(let f=0;f<l.length;f++)if(i===l[f]){u=f;break}s.shiftKey?jn(u,-1):jn(u,1),s.stopPropagation(),s.preventDefault()},Ia=s=>{const i=te(),l=_e(),u=ke(),f=[i,l,u];if(document.activeElement instanceof HTMLElement&&!f.includes(document.activeElement))return;const w=Xr.includes(s)?"nextElementSibling":"previousElementSibling";let P=document.activeElement;for(let G=0;G<ut().children.length;G++){if(P=P[w],!P)return;if(P instanceof HTMLButtonElement&&K(P))break}P instanceof HTMLButtonElement&&P.focus()},Ta=(s,i,l)=>{ce(i.allowEscapeKey)&&(s.preventDefault(),l(We.esc))};var ft={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Ea=()=>{Array.from(document.body.children).forEach(i=>{i===S()||i.contains(S())||(i.hasAttribute("aria-hidden")&&i.setAttribute("data-previous-aria-hidden",i.getAttribute("aria-hidden")),i.setAttribute("aria-hidden","true"))})},Zr=()=>{Array.from(document.body.children).forEach(i=>{i.hasAttribute("data-previous-aria-hidden")?(i.setAttribute("aria-hidden",i.getAttribute("data-previous-aria-hidden")),i.removeAttribute("data-previous-aria-hidden")):i.removeAttribute("aria-hidden")})},Aa=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!ue(document.body,a.iosfix)){const i=document.body.scrollTop;document.body.style.top=`${i*-1}px`,E(document.body,a.iosfix),ka(),Pa()}},Pa=()=>{const s=navigator.userAgent,i=!!s.match(/iPad/i)||!!s.match(/iPhone/i),l=!!s.match(/WebKit/i);i&&l&&!s.match(/CriOS/i)&&T().scrollHeight>window.innerHeight-44&&(S().style.paddingBottom=`${44}px`)},ka=()=>{const s=S();let i;s.ontouchstart=l=>{i=Ra(l)},s.ontouchmove=l=>{i&&(l.preventDefault(),l.stopPropagation())}},Ra=s=>{const i=s.target,l=S();return Sa(s)||Ca(s)?!1:i===l||!$r(l)&&i instanceof HTMLElement&&i.tagName!=="INPUT"&&i.tagName!=="TEXTAREA"&&!($r(qe())&&qe().contains(i))},Sa=s=>s.touches&&s.touches.length&&s.touches[0].touchType==="stylus",Ca=s=>s.touches&&s.touches.length>1,Oa=()=>{if(ue(document.body,a.iosfix)){const s=parseInt(document.body.style.top,10);se(document.body,a.iosfix),document.body.style.top="",document.body.scrollTop=s*-1}},xa=()=>{ze.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(ze.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${ze.previousBodyPadding+Mo()}px`)},Va=()=>{ze.previousBodyPadding!==null&&(document.body.style.paddingRight=`${ze.previousBodyPadding}px`,ze.previousBodyPadding=null)};function es(s,i,l,u){zt()?ts(s,u):(ko(l).then(()=>ts(s,u)),Qr(I)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(i.setAttribute("style","display:none !important"),i.removeAttribute("class"),i.innerHTML=""):i.remove(),Mn()&&(Va(),Oa(),Zr()),Na()}function Na(){se([document.documentElement,document.body],[a.shown,a["height-auto"],a["no-backdrop"],a["toast-shown"]])}function Kt(s){s=Fa(s);const i=ft.swalPromiseResolve.get(this),l=La(this);this.isAwaitingPromise()?s.isDismissed||(pt(this),i(s)):l&&i(s)}function Da(){return!!t.awaitingPromise.get(this)}const La=s=>{const i=T();if(!i)return!1;const l=t.innerParams.get(s);if(!l||ue(i,l.hideClass.popup))return!1;se(i,l.showClass.popup),E(i,l.hideClass.popup);const u=S();return se(u,l.showClass.backdrop),E(u,l.hideClass.backdrop),Ua(s,i,l),!0};function Ma(s){const i=ft.swalPromiseReject.get(this);pt(this),i&&i(s)}const pt=s=>{s.isAwaitingPromise()&&(t.awaitingPromise.delete(s),t.innerParams.get(s)||s._destroy())},Fa=s=>typeof s>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},s),Ua=(s,i,l)=>{const u=S(),f=dt&&qr(i);typeof l.willClose=="function"&&l.willClose(i),f?Ba(s,i,u,l.returnFocus,l.didClose):es(s,u,l.returnFocus,l.didClose)},Ba=(s,i,l,u,f)=>{I.swalCloseEventFinishedCallback=es.bind(null,s,l,u,f),i.addEventListener(dt,function(w){w.target===i&&(I.swalCloseEventFinishedCallback(),delete I.swalCloseEventFinishedCallback)})},ts=(s,i)=>{setTimeout(()=>{typeof i=="function"&&i.bind(s.params)(),s._destroy()})};function ns(s,i,l){const u=t.domCache.get(s);i.forEach(f=>{u[f].disabled=l})}function rs(s,i){if(s)if(s.type==="radio"){const u=s.parentNode.parentNode.querySelectorAll("input");for(let f=0;f<u.length;f++)u[f].disabled=i}else s.disabled=i}function $a(){ns(this,["confirmButton","denyButton","cancelButton"],!1)}function qa(){ns(this,["confirmButton","denyButton","cancelButton"],!0)}function ja(){rs(this.getInput(),!1)}function za(){rs(this.getInput(),!0)}function Ha(s){const i=t.domCache.get(this),l=t.innerParams.get(this);W(i.validationMessage,s),i.validationMessage.className=a["validation-message"],l.customClass&&l.customClass.validationMessage&&E(i.validationMessage,l.customClass.validationMessage),N(i.validationMessage);const u=this.getInput();u&&(u.setAttribute("aria-invalid",!0),u.setAttribute("aria-describedby",a["validation-message"]),Fr(u),E(u,a.inputerror))}function Wa(){const s=t.domCache.get(this);s.validationMessage&&U(s.validationMessage);const i=this.getInput();i&&(i.removeAttribute("aria-invalid"),i.removeAttribute("aria-describedby"),se(i,a.inputerror))}const Ke={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},Ka=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Ga={},Ya=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],ss=s=>Object.prototype.hasOwnProperty.call(Ke,s),is=s=>Ka.indexOf(s)!==-1,zn=s=>Ga[s],Ja=s=>{ss(s)||m(`Unknown parameter "${s}"`)},Qa=s=>{Ya.includes(s)&&m(`The parameter "${s}" is incompatible with toasts`)},Xa=s=>{zn(s)&&H(s,zn(s))},Za=s=>{s.backdrop===!1&&s.allowOutsideClick&&m('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const i in s)Ja(i),s.toast&&Qa(i),Xa(i)};function el(s){const i=T(),l=t.innerParams.get(this);if(!i||ue(i,l.hideClass.popup)){m("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const u=tl(s),f=Object.assign({},l,u);Gr(this,f),t.innerParams.set(this,f),Object.defineProperties(this,{params:{value:Object.assign({},this.params,s),writable:!1,enumerable:!0}})}const tl=s=>{const i={};return Object.keys(s).forEach(l=>{is(l)?i[l]=s[l]:m(`Invalid parameter to update: ${l}`)}),i};function nl(){const s=t.domCache.get(this),i=t.innerParams.get(this);if(!i){os(this);return}s.popup&&I.swalCloseEventFinishedCallback&&(I.swalCloseEventFinishedCallback(),delete I.swalCloseEventFinishedCallback),typeof i.didDestroy=="function"&&i.didDestroy(),rl(this)}const rl=s=>{os(s),delete s.params,delete I.keydownHandler,delete I.keydownTarget,delete I.currentInstance},os=s=>{s.isAwaitingPromise()?(Hn(t,s),t.awaitingPromise.set(s,!0)):(Hn(ft,s),Hn(t,s))},Hn=(s,i)=>{for(const l in s)s[l].delete(i)};var as=Object.freeze({__proto__:null,_destroy:nl,close:Kt,closeModal:Kt,closePopup:Kt,closeToast:Kt,disableButtons:qa,disableInput:za,disableLoading:Yr,enableButtons:$a,enableInput:ja,getInput:fa,handleAwaitingPromise:pt,hideLoading:Yr,isAwaitingPromise:Da,rejectPromise:Ma,resetValidationMessage:Wa,showValidationMessage:Ha,update:el});const Ge=s=>{let i=T();i||new Yt,i=T();const l=je();zt()?U(ye()):sl(i,s),N(l),i.setAttribute("data-loading","true"),i.setAttribute("aria-busy","true"),i.focus()},sl=(s,i)=>{const l=ut(),u=je();!i&&K(te())&&(i=te()),N(l),i&&(U(i),u.setAttribute("data-button-to-replace",i.className)),u.parentNode.insertBefore(u,i),E([s,l],a.loading)},il=(s,i)=>{i.input==="select"||i.input==="radio"?ul(s,i):["text","email","number","tel","textarea"].includes(i.input)&&(re(i.inputValue)||Be(i.inputValue))&&(Ge(te()),dl(s,i))},ol=(s,i)=>{const l=s.getInput();if(!l)return null;switch(i.input){case"checkbox":return al(l);case"radio":return ll(l);case"file":return cl(l);default:return i.inputAutoTrim?l.value.trim():l.value}},al=s=>s.checked?1:0,ll=s=>s.checked?s.value:null,cl=s=>s.files.length?s.getAttribute("multiple")!==null?s.files:s.files[0]:null,ul=(s,i)=>{const l=T(),u=f=>{hl[i.input](l,Wn(f),i)};re(i.inputOptions)||Be(i.inputOptions)?(Ge(te()),ge(i.inputOptions).then(f=>{s.hideLoading(),u(f)})):typeof i.inputOptions=="object"?u(i.inputOptions):g(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof i.inputOptions}`)},dl=(s,i)=>{const l=s.getInput();U(l),ge(i.inputValue).then(u=>{l.value=i.input==="number"?`${parseFloat(u)||0}`:`${u}`,N(l),l.focus(),s.hideLoading()}).catch(u=>{g(`Error in inputValue promise: ${u}`),l.value="",N(l),l.focus(),s.hideLoading()})},hl={select:(s,i,l)=>{const u=be(s,a.select),f=(w,P,G)=>{const B=document.createElement("option");B.value=G,W(B,P),B.selected=ls(G,l.inputValue),w.appendChild(B)};i.forEach(w=>{const P=w[0],G=w[1];if(Array.isArray(G)){const B=document.createElement("optgroup");B.label=P,B.disabled=!1,u.appendChild(B),G.forEach(Je=>f(B,Je[1],Je[0]))}else f(u,G,P)}),u.focus()},radio:(s,i,l)=>{const u=be(s,a.radio);i.forEach(w=>{const P=w[0],G=w[1],B=document.createElement("input"),Je=document.createElement("label");B.type="radio",B.name=a.radio,B.value=P,ls(P,l.inputValue)&&(B.checked=!0);const Jn=document.createElement("span");W(Jn,G),Jn.className=a.label,Je.appendChild(B),Je.appendChild(Jn),u.appendChild(Je)});const f=u.querySelectorAll("input");f.length&&f[0].focus()}},Wn=s=>{const i=[];return typeof Map<"u"&&s instanceof Map?s.forEach((l,u)=>{let f=l;typeof f=="object"&&(f=Wn(f)),i.push([u,f])}):Object.keys(s).forEach(l=>{let u=s[l];typeof u=="object"&&(u=Wn(u)),i.push([l,u])}),i},ls=(s,i)=>i&&i.toString()===s.toString(),fl=s=>{const i=t.innerParams.get(s);s.disableButtons(),i.input?cs(s,"confirm"):Gn(s,!0)},pl=s=>{const i=t.innerParams.get(s);s.disableButtons(),i.returnInputValueOnDeny?cs(s,"deny"):Kn(s,!1)},ml=(s,i)=>{s.disableButtons(),i(We.cancel)},cs=(s,i)=>{const l=t.innerParams.get(s);if(!l.input){g(`The "input" parameter is needed to be set when using returnInputValueOn${p(i)}`);return}const u=ol(s,l);l.inputValidator?gl(s,u,i):s.getInput().checkValidity()?i==="deny"?Kn(s,u):Gn(s,u):(s.enableButtons(),s.showValidationMessage(l.validationMessage))},gl=(s,i,l)=>{const u=t.innerParams.get(s);s.disableInput(),Promise.resolve().then(()=>ge(u.inputValidator(i,u.validationMessage))).then(w=>{s.enableButtons(),s.enableInput(),w?s.showValidationMessage(w):l==="deny"?Kn(s,i):Gn(s,i)})},Kn=(s,i)=>{const l=t.innerParams.get(s||void 0);l.showLoaderOnDeny&&Ge(_e()),l.preDeny?(t.awaitingPromise.set(s||void 0,!0),Promise.resolve().then(()=>ge(l.preDeny(i,l.validationMessage))).then(f=>{f===!1?(s.hideLoading(),pt(s)):s.close({isDenied:!0,value:typeof f>"u"?i:f})}).catch(f=>ds(s||void 0,f))):s.close({isDenied:!0,value:i})},us=(s,i)=>{s.close({isConfirmed:!0,value:i})},ds=(s,i)=>{s.rejectPromise(i)},Gn=(s,i)=>{const l=t.innerParams.get(s||void 0);l.showLoaderOnConfirm&&Ge(),l.preConfirm?(s.resetValidationMessage(),t.awaitingPromise.set(s||void 0,!0),Promise.resolve().then(()=>ge(l.preConfirm(i,l.validationMessage))).then(f=>{K(qt())||f===!1?(s.hideLoading(),pt(s)):us(s,typeof f>"u"?i:f)}).catch(f=>ds(s||void 0,f))):us(s,i)},wl=(s,i,l)=>{t.innerParams.get(s).toast?yl(s,i,l):(bl(i),vl(i),Il(s,i,l))},yl=(s,i,l)=>{i.popup.onclick=()=>{const u=t.innerParams.get(s);u&&(_l(u)||u.timer||u.input)||l(We.close)}},_l=s=>s.showConfirmButton||s.showDenyButton||s.showCancelButton||s.showCloseButton;let Gt=!1;const bl=s=>{s.popup.onmousedown=()=>{s.container.onmouseup=function(i){s.container.onmouseup=void 0,i.target===s.container&&(Gt=!0)}}},vl=s=>{s.container.onmousedown=()=>{s.popup.onmouseup=function(i){s.popup.onmouseup=void 0,(i.target===s.popup||s.popup.contains(i.target))&&(Gt=!0)}}},Il=(s,i,l)=>{i.container.onclick=u=>{const f=t.innerParams.get(s);if(Gt){Gt=!1;return}u.target===i.container&&ce(f.allowOutsideClick)&&l(We.backdrop)}},Tl=s=>typeof s=="object"&&s.jquery,hs=s=>s instanceof Element||Tl(s),El=s=>{const i={};return typeof s[0]=="object"&&!hs(s[0])?Object.assign(i,s[0]):["title","html","icon"].forEach((l,u)=>{const f=s[u];typeof f=="string"||hs(f)?i[l]=f:f!==void 0&&g(`Unexpected type of ${l}! Expected "string" or "Element", got ${typeof f}`)}),i};function Al(){const s=this;for(var i=arguments.length,l=new Array(i),u=0;u<i;u++)l[u]=arguments[u];return new s(...l)}function Pl(s){class i extends this{_main(u,f){return super._main(u,Object.assign({},s,f))}}return i}const kl=()=>I.timeout&&I.timeout.getTimerLeft(),fs=()=>{if(I.timeout)return Eo(),I.timeout.stop()},ps=()=>{if(I.timeout){const s=I.timeout.start();return Un(s),s}},Rl=()=>{const s=I.timeout;return s&&(s.running?fs():ps())},Sl=s=>{if(I.timeout){const i=I.timeout.increase(s);return Un(i,!0),i}},Cl=()=>I.timeout&&I.timeout.isRunning();let ms=!1;const Yn={};function Ol(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Yn[s]=this,ms||(document.body.addEventListener("click",xl),ms=!0)}const xl=s=>{for(let i=s.target;i&&i!==document;i=i.parentNode)for(const l in Yn){const u=i.getAttribute(l);if(u){Yn[l].fire({template:u});return}}};var Vl=Object.freeze({__proto__:null,argsToParams:El,bindClickHandler:Ol,clickCancel:ga,clickConfirm:Jr,clickDeny:ma,enableLoading:Ge,fire:Al,getActions:ut,getCancelButton:ke,getCloseButton:Dn,getConfirmButton:te,getContainer:S,getDenyButton:_e,getFocusableElements:Ln,getFooter:Mr,getHtmlContainer:qe,getIcon:ye,getIconContent:Vn,getImage:Lr,getInputLabel:_o,getLoader:je,getPopup:T,getProgressSteps:Nn,getTimerLeft:kl,getTimerProgressBar:jt,getTitle:$e,getValidationMessage:qt,increaseTimer:Sl,isDeprecatedParameter:zn,isLoading:vo,isTimerRunning:Cl,isUpdatableParameter:is,isValidParameter:ss,isVisible:pa,mixin:Pl,resumeTimer:ps,showLoading:Ge,stopTimer:fs,toggleTimer:Rl});class Nl{constructor(i,l){this.callback=i,this.remaining=l,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(i){const l=this.running;return l&&this.stop(),this.remaining+=i,l&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const gs=["swal-title","swal-html","swal-footer"],Dl=s=>{const i=typeof s.template=="string"?document.querySelector(s.template):s.template;if(!i)return{};const l=i.content;return jl(l),Object.assign(Ll(l),Ml(l),Fl(l),Ul(l),Bl(l),$l(l),ql(l,gs))},Ll=s=>{const i={};return Array.from(s.querySelectorAll("swal-param")).forEach(u=>{Se(u,["name","value"]);const f=u.getAttribute("name"),w=u.getAttribute("value");typeof Ke[f]=="boolean"?i[f]=w!=="false":typeof Ke[f]=="object"?i[f]=JSON.parse(w):i[f]=w}),i},Ml=s=>{const i={};return Array.from(s.querySelectorAll("swal-function-param")).forEach(u=>{const f=u.getAttribute("name"),w=u.getAttribute("value");i[f]=new Function(`return ${w}`)()}),i},Fl=s=>{const i={};return Array.from(s.querySelectorAll("swal-button")).forEach(u=>{Se(u,["type","color","aria-label"]);const f=u.getAttribute("type");i[`${f}ButtonText`]=u.innerHTML,i[`show${p(f)}Button`]=!0,u.hasAttribute("color")&&(i[`${f}ButtonColor`]=u.getAttribute("color")),u.hasAttribute("aria-label")&&(i[`${f}ButtonAriaLabel`]=u.getAttribute("aria-label"))}),i},Ul=s=>{const i={},l=s.querySelector("swal-image");return l&&(Se(l,["src","width","height","alt"]),l.hasAttribute("src")&&(i.imageUrl=l.getAttribute("src")),l.hasAttribute("width")&&(i.imageWidth=l.getAttribute("width")),l.hasAttribute("height")&&(i.imageHeight=l.getAttribute("height")),l.hasAttribute("alt")&&(i.imageAlt=l.getAttribute("alt"))),i},Bl=s=>{const i={},l=s.querySelector("swal-icon");return l&&(Se(l,["type","color"]),l.hasAttribute("type")&&(i.icon=l.getAttribute("type")),l.hasAttribute("color")&&(i.iconColor=l.getAttribute("color")),i.iconHtml=l.innerHTML),i},$l=s=>{const i={},l=s.querySelector("swal-input");l&&(Se(l,["type","label","placeholder","value"]),i.input=l.getAttribute("type")||"text",l.hasAttribute("label")&&(i.inputLabel=l.getAttribute("label")),l.hasAttribute("placeholder")&&(i.inputPlaceholder=l.getAttribute("placeholder")),l.hasAttribute("value")&&(i.inputValue=l.getAttribute("value")));const u=Array.from(s.querySelectorAll("swal-input-option"));return u.length&&(i.inputOptions={},u.forEach(f=>{Se(f,["value"]);const w=f.getAttribute("value"),P=f.innerHTML;i.inputOptions[w]=P})),i},ql=(s,i)=>{const l={};for(const u in i){const f=i[u],w=s.querySelector(f);w&&(Se(w,[]),l[f.replace(/^swal-/,"")]=w.innerHTML.trim())}return l},jl=s=>{const i=gs.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(s.children).forEach(l=>{const u=l.tagName.toLowerCase();i.includes(u)||m(`Unrecognized element <${u}>`)})},Se=(s,i)=>{Array.from(s.attributes).forEach(l=>{i.indexOf(l.name)===-1&&m([`Unrecognized attribute "${l.name}" on <${s.tagName.toLowerCase()}>.`,`${i.length?`Allowed attributes are: ${i.join(", ")}`:"To set the value, use HTML within the element."}`])})},ws=10,zl=s=>{const i=S(),l=T();typeof s.willOpen=="function"&&s.willOpen(l);const f=window.getComputedStyle(document.body).overflowY;Kl(i,l,s),setTimeout(()=>{Hl(i,l)},ws),Mn()&&(Wl(i,s.scrollbarPadding,f),Ea()),!zt()&&!I.previousActiveElement&&(I.previousActiveElement=document.activeElement),typeof s.didOpen=="function"&&setTimeout(()=>s.didOpen(l)),se(i,a["no-transition"])},ys=s=>{const i=T();if(s.target!==i)return;const l=S();i.removeEventListener(dt,ys),l.style.overflowY="auto"},Hl=(s,i)=>{dt&&qr(i)?(s.style.overflowY="hidden",i.addEventListener(dt,ys)):s.style.overflowY="auto"},Wl=(s,i,l)=>{Aa(),i&&l!=="hidden"&&xa(),setTimeout(()=>{s.scrollTop=0})},Kl=(s,i,l)=>{E(s,l.showClass.backdrop),i.style.setProperty("opacity","0","important"),N(i,"grid"),setTimeout(()=>{E(i,l.showClass.popup),i.style.removeProperty("opacity")},ws),E([document.documentElement,document.body],a.shown),l.heightAuto&&l.backdrop&&!l.toast&&E([document.documentElement,document.body],a["height-auto"])};var _s={email:(s,i)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(s)?Promise.resolve():Promise.resolve(i||"Invalid email address"),url:(s,i)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(s)?Promise.resolve():Promise.resolve(i||"Invalid URL")};function Gl(s){s.inputValidator||Object.keys(_s).forEach(i=>{s.input===i&&(s.inputValidator=_s[i])})}function Yl(s){(!s.target||typeof s.target=="string"&&!document.querySelector(s.target)||typeof s.target!="string"&&!s.target.appendChild)&&(m('Target parameter is not valid, defaulting to "body"'),s.target="body")}function Jl(s){Gl(s),s.showLoaderOnConfirm&&!s.preConfirm&&m(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Yl(s),typeof s.title=="string"&&(s.title=s.title.split(`
`).join("<br />")),No(s)}let ie;class Ye{constructor(){if(typeof window>"u")return;ie=this;for(var i=arguments.length,l=new Array(i),u=0;u<i;u++)l[u]=arguments[u];const f=Object.freeze(this.constructor.argsToParams(l));Object.defineProperties(this,{params:{value:f,writable:!1,enumerable:!0,configurable:!0}});const w=ie._main(ie.params);t.promise.set(this,w)}_main(i){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Za(Object.assign({},l,i)),I.currentInstance&&(I.currentInstance._destroy(),Mn()&&Zr()),I.currentInstance=ie;const u=Xl(i,l);Jl(u),Object.freeze(u),I.timeout&&(I.timeout.stop(),delete I.timeout),clearTimeout(I.restoreFocusTimeout);const f=Zl(ie);return Gr(ie,u),t.innerParams.set(ie,u),Ql(ie,f,u)}then(i){return t.promise.get(this).then(i)}finally(i){return t.promise.get(this).finally(i)}}const Ql=(s,i,l)=>new Promise((u,f)=>{const w=P=>{s.close({isDismissed:!0,dismiss:P})};ft.swalPromiseResolve.set(s,u),ft.swalPromiseReject.set(s,f),i.confirmButton.onclick=()=>{fl(s)},i.denyButton.onclick=()=>{pl(s)},i.cancelButton.onclick=()=>{ml(s,w)},i.closeButton.onclick=()=>{w(We.close)},wl(s,i,w),wa(s,I,l,w),il(s,l),zl(l),ec(I,l,w),tc(i,l),setTimeout(()=>{i.container.scrollTop=0})}),Xl=(s,i)=>{const l=Dl(s),u=Object.assign({},Ke,i,l,s);return u.showClass=Object.assign({},Ke.showClass,u.showClass),u.hideClass=Object.assign({},Ke.hideClass,u.hideClass),u},Zl=s=>{const i={popup:T(),container:S(),actions:ut(),confirmButton:te(),denyButton:_e(),cancelButton:ke(),loader:je(),closeButton:Dn(),validationMessage:qt(),progressSteps:Nn()};return t.domCache.set(s,i),i},ec=(s,i,l)=>{const u=jt();U(u),i.timer&&(s.timeout=new Nl(()=>{l("timer"),delete s.timeout},i.timer),i.timerProgressBar&&(N(u),Z(u,i,"timerProgressBar"),setTimeout(()=>{s.timeout&&s.timeout.running&&Un(i.timer)})))},tc=(s,i)=>{if(!i.toast){if(!ce(i.allowEnterKey)){rc();return}nc(s,i)||jn(-1,1)}},nc=(s,i)=>i.focusDeny&&K(s.denyButton)?(s.denyButton.focus(),!0):i.focusCancel&&K(s.cancelButton)?(s.cancelButton.focus(),!0):i.focusConfirm&&K(s.confirmButton)?(s.confirmButton.focus(),!0):!1,rc=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|xn--p1ai)$/)){const s=new Date,i=localStorage.getItem("swal-initiation");i?(s.getTime()-Date.parse(i))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const l=document.createElement("audio");l.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",l.loop=!0,document.body.appendChild(l),setTimeout(()=>{l.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${s}`)}Object.assign(Ye.prototype,as),Object.assign(Ye,Vl),Object.keys(as).forEach(s=>{Ye[s]=function(){if(ie)return ie[s](...arguments)}}),Ye.DismissReason=We,Ye.version="11.7.3";const Yt=Ye;return Yt.default=Yt,Yt}),typeof ve<"u"&&ve.Sweetalert2&&(ve.swal=ve.sweetAlert=ve.Swal=ve.SweetAlert=ve.Sweetalert2),typeof document<"u"&&function(t,r){var o=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(o),o.styleSheet)o.styleSheet.disabled||(o.styleSheet.cssText=r);else try{o.innerHTML=r}catch{o.innerText=r}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:rgba(0,0,0,0) !important}.swal2-container.swal2-top-start,.swal2-container.swal2-center-start,.swal2-container.swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}.swal2-container.swal2-top,.swal2-container.swal2-center,.swal2-container.swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}.swal2-container.swal2-top-end,.swal2-container.swal2-center-end,.swal2-container.swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-start>.swal2-popup,.swal2-container.swal2-center-left>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-start>.swal2-popup,.swal2-container.swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-row>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none !important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:none}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:none}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:rgba(0,0,0,0);color:#f27474}.swal2-close:focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-input,.swal2-file,.swal2-textarea,.swal2-select,.swal2-radio,.swal2-checkbox{margin:1em 2em 3px}.swal2-input,.swal2-file,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-input.swal2-inputerror,.swal2-file.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}.swal2-input:focus,.swal2-file:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-input::placeholder,.swal2-file::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-radio,.swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-radio label,.swal2-checkbox label{margin:0 .6em;font-size:1.125em}.swal2-radio input,.swal2-checkbox input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}')})(Vh);const rf=dr;export{Ee as G,rf as S,Bh as a,tf as b,nf as c,bh as d,Yh as e,Zh as f,zh as g,Hh as h,ef as i,Dh as j,Lh as k,Uh as l,Fh as m,Jh as n,Mh as o,Wh as q,Qh as s,Xh as u,Kh as w};
